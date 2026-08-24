import "../experience.css";
import FootstepSound from "./FootstepSound";

const audience = Array.from({ length: 18 });

export default function HoraDoCafe() {
  return (
    <main className="coffee-screen">
      <div className="coffee-light coffee-light-one" aria-hidden="true" />
      <div className="coffee-light coffee-light-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar coffee-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/disc/dashboard">← Tela anterior</a>
          <a className="back-link next-test-link" href="/">Continuar treinamento →</a>
        </div>
      </nav>

      <section className="coffee-stage">
        <div className="coffee-copy">
          <span className="eyebrow">Pausa para conexão</span>
          <h1>Hora do café!</h1>
          <p>
            Um pequeno intervalo para respirar, conversar e transformar
            boas ideias em novas conexões.
          </p>
          <div className="coffee-time">
            <span>☕</span>
            <strong>Sirva-se. O café está pronto.</strong>
          </div>
          <FootstepSound />
        </div>

        <div className="walking-logos" aria-label="Grupo WD e Ramos Consultoria indo tomar café">
          <div className="walking-logo logo-walker-one">
            <div className="walker-body"><img src="/grupo-wd.png" alt="Grupo WD" /></div>
            <i className="walker-leg leg-left" /><i className="walker-leg leg-right" />
            <span className="walker-cup">☕</span>
          </div>
          <div className="walking-logo logo-walker-two">
            <div className="walker-body"><img src="/ramos-consultoria.png" alt="Ramos Consultoria" /></div>
            <i className="walker-leg leg-left" /><i className="walker-leg leg-right" />
            <span className="walker-cup">☕</span>
          </div>
        </div>

        <div className="auditorium" aria-hidden="true">
          <div className="auditorium-wall">
            <span>GRUPO WD</span>
            <b>× RAMOS CONSULTORIA</b>
            <small>Jornada de Liderança</small>
          </div>
          <div className="audience">
            {audience.map((_, index) => (
              <div className={"audience-person audience-" + ((index % 4) + 1)} key={index}>
                <i /><b />
              </div>
            ))}
          </div>
        </div>

        <div className="robson-walk">
          <div className="robson-bob">
            <img src="/robson-coffee-3d.webp" alt="Robson caminhando e oferecendo uma bandeja de café" />
            <span className="coffee-steam steam-one">~</span>
            <span className="coffee-steam steam-two">~</span>
            <span className="coffee-steam steam-three">~</span>
          </div>
        </div>

        <div className="stage-floor" aria-hidden="true" />
      </section>
    </main>
  );
}
