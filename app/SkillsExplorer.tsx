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
      ["Python", "The language I reach for first", "It is the glue behind my reporting, matching, validation, and model workflows."],
      ["SQL", "How I stay close to the data", "I use it when I want to trace an answer all the way back to the actual record."],
      ["C# / .NET", "Enterprise tools and integrations", "It helped me understand how secure internal software fits into a much larger environment."],
      ["Flask", "Small, useful web applications", "My favorite way to get an idea out of a notebook and into someone else’s hands."],
      ["Pandas", "Exploration, cleanup, and validation", "It is usually where a messy dataset starts becoming something I can reason about."],
      ["Git", "Keeping experiments understandable", "I like being able to retrace how an idea changed instead of wondering what I broke."],
    ],
  },
  {
    id: "ai",
    label: "AI & automation",
    eyebrow: "The current rabbit hole",
    title: "The model is only the beginning.",
    copy: "I enjoy the practical side of AI: giving a model the right context, connecting it to useful tools, checking its work, and making sure a person still has the final say.",
    skills: [
      ["Local LLMs", "Private inference close to the data", "Running models locally made privacy, latency, and infrastructure feel like part of the same problem."],
      ["Ollama", "Serving and testing models locally", "It gave me a quick way to compare models before worrying about the rest of the stack."],
      ["Prompt design", "Clear instructions and repeatable output", "I care most about constraints, useful context, and outputs that another step can actually trust."],
      ["n8n", "Visual, inspectable automation", "Seeing the workflow laid out makes handoffs and human checkpoints much easier to reason about."],
      ["MCP", "Connecting models with tools", "This is where models stop being isolated chat boxes and begin participating in a real workflow."],
      ["OCR + VLMs", "Making sense of messy documents", "I have been exploring where deterministic extraction ends and visual reasoning genuinely helps."],
    ],
  },
  {
    id: "systems",
    label: "Systems & delivery",
    eyebrow: "What happens after it works",
    title: "Then I got curious about keeping it running.",
    copy: "A good prototype is exciting. I have become just as interested in what comes next: deployment, permissions, observability, reliable APIs, and the path from a commit to something people can trust.",
    skills: [
      ["Azure DevOps", "Work items, pipelines, and traceability", "It showed me how much useful context lives between the ticket, commit, review, and release."],
      ["Docker", "Repeatable environments", "Containers made the jump from “works here” to “works the same way there” finally feel concrete."],
      ["Kubernetes", "Scaling and service discovery", "Learning it pulled me into replicas, permissions, networking, and everything around the container."],
      ["REST / WIQL", "Pulling evidence from real systems", "I use the APIs to follow the thread between work items and the engineering activity around them."],
      ["Microsoft Graph", "Useful enterprise delivery", "It is how the result reaches people in the tools they already use instead of another new dashboard."],
      ["Key Vault", "Keeping access out of the code", "It taught me to treat credentials and identity as design decisions, not cleanup for later."],
    ],
  },
  {
    id: "data",
    label: "Data & analysis",
    eyebrow: "The part I always come back to",
    title: "I still love getting close to the data.",
    copy: "Before any model or dashboard can help, the underlying data has to make sense. I like finding the odd cases, tracing where a number came from, and turning a messy dataset into something dependable.",
    skills: [
      ["Snowflake", "Working with large shared datasets", "It is where I learned to be deliberate about queries when the table is much bigger than the screen."],
      ["SQL Server", "Enterprise querying and validation", "I have used it to investigate odd cases and check whether incoming data is ready to trust."],
      ["Redis", "Fast shared state when it helps", "I reached for it when concurrent local model work needed a simple place to coordinate."],
      ["Data validation", "Catching problems before production", "I enjoy building the checks that turn a vague suspicion into a specific, reviewable problem."],
      ["Fuzzy matching", "Finding likely matches in imperfect data", "Address and branch data taught me that the hard part is choosing when a close match is close enough."],
      ["Evidence linking", "Keeping conclusions traceable", "If I cannot show why a result exists, I do not think the result is finished yet."],
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
            {active.skills.map(([name, note, detail]) => (
              <button
                type="button"
                className="skill-card"
                key={name}
                aria-label={`${name}. ${note}. Where it shows up: ${detail}`}
              >
                <div className="skill-card-inner">
                  <div className="skill-card-face skill-card-front">
                    <i aria-hidden="true" />
                    <strong>{name}</strong>
                    <span>{note}</span>
                    <small aria-hidden="true">Flip me ↻</small>
                  </div>
                  <div className="skill-card-face skill-card-back">
                    <span>Where it shows up</span>
                    <strong>{name}</strong>
                    <p>{detail}</p>
                    <small aria-hidden="true">Back to the front ↺</small>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <p className="skills-footnote">Still learning, still adding to the list.</p>
      </div>
    </section>
  );
}
