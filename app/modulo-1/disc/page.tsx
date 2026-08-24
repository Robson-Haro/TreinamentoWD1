import "../experience.css";

const profiles = [
  {
    letter: "D",
    name: "Dominância",
    meaning: "Decisão, velocidade, desafio e foco em resultados.",
    strengths: "Coragem, assertividade, agilidade e senso de urgência.",
    risks: "Impaciência, imposição, pouca escuta e decisões precipitadas.",
  },
  {
    letter: "I",
    name: "Influência",
    meaning: "Comunicação, persuasão, entusiasmo e conexão com pessoas.",
    strengths: "Engajamento, otimismo, criatividade e capacidade de mobilizar.",
    risks: "Dispersão, excesso de informalidade e pouco acompanhamento.",
  },
  {
    letter: "S",
    name: "Estabilidade",
    meaning: "Cooperação, constância, paciência e previsibilidade.",
    strengths: "Lealdade, escuta, confiança e sustentação do time.",
    risks: "Resistência à mudança, dificuldade com conflitos e lentidão.",
  },
  {
    letter: "C",
    name: "Conformidade",
    meaning: "Precisão, análise, método, critérios e qualidade.",
    strengths: "Organização, rigor técnico, cautela e prevenção de riscos.",
    risks: "Perfeccionismo, excesso de análise e dificuldade com incertezas.",
  },
];

export default function DiscExplicacao() {
  return (
    <main className="module-screen disc-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/dashboard">← Tela anterior</a>
          <a className="back-link next-link" href="/modulo-1/disc/teste">Ir ao QR Code →</a>
        </div>
      </nav>

      <section className="disc-lesson">
        <header className="disc-heading">
          <div>
            <span className="eyebrow">Módulo 1 · Tela 5</span>
            <h1>DISC: quatro maneiras de perceber e responder ao ambiente</h1>
            <p>
              O DISC descreve tendências comportamentais — não competência,
              inteligência ou valor pessoal. Todos temos os quatro fatores em
              intensidades diferentes e podemos adaptar nosso comportamento ao contexto.
            </p>
          </div>
          <div className="lesson-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="disc-grid">
          {profiles.map((profile) => (
            <article className={"disc-card disc-" + profile.letter.toLowerCase()} key={profile.letter}>
              <div className="disc-letter">{profile.letter}</div>
              <h2>{profile.name}</h2>
              <p>{profile.meaning}</p>
              <div className="disc-points good">
                <strong>Pontos positivos</strong>
                <span>{profile.strengths}</span>
              </div>
              <div className="disc-points attention">
                <strong>Pontos de atenção</strong>
                <span>{profile.risks}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="disc-footer">
          <p>
            O resultado é uma fotografia de autopercepção para desenvolvimento.
            Não deve ser usado isoladamente para contratação, promoção ou sucessão.
          </p>
          <a className="gold-button module-entry" href="/modulo-1/disc/teste">
            <span>Aplicar teste DISC</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
