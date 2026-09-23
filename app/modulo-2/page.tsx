import "../modulo-1/experience.css";

export default function ModuloDois() {
  return (
    <main className="module-two-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/conclusao">← Conclusão do Módulo 1</a>
          <a className="back-link dashboard-link" href="/">Voltar ao início</a>
        </div>
      </nav>

      <section className="module-two-hero">
        <div className="module-two-copy">
          <span className="eyebrow">Jornada de aprimoramento e qualificação da liderança</span>
          <p className="module-two-number">Módulo 2</p>
          <h1>Comunicação <strong>e Excelência</strong></h1>
          <p className="module-two-intro">
            Uma nova etapa para transformar intenção em clareza, presença em conexão
            e conversas em resultados de excelência.
          </p>
          <div className="module-two-status">
            <span />
            <p><b>Próxima etapa da jornada</b> · Conteúdo em construção</p>
          </div>
        </div>

        <div className="module-two-logos" aria-label="Grupo WD e Ramos Consultoria">
          <div className="module-two-orbit" aria-hidden="true" />
          <div className="module-two-logo-card">
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
          <div className="module-two-logo-card">
            <img src="/grupo-wd.png" alt="Grupo WD" />
          </div>
        </div>
      </section>
    </main>
  );
}
