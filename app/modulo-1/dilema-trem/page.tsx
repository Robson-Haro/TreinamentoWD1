import "../experience.css";

export default function DilemaDoTrem() {
  return (
    <main className="moral-screen train-dilemma">
      <div className="moral-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar moral-topbar">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/descontracao-video">← Tela anterior</a>
          <a className="back-link next-test-link" href="/modulo-1/dilema-bote">Próximo dilema →</a>
        </div>
      </nav>

      <section className="moral-wrap">
        <header className="moral-heading">
          <div>
            <span className="eyebrow">Dinâmica de decisão · Dilema moral 01</span>
            <h1>O dilema <strong>do trem</strong></h1>
            <p>Você é o maquinista de um trem com <b>50 passageiros</b>. Os freios falharam e, em poucos segundos, você precisará escolher uma das duas linhas.</p>
          </div>
          <div className="moral-icon" aria-hidden="true">🚆</div>
        </header>

        <div className="moral-choice-grid">
          <article className="moral-choice danger">
            <span>LINHA PRINCIPAL</span>
            <h2>A ponte desabou</h2>
            <p>Se você mantiver o trajeto, o trem cairá. Você e os <strong>50 passageiros</strong> provavelmente morrerão.</p>
            <b>Não acionar a alavanca</b>
          </article>
          <div className="moral-switch" aria-label="Escolha entre duas linhas"><i /><span>OU</span><i /></div>
          <article className="moral-choice warning">
            <span>LINHA ALTERNATIVA</span>
            <h2>Existe um bebê nos trilhos</h2>
            <p>Se você desviar o trem, os passageiros serão salvos, mas o <strong>bebê morrerá</strong>. Não há tempo para retirá-lo.</p>
            <b>Acionar a alavanca</b>
          </article>
        </div>

        <section className="moral-decision">
          <span>VOCÊ TEM APENAS ALGUNS SEGUNDOS</span>
          <h2>Qual decisão você tomaria?</h2>
          <div className="moral-questions">
            <p><b>01</b> Existe diferença entre não agir e agir causando uma morte?</p>
            <p><b>02</b> Salvar o maior número torna a decisão correta?</p>
            <p><b>03</b> Sua escolha mudaria se o bebê fosse alguém da sua família?</p>
            <p><b>04</b> Você conseguiria defender publicamente sua decisão?</p>
          </div>
        </section>
      </section>
    </main>
  );
}
