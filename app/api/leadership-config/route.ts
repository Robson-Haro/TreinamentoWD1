export const dynamic = "force-dynamic";

export function GET() {
  const config = {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  };

  return new Response(
    `window.WD_LEADERSHIP_CONFIG = ${JSON.stringify(config)};`,
    {
      headers: {
        "content-type": "application/javascript; charset=utf-8",
        "cache-control": "no-store",
      },
    },
  );
}
