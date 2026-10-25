import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Frame from "../Frame";
import { lessons,references } from "../content";
import styles from "../module.module.css";
export function generateStaticParams(){return [...lessons.map(({slug})=>({slug})),{slug:"referencias"}];}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:`${slug==="referencias"?"Autores e referências":lessons.find(x=>x.slug===slug)?.title??"Módulo 3"} | TreinamentoWD1`};}
function Sources({ids}:{ids?:string[]}){return <div className={styles.refs}>{references.filter(r=>!ids||ids.includes(r.id)).map(r=><article className={styles.ref} key={r.id}><p><strong>{r.author}</strong></p><p><a href={r.url} target="_blank" rel="noopener noreferrer">{r.title} ↗</a></p><p>{r.note}</p></article>)}</div>}
export default async function LessonPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 if(slug==="referencias")return <Frame title="Autores e referências" section="Bibliografia comentada · Consultada em 24/10/2026" intro="Bases teóricas e fontes para aprofundar. Livros, estudos e guias têm finalidades diferentes; as aplicações profissionais são identificadas como adaptações." number="Módulo 3 · Bibliografia" previous={{href:"/modulo-3/plano-de-desenvolvimento",label:"Plano de desenvolvimento"}} next={{href:"/modulo-3",label:"Início do Módulo 3"}}><section className={styles.panel}><Sources/></section></Frame>;
 const index=lessons.findIndex(l=>l.slug===slug);if(index<0)notFound();const lesson=lessons[index];
 const previous=slug==="ensinar-prioridades"?{href:"/modulo-3/videos-tempo-e-prioridades",label:"Vídeos sobre tempo e prioridades"}:index===3?{href:"/modulo-3/videos",label:"Vídeos"}:index===0?{href:"/modulo-3",label:"Abertura"}:{href:"/modulo-3/"+lessons[index-1].slug,label:lessons[index-1].title};
 const next=slug==="tempo-e-prioridades"?{href:"/modulo-3/videos-tempo-e-prioridades",label:"Vídeos sobre tempo e prioridades"}:index===2?{href:"/modulo-3/videos",label:"Vídeos para reflexão"}:index===lessons.length-1?{href:"/modulo-3/referencias",label:"Autores e referências"}:{href:"/modulo-3/"+lessons[index+1].slug,label:lessons[index+1].title};
 return <Frame title={lesson.title} section={lesson.section} intro={lesson.intro} number={`Módulo 3 · Tela ${index+1} de ${lessons.length}`} previous={previous} next={next}>
 {lesson.metrics?.map((metric,i)=><article className={`${styles.panel} ${styles.metric}`} key={metric.title}><span className={styles.kicker}>Indicador {i+1}</span><h2>{metric.title}</h2><p><strong>Exemplo com números:</strong> {metric.formula}</p><p><strong>Fonte e frequência:</strong> {metric.source}</p><p><strong>Meta de exemplo e próximo passo:</strong> {metric.care}</p></article>)}
 {lesson.blocks.map((block,i)=><section className={styles.panel} key={block.title}><span className={styles.kicker}>{String(i+1).padStart(2,"0")} · Para entender e aplicar</span><h2>{block.title}</h2><p>{block.text}</p>{block.example&&<div className={styles.example}><span className={styles.kicker}>Exemplo em facilities · Aplicação didática</span><p>{block.example}</p></div>}</section>)}
 <section className={styles.panel}><span className={styles.kicker}>Vamos praticar</span><h2>{lesson.prompt}</h2><details className={styles.details}><summary>Depois da discussão: ver orientação</summary><p>{lesson.answer}</p></details></section>
 {lesson.refs.length>0&&<section className={styles.panel}><h2>Referências deste tema</h2><Sources ids={lesson.refs}/></section>}
 </Frame>;
}
