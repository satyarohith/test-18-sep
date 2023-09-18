function handler(_req: Request): Response {
  return new Response("Hello, World - this is a massive update!");
}

Deno.serve(handler);
