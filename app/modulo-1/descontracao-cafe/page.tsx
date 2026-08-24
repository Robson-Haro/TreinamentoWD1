import "../experience.css";

export default function DescontracaoAposCafe() {
  return (
    <main className="group-moment group-moment-two">
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar group-moment-topbar">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/cafe">← Tela anterior</a>
          <a className="back-link next-test-link" href="/modulo-1/grafologico">Continuar →</a>
        </div>
      </nav>
      <section className="group-moment-stage">
        <div className="group-moment-copy">
          <span className="eyebrow">Energia · Colaboração</span>
          <h1>Momento de <strong>descontração</strong></h1>
          <p>Dinâmica de grupo</p>
          <div className="group-moment-callout"><span>✦</span><b>Agora é hora de movimentar, compartilhar e construir juntos.</b></div>
        </div>
        <div className="group-orbit orbit-variant" aria-label="Equipe participando de dinâmica de grupo">
          <div className="orbit-table"><span>EQUIPE</span><small>ideias em movimento</small></div>
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
