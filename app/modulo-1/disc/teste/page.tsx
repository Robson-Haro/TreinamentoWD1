import "../../experience.css";
import DiscQRCode from "./DiscQRCode";

export default function DiscTeste() {
  return (
    <main className="module-screen test-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/disc">← O que é DISC?</a>
          <a className="back-link dashboard-link" href="/modulo-1/disc/dashboard">Próxima tela: dashboard →</a>
        </div>
      </nav>
      <section className="test-lesson">
        <header className="lesson-heading">
          <div className="partnership-line"><span /><p>Grupo WD e Ramos Consultoria</p></div>
          <div className="lesson-logos">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>
        <DiscQRCode />
      </section>
    </main>
  );
}
