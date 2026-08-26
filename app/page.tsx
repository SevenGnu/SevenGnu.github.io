import { SplineScene } from "./SplineScene";

export default function Home() {
  const experience = [
    {
      year: "2026",
      role: "AI Engineer Intern",
      company: "Pennsylvania Compensation Rating Bureau (PCRB)",
      summary:
        "Built private, production-minded AI systems for software-delivery governance, deployment intelligence, and document automation.",
      highlights: [
        "Created an Azure DevOps intelligence platform that turns engineering evidence into business summaries, workflow insights, and deployment-risk reports.",
        "Deployed local LLM inference across containerized replicas with Ollama, Docker, Kubernetes, and Redis—keeping company data off external AI services.",
        "Designed agentic document workflows with n8n, MCP, OCR, VLMs, PII controls, and human review.",
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
        "Queried, validated, and transformed large datasets with Snowflake, SQL Server, and SQL.",
      ],
    },
  ];

  const work = [
    {
      number: "01",
      eyebrow: "Enterprise AI",
      title: "Governance intelligence",
      copy: "A reporting layer over work items, releases, deployments, commits, and pull requests—designed to make engineering activity legible to both technical and business teams.",
      tags: ["Python", "Azure DevOps", "LLMs", "REST / WIQL"],
    },
    {
      number: "02",
      eyebrow: "Private infrastructure",
      title: "On-prem inference",
      copy: "Containerized, multi-replica model serving with request distribution and concurrency controls for enterprise AI that respects sensitive-data boundaries.",
      tags: ["Ollama", "Kubernetes", "Docker", "Redis"],
    },
    {
      number: "03",
      eyebrow: "Software delivery",
      title: "Compliance analytics",
      copy: "Evidence-linked detection for skipped states, reopened tickets, missing artifacts, approval gaps, rollback signals, and recurring failure patterns.",
      tags: ["CI/CD", ".NET", "Azure Key Vault", "Microsoft Graph"],
    },
    {
      number: "04",
      eyebrow: "Agentic automation",
      title: "Document audit workflows",
      copy: "A human-centered architecture for payroll audit and document processing with specialist local agents, PII redaction and restoration, and feedback routing.",
      tags: ["n8n", "MCP", "OCR", "VLMs"],
    },
  ];

  const skillGroups = [
    ["Languages & frameworks", "Python, C#, .NET Framework, SQL"],
    ["AI & automation", "LLMs, Ollama, n8n, MCP, OCR, VLMs"],
    ["Cloud & DevOps", "Azure, Azure DevOps, Kubernetes, Docker, CI/CD"],
    ["Data & integrations", "Snowflake, SQL Server, Redis, Microsoft Graph, REST APIs, Pandas, RapidFuzz"],
  ];

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
          <a href="#about">About</a>
        </nav>
        <a className="button button-small button-tonal" href="mailto:julianrgrossman@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Open to building what&apos;s next</p>
          <h1>I build AI systems that make complex work clear.</h1>
          <p className="hero-lede">
            I&apos;m Julian, a Computational Data Science student at Penn State and an AI engineer focused on private enterprise AI, automation, and trustworthy delivery intelligence.
          </p>
          <div className="hero-actions">
            <a className="button button-filled" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="button button-outlined" href="/Julian_Grossman_Resume_2026.pdf" download>Download résumé</a>
          </div>
          <div className="hero-proof" aria-label="Quick facts">
            <div><strong>2</strong><span>Summers at PCRB</span></div>
            <div><strong>4%</strong><span>Matching accuracy lift</span></div>
            <div><strong>2027</strong><span>Penn State graduation</span></div>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-surface">
            <img src="/julian-grossman.jpg" alt="Julian Grossman" />
          </div>
          <div className="floating-card floating-card-top">
            <span className="floating-icon" aria-hidden="true">✦</span>
            <div><strong>AI Engineer</strong><span>Enterprise automation</span></div>
          </div>
          <div className="floating-card floating-card-bottom">
            <span className="code-chip" aria-hidden="true">&lt;/&gt;</span>
            <div><strong>Data → decisions</strong><span>Built with evidence</span></div>
          </div>
        </div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Systems with a reason to exist.</h2></div>
          <p>High-level views of internship work, focused on the problem, architecture, and outcome.</p>
        </div>
        <div className="work-grid">
          {work.map((item) => (
            <article className="work-card" key={item.number}>
              <div className="work-card-top"><span>{item.number}</span><span>Internship work</span></div>
              <p className="card-eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="spline-section" aria-labelledby="spline-title">
        <div className="spline-copy">
          <p className="eyebrow">Think in systems</p>
          <h2 id="spline-title">Every signal is part of something bigger.</h2>
          <p>Data, infrastructure, policy, and people are connected. Move through the scene to explore the idea in three dimensions.</p>
          <span className="interaction-hint"><i aria-hidden="true" /> Drag to explore</span>
        </div>
        <SplineScene />
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Experience</p><h2>Learning by shipping.</h2></div>
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

      <section className="section-shell about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Curious about the whole system.</h2>
          <p>I care about the distance between a promising prototype and a system people can actually trust. That means thinking about the model, the data, the infrastructure, the workflow, and the person making the final call.</p>
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
