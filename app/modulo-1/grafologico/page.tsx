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
          src="/grafologico-office-3d.webp"
          alt="Profissionais em mesas individuais realizando o teste grafológico"
        />
        <div className="graphology-shade" aria-hidden="true" />

        <div className="graphology-copy">
          <span className="eyebrow">Módulo 1 · Aplicação individual</span>
          <h1>Teste <strong>grafológico</strong></h1>
          <p>
            Aplicação individual em ambiente silencioso e controlado. Cada participante
            deverá produzir uma redação manuscrita seguindo exatamente as orientações.
          </p>

          <div className="graphology-meta">
            <span><b>01</b> Aguarde o tema da redação</span>
            <span><b>02</b> Realize o teste individualmente</span>
            <span><b>03</b> Entregue ao finalizar</span>
          </div>

          <div id="orientacoes" className="graphology-note">
            <span>✍</span>
            <div>
              <strong>Aplicação do teste</strong>
              <small>Mantenha o silêncio, escreva de forma espontânea e não consulte outras pessoas.</small>
            </div>
          </div>
        </div>

        <div className="graphology-brands" aria-label="Grupo WD e Ramos Consultoria">
          <div><img src="/grupo-wd.png" alt="Grupo WD" /><span>GRUPO WD</span></div>
          <i>×</i>
          <div><img src="/ramos-consultoria.png" alt="Ramos Consultoria" /><span>RAMOS CONSULTORIA</span></div>
        </div>

        <div className="graphology-wall-brands" aria-label="Realização: Grupo WD e Ramos Consultoria">
          <div><img src="/grupo-wd.png" alt="Logo Grupo WD" /><strong>GRUPO WD</strong></div>
          <span>×</span>
          <div><img src="/ramos-consultoria.png" alt="Logo Ramos Consultoria" /><strong>RAMOS CONSULTORIA</strong></div>
        </div>
      </section>
    </main>
  );
}
