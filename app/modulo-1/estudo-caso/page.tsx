import "../experience.css";
import CaseQRCode from "./CaseQRCode";

const decisions = [
  {
    number: "01",
    title: "Vigilância · Posto A",
    urgency: "20 minutos para agir",
    question: "Qual será sua decisão imediata para garantir a cobertura do Posto A?",
    context: "Não é permitido substituir vigilante por porteiro. Manter o profissional do noturno por mais 12 horas gera risco de jornada e segurança. Retirar alguém do Posto B deixaria o contrato abaixo do mínimo.",
    direction: "Apresente as alternativas na ordem em que seriam acionadas e os riscos considerados.",
  },
  {
    number: "02",
    title: "Limpeza · Postos A e C",
    urgency: "Auditoria às 9h",
    question: "Você deslocaria alguém do Posto C para o Posto A?",
    context: "O Posto A terá somente 1 das 3 profissionais previstas. O Posto C está com suas 4 profissionais completas, mas fica a 15 km de distância.",
    direction: "Defina quantas pessoas movimentaria e como reorganizaria os dois postos sem transferir o problema.",
  },
  {
    number: "03",
    title: "Gestão das pessoas",
    urgency: "Segurança e sobrecarga",
    question: "Como líder, o que você decide diante das duas manifestações?",
    context: "O vigilante do plantão noturno se oferece para ficar mais 12 horas. A única profissional de limpeza do Posto A promete tentar fazer tudo sozinha.",
    direction: "Considere jornada, segurança, qualidade, sobrecarga e responsabilidade da liderança.",
  },
  {
    number: "04",
    title: "Gestão do cliente",
    urgency: "Ligação às 6h40",
    question: "O que você responderia ao cliente do Posto A?",
    context: "O cliente pede garantia de que tudo estará funcionando normalmente às 9h, mas as substituições ainda estão em andamento.",
    direction: "Diga o que comunicaria, o que não prometeria e como manteria o cliente atualizado durante a crise.",
  },
  {
    number: "05",
    title: "Visão de liderança",
    urgency: "Reduzir vulnerabilidades",
    question: "Quais são as 3 principais ações para fortalecer a operação a partir do dia seguinte?",
    context: "Uma ausência quase interrompeu a vigilância e duas ausências comprometeram a limpeza. O orçamento é limitado e não permite várias contratações adicionais.",
    direction: "Apresente as ações por prioridade e explique o impacto esperado de cada uma.",
  },
];

export default function EstudoDeCaso() {
  return (
    <main className="case-screen">
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar case-topbar" aria-label="Navegação do estudo de caso">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="case-logo-lockup">
          <img src="/grupo-wd.png" alt="Grupo WD" />
          <strong>GRUPO WD</strong><i>×</i>
          <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          <strong>RAMOS CONSULTORIA</strong>
        </div>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/grafologico">← Tela anterior</a>
          <a className="back-link next-test-link" href="#decisoes">Ir às decisões ↓</a>
        </div>
      </nav>

      <header className="case-hero">
        <div>
          <span className="eyebrow">Dinâmica de liderança · Facilities</span>
          <h1>Operação <strong>em alerta</strong></h1>
          <p>Você é Supervisor de Operações e precisa preservar, ao mesmo tempo, as pessoas, a continuidade dos serviços e a satisfação dos clientes.</p>
        </div>
        <aside>
          <span>DESAFIO DO GRUPO</span>
          <strong>20 minutos</strong>
          <small>para tomar 5 decisões</small>
        </aside>
      </header>

      <div className="case-qr-wrap">
        <CaseQRCode />
      </div>

      <nav className="case-index" aria-label="Tópicos do estudo">
        <a href="#postos">01 · Postos</a>
        <a href="#alerta">02 · O alerta</a>
        <a href="#decisoes">03 · Decisões</a>
        <a href="#entrega">04 · Entrega</a>
      </nav>

      <section id="postos" className="case-section">
        <div className="case-section-title"><span>01</span><div><h2>Mapa da operação</h2><p>Três clientes na mesma região, com funções e criticidades diferentes.</p></div></div>
        <div className="post-grid">
          <article className="post-card critical">
            <div className="post-card-head"><span>POSTO A</span><b>CRITICIDADE ALTA</b></div>
            <h3>Centro Logístico</h3>
            <p><strong>Vigilância:</strong> 4 vigilantes, escala 12×36, 1 por turno.</p>
            <p><strong>Portaria:</strong> 4 porteiros, escala 12×36, 1 por turno.</p>
            <p><strong>Limpeza:</strong> 3 profissionais, escala 6×1, das 7h às 15h20.</p>
            <footer>25 km do Posto B · 15 km do Posto C</footer>
          </article>
          <article className="post-card critical">
            <div className="post-card-head"><span>POSTO B</span><b>CRITICIDADE ALTA</b></div>
            <h3>Unidade Industrial</h3>
            <p><strong>Vigilância:</strong> 9 vigilantes no total, em escala 4×2 e três turnos de 8 horas.</p>
            <p><strong>Turno das 6h às 14h:</strong> os 2 profissionais previstos estão presentes. Não existe excedente nesse turno.</p>
            <p><strong>Regra contratual:</strong> permanência mínima de 2 vigilantes por turno.</p>
            <footer>25 km do Posto A · 30 km do Posto C</footer>
          </article>
          <article className="post-card medium">
            <div className="post-card-head"><span>POSTO C</span><b>CRITICIDADE MÉDIA</b></div>
            <h3>Unidade Administrativa</h3>
            <p><strong>Limpeza:</strong> 4 profissionais, escala 6×1, das 7h às 15h20.</p>
            <p><strong>Situação inicial:</strong> equipe completa para a segunda-feira.</p>
            <p><strong>Limite operacional:</strong> consegue manter o essencial com 3 profissionais por até 4 horas, reagendando tarefas não críticas.</p>
            <footer>15 km do Posto A · 30 km do Posto B</footer>
          </article>
        </div>
      </section>

      <section id="alerta" className="case-section case-alert-section">
        <div className="case-section-title"><span>02</span><div><h2>Segunda-feira em alerta</h2><p>As ocorrências surgem quase simultaneamente.</p></div></div>
        <div className="crisis-timeline">
          <article><time>5h40</time><div><h3>Início da crise</h3><p>O supervisor recebe as primeiras ocorrências e precisa coordenar respostas imediatas.</p></div></article>
          <article><time>6h00</time><div><h3>Posto A ficará sem vigilante</h3><p>O profissional escalado passa mal. O vigilante do noturno já trabalhou 12 horas. Retirar alguém do Posto B reduziria o efetivo para 1.</p></div></article>
          <article><time>6h10</time><div><h3>Limpeza reduzida a uma pessoa</h3><p>Uma ausência por filho doente se soma a um afastamento semanal: somente 1 das 3 profissionais do Posto A estará disponível.</p></div></article>
          <article><time>6h20</time><div><h3>Auditoria internacional</h3><p>O Posto A receberá uma auditoria às 9h e exige atenção especial à recepção, banheiros, salas e circulação.</p></div></article>
          <article><time>6h30</time><div><h3>Posto B reforça a exigência</h3><p>Haverá aumento da movimentação de caminhões e o cliente não aceitará redução da vigilância.</p></div></article>
        </div>
        <div className="case-resources">
          <h3>Recursos de contingência disponíveis</h3>
          <div>
            <p><b>Central operacional 24h</b><span>Recebe os acionamentos e coordena as substituições.</span></p>
            <p><b>Vigilante reserva</b><span>Está a aproximadamente 50 minutos do Posto A.</span></p>
            <p><b>Vigilante de folga</b><span>Mora a 35 minutos do local, mas ainda não confirmou disponibilidade.</span></p>
            <p><b>Supervisor habilitado</b><span>Pode assumir vigilância, mas precisa buscar uniforme e equipamentos na base, a 40 minutos.</span></p>
            <p><b>Veículo operacional</b><span>Disponível para os deslocamentos emergenciais.</span></p>
          </div>
        </div>
        <div className="case-travel">
          <b>TEMPOS MÉDIOS DE DESLOCAMENTO</b>
          <span>A ↔ B: 40 minutos</span><span>A ↔ C: 25 minutos</span><span>B ↔ C: 45 minutos</span>
        </div>
        <div className="case-rule"><b>REGRA INEGOCIÁVEL</b><span>Profissionais não podem ser usados em funções diferentes daquelas para as quais foram contratados e habilitados.</span></div>
      </section>

      <section id="decisoes" className="case-section">
        <div className="case-section-title"><span>03</span><div><h2>As cinco decisões</h2><p>Não basta dizer o que faria. Demonstre o raciocínio da liderança.</p></div></div>
        <div className="decision-grid">
          {decisions.map((decision) => (
            <article className="decision-card" key={decision.number}>
              <header><span>{decision.number}</span><div><h3>{decision.title}</h3><b>{decision.urgency}</b></div></header>
              <p>{decision.context}</p>
              <h4>{decision.question}</h4>
              <footer>{decision.direction}</footer>
            </article>
          ))}
        </div>
      </section>

      <section id="entrega" className="case-delivery">
        <span className="eyebrow">Formato obrigatório da apresentação</span>
        <h2>DECISÃO <i>→</i> JUSTIFICATIVA <i>→</i> RISCO <i>→</i> PLANO B</h2>
        <div><strong>PESSOAS</strong><b>+</b><strong>CONTINUIDADE DA OPERAÇÃO</strong><b>+</b><strong>SATISFAÇÃO DO CLIENTE</strong></div>
        <p>Resolver o problema de um posto criando um problema em outro não será considerado uma solução.</p>
      </section>
    </main>
  );
}
