// Supabase Edge Function: customer-auth
// This function is intentionally a template until the Firebase Admin SDK
// credentials are configured server-side. Never put service credentials in the browser.
const cors = {
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods":"POST, OPTIONS"
};
Deno.serve(async req => {
  if(req.method==="OPTIONS") return new Response("ok",{headers:cors});
  return new Response(JSON.stringify({
    success:false,
    error:"Customer auth backend is not configured. Configure Firebase Admin credentials server-side."
  }),{status:501,headers:{...cors,"Content-Type":"application/json"}});
});
