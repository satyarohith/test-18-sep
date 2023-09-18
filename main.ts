function handler(_req: Request): Response {
  return new Response("Hello, PR!");
}

Deno.serve(handler);
