import ParticipantIdentification from "../../../components/ParticipantIdentification";
import "../../experience.css";

const SESSION_CODE = "grupo-wd-2026-08-29";

export default function IdentificacaoTesteLideranca() {
  return (
    <main className="module-screen test-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/teste">← Voltar ao QR Code</a>
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

        <ParticipantIdentification
          badge="Módulo 1 · Identificação do participante"
          title="Antes de começar: quem está respondendo?"
          description="Informe seu nome e e-mail. Essas informações serão vinculadas somente ao seu resultado para manter cada resposta individualizada no painel do treinamento."
          targetPath="/teste/index.html"
          sessionCode={SESSION_CODE}
        />
      </section>
    </main>
  );
}
