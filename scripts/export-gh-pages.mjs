import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const customDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN ?? "www.anthoniesdeli.com";
const siteBase = process.env.GITHUB_PAGES_BASE ?? "/";
const normalizedBase = siteBase.startsWith("/") ? siteBase : `/${siteBase}`;
const baseWithTrailingSlash = normalizedBase.endsWith("/") ? normalizedBase : `${normalizedBase}/`;
const siteUrl = process.env.GITHUB_PAGES_URL ?? `https://${customDomain}${baseWithTrailingSlash}`;
const outDir = resolve("dist/client");

async function renderStaticPage() {
  const serverModule = await import("../dist/server/server.js");
  const server = serverModule.default ?? serverModule;

  if (typeof server.fetch !== "function") {
    throw new Error("Built server does not export a fetch handler.");
  }

  const response = await server.fetch(new Request(siteUrl), {}, {});

  if (!response.ok) {
    throw new Error(`Static render failed: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) {
    throw new Error(
      `Static render returned ${contentType || "an unknown content type"}, not HTML.`,
    );
  }

  return await response.text();
}

const html = await renderStaticPage();

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, "index.html"), html);
await writeFile(resolve(outDir, "404.html"), html);
await writeFile(resolve(outDir, ".nojekyll"), "");
await writeFile(resolve(outDir, "CNAME"), `${customDomain}\n`);

console.log(`Exported GitHub Pages static files to ${outDir}`);
console.log(`Site base: ${baseWithTrailingSlash}`);
console.log(`Custom domain: ${customDomain}`);
