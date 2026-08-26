import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the portfolio content and contact paths intact", async () => {
  const [page, layout, systemLab] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SystemLab.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Julian Grossman \| AI Engineer & Data Scientist/);
  assert.match(page, /I build secure AI systems around the model\./);
  assert.match(systemLab, /Pull the architecture apart\./);
  assert.match(page, /Three projects\. Clear boundaries\./);
  assert.match(page, /The model is only one component\./);
  assert.match(page, /Julian_Grossman_Resume_2026\.pdf/);
  assert.match(page, /linkedin\.com\/in\/julian-grossman-1b24052b8/);
  assert.match(page, /Notes from the work\./);
  assert.match(page, /3 days\. 57 members\. 1 robot\./);
  assert.match(page, /\/linkedin\/ri3d-build-01\.jpg/);
  assert.doesNotMatch(page, /github\.com/i);
});

test("keeps internship work informational and interactions accessible", async () => {
  const [page, spline, systemLab, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SplineScene.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SystemLab.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Pennsylvania Compensation Rating Bureau/);
  assert.doesNotMatch(page, /project-card[^>]*href=/i);
  assert.match(spline, /HqdfCmOueigtautT/);
  assert.match(systemLab, /Bend the system/);
  assert.match(systemLab, /aria-pressed/);
  assert.match(packageJson, /julian-grossman-portfolio/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare|drizzle/i);
});
