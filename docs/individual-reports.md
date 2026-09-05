# Relatórios individuais: manutenção

A rota /resgatar-relatorio abre um formulário de código. /relatorio-testes redireciona para a mesma experiência.

POST /api/reports/redeem recebe um código de 48 caracteres hexadecimais (192 bits de aleatoriedade) e consulta somente payload em public.wd_report_deliveries. A política RLS valida o hash SHA-256 do cabeçalho x-report-code. Não há service role no fluxo. O papel anon tem SELECT apenas na coluna payload e não tem permissões de escrita. Códigos, relatórios e dados pessoais não pertencem ao repositório.

Um código individual libera um relatório; o da coordenação libera o conjunto aprovado. São credenciais de posse: quem recebe um código pode usar aquele acesso. Não constituem login nem verificação de identidade. Os códigos são fornecidos separadamente à coordenação para distribuição privada. Não são persistidos em localStorage, URLs ou cookies pelo portal. Encerrar acesso remove os dados da memória da interface. Respostas da API usam private, no-store.

O banco guarda versões revisadas, não conclusões recalculadas automaticamente. Cada relatório inclui fonte, data, pontuações, limites de identificação e status. Atualizações devem modificar na mesma transação a cópia individual e a cópia da coordenação. Revogar um acesso exige apagar a entrega ou substituir seu hash; não publicar os códigos no GitHub.

Na revisão inicial, todos os resultados de liderança da turma estavam sem identificação. Nenhum vínculo foi inferido pela ordem ou semelhança de perfis. Para complementar, obter uma evidência que ligue o resultado ao participante (por exemplo, comprovante do resultado ou nova aplicação identificada). A confirmação precisa incluir o registro exato; não confiar nos antigos vínculos locais do navegador.

A pontuação DISC desta aplicação é a transformação da diferença entre escolhas “mais” e “menos” para escala 0–100. Não é percentil, medida de competência nem percentual de personalidade. Empates e fatores próximos são preservados na análise. A redação fornece conteúdo explícito, não inferências psicológicas a partir do desenho das letras.

O PDF e a tela usam a mesma função sections() e o mesmo registro. O PDF incorpora subconjuntos licenciados DejaVu Sans para manter os acentos e a legibilidade. Fontes carregadas somente no download. Verificar acesso sem código, código incorreto, isolamento individual, seleção da coordenação, geração de PDF e implantação antes de entregar.

As tabelas antigas de resultados não foram alteradas. O controle de acesso descrito protege as novas entregas; não constitui auditoria ou correção de todo o sistema legado.
