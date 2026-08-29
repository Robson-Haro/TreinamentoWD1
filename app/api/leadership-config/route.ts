export const dynamic = "force-dynamic";

export function GET() {
  const config = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  };

  const script = `
window.WD_LEADERSHIP_CONFIG = ${JSON.stringify(config)};

(function installParticipantIdentityBridge(){
  try {
    var params = new URLSearchParams(window.location.search);
    var queryName = (params.get('nome') || '').trim();
    var queryEmail = (params.get('email') || '').trim().toLowerCase();

    if (queryName) sessionStorage.setItem('wd_participant_name', queryName);
    if (queryEmail) sessionStorage.setItem('wd_participant_email', queryEmail);

    var participantName = queryName || (sessionStorage.getItem('wd_participant_name') || '').trim();
    var participantEmail = queryEmail || (sessionStorage.getItem('wd_participant_email') || '').trim().toLowerCase();

    window.WD_PARTICIPANT_IDENTITY = {
      nome: participantName,
      email: participantEmail
    };

    if (!window.supabase || typeof window.supabase.createClient !== 'function') return;
    if (window.supabase.createClient.__wdIdentityPatched) return;

    var originalCreateClient = window.supabase.createClient.bind(window.supabase);

    function patchedCreateClient(){
      var client = originalCreateClient.apply(null, arguments);
      var originalFrom = client.from.bind(client);

      client.from = function(table){
        var builder = originalFrom(table);
        if (table !== 'leadership_results' && table !== 'disc_results') return builder;
        if (!builder || typeof builder.insert !== 'function') return builder;

        var originalInsert = builder.insert.bind(builder);
        builder.insert = function(values, options){
          var identity = window.WD_PARTICIPANT_IDENTITY || {};
          var enrich = function(row){
            if (!row || typeof row !== 'object') return row;
            var next = Object.assign({}, row);
            if (identity.nome) next.nome = identity.nome;
            if (identity.email) next.email = identity.email;
            return next;
          };
          var enriched = Array.isArray(values) ? values.map(enrich) : enrich(values);
          var attempt = originalInsert(enriched, options);

          return Promise.resolve(attempt).then(function(response){
            var message = response && response.error ? String(response.error.message || '') : '';
            var missingIdentityColumns = /column.*(nome|email)|(nome|email).*column|schema cache/i.test(message);
            if (response && response.error && missingIdentityColumns) {
              console.warn('Colunas de identificação ainda não migradas; preservando o envio do teste sem bloquear o participante.');
              return originalFrom(table).insert(values, options);
            }
            return response;
          });
        };
        return builder;
      };

      return client;
    }

    patchedCreateClient.__wdIdentityPatched = true;
    window.supabase.createClient = patchedCreateClient;
  } catch (error) {
    console.warn('Não foi possível preparar a identificação do participante.', error);
  }
})();
`;

  return new Response(script, {
    headers: {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
