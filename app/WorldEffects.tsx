"use client";

import { useEffect, useState } from "react";

const pageChapters = [
  ["top", "Hello"],
  ["skills", "Toolkit"],
  ["process", "How I think"],
  ["work", "Summer"],
  ["projects", "Projects"],
  ["updates", "Lately"],
];

export function WorldEffects() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    let pointerX = window.innerWidth * 0.72;
    let pointerY = window.innerHeight * 0.28;
    let frame = 0;

    const paint = () => {
      const x = pointerX / Math.max(window.innerWidth, 1) - 0.5;
      const y = pointerY / Math.max(window.innerHeight, 1) - 0.5;

      root.style.setProperty("--light-x", `${pointerX}px`);
      root.style.setProperty("--light-y", `${pointerY}px`);
      root.style.setProperty("--pointer-shift-x", `${x * 52}px`);
      root.style.setProperty("--pointer-shift-y", `${y * 42}px`);
      root.style.setProperty("--pointer-tilt-x", `${y * -18}deg`);
      root.style.setProperty("--pointer-tilt-y", `${x * 22}deg`);
      frame = 0;
    };

    const schedulePaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    const handlePointer = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      schedulePaint();
    };

    paint();
    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("resize", schedulePaint, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("resize", schedulePaint);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current?.target.id) setActiveSection(current.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.15, 0.5] },
    );

    pageChapters.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="world-effects" aria-hidden="true">
        <div className="world-light" />

        <div className="world-anchor world-anchor-cube">
          <div className="world-cube">
            <span className="cube-front" />
            <span className="cube-back" />
            <span className="cube-right" />
            <span className="cube-left" />
            <span className="cube-top" />
            <span className="cube-bottom" />
          </div>
        </div>

        <div className="world-anchor world-anchor-gyro">
          <div className="world-gyro">
            <span />
            <span />
            <span />
            <i />
          </div>
        </div>

        <div className="world-anchor world-anchor-crystal">
          <div className="world-crystal">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <nav className="page-rail" aria-label="Page chapters">
        {pageChapters.map(([id, label], index) => (
          <a
            href={`#${id}`}
            key={id}
            aria-label={`Go to ${label}`}
            aria-current={activeSection === id ? "location" : undefined}
          >
            <span>{label}</span>
            <i />
            <small>{String(index + 1).padStart(2, "0")}</small>
          </a>
        ))}
      </nav>
    </>
  );
}
