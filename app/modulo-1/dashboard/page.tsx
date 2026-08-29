import "../experience.css";

export default function DashboardLideranca() {
  return (
    <main className="module-screen dashboard-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/teste">← Voltar ao QR Code</a>
          <a className="back-link dashboard-link" href="/administrador">Área do Administrador →</a>
          <a className="back-link next-test-link" href="/modulo-1/disc">Ir para o próximo teste →</a>
        </div>
      </nav>
      <section className="dashboard-lesson">
        <header className="lesson-heading dashboard-heading">
          <div>
            <span className="eyebrow">Módulo 1 · Tela 4</span>
            <h1>Retrato da liderança do Grupo WD</h1>
            <p>Resultados consolidados do grupo, predominância dos estilos e leitura dos pontos fortes e pontos de atenção.</p>
          </div>
          <div className="lesson-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>
        <div className="dashboard-frame">
          <div className="video-gold-line" aria-hidden="true" />
          <iframe
            src="/teste/index.html?painel=1&sessao=grupo-wd-2026-08-29"
            title="Dashboard consolidado dos estilos de liderança"
            allow="clipboard-write"
          />
        </div>
      </section>
    </main>
  );
}
