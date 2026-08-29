import "../experience.css";

export default function DescontracaoAposVideos() {
  return (
    <main className="group-moment group-moment-one">
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar group-moment-topbar">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/video-lideranca">← Tela anterior</a>
          <a className="back-link next-test-link" href="/modulo-1/dilema-trem">Continuar →</a>
        </div>
      </nav>
      <section className="group-moment-stage">
        <div className="group-moment-copy">
          <span className="eyebrow">Pausa ativa · Conexão</span>
          <h1>Momento de <strong>descontração</strong></h1>
          <p>Dinâmica de grupo</p>
          <div className="group-moment-callout"><span>◉</span><b>Participe, interaja e aproveite este momento com a equipe.</b></div>
        </div>
        <div className="group-orbit" aria-label="Pessoas reunidas em dinâmica de grupo">
          <div className="orbit-table"><span>JUNTOS</span><small>conexão que transforma</small></div>
          {[1,2,3,4,5,6].map((n)=><div className={"orbit-person person-"+n} key={n}><i /><b /></div>)}
        </div>
        <div className="group-brand-panel">
          <div><img src="/grupo-wd.png" alt="Grupo WD" /><strong>GRUPO WD</strong></div>
          <span>×</span>
          <div><img src="/ramos-consultoria.png" alt="Ramos Consultoria" /><strong>RAMOS CONSULTORIA</strong></div>
        </div>
      </section>
    </main>
  );
}
