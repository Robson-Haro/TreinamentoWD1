export type Reference = { id: string; author: string; title: string; url: string; note: string };
export type Block = { title: string; text: string; example: string; points: string[] };
export type Metric = { title: string; formula: string; source: string; care: string };
export type Lesson = { slug: string; section: string; title: string; intro: string; blocks: Block[]; refs: string[]; prompt: string; answer: string; metrics?: Metric[] };

export const references: Reference[] = [
  {
    "id": "baltes",
    "author": "Paul B. Baltes (1987)",
    "title": "Theoretical propositions of life-span developmental psychology: On the dynamics between growth and decline. Developmental Psychology, 23(5), 611–626.",
    "url": "https://www.imprs-life.mpg.de/25277/022_baltes_1987.pdf",
    "note": "Teoria do desenvolvimento ao longo da vida; não é uma classificação de capacidade por idade."
  },
  {
    "id": "vygotsky",
    "author": "Lev S. Vygotsky (1978)",
    "title": "Mind in Society: The Development of Higher Psychological Processes. Harvard University Press. Capítulo: Interaction between Learning and Development.",
    "url": "https://home.fau.edu/musgrove/web/vygotsky1978.pdf",
    "note": "Conceito de zona de desenvolvimento proximal. O exemplo profissional é uma adaptação pedagógica, não um experimento do autor em facilities."
  },
  {
    "id": "bandura",
    "author": "Albert Bandura (1977)",
    "title": "Self-efficacy: Toward a unifying theory of behavioral change. Psychological Review, 84(2), 191–215.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/847061/",
    "note": "Autoeficácia e experiências de domínio; confiança precisa ser acompanhada de competência observada."
  },
  {
    "id": "kolb",
    "author": "David A. Kolb (1984); síntese do Institute for Experiential Learning",
    "title": "Experiential Learning: Experience as the Source of Learning and Development. Ciclo de experiência, reflexão, conceituação e experimentação.",
    "url": "https://experientiallearninginstitute.org/what-is-experiential-learning/",
    "note": "Modelo usado para estruturar prática e reflexão; não para fixar estilos de aprendizagem."
  },
  {
    "id": "dunlosky",
    "author": "John Dunlosky, Katherine Rawson, Elizabeth Marsh, Mitchell Nathan e Daniel Willingham (2013)",
    "title": "Improving Students’ Learning With Effective Learning Techniques. Psychological Science in the Public Interest, 14(1), 4–58.",
    "url": "https://doi.org/10.1177/1529100612453266",
    "note": "Revisão sobre técnicas de aprendizagem. Recuperação ativa e prática distribuída tiveram alta utilidade; aplicação à operação exige verificar transferência para o trabalho."
  },
  {
    "id": "pashler",
    "author": "Harold Pashler, Mark McDaniel, Doug Rohrer e Robert Bjork (2008)",
    "title": "Learning Styles: Concepts and Evidence. Psychological Science in the Public Interest, 9(3), 105–119.",
    "url": "https://doi.org/10.1111/j.1539-6053.2009.01038.x",
    "note": "A revisão não sustenta escolher o ensino por um suposto estilo fixo visual, auditivo ou cinestésico."
  },
  {
    "id": "deci",
    "author": "Edward L. Deci, Anja H. Olafsen e Richard M. Ryan (2017)",
    "title": "Self-Determination Theory in Work Organizations: The State of a Science. Annual Review of Organizational Psychology and Organizational Behavior, 4, 19–43.",
    "url": "https://selfdeterminationtheory.org/wp-content/uploads/2017/03/2017_DeciOlafsenRyan_annurev-orgpsych.pdf",
    "note": "Motivação no trabalho: autonomia, competência, pertencimento e internalização do valor da atividade."
  },
  {
    "id": "delegar",
    "author": "Clemson Turregano (2013) · Center for Creative Leadership",
    "title": "Delegating Effectively: A Leader’s Guide to Getting Things Done. CCL Press.",
    "url": "https://shop.ccl.org/usa/delegating-effectively-a-leaders-guide-to-getting-things-done.html",
    "note": "Delegação com autoridade, recursos, direção e apoio. Consultada a apresentação editorial, não o texto integral do livro."
  },
  {
    "id": "ccl",
    "author": "Center for Creative Leadership · autoria institucional",
    "title": "How to Delegate Your Workload: Tips for Managers.",
    "url": "https://www.ccl.org/articles/leading-effectively-articles/delegating-beyond-getting-it-off-your-desk/",
    "note": "Guia prático de delegação e desenvolvimento de liderança."
  },
  {
    "id": "cipd",
    "author": "CIPD · autoria institucional",
    "title": "Dealing with bullying and workplace conflict: Guide for managers.",
    "url": "https://www.cipd.org/uk/knowledge/guides/workplace-conflict-people-manager-guide/",
    "note": "Prevenção, identificação precoce e atuação do gestor. Orientação de gestão, não legislação brasileira."
  },
  {
    "id": "edmondson",
    "author": "Amy Edmondson (1999)",
    "title": "Psychological Safety and Learning Behavior in Work Teams. Administrative Science Quarterly, 44(2), 350–383.",
    "url": "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Organizational_Learning_and_Change/Edmondson_1999_Psychological_safety.pdf",
    "note": "Estudo sobre segurança psicológica e aprendizagem em equipes; não significa ausência de cobrança."
  },
  {
    "id": "aeon",
    "author": "Brad Aeon, Aïda Faber e Alexandra Panaccio (2021)",
    "title": "Does time management work? A meta-analysis. PLOS ONE, 16(1), e0245066.",
    "url": "https://doi.org/10.1371/journal.pone.0245066",
    "note": "Gestão do tempo associada a desempenho e bem-estar. Não garante causalidade nem compensa sobrecarga estrutural."
  },
  {
    "id": "covey",
    "author": "Stephen R. Covey · FranklinCovey",
    "title": "Habit 3: Put First Things First. Os 7 Hábitos das Pessoas Altamente Eficazes.",
    "url": "https://www.franklincovey.com/courses/the-7-habits/habit-3/",
    "note": "Modelo prático de importância e urgência; os casos e a agenda do treinamento são adaptações."
  },
  {
    "id": "kaplan",
    "author": "Robert S. Kaplan e David P. Norton (1992)",
    "title": "The Balanced Scorecard: Measures that Drive Performance. Harvard Business Review, 70(1), 71–79.",
    "url": "https://www.hbs.edu/faculty/Pages/item.aspx?num=9161",
    "note": "Referência conceitual de indicadores equilibrados. As fichas por cargo são propostas didáticas próprias, não indicadores prescritos pelos autores."
  },
  {
    "id": "osha",
    "author": "OSHA · autoria institucional",
    "title": "Leading Indicators.",
    "url": "https://www.osha.gov/leading-indicators",
    "note": "Diferencia medidas preventivas de resultados já ocorridos. Referência técnica internacional, não obrigação legal brasileira."
  },
  {
    "id": "issa",
    "author": "ISSA · The Association for Cleaning & Facility Solutions",
    "title": "Measuring Cleaning Performance.",
    "url": "https://www.issa.com/articles/performance/",
    "note": "Medição da qualidade da limpeza por critérios definidos e inspeções; evitar avaliar apenas velocidade ou aparência."
  }
];

export const lessons: Lesson[] = [
  {
    "slug": "desenvolvimento-humano",
    "section": "01 · Desenvolvimento humano",
    "title": "Gente se desenvolve. O líder cria condições.",
    "intro": "Desenvolvimento é mudança de capacidades ao longo da vida. Aprendizagem é a aquisição ou transformação de conhecimentos e habilidades. Uma experiência de trabalho pode contribuir para ambos.",
    "blocks": [
      {
        "title": "Paul Baltes · desenvolvimento ao longo da vida",
        "text": "O desenvolvimento é multidimensional, pode envolver ganhos e perdas e depende de condições pessoais e de contexto. Existe possibilidade de mudança, mas ela não é ilimitada nem igual em todas as áreas.",
        "example": "Uma profissional experiente pode dominar a rotina de limpeza e precisar de apoio para registrar ocorrências no celular. O supervisor aproveita seu conhecimento da operação e ensina o sistema por etapas; não presume incapacidade pela idade.",
        "points": []
      },
      {
        "title": "Lev Vygotsky · aprender com mediação",
        "text": "A zona de desenvolvimento proximal distingue o que se consegue fazer sozinho do que se realiza com orientação ou colaboração. O conceito foi desenvolvido no estudo da infância; aqui o adaptamos à formação profissional.",
        "example": "Um novo recepcionista já atende ligações, mas ainda precisa de apoio para priorizar visitantes em uma situação incomum. O líder demonstra, acompanha uma simulação e reduz o apoio conforme a execução melhora.",
        "points": []
      },
      {
        "title": "Albert Bandura · construir autoeficácia",
        "text": "Autoeficácia é a crença na própria capacidade de realizar uma tarefa. Experiências de êxito, observação de modelos, incentivo crível e estados emocionais ajudam a compreender sua construção.",
        "example": "O supervisor demonstra uma passagem de turno, permite uma prática orientada e devolve um feedback específico. A autonomia aumenta após demonstração de competência, não apenas após a pessoa dizer que está confiante.",
        "points": []
      },
      {
        "title": "Diagnostique a tarefa, não rotule a pessoa",
        "text": "Antes de concluir que alguém não quer aprender, investigue conhecimentos prévios, clareza, recursos, acessibilidade, prática e retorno recebido.",
        "example": "Troque “ele não tem perfil” por “qual etapa ele já faz bem, em qual precisa de apoio e como vou verificar a evolução?”.",
        "points": []
      }
    ],
    "refs": [
      "baltes",
      "vygotsky",
      "bandura"
    ],
    "prompt": "Escolha uma pessoa da sua equipe: o que ela já realiza sozinha e qual tarefa poderia aprender com apoio?",
    "answer": "Descreva uma tarefa observável, o apoio necessário e uma situação segura para praticar. Evite concluir sobre capacidade por idade, escolaridade ou tempo de casa."
  },
  {
    "slug": "formas-de-aprender",
    "section": "01 · Desenvolvimento humano",
    "title": "Ensinar, praticar, refletir e tentar de novo.",
    "intro": "O método precisa combinar a natureza da tarefa, a experiência da pessoa e os recursos de acesso. Assistir a uma explicação não comprova capacidade para executar.",
    "blocks": [
      {
        "title": "David Kolb · transformar experiência em aprendizagem",
        "text": "O ciclo propõe experiência concreta, reflexão, elaboração de conceitos e experimentação. Use-o como roteiro de conversa sobre a prática.",
        "example": "Após simular uma reclamação na recepção: o que aconteceu? O que ajudou ou atrapalhou? Que princípio podemos extrair? O que faremos diferente na próxima simulação?",
        "points": []
      },
      {
        "title": "Dunlosky e colegas · lembrar sem consultar e revisar em intervalos",
        "text": "Recuperação ativa e prática distribuída têm bom apoio na pesquisa educacional. Na operação, combine perguntas de memória com execução observada e retorno corretivo.",
        "example": "Após ensinar a passagem de turno, peça que a pessoa recorde os campos essenciais. Retome no dia seguinte e na semana seguinte. São intervalos ilustrativos, ajustáveis à dificuldade e ao risco.",
        "points": []
      },
      {
        "title": "Pashler e colegas · cuidado com rótulos de aprendizagem",
        "text": "Preferir vídeo ou leitura não prova que alguém só aprende por aquele canal. A evidência não sustenta adaptar todo o ensino a um estilo fixo visual, auditivo ou cinestésico.",
        "example": "Para ensinar um registro, mostre um exemplo, explique, entregue um roteiro legível e peça que a pessoa faça. Ajuste contraste, tamanho, linguagem e recursos às necessidades reais de acessibilidade.",
        "points": []
      },
      {
        "title": "Roteiro prático de ensino no posto",
        "text": "Explique a finalidade → demonstre e verbalize o raciocínio → peça uma prática segura → observe → dê retorno → retome depois. Este roteiro é uma proposta didática do módulo.",
        "example": "Na jardinagem, treine o registro de uma área com irrigação irregular. Peça descrição, localização e encaminhamento. Atividades com risco exigem formação e supervisão adequadas; a simulação não substitui habilitação.",
        "points": []
      }
    ],
    "refs": [
      "kolb",
      "dunlosky",
      "pashler"
    ],
    "prompt": "Como você verificaria se a pessoa aprendeu, sem perguntar apenas “entendeu”?",
    "answer": "Peça uma demonstração ou um exemplo explicado pela pessoa, compare com critérios previamente combinados e observe a aplicação na rotina."
  },
  {
    "slug": "delegar",
    "section": "02 · Delegar é diferente de mandar",
    "title": "Delegar é entregar responsabilidade com condições.",
    "intro": "Uma ordem pode ser necessária em uma urgência. Para desenvolver alguém, o líder precisa também combinar resultado, autonomia, recursos e acompanhamento.",
    "blocks": [
      {
        "title": "Mandar, delegar e abandonar são coisas diferentes",
        "text": "Mandar define uma ação. Delegar transfere uma responsabilidade com limites e apoio. Abandonar é cobrar um resultado sem oferecer condições. O líder continua responsável pelo acompanhamento.",
        "example": "Mandar: “Organize o material”. Abandonar: “Resolva o estoque e não me traga problemas”. Delegar: “Organize o controle de saída para reduzir faltas; vamos combinar o padrão e revisar a primeira semana juntos”.",
        "points": []
      },
      {
        "title": "Clemson Turregano e CCL · condições para delegar",
        "text": "Considere preparo, autoridade, recursos, direção e apoio. Escolha tarefas que permitam aprender e estabeleça pontos de verificação proporcionais ao risco.",
        "example": "Uma encarregada pode organizar a distribuição diária dentro da escala aprovada. Mudanças de função, gastos e alterações contratuais continuam sujeitos às autorizações definidas.",
        "points": []
      },
      {
        "title": "A pessoa precisa enxergar valor no convite",
        "text": "Explique por que a tarefa importa para o cliente, para o time e para o desenvolvimento profissional. Pergunte o que faz sentido para a pessoa e quais obstáculos ela percebe.",
        "example": "“Quero te preparar para conduzir o alinhamento do turno. Isso ajuda a equipe a começar sem dúvidas e permite que você pratique organização e orientação. Que apoio você precisa?”",
        "points": []
      },
      {
        "title": "Deci, Olafsen e Ryan · motivação com sentido",
        "text": "A teoria da autodeterminação destaca autonomia, competência e pertencimento. Compreender e assumir o valor de uma tarefa favorece motivação mais autônoma, mesmo quando a tarefa não é divertida.",
        "example": "Convite ao desenvolvimento não deve mascarar uma obrigação nem prometer promoção. Explique o que é responsabilidade do cargo, qual é a oportunidade e quais são as possibilidades reais.",
        "points": []
      }
    ],
    "refs": [
      "delegar",
      "ccl",
      "deci"
    ],
    "prompt": "Qual tarefa você centraliza e poderia delegar com segurança?",
    "answer": "Comece por uma entrega com critérios claros, defina limites de decisão, verifique capacidade e carga de trabalho e combine um primeiro acompanhamento."
  },
  {
    "slug": "acordo-de-delegacao",
    "section": "02 · Delegar é diferente de mandar",
    "title": "Um acordo que desenvolve autonomia.",
    "intro": "Exercício prático para postos com mais de uma posição: desenvolver a visão do conjunto, acompanhar as entregas da escala e transformar a experiência em aprendizagem para a equipe e os supervisores.",
    "blocks": [
      {
        "title": "1 · Ampliar a visão e praticar a liderança",
        "text": "Em postos com mais de uma posição, escolha um colaborador para acompanhar a operação daquele dia, sem anunciá-lo como “líder do dia”. Convide-o a olhar além das próprias tarefas: compreender o funcionamento do posto, acompanhar o que precisa ser realizado e identificar prioridades e riscos de uma entrega não acontecer. Explique o valor dessa participação: desenvolver visão do conjunto, capacidade de organização e cuidado com o resultado da equipe. Combine os limites de atuação e mantenha o apoio e a responsabilidade do supervisor.",
        "example": "No início da escala, o supervisor conversa individualmente com cada colaborador para alinhar responsabilidades, prioridades e pontos de atenção. A pessoa convidada acompanha o conjunto das atividades, identifica dependências e sinaliza riscos. Ao fim do alinhamento, cada profissional deve conseguir explicar sua área, prioridade e ponto de atenção.",
        "points": []
      },
      {
        "title": "2 · Fechar a escala e compreender as pendências",
        "text": "Ao fim da escala, o supervisor retoma o alinhamento e verifica o que foi concluído e o que ficou pendente. Converse com os profissionais responsáveis para compreender os obstáculos: faltou tempo, recurso, pessoal, orientação ou apoio? Compare o planejamento com as condições reais, escute os envolvidos e identifique o que precisa mudar para viabilizar a entrega.",
        "example": "Pergunte: “O que estava combinado? O que conseguimos entregar? O que impediu a conclusão? Do que você precisava e não estava disponível?”. Registre a pendência, o impacto, o encaminhamento, o responsável e o prazo. Prioridades e riscos que não podem esperar devem ser tratados de imediato e comunicados na passagem de turno.",
        "points": []
      },
      {
        "title": "3 · Acompanhar e desenvolver autonomia",
        "text": "Ao longo da semana, ofereça essa experiência a diferentes colaboradores, considerando seu preparo e as condições do posto. O supervisor orienta, observa e dá retorno sobre comportamentos concretos: perceber uma prioridade, antecipar um risco, pedir apoio e acompanhar uma entrega. Amplie a autonomia conforme a pessoa demonstra capacidade, mantendo claros os limites da função.",
        "example": "“Você percebeu que uma pendência afetaria outra atividade e pediu apoio a tempo. O que ajudou nessa percepção? Na próxima escala, como podemos identificar esse risco mais cedo?”",
        "points": []
      }
    ],
    "refs": [
      "ccl"
    ],
    "prompt": "Reunião semanal de supervisores: o que funcionou, o que não funcionou e o que vamos ajustar para avançar rumo à excelência?",
    "answer": "Reserve de 30 a 45 minutos por semana para os supervisores compartilharem a aplicação desse exercício. Cada um apresenta um caso: como envolveu o colaborador na visão do posto, como realizou as conversas individuais e o fechamento da escala, quais entregas foram concluídas e quais ficaram pendentes. Relatem o que deu certo e o que deu errado, com exemplos e causas observadas — tempo, recursos, pessoas, clareza ou organização. Escolham as práticas que vale repetir e definam os ajustes, responsáveis e prazos para a próxima semana. Na reunião seguinte, retomem esses compromissos e verifiquem se houve melhora. Repitam esse ciclo de prática, avaliação e ajuste, consolidando o que funciona até alcançar um padrão consistente de excelência."
  },
  {
    "slug": "prevenir-conflitos",
    "section": "03 · Prevenção de conflitos",
    "title": "Melhor prevenir conflitos evitáveis do que deixar escalar.",
    "intro": "Prevenir não é silenciar discordâncias. Divergências sobre prioridades podem melhorar uma decisão; desrespeito e problemas ignorados desgastam a equipe.",
    "blocks": [
      {
        "title": "CIPD · clareza e intervenção precoce",
        "text": "Responsabilidades claras, critérios consistentes, escuta e feedback frequente ajudam a reduzir conflitos evitáveis. Sinais de tensão pedem uma conversa antes que o problema aumente.",
        "example": "Na troca de turno, definam o que precisa ser registrado, quem recebe pendências e como confirmar a passagem. Evitem depender de “achei que o outro faria”.",
        "points": []
      },
      {
        "title": "Amy Edmondson · segurança para falar",
        "text": "Segurança psicológica envolve poder perguntar, reconhecer dificuldades e apresentar preocupações sem receio de humilhação. Isso não elimina padrões de desempenho nem responsabilidade.",
        "example": "O porteiro precisa conseguir dizer “recebi duas orientações diferentes” antes de escolher uma delas por medo de perguntar.",
        "points": []
      },
      {
        "title": "Previna causas recorrentes",
        "text": "Observe tarefas mal distribuídas, prioridades contraditórias, tratamento desigual, recursos insuficientes e comunicação pública que constrange. Faça acordos verificáveis.",
        "example": "Se duas equipes disputam uma máquina, planeje janelas de uso e um procedimento para urgências. Pedir apenas que “se entendam” não remove o problema.",
        "points": []
      },
      {
        "title": "Quando o conflito já existe",
        "text": "Ouça os envolvidos, descreva fatos e impactos, diferencie posições de necessidades e registre o acordo, o responsável e a revisão.",
        "example": "“Nas duas últimas trocas faltou o registro das pendências. Isso atrasou a equipe seguinte. O que aconteceu e como vamos garantir o repasse?”",
        "points": []
      },
      {
        "title": "Situações que pedem encaminhamento",
        "text": "Ameaça, assédio, discriminação e risco à segurança não devem ser tratados como simples mal-entendido entre iguais. Proteja as pessoas e acione os canais e responsáveis da organização.",
        "example": "Não force uma conciliação nem prometa sigilo absoluto. Registre fatos e siga o procedimento aplicável.",
        "points": []
      }
    ],
    "refs": [
      "cipd",
      "edmondson"
    ],
    "prompt": "Um colaborador questiona a escala na frente da equipe. Isso é necessariamente um conflito negativo?",
    "answer": "Não. Pode haver uma informação relevante ou um critério pouco claro. Ouça a questão, explique o critério e trate eventual desrespeito separadamente do conteúdo da discordância."
  },
  {
    "slug": "tempo-e-prioridades",
    "section": "04 · Tempo e prioridades",
    "title": "Prioridade é uma escolha com critério.",
    "intro": "A agenda do líder precisa incluir operação, prevenção e desenvolvimento. Se todo espaço fica ocupado com urgências, o treinamento da equipe será sempre adiado.",
    "blocks": [
      {
        "title": "Aeon, Faber e Panaccio · o que a pesquisa indica",
        "text": "A meta-análise encontrou relações entre gestão do tempo, desempenho e bem-estar. Isso não significa que um método de agenda resolva falta de pessoal ou carga de trabalho inviável.",
        "example": "Se a demanda excede a capacidade, apresente os dados, renegocie entregas e solicite recursos. Não transforme um problema estrutural em culpa individual.",
        "points": []
      },
      {
        "title": "Stephen Covey · importante e urgente",
        "text": "Importância se relaciona ao impacto sobre objetivos. Urgência se relaciona ao prazo e à necessidade de resposta. Proteja espaço para o importante antes que vire uma crise.",
        "example": "Vazamento com risco imediato: agir e acionar apoio. Treinar um substituto: importante e programável. Pedido administrativo simples: encaminhar conforme responsabilidade. Relatório duplicado sem uso: revisar necessidade.",
        "points": []
      },
      {
        "title": "Critérios para a operação",
        "text": "Avalie primeiro risco às pessoas, continuidade do serviço, obrigações do posto e impacto no cliente. Depois organize prazo, dependências e recursos.",
        "example": "Uma recepção movimentada não autoriza pular controles de acesso; cumprir o procedimento pode ser mais importante que encurtar uma fila.",
        "points": []
      },
      {
        "title": "Agenda exemplo do supervisor",
        "text": "Reserve um início de turno para cobertura e riscos; um bloco para inspeção; um encontro curto para desenvolver alguém; e um fechamento para pendências. Ajuste os horários à operação.",
        "example": "Inclua margem para imprevistos com base no histórico. Blocos de foco não tornam o supervisor indisponível para emergências.",
        "points": []
      }
    ],
    "refs": [
      "aeon",
      "covey"
    ],
    "prompt": "Qual atividade importante da sua semana você costuma adiar até virar urgente?",
    "answer": "Escolha uma ação preventiva ou de desenvolvimento, reserve um horário e defina como preservar o bloco ou reagendá-lo conscientemente."
  },
  {
    "slug": "ensinar-prioridades",
    "section": "04 · Tempo e prioridades",
    "title": "Ensine o time a escolher o próximo passo.",
    "intro": "Não basta entregar uma lista. Mostre o raciocínio e os limites para a pessoa priorizar quando o cenário muda.",
    "blocks": [
      {
        "title": "Demonstre seu raciocínio",
        "text": "Explique por que uma tarefa vem primeiro e qual risco determina a escolha. Peça que a pessoa proponha a sequência e justifique.",
        "example": "“Vamos sinalizar e encaminhar o piso molhado antes de organizar o depósito porque existe risco de queda.”",
        "points": []
      },
      {
        "title": "Um plano simples para o turno",
        "text": "Combine entregas essenciais, sequência, responsáveis, recursos e situações em que será preciso pedir ajuda. Confira as pendências ao final.",
        "example": "Na limpeza: áreas críticas conforme plano, reposição programada e manutenção das demais áreas. O fluxo de uso e as ocorrências podem exigir revisão da sequência.",
        "points": []
      },
      {
        "title": "Interrupções precisam de acordo",
        "text": "Defina quais situações interrompem a atividade, quais são registradas para depois e quem decide conflitos entre solicitações.",
        "example": "Na portaria, uma demanda administrativa não deve fazer o profissional abandonar o controle de acesso. Ele registra, informa o prazo e encaminha ao responsável.",
        "points": []
      },
      {
        "title": "Exercício · três pedidos ao mesmo tempo",
        "text": "Chegaram visitantes, há água no corredor e o cliente quer uma planilha. Cada profissional deve atuar dentro de sua função e acionar quem pode resolver as demais demandas.",
        "example": "A recepção mantém o atendimento e aciona o responsável pelo risco. O supervisor coordena a resposta, confirma a proteção da área e negocia o prazo da planilha. Não é necessário que uma só pessoa execute tudo.",
        "points": []
      }
    ],
    "refs": [
      "covey"
    ],
    "prompt": "Como o liderado pode discordar da prioridade que você definiu?",
    "answer": "Traga o fato novo, o risco e uma proposta: “Se eu fizer A agora, B ficará descoberto. Sugiro C. Podemos alinhar?”. Ensine o critério e acolha informações que mudem o plano."
  },
  {
    "slug": "pensar-como-dono",
    "section": "05 · Negócio e indicadores",
    "title": "Pensar como dono é cuidar do resultado completo.",
    "intro": "É compreender o efeito das próprias decisões sobre pessoas, cliente, qualidade, recursos e continuidade do contrato. Não é assumir despesas pessoais nem trabalhar sem limites.",
    "blocks": [
      {
        "title": "Como o serviço gera valor",
        "text": "O cliente contrata uma entrega: ambientes utilizáveis, atendimento confiável, cuidado com o patrimônio e continuidade. O contrato define escopo, padrões e responsabilidades.",
        "example": "Uma área limpa que fica indisponível no horário de maior circulação pode não entregar o valor esperado. Qualidade também precisa considerar o uso do ambiente.",
        "points": []
      },
      {
        "title": "Receita, custo e margem · exemplo fictício",
        "text": "Em um exemplo simplificado, receita mensal de R$ 100 mil menos R$ 82 mil de custos diretos resulta em R$ 18 mil antes de tributos, despesas indiretas e outros ajustes. Isso não é lucro líquido.",
        "example": "R$ 3 mil adicionais de retrabalho reduziriam esse saldo para R$ 15 mil, se todo o resto permanecesse igual. Investigue a causa e os efeitos antes de cortar recursos.",
        "points": []
      },
      {
        "title": "Economia que destrói valor",
        "text": "Reduzir material, treinamento ou cobertura sem avaliar impactos pode aumentar falhas, riscos e reclamações. Compare o custo total da decisão.",
        "example": "Um equipamento barato pode exigir mais manutenção e interromper o serviço. Considere compra, uso, manutenção e vida útil, dentro das informações disponíveis.",
        "points": []
      },
      {
        "title": "Kaplan e Norton · olhar equilibrado",
        "text": "O Balanced Scorecard propõe ampliar a visão além dos resultados financeiros, considerando cliente, processos e aprendizagem. Aqui usamos essa lógica como referência para a operação.",
        "example": "Combine custo de retrabalho, qualidade percebida, execução do plano e desenvolvimento da equipe. Um único número raramente conta a história toda.",
        "points": []
      }
    ],
    "refs": [
      "kaplan"
    ],
    "prompt": "Qual decisão do seu posto parece econômica hoje, mas pode gerar custo ou perda de qualidade amanhã?",
    "answer": "Descreva o custo evitado, o risco criado e como verificar o efeito. Discuta com quem possui autoridade para decidir, usando dados e alternativas."
  },
  {
    "slug": "escolher-indicadores",
    "section": "05 · Negócio e indicadores",
    "title": "Quais são os indicadores de sucesso dos postos da WD?",
    "intro": "Antes de olhar os exemplos, vamos conversar: como sabemos que um posto está entregando um bom serviço? O cliente precisa sair do campo da percepção e ir para o campo dos dados. Vamos mergulhar nos indicadores.",
    "blocks": [
      {
        "title": "1 · O que prova que o posto está indo bem?",
        "text": "Quais são os indicadores de sucesso dos postos da WD? Quando dizemos “o serviço está bom”, o que conseguimos mostrar? Pensem na portaria, vigilância, limpeza, ronda, zeladoria, jardinagem, recepção e supervisão.",
        "example": "Pergunta para o grupo: “Se o cliente perguntasse hoje por que deve confiar na nossa entrega, quais números vocês apresentariam?”",
        "points": []
      },
      {
        "title": "2 · Como estamos medindo isso?",
        "text": "Quem registra? Onde anota? Com que frequência confere? Todos usam a mesma regra? Sem registro e critério, duas pessoas podem dar opiniões diferentes sobre o mesmo serviço.",
        "example": "“A limpeza está boa” é uma percepção. “Conferimos 50 itens e 45 estavam dentro do padrão combinado” é um dado. Ainda precisamos saber quais foram os 5 problemas e corrigi-los.",
        "points": []
      },
      {
        "title": "3 · Quais metas queremos alcançar?",
        "text": "Meta é o resultado que queremos atingir em um prazo. Primeiro conhecemos o resultado atual. Depois combinamos a meta com o cliente e a equipe, considerando o contrato, os riscos e os recursos disponíveis.",
        "example": "Exemplo didático: hoje acertamos 45 de 50 itens, ou 90%. Uma meta de 96% significa acertar pelo menos 48 dos mesmos 50 itens na próxima avaliação. Precisamos melhorar 3 itens. Uma falha crítica exige ação mesmo se a média atingir a meta.",
        "points": []
      },
      {
        "title": "4 · Indicador, resultado e meta: qual é a diferença?",
        "text": "Indicador é aquilo que acompanhamos. Resultado é o número que encontramos. Meta é o número que queremos alcançar. Porcentagem significa “de cada 100”. Para calcular: divida a quantidade que atendeu ao critério pelo total avaliado e multiplique por 100.",
        "example": "Indicador: acessos feitos corretamente. Resultado: 98 corretos em 100 conferidos = 98%. Meta ilustrativa: 100%. Distância da meta: 2 acessos precisam ser corrigidos na forma de executar o procedimento.",
        "points": []
      },
      {
        "title": "5 · O número precisa virar ação",
        "text": "Quando o resultado fica longe da meta, pergunte o que aconteceu e o que precisa mudar. Pode faltar orientação, tempo, material, gente ou organização. Combine uma ação, um responsável e uma data para conferir novamente.",
        "example": "Se 4 de 20 serviços precisaram ser refeitos, o retrabalho foi de 20%. O supervisor investiga a causa, orienta a equipe e mede de novo. Na semana seguinte, 1 de 20 precisou de correção: 5%. A comparação só vale se o critério e as condições forem comparáveis.",
        "points": []
      },
      {
        "title": "6 · Zeladoria como exemplo; demais funções em grupo",
        "text": "Vamos aprofundar os indicadores da zeladoria com números e contas simples. Depois, os grupos construirão os indicadores das outras funções. Os valores e as metas dos exemplos são fictícios; não representam resultados reais nem metas oficiais da WD.",
        "example": "Se não houve casos para avaliar, escreva “não se aplica”. Não invente 100%. Não esconda problemas para melhorar o número: registrar com honestidade é o começo da melhoria.",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha",
      "issa"
    ],
    "prompt": "Escolham um posto da WD: o que significa sucesso, como vocês medem hoje e qual meta precisa ser combinada?",
    "answer": "Respondam juntos: indicador, resultado atual, meta, prazo, registro usado e responsável. Se ainda não existe medição, definam como começar. Na revisão seguinte, levem os números e as ações realizadas, além da opinião sobre o serviço."
  },
  {
    "slug": "indicadores-zeladoria",
    "section": "05 · Indicadores por função",
    "title": "Zeladoria: o que devemos entregar e como comprovar?",
    "intro": "Vamos olhar para três áreas de resultado da zeladoria: atendimento dos chamados, conservação da estrutura e limpeza das áreas sob sua responsabilidade. Cada uma precisa de critérios claros, registros e acompanhamento.",
    "blocks": [
      {
        "title": "KPA, KPI e indicador: entendendo sem complicar",
        "text": "KPA é a área de resultado que precisa de atenção. KPI é um indicador importante para saber como essa área está indo. A meta diz onde queremos chegar. Para facilitar, vamos separar: o que cuidar, o que medir e qual resultado alcançar.",
        "example": "O que cuidar: atendimento dos chamados. O que medir: porcentagem atendida dentro do prazo. Meta: 100% dos urgentes em até 30 minutos e 100% dos importantes em até 3 horas. Os números dos cálculos são exemplos para praticar.",
        "points": []
      },
      {
        "title": "Como isso desenvolve as pessoas?",
        "text": "Quando a pessoa sabe o que se espera, consegue organizar o trabalho, escolher prioridades e perceber quando precisa pedir ajuda. O indicador transforma um comentário vago em uma conversa sobre uma ação que pode ser aprendida e melhorada.",
        "example": "Em vez de dizer “você precisa ser mais ágil”, o supervisor pergunta: “Dos 10 chamados urgentes, 2 passaram de 30 minutos. O que aconteceu? Você reconheceu a prioridade? Faltou recurso, orientação ou apoio?”. Depois orienta, combina um ajuste e acompanha a próxima semana.",
        "points": []
      },
      {
        "title": "Ensinar, acompanhar e ampliar a autonomia",
        "text": "O supervisor demonstra como classificar um chamado, conferir a estrutura e registrar uma pendência. Depois deixa o colaborador praticar, observa e dá retorno. Conforme a pessoa demonstra domínio, pode assumir mais autonomia dentro da sua função.",
        "example": "Peça ao colaborador que apresente as pendências, explique quais vêm primeiro e proponha o próximo passo. Reconheça quando ele antecipa um problema ou aciona apoio a tempo. O número ajuda a localizar a dificuldade; não explica sozinho sua causa nem define o valor da pessoa.",
        "points": []
      },
      {
        "title": "Por que esses indicadores importam para o cliente?",
        "text": "O cliente ganha clareza sobre o serviço contratado: o que foi atendido, em quanto tempo, quais condições foram verificadas e o que ainda falta resolver. Isso reduz a dependência da impressão de que “está tudo bem” e permite discutir prioridades, recursos e resultados com evidências.",
        "example": "Apresentação ao cliente: “Nesta semana, 8 de 10 chamados urgentes foram atendidos em até 30 minutos: 80%. Na estrutura, 36 de 40 itens estavam em ordem: 90%. Na limpeza, 18 de 20 itens estavam conformes: 90%. Estas são as pendências, seus responsáveis e os prazos combinados.” Não esconda uma falha grave dentro de uma média favorável.",
        "points": []
      },
      {
        "title": "Do dado à melhoria do serviço",
        "text": "Na reunião semanal, compare os resultados com as metas e com o período anterior. Ouça a equipe e o cliente, investigue os obstáculos e combine ações. Na semana seguinte, confira se a mudança funcionou, usando os mesmos critérios.",
        "example": "Se os chamados urgentes passarem de 8 em 10 para 10 em 10 no prazo, o resultado sobe de 80% para 100%: melhora de 20 pontos percentuais. Pergunte o que ajudou e como manter esse resultado. Confira a qualidade da solução, além da velocidade.",
        "points": []
      }
    ],
    "refs": [],
    "prompt": "O zelador consegue explicar suas prioridades? E o cliente consegue ver, pelos registros, o que foi entregue e o que ainda precisa melhorar?",
    "answer": "Escolham uma dificuldade, identifiquem sua causa e combinem uma ação de desenvolvimento. Registrem quem fará, o apoio necessário e quando revisar. Apresentem ao cliente o resultado, as pendências e o plano de melhoria com transparência.",
    "metrics": [
      {
        "title": "1 · Qualidade no atendimento dos chamados",
        "formula": "Meta do exercício: chamados urgentes com atendimento inicial em até 30 minutos; importantes em até 3 horas. Conte cada grupo separadamente. Exemplo: dos 10 urgentes, 8 foram atendidos no prazo. (8 ÷ 10) × 100 = 80%. Dos 20 importantes, 18 foram atendidos em até 3 horas. (18 ÷ 20) × 100 = 90%.",
        "source": "Registre abertura, classificação, início do atendimento, providência, responsável e conclusão. O tempo começa na abertura registrada do chamado. Atendimento inicial significa avaliar a situação e iniciar a providência ou acionar o responsável; não é apenas confirmar recebimento.",
        "care": "Meta: 100% em cada prazo. No exemplo, investigue os 2 urgentes e os 2 importantes atrasados. O prazo para resolver é acompanhado separadamente, pois pode depender de peças ou fornecedor. Situações de risco imediato exigem ação e acionamento imediato, sem esperar 30 minutos. Confira também se a solução funcionou e mantenha o solicitante informado."
      },
      {
        "title": "2 · Estrutura 100% em ordem",
        "formula": "Confira os itens previstos no checklist: iluminação funcionando, pintura em boas condições, portas, fechaduras e demais itens do posto. Exemplo: foram verificados 40 itens e 36 estavam em ordem. (36 ÷ 40) × 100 = 90% da estrutura verificada em ordem.",
        "source": "Checklist por ambiente, com data, item, condição encontrada e evidência quando necessária. Defina antes o que significa “em ordem”: iluminação sem falha de funcionamento; pintura sem descascamento ou deterioração segundo o padrão combinado.",
        "care": "Meta: 100% dos itens aplicáveis em ordem. No exemplo, faltam 4 itens. Registre o problema, o risco, a ação, o responsável e o prazo. Encaminhar um reparo não torna o item automaticamente conforme: confira a execução. Separe o estado da estrutura do cumprimento das ações que dependem do zelador; registre dependências de aprovação ou fornecedor."
      },
      {
        "title": "3 · Limpeza das áreas de responsabilidade da zeladoria",
        "formula": "Confira as áreas e rotinas previstas no plano: lixeiras, local de resíduos e acompanhamento da limpeza da caixa-d’água, entre outras responsabilidades definidas para o posto. Exemplo: de 20 itens aplicáveis, 18 atenderam ao padrão e ao prazo. (18 ÷ 20) × 100 = 90% de conformidade.",
        "source": "Checklist com área, tarefa, frequência, responsável, data prevista e confirmação. Para lixeiras: verificar resíduos, transbordamento e condições do entorno conforme o plano. Para caixa-d’água: acompanhar a programação, a execução pelo responsável habilitado e o registro do serviço.",
        "care": "Meta: 100% dos itens aplicáveis no padrão e no prazo. Investigue os 2 itens pendentes. Aparência externa da caixa-d’água não comprova limpeza interna nem qualidade da água. O acompanhamento da zeladoria não significa executar atividade especializada: respeite as atribuições e os procedimentos do local."
      }
    ]
  },
  {
    "slug": "indicadores-em-grupo",
    "section": "05 · Indicadores por função",
    "title": "Agora é com vocês: construam os indicadores da WD.",
    "intro": "Usamos a zeladoria para aprender. Agora, cada grupo vai definir como demonstrar o sucesso de uma das funções abaixo. Não há respostas prontas: construam os indicadores a partir da realidade dos postos.",
    "blocks": [
      {
        "title": "Funções para o trabalho em grupo",
        "text": "Portaria • Vigilante • Ronda • Limpeza • Jardineiro • Recepcionista • Supervisor",
        "example": "Distribuam as funções entre os grupos. Todos vão apresentar suas propostas e ouvir as contribuições dos demais.",
        "points": []
      },
      {
        "title": "Quais são os indicadores de sucesso desta função?",
        "text": "O que significa entregar um bom serviço? O que precisa ser medido para comprovar essa entrega ao cliente? Como vocês medem hoje? Quais metas precisam ser alcançadas?",
        "example": "Construam a resposta em grupo, sem se limitar à percepção de que “está bom” ou “está ruim”.",
        "points": []
      },
      {
        "title": "Preparem a apresentação do grupo",
        "text": "Para cada indicador escolhido, registrem: nome, o que será medido, como calcular, unidade, origem do dado, frequência, responsável, meta e prazo. Se não conhecem o resultado atual, indiquem como irão levantá-lo.",
        "example": "Ao apresentar, expliquem também o que a equipe fará quando o resultado ficar abaixo do esperado e como evitarão que a busca pela meta prejudique a qualidade ou a segurança.",
        "points": []
      }
    ],
    "refs": [],
    "prompt": "Cada grupo apresenta sua proposta. Os demais conseguem entender como medir, qual meta buscar e o que fazer com o resultado?",
    "answer": "Discutam clareza, utilidade, possibilidade de coletar o dado e relação com o contrato. Ajustem as propostas em conjunto antes de colocá-las em prática."
  },
  {
    "slug": "plano-de-desenvolvimento",
    "section": "Compromisso final",
    "title": "Seu resultado também é quem você ajuda a crescer.",
    "intro": "Proposta prática de 30 dias, ajustável à jornada: desenvolver uma pessoa em uma responsabilidade real, com condições, evidências e acompanhamento.",
    "blocks": [
      {
        "title": "Semana 1 · escolher e combinar",
        "text": "Escolha com a pessoa uma competência relevante e uma tarefa segura. Identifique o que já consegue fazer e o apoio necessário.",
        "example": "Registre: pessoa, tarefa, valor para o serviço, objetivo de aprendizagem e critério de sucesso.",
        "points": []
      },
      {
        "title": "Semana 2 · ensinar e praticar",
        "text": "Demonstre, deixe praticar e dê retorno específico. Peça que explique o raciocínio e os critérios de prioridade.",
        "example": "Agende o tempo de desenvolvimento como parte do trabalho, com recursos e cobertura adequados.",
        "points": []
      },
      {
        "title": "Semana 3 · ampliar autonomia com apoio",
        "text": "Acompanhe a tarefa conforme o risco, discuta dúvidas e obstáculos e ajuste o acordo.",
        "example": "Use um indicador de qualidade e outro de processo para conversar sobre a execução, sem reduzir a pessoa ao número.",
        "points": []
      },
      {
        "title": "Semana 4 · verificar e reconhecer",
        "text": "Observe a execução, compare com o critério combinado e reconheça a evolução. Defina o próximo passo e o apoio que ainda é necessário.",
        "example": "O plano de 30 dias é uma proposta deste treinamento, não uma promessa de que todos dominarão a habilidade nesse prazo.",
        "points": []
      }
    ],
    "refs": [],
    "prompt": "Complete: “Vou desenvolver ___ para realizar ___, porque isso gera ___; vou apoiar com ___ e verificar por ___”.",
    "answer": "O compromisso precisa caber na rotina e ter uma data de revisão. Se a pessoa precisar de mais tempo ou outro recurso, ajuste o plano com ela."
  }
];
