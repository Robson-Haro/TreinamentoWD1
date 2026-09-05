import { jsPDF } from 'jspdf';
import { type PersonalReport, sections } from './report';

type PdfFonts = { normal: string; bold: string };
let fontPromise: Promise<PdfFonts> | undefined;
async function loadFonts(): Promise<PdfFonts> {
  if (!fontPromise) fontPromise = Promise.all(['DejaVuSans.ttf', 'DejaVuSans-Bold.ttf'].map(async file => {
    const response = await fetch(`/report-fonts/${file}`);
    if (!response.ok) throw new Error('Não foi possível carregar a fonte do PDF.');
    const bytes = new Uint8Array(await response.arrayBuffer());
    let binary=''; for(let i=0;i<bytes.length;i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  })).then(([normal,bold])=>({normal,bold})).catch(error=>{fontPromise=undefined;throw error;});
  return fontPromise;
}
export async function makeReportPdf(report: PersonalReport, suppliedFonts?: PdfFonts) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const fonts = suppliedFonts ?? await loadFonts();
  doc.addFileToVFS('WD-Regular.ttf',fonts.normal); doc.addFont('WD-Regular.ttf','WD','normal');
  doc.addFileToVFS('WD-Bold.ttf',fonts.bold); doc.addFont('WD-Bold.ttf','WD','bold');
  const left=18, width=174, bottom=273;
  let y=20;
  const clean=(s:string)=>s.replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/[–—]/g,'-').replace(/•/g,' | ');
  function newPage() {
    doc.addPage(); doc.setFont('WD','bold'); doc.setFontSize(9);doc.setTextColor(100,87,61);
    doc.text('GRUPO WD / RAMOS CONSULTORIA',left,14);
    doc.setFont('WD','normal');doc.setFontSize(9);doc.text(report.name,left,20);y=31;
  }
  function ensure(height:number){if(y+height>bottom)newPage();}
  function paragraph(text:string,size=11,color:[number,number,number]=[45,45,42]) {
    doc.setFont('WD','normal');doc.setFontSize(size);
    const lines=doc.splitTextToSize(clean(text),width) as string[];
    const leading = size < 10 ? 4.7 : 5.3;
    ensure(Math.min(lines.length,2)*leading);
    for(let i=0;i<lines.length;i++){ensure((lines.length-i===2?2:1)*leading);doc.setFont('WD','normal');doc.setFontSize(size);doc.setTextColor(...color);doc.text(lines[i],left,y);y+=leading;}
    y+=3.5;
  }
  function heading(text:string,major=false){
    const size=major?17:12;
    doc.setFont('WD','bold');doc.setFontSize(size);
    const lines=doc.splitTextToSize(clean(text),width) as string[];
    ensure(lines.length*7+16);
    doc.setFont('WD','bold');doc.setFontSize(size);doc.setTextColor(123,90,29);
    for (const line of lines) { doc.text(line,left,y); y+=7; } y+=3;
  }
  doc.setProperties({title:`Relatório individual - ${report.name}`,author:'Grupo WD / Ramos Consultoria',subject:'Jornada de desenvolvimento da liderança'});
  doc.setFillColor(34,35,32);doc.rect(0,0,210,52,'F');
  doc.setFont('WD','bold');doc.setFontSize(10);doc.setTextColor(222,195,134);doc.text('JORNADA DE LIDERANÇA',left,14);
  doc.setTextColor(249,246,239);doc.setFontSize(21);doc.text('Relatório individual',left,25);
  doc.setFontSize(13);doc.text(report.name,left,37);
  doc.setFont('WD','normal');doc.setFontSize(9);doc.setTextColor(219,211,192);doc.text(`Atualizado em ${report.date} | Liderança: identificação pendente`,left,46);y=64;
  sections(report).forEach((section,index)=>{
    ensure(48);y+=3;heading(`${index+1}. ${section.title}`,true);
    section.blocks.forEach(block=>{heading(block.title);block.paragraphs.forEach((p,i)=>paragraph(index>=2?`${i+1}) ${p}`:p));});
  });
  ensure(68);heading('Pontuações de referência do questionário');
  Object.entries(report.scores).forEach(([label,value])=>{
    ensure(10);doc.setFontSize(10.5);doc.setFont('WD','normal');doc.setTextColor(50,50,45);doc.text(label,left,y);
    doc.setFillColor(230,224,211);doc.roundedRect(65,y-3,103,3,1,1,'F');doc.setFillColor(168,126,46);doc.roundedRect(65,y-3,103*value/100,3,1,1,'F');doc.text(`${value} / 100`,192,y,{align:'right'});y+=9;
  });
  y+=3;paragraph('Pontos do questionário do treinamento. Não são percentuais de personalidade nem comparação com outras pessoas.',9.5);
  heading('Sobre esta leitura');paragraph(report.method,9.5);paragraph(report.sources,9.5);
  paragraph('Referência: Dazzi e Pedrabissi (2009). https://pubmed.ncbi.nlm.nih.gov/20229925/',9.5);
  const total=doc.getNumberOfPages();
  for(let page=1;page<=total;page++){
    doc.setPage(page);doc.setDrawColor(205,197,176);doc.line(left,282,192,282);
    doc.setFont('WD','normal');doc.setFontSize(8);doc.setTextColor(100,95,83);
    doc.text('Uso pessoal | Reflexão e desenvolvimento | Grupo WD',left,288);
    doc.text(`${page} / ${total}`,192,288,{align:'right'});
  }
  return doc;
}
