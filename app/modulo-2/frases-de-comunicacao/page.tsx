import "../../modulo-1/experience.css";

const quotes = [
  {
    number: "01",
    quote: "A comunicação eficaz começa pela escuta.",
    source: "Simon Sinek",
  },
  {
    number: "02",
    quote: "Escutar não é apenas ouvir palavras; é compreender a mensagem completa.",
    source: "Adaptada dos princípios de escuta ativa de Dale Carnegie",
  },
  {
    number: "03",
    quote: "As palavras do líder podem criar direção ou produzir confusão.",
    source: "Adaptada de princípios da Harvard Business Review",
  },
  {
    number: "04",
    quote: "Comunicar com clareza constrói confiança, alinha esforços e inspira mudanças.",
    source: "Adaptada da Harvard Business School",
  },
  {
    number: "05",
    quote: "Liderar é transformar comunicação em direção, alinhamento e compromisso.",
    source: "Adaptada do Center for Creative Leadership",
  },
];

export default function FrasesDeComunicacao() {
  return (
    <main className="module-two-screen quotes-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/etapas-da-comunicacao">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 7</span>
        </div>
      </nav>

      <section className="quotes-content">
        <header className="quotes-heading module-two-glass-panel">
          <div>
            <span>Comunicação e liderança eficaz</span>
            <h1>Palavras que <strong>movem pessoas</strong></h1>
            <p>Comunicar não é apenas transmitir. É criar entendimento, confiança e direção.</p>
          </div>
          <div className="influence-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="leadership-quotes-grid">
          {quotes.map((item, index) => (
            <article className={`leadership-quote-card ${index === 4 ? "featured" : ""}`} key={item.number}>
              <span>{item.number}</span>
              <blockquote>“{item.quote}”</blockquote>
              <footer>{item.source}</footer>
            </article>
          ))}
        </div>

        <div className="quotes-closing module-two-glass-panel">
          <span>Reflexão</span>
          <p>Que mensagem a sua liderança deixa quando você termina de falar?</p>
        </div>

        <div className="module-two-next-row">
          <a className="module-two-button" href="/modulo-2/comunicacao-na-lideranca">
            <span>Comunicação na liderança</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
