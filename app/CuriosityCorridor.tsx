"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    number: "01",
    label: "The itch",
    verb: "Notice.",
    title: "I usually start with the part that feels harder than it should.",
    copy: "A report no one wants to write, a dataset full of near-matches, a handoff that loses context—I like paying attention to those little points of friction.",
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

type VoxelStyle = CSSProperties & {
  "--voxel-height": string;
  "--voxel-delay": string;
};

const voxels = Array.from({ length: 112 }, (_, index) => {
  const column = index % 14;
  const row = Math.floor(index / 14);
  const distance = Math.abs(column - 6.5);
  const wave = Math.sin(index * 1.73) * 9 + Math.cos(row * 1.4) * 7;
  const height = Math.max(5, 48 - distance * 5 + wave);

  return {
    height: `${height}px`,
    delay: `${(column * 47 + row * 83) % 900}ms`,
  };
});

export function CuriosityCorridor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const corridor = useRef<HTMLElement | null>(null);
  const triggers = useRef<Array<HTMLElement | null>>([]);
  const active = chapters[activeIndex];

  useEffect(() => {
    const page = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frame = 0;

    const updateChapter = () => {
      const section = corridor.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const distanceTravelled = Math.min(Math.max(-bounds.top, 0), scrollableDistance);
      const progress = distanceTravelled / scrollableDistance;
      const nextIndex = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));
      const isBetweenFirstAndLastChapter = bounds.top <= 1 && bounds.bottom > window.innerHeight + 1;

      page.classList.toggle("corridor-is-active", isBetweenFirstAndLastChapter);
      setActiveIndex((current) => current === nextIndex ? current : nextIndex);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateChapter);
    };

    updateChapter();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      page.classList.remove("corridor-is-active");
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const jumpTo = (index: number) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    triggers.current[index]?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <section ref={corridor} className="curiosity-corridor" id="process" data-active={activeIndex} aria-labelledby="corridor-title">
      <h2 className="sr-only" id="corridor-title">How a rabbit hole turns into a project</h2>

      <div className="corridor-sticky">
        <div className="corridor-noise" aria-hidden="true" />
        <div className="corridor-horizon" aria-hidden="true" />

        <div className="corridor-field" aria-hidden="true">
          {voxels.map((voxel, index) => (
            <span
              key={index}
              style={{ "--voxel-height": voxel.height, "--voxel-delay": voxel.delay } as VoxelStyle}
            />
          ))}
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
          <span>{active.number}</span>
          <i />
          <span>04</span>
        </div>

        <div className="corridor-scroll-cue" aria-hidden="true">Keep scrolling <span>↓</span></div>

        <nav className="corridor-nav" aria-label="How I approach a project">
          {chapters.map((chapter, index) => (
            <button
              type="button"
              key={chapter.number}
              aria-label={`Jump to ${chapter.verb}`}
              aria-current={activeIndex === index ? "step" : undefined}
              onClick={() => jumpTo(index)}
            >
              <span>{chapter.number}</span>
              <i />
            </button>
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
            ref={(element) => { triggers.current[index] = element; }}
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
