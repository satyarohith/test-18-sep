function handler(_req: Request): Response {
  return new Response("Hello, World - this is just a small update!");
}

Deno.serve(handler);
