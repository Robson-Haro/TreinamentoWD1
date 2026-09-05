'use client';
import { useState, useEffect } from 'react';
import { type ReportDelivery, sections } from './report';
import styles from './resgatar.module.css';

export default function ReportPortal() {
  const [delivery, setDelivery] = useState<ReportDelivery | null>(null);
  const [selected, setSelected] = useState('');
  const [busy, setBusy] = useState(true);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [error, setError] = useState('');
  async function loadReports() {
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/reports/redeem', { cache: 'no-store' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Não foi possível abrir o relatório.');
      if (!Array.isArray(data.reports) || !data.reports.length) throw new Error('Nenhum relatório disponível no momento.');
      setDelivery(data); setSelected('');
    } catch (err) { setError(err instanceof Error ? err.message : 'Verifique sua conexão e tente novamente.'); }
    finally { setBusy(false); }
  }
  useEffect(() => { void loadReports(); }, []);
  const report = delivery?.reports.find(r => r.id === selected);
  async function download() {
    if (!report) return;
    setPdfBusy(true); setError('');
    try {
      const { makeReportPdf } = await import('./report-pdf');
      const pdf = await makeReportPdf(report);
      pdf.save(`Relatorio-${report.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-')}.pdf`);
    } catch { setError('Não foi possível preparar o PDF. Tente novamente.'); }
    finally { setPdfBusy(false); }
  }
  return <>
    <div className={styles.toolbar}>
      <label htmlFor="participant">Escolha o participante
        <select id="participant" value={selected} disabled={busy} onChange={e => {setSelected(e.target.value);setError('');}}>
          <option value="">Não Selecionado</option>
          {delivery?.reports.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
        </select>
      </label>
      {report && <button className={styles.button} onClick={download} disabled={pdfBusy}>{pdfBusy ? 'Preparando PDF...' : 'Baixar em PDF'}</button>}
    </div>
    {busy && <p role="status">Carregando participantes...</p>}
    {error && <div className={styles.error} role="alert"><p>{error}</p>{!delivery && <button className={styles.exit} onClick={loadReports}>Tentar novamente</button>}</div>}
    {report && <article className={styles.paper} key={report.id}>
      <header className={styles.paperHeader}><span>Jornada de Liderança · Relatório individual</span><h2>{report.name}</h2><p>{report.status}</p><small>Atualizado em {report.date}</small></header>
      {sections(report).map((section,index) => <section className={styles.section} key={section.title}>
        <span className={styles.number}>{String(index+1).padStart(2,'0')}</span><div><h3>{section.title}</h3>
          {section.blocks.map(block => <div className={styles.block} key={block.title}><h4>{block.title}</h4>
            {index >= 2 ? <ol>{block.paragraphs.map(p => <li key={p}>{p}</li>)}</ol> : block.paragraphs.map(p => <p key={p}>{p}</p>)}
          </div>)}
        </div>
      </section>)}
      <details className={styles.scorePanel}><summary>Pontuações de referência do questionário</summary><div className={styles.scores}>
        {Object.entries(report.scores).map(([label,value]) => <div key={label}><div className={styles.scoreLabel}><span>{label}</span><strong>{value}<small> / 100</small></strong></div><div className={styles.track}><div style={{width:`${value}%`}}/></div></div>)}
      </div><p>Valores consultados na elaboração do perfil integrado. Não são percentuais de personalidade nem uma comparação com outras pessoas.</p></details>
      <footer className={styles.footer}><strong>Um convite à prática</strong><p>{report.method}</p><p>{report.sources}</p><p>Referência sobre os limites da grafologia: <a href="https://pubmed.ncbi.nlm.nih.gov/20229925/" target="_blank" rel="noreferrer">Dazzi e Pedrabissi (2009)</a>.</p></footer>
    </article>}
  </>;
}
