import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the personal portfolio content and contact paths intact", async () => {
  const [page, layout, skillsExplorer] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SkillsExplorer.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Julian Grossman \| Data, AI & Things I'm Learning/);
  assert.match(page, /I like figuring out how all the pieces fit together\./);
  assert.match(skillsExplorer, /A few tools I keep coming back to\./);
  assert.match(page, /One question kept leading to another\./);
  assert.match(page, /Everything around it is what hooked me\./);
  assert.match(page, /Julian_Grossman_Resume_2026\.pdf/);
  assert.match(page, /linkedin\.com\/in\/julian-grossman-1b24052b8/);
  assert.match(page, /What I&apos;ve been up to lately\./);
  assert.match(page, /3 days\. 57 members\. 1 robot\./);
  assert.match(page, /\/linkedin\/ri3d-build-01\.jpg/);
  assert.doesNotMatch(page, /github\.com/i);
});

test("keeps internship work informational and interactions accessible", async () => {
  const [page, spline, skillsExplorer, corridor, worldEffects, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SplineScene.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SkillsExplorer.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/CuriosityCorridor.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/WorldEffects.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Pennsylvania Compensation Rating Bureau/);
  assert.doesNotMatch(page, /project-card[^>]*href=/i);
  assert.match(spline, /HqdfCmOueigtautT/);
  assert.match(skillsExplorer, /Code & apps/);
  assert.match(skillsExplorer, /AI & automation/);
  assert.match(skillsExplorer, /aria-selected/);
  assert.match(skillsExplorer, /skill-card-inner/);
  assert.match(skillsExplorer, /Where it shows up:/);
  assert.match(page, /personal-card-inner/);
  assert.match(page, /What stuck with me/);
  assert.match(worldEffects, /prefers-reduced-motion: reduce/);
  assert.match(worldEffects, /pointermove/);
  assert.match(worldEffects, /world-cube/);
  assert.match(worldEffects, /Page chapters/);
  assert.match(corridor, /How a rabbit hole turns into a project/);
  assert.match(corridor, /Build the weird version/);
  assert.match(corridor, /requestAnimationFrame\(updateChapter\)/);
  assert.match(corridor, /progress \* chapters\.length/);
  assert.doesNotMatch(corridor, /IntersectionObserver/);
  assert.match(packageJson, /julian-grossman-portfolio/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare|drizzle/i);
});
