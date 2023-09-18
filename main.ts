function handler(_req: Request): Response {
  return new Response("Hello, World! This is update 4");
}

Deno.serve(handler);
