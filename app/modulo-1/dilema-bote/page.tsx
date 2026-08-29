import "../experience.css";

const passengers = [
  ["01", "Mulher grávida", "29 anos, no sétimo mês de gestação e saudável."],
  ["02", "Médico", "52 anos, presta os primeiros socorros e sabe manter o grupo vivo."],
  ["03", "Criança", "9 anos, perdeu os pais no naufrágio e está sozinha."],
  ["04", "Engenheira naval", "38 anos, acredita que pode improvisar um reparo, sem garantia."],
  ["05", "Homem aposentado", "76 anos, pouca resistência física e sem ferimentos graves."],
  ["06", "Bombeira", "34 anos, organiza o grupo e ajuda a retirar a água do bote."],
  ["07", "Jovem em pânico", "22 anos, saudável e forte, mas dificulta a organização."],
  ["08", "Pesquisadora", "45 anos, conduz um estudo médico importante, cujos dados estão salvos."],
  ["09", "Homem ferido", "40 anos, apresenta forte sangramento e pode sobreviver se o resgate chegar."],
  ["10", "Capitã do navio", "58 anos, conhece o mar e os protocolos, mas pode ter responsabilidade pelo acidente."],
];

export default function DilemaDoBote() {
  return (
    <main className="moral-screen boat-dilemma">
      <div className="moral-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar moral-topbar">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/dilema-trem">← Dilema anterior</a>
          <a className="back-link next-test-link" href="/modulo-1/teste">Continuar treinamento →</a>
        </div>
      </nav>

      <section className="moral-wrap boat-wrap">
        <header className="moral-heading">
          <div>
            <span className="eyebrow">Dinâmica de decisão · Dilema moral 02</span>
            <h1>O dilema <strong>do bote</strong></h1>
            <p>Após um naufrágio, <b>10 sobreviventes</b> entram em um bote projetado para apenas nove. Com o excesso de peso, todos morrerão se uma pessoa não sair.</p>
          </div>
          <div className="moral-icon" aria-hidden="true">🛟</div>
        </header>

        <div className="boat-alert"><strong>10 pessoas</strong><span>CAPACIDADE MÁXIMA</span><strong>9 lugares</strong></div>

        <section className="passenger-grid" aria-label="Passageiros do bote">
          {passengers.map(([number, title, description]) => (
            <article className="passenger-card" key={number}>
              <span>{number}</span>
              <div><h2>{title}</h2><p>{description}</p></div>
            </article>
          ))}
        </section>

        <section className="moral-decision boat-decision">
          <span>NINGUÉM SE OFERECE VOLUNTARIAMENTE</span>
          <h2>Quem deverá deixar o bote?</h2>
          <div className="moral-questions">
            <p><b>01</b> Idade, saúde e profissão devem influenciar a escolha?</p>
            <p><b>02</b> A mulher grávida representa uma ou duas vidas?</p>
            <p><b>03</b> A responsabilidade da capitã deve interferir?</p>
            <p><b>04</b> Escolher alguém é mais justo do que realizar um sorteio?</p>
          </div>
        </section>
      </section>
    </main>
  );
}
