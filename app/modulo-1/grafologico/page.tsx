import "../experience.css";

export default function TesteGrafologico() {
  return (
    <main className="graphology-screen">
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar graphology-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/cafe">← Tela anterior</a>
          <a className="back-link next-test-link" href="#orientacoes">Iniciar atividade →</a>
        </div>
      </nav>

      <section className="graphology-hero">
        <img
          className="graphology-scene"
          src="/grafologico-office-3d.png"
          alt="Profissionais em um escritório elegante realizando uma redação"
        />
        <div className="graphology-shade" aria-hidden="true" />

        <div className="graphology-copy">
          <span className="eyebrow">Módulo 1 · Atividade individual</span>
          <h1>Teste <strong>grafológico</strong></h1>
          <p>
            Uma atividade de escrita para observar características do gesto gráfico,
            organização, ritmo e expressão individual.
          </p>

          <div className="graphology-meta">
            <span><b>01</b> Prepare papel e caneta</span>
            <span><b>02</b> Escreva com naturalidade</span>
            <span><b>03</b> Siga as orientações</span>
          </div>

          <div id="orientacoes" className="graphology-note">
            <span>✍</span>
            <div>
              <strong>Momento de concentração</strong>
              <small>Evite rasuras e não tente alterar sua forma habitual de escrever.</small>
            </div>
          </div>
        </div>

        <div className="graphology-brands" aria-label="Grupo WD e Ramos Consultoria">
          <div><img src="/grupo-wd.png" alt="Grupo WD" /><span>GRUPO WD</span></div>
          <i>×</i>
          <div><img src="/ramos-consultoria.png" alt="Ramos Consultoria" /><span>RAMOS CONSULTORIA</span></div>
        </div>
      </section>
    </main>
  );
}
