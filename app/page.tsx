import Image from "next/image";
import { CuriosityCorridor } from "./CuriosityCorridor";
import { SkillsExplorer } from "./SkillsExplorer";
import { SplineScene } from "./SplineScene";
import { WorldEffects } from "./WorldEffects";

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
    lesson: "The interesting part is not just spotting a risk signal. It is making sure I can explain where it came from and why it matters.",
    tags: ["Python", "NLP", "Streamlit", "Flask"],
  },
  {
    type: "Group project · Co-lead · Dec 2024",
    title: "Stock Analysis App",
    copy: "Built a responsive market dashboard with authentication, live stock retrieval, and a PostgreSQL-backed Flask API.",
    lesson: "This was where the front end, API, authentication, live data, and a shared database finally clicked as one connected system.",
    tags: ["Python", "Flask", "PostgreSQL", "Yahoo Finance"],
  },
  {
    type: "Academic project · Feb 2024",
    title: "MNIST Digit Recognition",
    copy: "Implemented and trained a neural network with ReLU, softmax, and Adam, then added interactive digit classification.",
    lesson: "Writing the training pieces myself made neural networks feel much less mysterious than they did on the whiteboard.",
    tags: ["Neural networks", "Python", "Adam", "Classification"],
  },
];

const personalNotes = [
  ["At Penn State", "Computational Data Science, Nittany AI Society, Nittany Cloud Association, and Ri3D"],
  ["The rabbit holes", "Local AI, automation, developer tools, robotics, and the systems that connect them"],
  ["How I learn", "I understand something best when I can build it, take it apart, and explain it clearly"],
  ["What matters to me", "Useful work, honest reasoning, thoughtful teams, and leaving things easier to understand"],
];

const linkedinPosts = [
  {
    source: "Reposted · Ri3D at Penn State",
    date: "January 18, 2026",
    dateTime: "2026-01-18",
    title: "3 days. 57 members. 1 robot.",
    copy:
      "Ri3D at Penn State’s 2026 Robot in 3 Days Build Event brought 57 members together to design, build, document, and reveal a working robot—then shared the process through 26 YouTube publications.",
    support:
      "Supported by Shaw Industries, Leonardo DRS, Dyco Inc., OriginLabs, Lezzer Lumber, OSH Cut, and Penn State’s Engineering Undergraduate Student Council.",
    video: "https://lnkd.in/efFyyHS7",
    metrics: ["104 reactions", "8 comments", "15 reposts"],
    images: [
      { src: "/linkedin/ri3d-build-01.jpg", width: 800, height: 533, alt: "The Ri3D at Penn State 2026 team" },
      { src: "/linkedin/ri3d-build-02.jpg", width: 800, height: 599, alt: "Ri3D members wiring the robot" },
      { src: "/linkedin/ri3d-build-03.jpg", width: 800, height: 533, alt: "Ri3D members assembling the robot frame" },
      { src: "/linkedin/ri3d-build-04.jpg", width: 800, height: 533, alt: "A Ri3D member presenting a robot design" },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <WorldEffects />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Julian Grossman, home">
          <span className="brand-mark">JG</span>
          <span>Julian Grossman</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#skills">Skills</a>
          <a href="#process">How I think</a>
          <a href="#work">Summer</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-small button-tonal" href="mailto:julianrgrossman@gmail.com">
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Hi, I&apos;m Julian</p>
          <h1>I like figuring out how all the pieces fit together.</h1>
          <p className="hero-lede">
            I&apos;m a Computational Data Science senior at Penn State. I started with data, got curious about AI, and kept following the questions into software, infrastructure, and automation. This is where I keep the things I&apos;ve built and what I&apos;ve learned along the way.
          </p>
          <div className="hero-actions">
            <a className="button button-filled" href="#skills">See what I&apos;ve been learning <span aria-hidden="true">↓</span></a>
            <a className="button button-outlined" href="/Julian_Grossman_Resume_2026.pdf" download>Grab my résumé</a>
          </div>
          <div className="hero-proof" aria-label="Quick facts">
            <div><strong>3</strong><span>big summer projects</span></div>
            <div><strong>4%</strong><span>a result I&apos;m proud of</span></div>
            <div><strong>2027</strong><span>graduating from Penn State</span></div>
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
            <div><strong>Right now</strong><span>AI Engineer Intern</span></div>
          </div>
          <div className="floating-card floating-card-bottom">
            <span className="code-chip" aria-hidden="true">&lt;/&gt;</span>
            <div><strong>Always asking</strong><span>How do the pieces connect?</span></div>
          </div>
        </div>
      </section>

      <div className="signal-marquee" aria-label="Design principles">
        <span className="sr-only">Local AI, robotics, data stories, and learning by building.</span>
        <div aria-hidden="true">
          <span>Local AI</span><i>✦</i><span>Robotics</span><i>✦</i><span>Data that tells a story</span><i>✦</i><span>Learning by building</span><i>✦</i>
          <span>Local AI</span><i>✦</i><span>Robotics</span><i>✦</i><span>Data that tells a story</span><i>✦</i><span>Learning by building</span><i>✦</i>
        </div>
      </div>

      <SkillsExplorer />

      <CuriosityCorridor />

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">What I did this summer</p><h2>One question kept leading to another.</h2></div>
          <p>At PCRB, I worked on three separate ideas: making release updates easier to understand, learning from the way software gets delivered, and exploring how payroll audits could be automated responsibly.</p>
        </div>

        <div className="project-stack">
          <article className="project-card project-card-featured">
            <div className="project-index"><span>01</span><span className="status-badge status-built">Up and running</span></div>
            <div className="project-intro">
              <p className="card-eyebrow">The project I spent the most time with</p>
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
            <div className="project-index"><span>02</span><span className="status-badge status-built">Built out</span></div>
            <div className="project-intro">
              <p className="card-eyebrow">A separate rabbit hole</p>
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
            <div className="project-index"><span>03</span><span className="status-badge status-progress">Still in progress</span></div>
            <div className="project-intro">
              <p className="card-eyebrow">What I&apos;m still figuring out</p>
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
          <span>A useful side quest</span>
          <div><h3>Azure DevOps traceability utility</h3><p>Filters commits and pull requests, then links engineering artifacts back to work items for clearer audit trails.</p></div>
          <div className="tag-row"><span>REST APIs</span><span>WIQL</span><span>Traceability</span></div>
        </aside>
      </section>

      <section className="spline-section" aria-labelledby="spline-title">
        <div className="spline-light" aria-hidden="true" />
        <div className="spline-geometry" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="spline-hud" aria-hidden="true">
          <span><i /> Curiosity online</span>
          <b>CLICK / DRAG</b>
        </div>
        <div className="spline-ring spline-ring-one" aria-hidden="true" />
        <div className="spline-ring spline-ring-two" aria-hidden="true" />
        <div className="spline-console" aria-hidden="true">
          <span>Data</span><i />
          <span>Model</span><i />
          <span>People</span>
        </div>
        <div className="spline-copy">
          <p className="eyebrow">One thing I keep coming back to</p>
          <h2 id="spline-title">The model is cool. Everything around it is what hooked me.</h2>
          <p>I like connecting the data, software, infrastructure, safeguards, and people that turn a promising idea into something genuinely useful.</p>
          <span className="interaction-hint"><i aria-hidden="true" /> Move it around</span>
        </div>
        <SplineScene />
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Where I&apos;ve learned</p><h2>Two summers, and a lot I didn&apos;t know before.</h2></div>
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
          <div><p className="eyebrow">Things I&apos;ve made</p><h2>Projects that started with “what if?”</h2></div>
          <p>Some began in class, some with friends, and some because an idea would not leave me alone. Each one taught me something different.</p>
        </div>
        <div className="personal-grid">
          {personalProjects.map((project) => (
            <button
              type="button"
              className="personal-card"
              key={project.title}
              aria-label={`${project.title}. ${project.copy} What stuck with me: ${project.lesson}`}
            >
              <div className="personal-card-inner">
                <div className="personal-card-face personal-card-front">
                  <p className="personal-type">{project.type}</p>
                  <span className="flip-hint" aria-hidden="true">Hover to turn it over ↻</span>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="personal-card-face personal-card-back">
                  <p className="personal-type">What stuck with me</p>
                  <h3>{project.title}</h3>
                  <p>{project.lesson}</p>
                  <span className="flip-return" aria-hidden="true">Move away to flip back ↺</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">A little more about me</p>
          <h2>I&apos;m usually the person asking how the whole thing works.</h2>
          <p>What I enjoy most is getting past the first exciting demo and understanding what makes something genuinely useful. I like the model, but I also want to know where the data came from, how the workflow holds together, and whether the person using it can trust what they see.</p>
          <p>At Penn State, I&apos;m pursuing a B.S. in Computational Data Science and staying hands-on through the Nittany AI Society, Nittany Cloud Association, and Ri3D—where our team built a working FIRST Robotics robot in 72 hours.</p>
          <div className="school-card"><span className="school-monogram">PSU</span><div><strong>Pennsylvania State University</strong><span>B.S. Computational Data Science · Expected May 2027</span></div></div>
        </div>
        <div className="skills-panel">
          <p className="skills-title">A few more things about me</p>
          {personalNotes.map(([title, note]) => (
            <div className="skill-row" key={title}><span>{title}</span><p>{note}</p></div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-orb" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="eyebrow">Say hello</p>
          <h2>Want to talk about something interesting?</h2>
          <p>I&apos;m always happy to chat about AI, data, robotics, or whatever you&apos;re curious about.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:julianrgrossman@gmail.com">Send me a note <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/julian-grossman-1b24052b8" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="linkedin-section" id="updates" aria-labelledby="linkedin-title">
        <div className="linkedin-orbit" aria-hidden="true"><span>in</span></div>
        <div className="section-shell">
          <div className="section-heading linkedin-heading">
            <div>
              <p className="eyebrow">A few recent updates</p>
              <h2 id="linkedin-title">What I&apos;ve been up to lately.</h2>
            </div>
            <p>A little more of the day-to-day: team projects, things I&apos;m learning, and moments worth remembering.</p>
          </div>

          <div className="linkedin-feed">
            {linkedinPosts.map((post) => (
              <article className="linkedin-post" key={post.title}>
                <div className="linkedin-post-copy">
                  <div className="linkedin-post-meta">
                    <span>{post.source}</span>
                    <time dateTime={post.dateTime}>{post.date}</time>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="linkedin-post-lede">{post.copy}</p>
                  <p className="linkedin-post-support">{post.support}</p>
                  <div className="linkedin-metrics" aria-label="Engagement when this post was added">
                    {post.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                  </div>
                  <div className="linkedin-actions">
                    <a className="button button-filled" href={post.video} target="_blank" rel="noreferrer">
                      Watch the reveal <span aria-hidden="true">↗</span>
                    </a>
                    <a className="linkedin-activity-link" href="https://www.linkedin.com/in/julian-grossman-1b24052b8/recent-activity/all/" target="_blank" rel="noreferrer">
                      View activity <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                <div className="linkedin-gallery" aria-label="Photos from the 2026 Robot in 3 Days build">
                  {post.images.map((image, index) => (
                    <figure key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes={index === 0 ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 33vw, 18vw"}
                      />
                      <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a className="linkedin-profile-cta" href="https://www.linkedin.com/in/julian-grossman-1b24052b8" target="_blank" rel="noreferrer">
            <span className="linkedin-profile-mark" aria-hidden="true">in</span>
            <span><strong>More of the day-to-day</strong><small>Find me on LinkedIn</small></span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="section-shell">
        <span>© 2026 Julian Grossman</span>
        <span>Havertown, Pennsylvania</span>
        <a href="#top">Back to the beginning ↑</a>
      </footer>
    </main>
  );
}
