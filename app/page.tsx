import Image from "next/image";
import { SplineScene } from "./SplineScene";
import { SystemLab } from "./SystemLab";

const experience = [
  {
    year: "2026",
    role: "AI Engineer Intern",
    company: "Pennsylvania Compensation Rating Bureau (PCRB)",
    summary:
      "Built secure, locally hosted AI systems across three distinct workstreams: weekly release communication, software-delivery governance, and payroll audit automation.",
    highlights: [
      "Built AI Gov Weekly Release, a Python workflow that queries on-premises Azure DevOps data, uses local Llama 3.2 models for concise business summaries, and delivers scheduled HTML reports through Microsoft Graph—then extended the framework to monthly, quarterly, and yearly reporting.",
      "Developed DevOps-AI-Insights as a separate evidence-linked analytics system for deployment behavior, pipeline failures, ticket lifecycle compliance, review controls, and business sign-off.",
      "Designed an in-development payroll audit architecture using n8n, MCP-enabled tools, OCR, vision-language models, PII controls, deterministic validation, and human approval.",
    ],
  },
  {
    year: "2025",
    role: "Data Science / Actuarial Research Intern",
    company: "Pennsylvania Compensation Rating Bureau (PCRB)",
    summary:
      "Improved high-volume data quality and built traceable validation workflows for actuarial research.",
    highlights: [
      "Improved address and branch matching accuracy by 4% with Python, Pandas, RapidFuzz, and regex across millions of records.",
      "Built validation and anomaly-detection checks for third-party data before production use, working across Snowflake, SQL Server, and SSMS.",
    ],
  },
];

const personalProjects = [
  {
    type: "Independent project · In progress since Sep 2025",
    title: "Restaurant Safety Analysis",
    copy: "Combining inspection records, reviews, and local news with NLP to surface interpretable restaurant risk signals.",
    tags: ["Python", "NLP", "Streamlit", "Flask"],
  },
  {
    type: "Group project · Co-lead · Dec 2024",
    title: "Stock Analysis App",
    copy: "Built a responsive market dashboard with authentication, live stock retrieval, and a PostgreSQL-backed Flask API.",
    tags: ["Python", "Flask", "PostgreSQL", "Yahoo Finance"],
  },
  {
    type: "Academic project · Feb 2024",
    title: "MNIST Digit Recognition",
    copy: "Implemented and trained a neural network with ReLU, softmax, and Adam, then added interactive digit classification.",
    tags: ["Neural networks", "Python", "Adam", "Classification"],
  },
];

const skillGroups = [
  ["Languages & frameworks", "Python, C#, .NET Framework, SQL, Flask"],
  ["AI & automation", "Prompt engineering, LLMs, Ollama, n8n, MCP, OCR, VLMs"],
  ["Infrastructure & DevOps", "Azure DevOps, Docker, Kubernetes, EndpointSlice, RBAC, CI/CD, Git"],
  ["Data & enterprise", "Azure SDK, Key Vault, Microsoft Graph, REST / WIQL, Snowflake, SQL Server, Redis, Pandas"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Julian Grossman, home">
          <span className="brand-mark">JG</span>
          <span>Julian Grossman</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-small button-tonal" href="mailto:julianrgrossman@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AI engineering · Data systems</p>
          <h1>I build secure AI systems around the model.</h1>
          <p className="hero-lede">
            I&apos;m Julian, a senior studying Computational Data Science at Penn State. I connect local LLMs with enterprise APIs, infrastructure, evidence, and human workflows so the result is useful—not just impressive in a demo.
          </p>
          <div className="hero-actions">
            <a className="button button-filled" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-outlined" href="/Julian_Grossman_Resume_2026.pdf" download>Download résumé</a>
          </div>
          <div className="hero-proof" aria-label="Quick facts">
            <div><strong>3</strong><span>2026 workstreams</span></div>
            <div><strong>4%</strong><span>Matching accuracy lift</span></div>
            <div><strong>2027</strong><span>Penn State graduation</span></div>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="expressive-shape shape-burst" aria-hidden="true" />
          <div className="expressive-shape shape-pill" aria-hidden="true" />
          <div className="expressive-shape shape-diamond" aria-hidden="true" />
          <div className="portrait-surface">
            <Image
              src="/julian-grossman-enhanced.png"
              alt="Julian Grossman"
              width={1254}
              height={1254}
              priority
            />
          </div>
          <div className="floating-card floating-card-top">
            <span className="floating-icon" aria-hidden="true">✦</span>
            <div><strong>AI Engineer</strong><span>Secure enterprise systems</span></div>
          </div>
          <div className="floating-card floating-card-bottom">
            <span className="code-chip" aria-hidden="true">&lt;/&gt;</span>
            <div><strong>Model + system</strong><span>Evidence stays attached</span></div>
          </div>
        </div>
      </section>

      <div className="signal-marquee" aria-label="Design principles">
        <span className="sr-only">Local models, evidence linked, human in the loop, secure by design.</span>
        <div aria-hidden="true">
          <span>Local models</span><i>✦</i><span>Evidence linked</span><i>✦</i><span>Human in the loop</span><i>✦</i><span>Secure by design</span><i>✦</i>
          <span>Local models</span><i>✦</i><span>Evidence linked</span><i>✦</i><span>Human in the loop</span><i>✦</i><span>Secure by design</span><i>✦</i>
        </div>
      </div>

      <SystemLab />

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">PCRB · Summer 2026</p><h2>Three projects. Clear boundaries.</h2></div>
          <p>Each workstream solved a different problem. Infrastructure and security supported the applications; they were not separate internships or standalone products.</p>
        </div>

        <div className="project-stack">
          <article className="project-card project-card-featured">
            <div className="project-index"><span>01</span><span className="status-badge status-built">Built &amp; automated</span></div>
            <div className="project-intro">
              <p className="card-eyebrow">AI Gov · Main application</p>
              <h3>Weekly Release</h3>
              <p>A scheduled reporting workflow that turns Azure DevOps work-item evidence into readable, business-facing release communication.</p>
            </div>
            <div className="project-modules project-modules-three">
              <div>
                <span>01A · Workflow</span>
                <h4>Retrieve, summarize, deliver</h4>
                <p>Python queries on-premises Azure DevOps through REST APIs and WIQL, constructs constrained prompts, and delivers HTML reports through Microsoft Graph.</p>
              </div>
              <div>
                <span>01B · Supporting infrastructure</span>
                <h4>Local LLM serving</h4>
                <p>Llama 3.2 runs through Ollama across Docker and Kubernetes replicas, with EndpointSlice discovery, RBAC, request distribution, Redis, and concurrency controls.</p>
              </div>
              <div>
                <span>01C · Supporting security</span>
                <h4>Enterprise integration</h4>
                <p>C# and .NET components use Azure SDK, Key Vault, certificate authentication, and configuration-driven secret retrieval to keep access controlled.</p>
              </div>
            </div>
            <div className="tag-row"><span>Python</span><span>Prompt engineering</span><span>Azure DevOps</span><span>Ollama</span><span>Kubernetes</span><span>Microsoft Graph</span></div>
          </article>

          <article className="project-card">
            <div className="project-index"><span>02</span><span className="status-badge status-built">Developed</span></div>
            <div className="project-intro">
              <p className="card-eyebrow">Separate engineering system</p>
              <h3>DevOps-AI-Insights</h3>
              <p>An evidence-linked governance and analytics system for understanding how software moves from ticket to production.</p>
            </div>
            <div className="project-modules">
              <div>
                <span>Part 1</span>
                <h4>Pipeline &amp; deployment analytics</h4>
                <p>Tracks production and nonproduction executions, frequency, timing, success, rollback signals, changed-file volume, agent-pool issues, and recurring failure classes.</p>
              </div>
              <div>
                <span>Part 2</span>
                <h4>Ticket lifecycle &amp; governance</h4>
                <p>Detects skipped states, reopened work, missing commits or pull requests, approval gaps, unresolved feedback, and absent business sign-off.</p>
              </div>
            </div>
            <div className="tag-row"><span>CI/CD</span><span>Azure DevOps</span><span>Governance</span><span>Failure diagnostics</span><span>Evidence linking</span></div>
          </article>

          <article className="project-card project-card-progress">
            <div className="project-index"><span>03</span><span className="status-badge status-progress">In development</span></div>
            <div className="project-intro">
              <p className="card-eyebrow">Architecture &amp; prototype</p>
              <h3>Co-op Payroll Audit Automation</h3>
              <p>A security-first design for extracting, validating, reconciling, and reviewing payroll documents without presenting an unfinished system as deployed.</p>
            </div>
            <div className="project-modules">
              <div>
                <span>Document path</span>
                <h4>Bounded processing</h4>
                <p>Uses deterministic extraction for machine-readable files and evaluates OCR or vision models only where scans require them.</p>
              </div>
              <div>
                <span>Control path</span>
                <h4>Privacy and review</h4>
                <p>Coordinates n8n, MCP-enabled tools, PII redaction and restoration, arithmetic checks, authenticated stages, human approval, and correction feedback.</p>
              </div>
            </div>
            <div className="tag-row"><span>n8n</span><span>MCP</span><span>OCR</span><span>VLM evaluation</span><span>PII controls</span><span>Human review</span></div>
          </article>
        </div>

        <aside className="supporting-work">
          <span>Supporting utility</span>
          <div><h3>Azure DevOps traceability utility</h3><p>Filters commits and pull requests, then links engineering artifacts back to work items for clearer audit trails.</p></div>
          <div className="tag-row"><span>REST APIs</span><span>WIQL</span><span>Traceability</span></div>
        </aside>
      </section>

      <section className="spline-section" aria-labelledby="spline-title">
        <div className="spline-hud" aria-hidden="true">
          <span><i /> Scene online</span>
          <b>03D / LIVE</b>
        </div>
        <div className="spline-ring spline-ring-one" aria-hidden="true" />
        <div className="spline-ring spline-ring-two" aria-hidden="true" />
        <div className="spline-console" aria-hidden="true">
          <span>Context</span><i />
          <span>Reasoning</span><i />
          <span>Control</span>
        </div>
        <div className="spline-copy">
          <p className="eyebrow">The full system matters</p>
          <h2 id="spline-title">The model is only one component.</h2>
          <p>Useful AI connects data retrieval, deterministic logic, infrastructure, security, delivery, and human judgment.</p>
          <span className="interaction-hint"><i aria-hidden="true" /> Drag to explore</span>
        </div>
        <SplineScene />
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Experience</p><h2>Two summers, two disciplines.</h2></div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-marker" aria-hidden="true"><span /></div>
              <div className="timeline-content">
                <p className="timeline-company">{item.company}</p>
                <h3>{item.role}</h3>
                <p className="timeline-summary">{item.summary}</p>
                <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell projects-section" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow">Beyond the internship</p><h2>Independent and academic projects.</h2></div>
          <p>Smaller builds where I&apos;ve explored product thinking, applied NLP, backend systems, and machine learning fundamentals.</p>
        </div>
        <div className="personal-grid">
          {personalProjects.map((project) => (
            <article className="personal-card" key={project.title}>
              <p className="personal-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Curious about the whole system.</h2>
          <p>I care about the distance between a promising prototype and a system people can actually trust. That means treating the model, data, infrastructure, workflow, security, and final reviewer as parts of the same design.</p>
          <p>At Penn State, I&apos;m pursuing a B.S. in Computational Data Science and staying hands-on through the Nittany AI Society, Nittany Cloud Association, and Ri3D—where our team built a working FIRST Robotics robot in 72 hours.</p>
          <div className="school-card"><span className="school-monogram">PSU</span><div><strong>Pennsylvania State University</strong><span>B.S. Computational Data Science · Expected May 2027</span></div></div>
        </div>
        <div className="skills-panel">
          <p className="skills-title">Technical toolkit</p>
          {skillGroups.map(([title, skills]) => (
            <div className="skill-row" key={title}><span>{title}</span><p>{skills}</p></div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-orb" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Have a hard problem and a lot of data?</h2>
          <p>I&apos;m always interested in thoughtful AI, data, and automation work.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:julianrgrossman@gmail.com">Send me an email <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/julian-grossman-1b24052b8" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="section-shell">
        <span>© 2026 Julian Grossman</span>
        <span>Havertown, Pennsylvania</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
