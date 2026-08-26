"use client";

import { useState } from "react";

const categories = [
  {
    id: "code",
    label: "Code & apps",
    eyebrow: "Where I started",
    title: "I like making the idea real.",
    copy: "Python pulled me into data work, and from there I wanted to understand the rest: the API, the interface, the database, and the little decisions that make a tool pleasant to use.",
    skills: [
      ["Python", "The language I reach for first"],
      ["SQL", "How I stay close to the data"],
      ["C# / .NET", "Enterprise tools and integrations"],
      ["Flask", "Small, useful web applications"],
      ["Pandas", "Exploration, cleanup, and validation"],
      ["Git", "Keeping experiments understandable"],
    ],
  },
  {
    id: "ai",
    label: "AI & automation",
    eyebrow: "The current rabbit hole",
    title: "The model is only the beginning.",
    copy: "I enjoy the practical side of AI: giving a model the right context, connecting it to useful tools, checking its work, and making sure a person still has the final say.",
    skills: [
      ["Local LLMs", "Private inference close to the data"],
      ["Ollama", "Serving and testing models locally"],
      ["Prompt design", "Clear instructions and repeatable output"],
      ["n8n", "Visual, inspectable automation"],
      ["MCP", "Connecting models with tools"],
      ["OCR + VLMs", "Making sense of messy documents"],
    ],
  },
  {
    id: "systems",
    label: "Systems & delivery",
    eyebrow: "What happens after it works",
    title: "Then I got curious about keeping it running.",
    copy: "A good prototype is exciting. I have become just as interested in what comes next: deployment, permissions, observability, reliable APIs, and the path from a commit to something people can trust.",
    skills: [
      ["Azure DevOps", "Work items, pipelines, and traceability"],
      ["Docker", "Repeatable environments"],
      ["Kubernetes", "Scaling and service discovery"],
      ["REST / WIQL", "Pulling evidence from real systems"],
      ["Microsoft Graph", "Useful enterprise delivery"],
      ["Key Vault", "Keeping access out of the code"],
    ],
  },
  {
    id: "data",
    label: "Data & analysis",
    eyebrow: "The part I always come back to",
    title: "I still love getting close to the data.",
    copy: "Before any model or dashboard can help, the underlying data has to make sense. I like finding the odd cases, tracing where a number came from, and turning a messy dataset into something dependable.",
    skills: [
      ["Snowflake", "Working with large shared datasets"],
      ["SQL Server", "Enterprise querying and validation"],
      ["Redis", "Fast shared state when it helps"],
      ["Data validation", "Catching problems before production"],
      ["Fuzzy matching", "Finding likely matches in imperfect data"],
      ["Evidence linking", "Keeping conclusions traceable"],
    ],
  },
];

export function SkillsExplorer() {
  const [activeId, setActiveId] = useState("code");
  const active = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section className="skills-shell section-shell" id="skills" aria-labelledby="skills-title">
      <div className="skills-heading">
        <div>
          <p className="eyebrow">Things I&apos;ve picked up</p>
          <h2 id="skills-title">A few tools I keep coming back to.</h2>
        </div>
        <p>I started in data, got curious about the systems around it, and kept following the rabbit holes. Pick a category to see what I use and why it stuck.</p>
      </div>

      <div className="skills-explorer" data-category={activeId}>
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {categories.map((category) => (
            <button
              type="button"
              role="tab"
              id={`skills-tab-${category.id}`}
              aria-controls="skills-panel"
              aria-selected={activeId === category.id}
              className={activeId === category.id ? "is-active" : undefined}
              key={category.id}
              onClick={() => setActiveId(category.id)}
            >
              <span aria-hidden="true" />
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-board">
          <article className="skills-story">
            <span>{active.eyebrow}</span>
            <h3>{active.title}</h3>
            <p>{active.copy}</p>
            <small>{active.skills.length} things in this corner of my toolkit</small>
          </article>

          <div className="skills-grid" id="skills-panel" role="tabpanel" aria-labelledby={`skills-tab-${active.id}`}>
            {active.skills.map(([name, note]) => (
              <article className="skill-card" key={name}>
                <i aria-hidden="true" />
                <strong>{name}</strong>
                <span>{note}</span>
              </article>
            ))}
          </div>
        </div>

        <p className="skills-footnote">Still learning, still adding to the list.</p>
      </div>
    </section>
  );
}
