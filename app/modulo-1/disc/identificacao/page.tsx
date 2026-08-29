import ParticipantIdentification from "../../../components/ParticipantIdentification";
import "../../experience.css";

const SESSION_CODE = "grupo-wd-2026-08-29";

export default function IdentificacaoDisc() {
  return (
    <main className="module-screen test-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/disc/teste">← Voltar ao QR Code</a>
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
          title="Confirme sua identificação para o DISC"
          description="Use o mesmo nome e e-mail do teste de liderança. Assim o seu perfil DISC fica ligado ao seu registro individual sem misturar respostas entre participantes."
          targetPath="/teste-disc/index.html"
          sessionCode={SESSION_CODE}
        />
      </section>
    </main>
  );
}
