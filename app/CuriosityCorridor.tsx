const chapters = [
  {
    number: "01",
    label: "The itch",
    verb: "Notice.",
    title: "I usually start with the part that feels harder than it should.",
    copy: "A report no one wants to write, a dataset full of close but imperfect matches, or a handoff that loses context. I like paying attention to those little points of friction.",
  },
  {
    number: "02",
    label: "Follow the thread",
    verb: "Pull it apart.",
    title: "Then I keep asking what is actually connected to what.",
    copy: "Where did the data come from? Which system owns it? What can fail? Who needs to trust the answer? That is usually where the interesting project begins.",
  },
  {
    number: "03",
    label: "Make it tangible",
    verb: "Build the weird version.",
    title: "I learn fastest when there is something I can poke, break, and rebuild.",
    copy: "The first version can be rough. I want a real loop: try it, see what feels wrong, and make the next decision with evidence.",
  },
  {
    number: "04",
    label: "The part that matters",
    verb: "Make it useful.",
    title: "The goal is not the coolest demo. It is something another person can actually use.",
    copy: "That means clear outputs, traceable reasoning, careful permissions, and a human still in the loop when the stakes call for it.",
  },
];

const nativeScrollStyles = String.raw`
@keyframes corridor-scroll-backdrop-one {
  0%, 13% { opacity: 1; }
  20%, 100% { opacity: 0; }
}

@keyframes corridor-scroll-backdrop-two {
  0%, 13% { opacity: 0; }
  20%, 46% { opacity: 1; }
  53%, 100% { opacity: 0; }
}

@keyframes corridor-scroll-backdrop-three {
  0%, 46% { opacity: 0; }
  53%, 80% { opacity: 1; }
  87%, 100% { opacity: 0; }
}

@keyframes corridor-scroll-backdrop-four {
  0%, 80% { opacity: 0; }
  87%, 100% { opacity: 1; }
}

@keyframes corridor-scroll-progress {
  from { transform: scaleX(.25); }
  to { transform: scaleX(1); }
}

@supports (animation-timeline: view()) {
  .corridor-backdrops span,
  .corridor-counter i::after {
    animation-duration: auto;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-timeline: --corridor;
    animation-range: contain 0% contain 100%;
  }

  .corridor-backdrop-one { animation-name: corridor-scroll-backdrop-one; }
  .corridor-backdrop-two { animation-name: corridor-scroll-backdrop-two; }
  .corridor-backdrop-three { animation-name: corridor-scroll-backdrop-three; }
  .corridor-backdrop-four { animation-name: corridor-scroll-backdrop-four; }
  .corridor-counter i::after { animation-name: corridor-scroll-progress; }
}
`;

const voxels = Array.from({ length: 56 });

export function CuriosityCorridor() {
  return (
    <section className="curiosity-corridor" id="process" aria-labelledby="corridor-title">
      <style>{nativeScrollStyles}</style>
      <h2 className="sr-only" id="corridor-title">How a rabbit hole turns into a project</h2>

      <div className="corridor-sticky">
        <div className="corridor-backdrops" aria-hidden="true">
          <span className="corridor-backdrop-one" />
          <span className="corridor-backdrop-two" />
          <span className="corridor-backdrop-three" />
          <span className="corridor-backdrop-four" />
        </div>
        <div className="corridor-noise" aria-hidden="true" />
        <div className="corridor-horizon" aria-hidden="true" />

        <div className="corridor-field" aria-hidden="true">
          {voxels.map((_, index) => <span key={index} />)}
        </div>

        <div className="corridor-core" aria-hidden="true">
          <div className="corridor-core-ring ring-a" />
          <div className="corridor-core-ring ring-b" />
          <div className="corridor-core-ring ring-c" />
          <div className="corridor-tower">
            {Array.from({ length: 11 }, (_, index) => <span key={index} />)}
          </div>
        </div>

        <div className="corridor-side-label" aria-hidden="true">
          <strong>JG</strong>
          <span>Field notes</span>
        </div>

        <div className="corridor-counter" aria-hidden="true">
          <span>01</span>
          <i />
          <span>04</span>
        </div>

        <div className="corridor-scroll-cue" aria-hidden="true">Keep scrolling <span>↓</span></div>

        <nav className="corridor-nav" aria-label="How I approach a project">
          {chapters.map((chapter) => (
            <a
              href={`#process-${chapter.number}`}
              key={chapter.number}
              aria-label={`Jump to ${chapter.verb}`}
            >
              <span>{chapter.number}</span>
              <i />
            </a>
          ))}
        </nav>
      </div>

      <div className="corridor-chapters">
        {chapters.map((chapter, index) => (
          <article
            className="corridor-chapter"
            data-chapter={index}
            id={`process-${chapter.number}`}
            key={chapter.number}
          >
            <div className="corridor-copy">
              <p><span>{chapter.number}</span> / {chapter.label}</p>
              <strong>{chapter.verb}</strong>
              <h3>{chapter.title}</h3>
              <div className="corridor-rule" />
              <span>{chapter.copy}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="corridor-static">
        <p>How a rabbit hole turns into a project</p>
        {chapters.map((chapter) => (
          <article key={chapter.number}>
            <span>{chapter.number} / {chapter.label}</span>
            <h3>{chapter.verb}</h3>
            <strong>{chapter.title}</strong>
            <p>{chapter.copy}</p>
          </article>
        ))}
      </div>

    </section>
  );
}
