import QRCodePanel from "./QRCodePanel";
import "../experience.css";

export default function TesteLideranca() {
  return (
    <main className="module-screen test-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/video">← Tela anterior</a>
          <a className="back-link next-link" href="/modulo-1/dashboard">Ver dashboard →</a>
        </div>
      </nav>
      <section className="test-lesson">
        <header className="lesson-heading">
          <div className="partnership-line"><span /><p>Grupo WD e Ramos Consultoria</p></div>
          <div className="lesson-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>
        <QRCodePanel />
      </section>
    </main>
  );
}
