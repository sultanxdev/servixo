// Cloudflare Worker entry point
// Adapts the application for the Cloudflare Workers runtime with Node.js compatibility.

export default {
  async fetch(request: Request, _env: Record<string, unknown>): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/v1/health") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Server is healthy",
          data: {
            status: "ok",
            timestamp: new Date().toISOString(),
            version: "0.0.1",
            environment: "production",
            runtime: "cloudflare-workers",
          },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Servixo API Worker",
        data: { status: "ok", runtime: "cloudflare-workers" },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
