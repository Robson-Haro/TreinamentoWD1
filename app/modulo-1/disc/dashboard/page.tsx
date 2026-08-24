import "../../experience.css";

export default function DiscDashboard() {
  return (
    <main className="module-screen dashboard-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/disc/teste">← Voltar ao QR Code</a>
          <a className="back-link next-test-link" href="/modulo-1/cafe">Hora do café →</a>
        </div>
      </nav>
      <section className="dashboard-lesson">
        <header className="lesson-heading dashboard-heading">
          <div>
            <span className="eyebrow">Módulo 1 · Tela 7</span>
            <h1>Dashboard comportamental DISC</h1>
            <p>Prevalência do grupo, distribuição D · I · S · C, pontos positivos e pontos de atenção.</p>
          </div>
          <div className="lesson-logos">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>
        <div className="dashboard-frame">
          <div className="video-gold-line" aria-hidden="true" />
          <iframe
            src="/teste-disc/index.html?painel=1"
            title="Dashboard consolidado DISC"
            allow="clipboard-write"
          />
        </div>
      </section>
    </main>
  );
}
