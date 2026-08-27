"use client";

import { useEffect } from "react";

export function WorldEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    let pointerX = window.innerWidth * 0.72;
    let pointerY = window.innerHeight * 0.28;
    let scrollY = window.scrollY;
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
      root.style.setProperty("--scroll-spin", `${scrollY * 0.035}deg`);
      root.style.setProperty("--scroll-bob", `${Math.sin(scrollY / 180) * 18}px`);
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

    const handleScroll = () => {
      scrollY = window.scrollY;
      schedulePaint();
    };

    paint();
    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", schedulePaint, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", schedulePaint);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
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
  );
}
