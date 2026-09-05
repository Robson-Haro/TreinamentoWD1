'use client';
import { useState, type FormEvent } from 'react';
import { type ReportDelivery, sections } from './report';
import styles from './resgatar.module.css';

export default function ReportPortal() {
  const [code, setCode] = useState('');
  const [delivery, setDelivery] = useState<ReportDelivery | null>(null);
  const [selected, setSelected] = useState('');
  const [busy, setBusy] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [error, setError] = useState('');
  async function redeem(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError('');
    try {
      const response = await fetch('/api/reports/redeem', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: code.trim().toLowerCase() }), cache: 'no-store' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Não foi possível abrir o relatório.');
      if (!Array.isArray(data.reports) || !data.reports.length) throw new Error('Nenhum relatório disponível para este acesso.');
      setDelivery(data); setSelected(data.reports[0].id); setCode('');
    } catch (err) { setError(err instanceof Error ? err.message : 'Verifique sua conexão e tente novamente.'); }
    finally { setBusy(false); }
  }
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
  if (!report) return <section className={styles.access} aria-labelledby="access-title">
    <span className={styles.kicker}>Relatório individual</span><h2 id="access-title">Um olhar sobre sua jornada</h2>
    <p>Use o código recebido da coordenação para acessar seu relatório. Seu código é pessoal: guarde-o com cuidado.</p>
    <form onSubmit={redeem} className={styles.form}>
      <label htmlFor="report-code">Código de acesso</label>
      <input id="report-code" type="password" autoComplete="off" spellCheck={false} value={code} onChange={e => setCode(e.target.value)} required maxLength={100} placeholder="Cole aqui seu código" aria-describedby={error ? 'access-error' : undefined}/>
      <button className={styles.button} disabled={busy}>{busy ? 'Abrindo seu relatório...' : 'Resgatar meu relatório'}</button>
    </form>
    {error && <p id="access-error" className={styles.error} role="alert">{error}</p>}
    <p className={styles.help}>Ainda não recebeu o código? Solicite à coordenação do treinamento.</p>
  </section>;
  return <>
    <div className={styles.toolbar}>
      <label htmlFor="participant">{delivery?.role === 'coordinator' ? 'Escolha o participante' : 'Seu relatório'}
        <select id="participant" value={selected} onChange={e => {setSelected(e.target.value);setError('');}}>
          {delivery?.reports.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
        </select>
      </label>
      <button className={styles.button} onClick={download} disabled={pdfBusy}>{pdfBusy ? 'Preparando PDF...' : 'Baixar em PDF'}</button>
      <button className={styles.exit} onClick={() => {setDelivery(null);setSelected('');setError('');}}>Encerrar acesso</button>
    </div>
    {error && <p className={styles.error} role="alert">{error}</p>}
    <article className={styles.paper} key={report.id}>
      <header className={styles.paperHeader}><span>Jornada de Liderança · Relatório individual</span><h2>{report.name}</h2><p>{report.status}</p><small>Atualizado em {report.date}</small></header>
      <div className={styles.overview}><span className={styles.kicker}>Visão integrada</span><p>{report.summary}</p></div>
      <div className={styles.scorePanel}><h3>Seu DISC neste exercício</h3><div className={styles.scores}>
        {Object.entries(report.scores).map(([label,value]) => <div key={label}><div className={styles.scoreLabel}><span>{label}</span><strong>{value}<small> / 100</small></strong></div><div className={styles.track}><div style={{width:`${value}%`}}/></div></div>)}
      </div><p>Pontos do questionário do treinamento. Não são percentuais de personalidade nem uma comparação com outras pessoas.</p></div>
      {sections(report).map((section,index) => <section className={styles.section} key={section.title}>
        <span className={styles.number}>{String(index+1).padStart(2,'0')}</span><div><h3>{section.title}</h3>
          {section.blocks.map(block => <div className={styles.block} key={block.title}><h4>{block.title}</h4>
            {index >= 2 ? <ol>{block.paragraphs.map(p => <li key={p}>{p}</li>)}</ol> : block.paragraphs.map(p => <p key={p}>{p}</p>)}
          </div>)}
        </div>
      </section>)}
      <footer className={styles.footer}><strong>Um convite à prática</strong><p>{report.method}</p><p>{report.sources}</p><p>Referência sobre os limites da grafologia: <a href="https://pubmed.ncbi.nlm.nih.gov/20229925/" target="_blank" rel="noreferrer">Dazzi e Pedrabissi (2009)</a>.</p></footer>
    </article>
  </>;
}
