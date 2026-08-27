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
  const triggers = useRef<Array<HTMLDivElement | null>>([]);
  const active = chapters[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.chapter);
        setActiveIndex(index);
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: [0, 0.2, 0.55] },
    );

    triggers.current.forEach((trigger) => {
      if (trigger) observer.observe(trigger);
    });

    return () => observer.disconnect();
  }, []);

  const jumpTo = (index: number) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    triggers.current[index]?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
  };

  return (
    <section className="curiosity-corridor" id="process" data-active={activeIndex} aria-labelledby="corridor-title">
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

        <div className="corridor-copy" key={active.number} aria-hidden="true">
          <p><span>{active.number}</span> / {active.label}</p>
          <strong>{active.verb}</strong>
          <h3>{active.title}</h3>
          <div className="corridor-rule" />
          <span>{active.copy}</span>
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

      <div className="corridor-triggers" aria-hidden="true">
        {chapters.map((chapter, index) => (
          <div
            className="corridor-trigger"
            data-chapter={index}
            key={chapter.number}
            ref={(element) => { triggers.current[index] = element; }}
          />
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

      <div className="sr-only corridor-sr-copy">
        {chapters.map((chapter) => (
          <article key={chapter.number}>
            <h3>{chapter.verb} {chapter.title}</h3>
            <p>{chapter.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
