import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders Julian's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Julian Grossman \| AI Engineer &amp; Data Scientist/);
  assert.match(html, /I build secure AI systems around the model\./);
  assert.match(html, /The model is only one component\./);
  assert.match(html, /Weekly Release/);
  assert.match(html, /DevOps-AI-Insights/);
  assert.match(html, /Co-op Payroll Audit Automation/);
  assert.match(html, /In development/);
  assert.match(html, /Julian_Grossman_Resume_2026\.pdf/);
  assert.match(html, /linkedin\.com\/in\/julian-grossman-1b24052b8/);
  assert.doesNotMatch(html, /github\.com/i);
});

test("keeps internship work informational", async () => {
  const [page, spline, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SplineScene.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Three projects\. Clear boundaries\./);
  assert.match(page, /Pennsylvania Compensation Rating Bureau/);
  assert.match(page, /Supporting infrastructure/);
  assert.match(page, /Separate engineering system/);
  assert.doesNotMatch(page, /github\.com/i);
  assert.doesNotMatch(page, /project-card[^>]*href=/i);
  assert.match(spline, /HqdfCmOueigtautT/);
  assert.match(packageJson, /julian-grossman-portfolio/);
  assert.doesNotMatch(packageJson, /loading-skeleton|starter/);
});
