# Relatórios individuais

Por solicitação expressa do proprietário, em 05/09/2026 o portal passou a abrir a lista de participantes sem código. Os relatórios publicados podem ser lidos por quem acessar a página.

GET /api/reports/redeem busca somente payload das entregas individuais. A política RLS public_individual_reports concede leitura anônima exclusivamente às linhas cujo payload.role é participant. O papel anon continua sem permissão de escrita e sem acesso à coluna access_hash. O registro agregado antigo da coordenação não é utilizado pelo portal. Códigos anteriores não são necessários.

Os relatórios são versões revisadas salvas no banco. Atualizações devem preservar fontes, data, pontuações e limites de identificação. Não atribuir resultados anônimos de liderança pela ordem ou semelhança de perfil. A redação fornece conteúdo explícito, não inferências psicológicas pelo desenho das letras.

Tela e PDF compartilham o mesmo registro e a função sections(). O PDF usa fontes DejaVu Sans incorporadas para manter acentos e legibilidade. Dados pessoais e credenciais não devem ser incluídos no repositório.
