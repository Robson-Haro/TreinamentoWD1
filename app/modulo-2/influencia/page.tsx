import "../../modulo-1/experience.css";

const influenceData = [
  {
    value: "75%",
    text: "dos funcionários afirmam que seu superior imediato constitui a pior parte de seu trabalho.",
  },
  {
    value: "70%",
    text: "do nível de engajamento dos liderados é atribuído à qualidade do líder.",
  },
  {
    value: "46%",
    text: "Liderados engajados entregam mais resultados, são 2x mais produtivos e falam abertamente sobre dificuldades e falhas.",
  },
  {
    value: "65%",
    text: "dos colaboradores aceitariam um corte de seu salário se o seu chefe fosse substituído por um melhor.",
  },
];

export default function InfluenciaDoLider() {
  return (
    <main className="module-two-screen influence-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 2</span>
        </div>
      </nav>

      <section className="influence-content">
        <header className="influence-heading module-two-glass-panel">
          <div>
            <span>O que as pesquisas dizem sobre o papel do líder</span>
            <h1>O tamanho da sua influência.</h1>
          </div>
          <div className="influence-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="influence-grid">
          {influenceData.map((item) => (
            <article className="influence-card" key={item.value}>
              <strong>{item.value}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <blockquote>
          Ninguém é neutro nessa cadeira. A pergunta não é se você impacta o outro
          — é para que lado.
        </blockquote>
      </section>
    </main>
  );
}
