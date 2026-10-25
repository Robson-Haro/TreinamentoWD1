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
    "title": "Antes do indicador, defina o sucesso.",
    "intro": "Os indicadores a seguir são propostas didáticas para adaptação ao contrato, ao posto e aos recursos disponíveis. Não são metas legais nem tabelas oficiais das instituições citadas.",
    "blocks": [
      {
        "title": "1 · Comece pela finalidade da função",
        "text": "Pergunte: qual entrega esta função deve garantir? Quem recebe? Qual falha precisamos prevenir? O profissional consegue influenciar esse resultado?",
        "example": "Portaria: controle de acesso confiável. Limpeza: ambiente conforme o plano de qualidade. Supervisor: continuidade e evolução do serviço.",
        "points": []
      },
      {
        "title": "2 · Defina uma ficha completa",
        "text": "Registre nome, objetivo, fórmula, unidade, origem dos dados, frequência, responsável pela apuração e ação esperada quando houver desvio.",
        "example": "Conformidade = itens conformes ÷ itens aplicáveis inspecionados × 100. Documente a amostra; se não houver denominador, registre “não aplicável”, nunca invente 100%.",
        "points": []
      },
      {
        "title": "3 · Equilibre prevenção e resultado",
        "text": "Medidas preventivas mostram se ações de controle estão acontecendo. Medidas de resultado mostram o que ocorreu. A OSHA destaca essa distinção no acompanhamento de segurança.",
        "example": "Avalie verificações realizadas e desvios corrigidos junto das ocorrências. “Zero ocorrências” isolado pode significar ausência de registro, não ausência de risco.",
        "points": []
      },
      {
        "title": "4 · Estabeleça metas com contexto",
        "text": "Levante uma linha de base, entenda o contrato e a criticidade e pactue melhoria viável. Considere volume, turno, área, clima e recursos antes de comparar equipes.",
        "example": "Exemplo fictício: 45 atendimentos corretos em 50 avaliados = 90%. Examine os cinco desvios; a média não torna aceitável uma falha crítica de segurança.",
        "points": []
      },
      {
        "title": "5 · Use o número para agir e ensinar",
        "text": "Comece com poucos indicadores úteis. Valide registros, procure causas e envolva a equipe na solução. Proteja dados pessoais e apresente resultados agregados sempre que possível.",
        "example": "Evite ranking público de pessoas e metas que incentivem esconder problemas, acelerar de forma insegura ou aumentar consumo só para demonstrar atividade.",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha",
      "issa"
    ],
    "prompt": "Escolha uma função e complete: “Sabemos que fizemos um bom trabalho quando…”.",
    "answer": "Transforme essa resposta em uma medida observável. Depois pergunte o que poderia ser sacrificado para melhorar artificialmente o número e acrescente um indicador de equilíbrio."
  },
  {
    "slug": "indicadores-portaria",
    "section": "05 · Indicadores por função",
    "title": "Portaria · o que significa fazer bem?",
    "intro": "Controlar acessos com confiabilidade, cordialidade e registros completos.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "Em 40 acessos auditados, 38 cumpriram os requisitos: 95%. Os dois desvios devem ser tratados conforme sua gravidade, não apenas como “5%”.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "A portaria informa uma fila crescente. O futuro líder deve analisar fluxo, autorizações e recursos antes de propor liberar a entrada sem conferência.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Conformidade dos acessos",
        "formula": "Acessos auditados que cumpriram todos os requisitos aplicáveis ÷ acessos auditados × 100.",
        "source": "Amostra de registros e verificações autorizadas; revisão semanal.",
        "care": "Quanto maior, melhor. Analise falhas críticas separadamente e nunca compense autorização incorreta com velocidade."
      },
      {
        "title": "Qualidade da passagem de turno",
        "formula": "Passagens com todos os campos obrigatórios preenchidos ÷ passagens verificadas × 100.",
        "source": "Livro ou sistema de passagem; conferência por turno e consolidação semanal.",
        "care": "Registre pendência, responsável e encaminhamento. Volume de texto não significa qualidade."
      },
      {
        "title": "Espera no atendimento",
        "formula": "Mediana e percentil 90 do tempo entre chegada registrada e início do atendimento.",
        "source": "Registro de horários em amostra representativa; análise semanal por faixa de movimento.",
        "care": "Investigue picos e disponibilidade de recursos. Reduzir espera não autoriza eliminar controles."
      }
    ]
  },
  {
    "slug": "indicadores-vigilante",
    "section": "05 · Indicadores por função",
    "title": "Vigilante · o que significa fazer bem?",
    "intro": "Cumprir procedimentos do posto e comunicar situações de risco com precisão.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "De 12 ocorrências elegíveis, 11 foram comunicadas no prazo: 91,7%. Avalie a causa do atraso e se o prazo era adequado à criticidade.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "O supervisor pede que a pessoa explique quando acionar apoio e confira a compreensão por simulação compatível com sua habilitação.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Conformidade dos procedimentos",
        "formula": "Itens conformes ÷ itens aplicáveis verificados × 100.",
        "source": "Checklist do posto e auditoria autorizada; registro por turno e revisão semanal.",
        "care": "Avalie prontidão e procedimentos, não quantidade de abordagens ou confrontos."
      },
      {
        "title": "Comunicação de ocorrências no prazo",
        "formula": "Ocorrências comunicadas dentro do prazo previsto para sua classe ÷ ocorrências elegíveis registradas × 100.",
        "source": "Horários de identificação e comunicação; avaliação por evento e consolidação mensal.",
        "care": "Separe criticidades. A comunicação deve respeitar o protocolo e a segurança do profissional."
      },
      {
        "title": "Completude dos relatos",
        "formula": "Relatos com informações obrigatórias suficientes ÷ relatos auditados × 100.",
        "source": "Amostra de registros; revisão semanal pelo supervisor.",
        "care": "Use fatos, horário, local e providência. Não premie redução de registros ou ocultação de incidentes."
      }
    ]
  },
  {
    "slug": "indicadores-limpeza",
    "section": "05 · Indicadores por função",
    "title": "Limpeza · o que significa fazer bem?",
    "intro": "Entregar áreas conforme o padrão pactuado, com uso adequado de materiais e sem retrabalho evitável.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "Em 60 serviços inspecionados, seis precisaram de correção por execução: 10% de retrabalho. Investigue método, treinamento, recursos e tempo disponível.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "Peça que a encarregada explique o motivo de uma não conformidade e ensine a correção. A ISSA recomenda critérios de avaliação e comparação com uma linha de base.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "issa",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Qualidade da limpeza",
        "formula": "Itens conformes ÷ itens aplicáveis inspecionados × 100.",
        "source": "Checklist por tipo de área e criticidade; inspeção diária e tendência semanal.",
        "care": "Use critérios claros e amostra consistente. Aparência sozinha não demonstra controle microbiológico."
      },
      {
        "title": "Retrabalho",
        "formula": "Serviços que exigiram correção por falha de execução ÷ serviços inspecionados × 100.",
        "source": "Inspeção e ordens de correção; consolidação semanal.",
        "care": "Quanto menor, melhor. Diferencie falha de execução de nova sujidade por uso do ambiente."
      },
      {
        "title": "Consumo de material por serviço comparável",
        "formula": "Quantidade consumida ÷ unidades comparáveis atendidas, conforme o plano local.",
        "source": "Estoque e execução do plano; análise mensal.",
        "care": "Compare áreas e condições semelhantes. Menor consumo não é automaticamente melhor; respeite as instruções do produto e o padrão de qualidade."
      }
    ]
  },
  {
    "slug": "indicadores-ronda",
    "section": "05 · Indicadores por função",
    "title": "Ronda · o que significa fazer bem?",
    "intro": "Verificar pontos previstos e transformar anomalias observadas em encaminhamentos úteis.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "Foram verificados 27 de 30 pontos previstos e aplicáveis: 90%. Identifique os três pontos não verificados e a contingência necessária.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "Aqui “ronda” significa a atividade de verificação definida no posto. Ela não amplia atribuições ou autoriza intervenções para as quais a pessoa não esteja preparada.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Cobertura válida do plano",
        "formula": "Pontos verificados com evidência válida ÷ pontos previstos e aplicáveis × 100.",
        "source": "Plano de ronda e registros autorizados; apuração por turno.",
        "care": "Justifique impedimentos e desvios do percurso. Um registro eletrônico sozinho não comprova inspeção de qualidade."
      },
      {
        "title": "Encaminhamento de anomalias",
        "formula": "Anomalias encaminhadas conforme protocolo e prazo ÷ anomalias registradas elegíveis × 100.",
        "source": "Registro de achados e acionamentos; revisão semanal.",
        "care": "Não use uma meta mínima de anomalias: isso incentiva registros artificiais. Nenhum achado pede verificação do contexto."
      },
      {
        "title": "Qualidade dos registros",
        "formula": "Registros com local, horário, descrição e encaminhamento completos ÷ registros auditados × 100.",
        "source": "Amostra de relatórios; revisão semanal.",
        "care": "Não transforme rapidez ou distância percorrida no objetivo principal da ronda."
      }
    ]
  },
  {
    "slug": "indicadores-zelador",
    "section": "05 · Indicadores por função",
    "title": "Zelador · o que significa fazer bem?",
    "intro": "Acompanhar as condições do local e coordenar encaminhamentos dentro de sua responsabilidade.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "Das 20 verificações devidas, 18 ocorreram no prazo: 90%. Identifique recursos, impedimentos e riscos das duas pendências.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "O zelador prepara uma lista priorizada de pendências com impacto, responsável e próxima ação. O supervisor discute os critérios utilizados.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Rotinas preventivas realizadas",
        "formula": "Rotinas previstas executadas no prazo ÷ rotinas devidas no período × 100.",
        "source": "Plano do local e evidências de verificação; revisão semanal.",
        "care": "Distingua verificar de executar manutenção especializada. Não atribua ao zelador atividades fora de sua competência."
      },
      {
        "title": "Chamados encaminhados no prazo",
        "formula": "Chamados com diagnóstico inicial e encaminhamento no prazo ÷ chamados elegíveis × 100.",
        "source": "Sistema ou livro de chamados; revisão semanal por criticidade.",
        "care": "Separar tempo sob controle do zelador de espera por fornecedor ou aprovação."
      },
      {
        "title": "Reincidência de problemas",
        "formula": "Chamados reabertos pelo mesmo problema na janela definida ÷ chamados encerrados elegíveis × 100.",
        "source": "Histórico de chamados; revisão mensal.",
        "care": "Defina antes a janela e o que constitui o mesmo problema. Investigue causa e qualidade do encerramento."
      }
    ]
  },
  {
    "slug": "indicadores-jardineiro",
    "section": "05 · Indicadores por função",
    "title": "Jardineiro · o que significa fazer bem?",
    "intro": "Manter áreas verdes nas condições pactuadas, respeitando necessidades das plantas e recursos disponíveis.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "Com medição dedicada de 6.000 litros para 1.000 m² no período, o indicador é 6 L/m². Esse valor não é uma meta universal de irrigação.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "Peça que o jardineiro identifique uma oportunidade de evitar desperdício e explique como preservará as condições das plantas ao testar o ajuste.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Conformidade das áreas verdes",
        "formula": "Itens conformes no checklist ÷ itens aplicáveis avaliados × 100.",
        "source": "Inspeção por área e estação; consolidação semanal ou quinzenal.",
        "care": "Considere espécie, clima e sazonalidade. Aparência não deve incentivar poda ou irrigação desnecessária."
      },
      {
        "title": "Cumprimento do plano de manejo",
        "formula": "Atividades realizadas na janela técnica prevista ÷ atividades devidas e aplicáveis × 100.",
        "source": "Plano de manejo e registros; revisão semanal.",
        "care": "Registre ajustes por chuva, restrições e orientação técnica. O cronograma não deve prevalecer sobre condições inadequadas."
      },
      {
        "title": "Eficiência do uso de água",
        "formula": "Volume medido de irrigação ÷ área efetivamente irrigada, em litros por m² no período.",
        "source": "Medidor dedicado e registro de áreas; avaliação mensal com dados de chuva.",
        "care": "Se não houver medição confiável, não apresente estimativa como dado medido. Compare estações semelhantes e saúde das plantas."
      }
    ]
  },
  {
    "slug": "indicadores-recepcao",
    "section": "05 · Indicadores por função",
    "title": "Recepcionista · o que significa fazer bem?",
    "intro": "Acolher, orientar e encaminhar com precisão, preservando informações e os procedimentos do local.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "De 25 respostas válidas, 22 foram favoráveis: 88%. Se foram convidados 100 visitantes, a taxa de resposta foi 25%; os dois números devem aparecer.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "O supervisor observa uma simulação e dá retorno sobre escuta, clareza e encaminhamento. Desenvolver não é pedir que a pessoa “seja mais simpática” sem explicar comportamentos.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Encaminhamento correto na primeira vez",
        "formula": "Atendimentos encaminhados corretamente sem retrabalho ÷ atendimentos avaliados × 100.",
        "source": "Amostra de atendimentos e correções; revisão semanal.",
        "care": "Defina o que é erro e exclua mudanças legítimas de solicitação. Não confunda rapidez com precisão."
      },
      {
        "title": "Tempo até o primeiro atendimento",
        "formula": "Mediana e percentil 90 da espera entre chegada e início de atendimento.",
        "source": "Registro por faixa de movimento; análise semanal.",
        "care": "Avalie junto da qualidade e do volume. Casos prioritários podem alterar a sequência conforme procedimento do local."
      },
      {
        "title": "Satisfação com o atendimento",
        "formula": "Respostas favoráveis ÷ respostas válidas × 100, acompanhadas da taxa de resposta.",
        "source": "Pesquisa breve e voluntária; análise mensal.",
        "care": "Use critério explícito de resposta favorável. Amostra pequena ou seletiva limita conclusões; não pressione o visitante a avaliar."
      }
    ]
  },
  {
    "slug": "indicadores-supervisor",
    "section": "05 · Indicadores por função",
    "title": "Supervisor · o que significa fazer bem?",
    "intro": "Garantir continuidade, qualidade e desenvolvimento, conectando os postos ao resultado do contrato.",
    "blocks": [
      {
        "title": "Exemplo de cálculo · dados fictícios",
        "text": "De oito pessoas com verificação prevista, seis demonstraram a competência: 75%. As duas restantes precisam de diagnóstico e apoio, não de exposição pública.",
        "example": "",
        "points": []
      },
      {
        "title": "Como desenvolver alguém usando estes dados",
        "text": "Complete o painel com qualidade do serviço, voz do cliente, faltas e rotatividade contextualizadas e custos sob sua influência. O supervisor deve explicar causas, decisões e resultados, não apenas apresentar números.",
        "example": "",
        "points": []
      }
    ],
    "refs": [
      "kaplan",
      "osha"
    ],
    "prompt": "Qual destes indicadores ajuda a tomar uma decisão no seu posto?",
    "answer": "Escolha dois ou três para começar. Registre linha de base e pactue meta, responsável e ação. Valide o dado com a equipe antes de usá-lo para avaliar desempenho.",
    "metrics": [
      {
        "title": "Cobertura planejada do serviço",
        "formula": "Horas de postos efetivamente cobertas conforme plano ÷ horas previstas aplicáveis × 100.",
        "source": "Escala e registros de cobertura; apuração diária e análise semanal.",
        "care": "Leia junto de jornada, qualificação e condições de trabalho. Cobrir a qualquer custo não é sucesso sustentável."
      },
      {
        "title": "Ações corretivas eficazes",
        "formula": "Ações devidas concluídas no prazo com eficácia verificada ÷ ações devidas no período × 100.",
        "source": "Plano de ação, prazo e verificação; revisão semanal.",
        "care": "Defina quando verificar eficácia. Fechar a tarefa no sistema sem resolver a causa não é conclusão eficaz."
      },
      {
        "title": "Desenvolvimento com competência demonstrada",
        "formula": "Pessoas que demonstraram a competência pactuada ÷ pessoas com essa verificação prevista no período × 100.",
        "source": "Plano de desenvolvimento e observação com critérios; revisão mensal.",
        "care": "Não substitua capacidade por presença no treinamento. Ajuste oportunidades, acessibilidade e condições antes de comparar."
      }
    ]
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
