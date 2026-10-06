"use client";

import { useEffect, useRef } from "react";

type Pixel = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  phase: number;
  depth: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function PixelBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pixels: Pixel[] = [];
    let frame = 0;
    let lastFrame = performance.now();
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let scrollEnergy = 0;
    let targetEnergy = 0;
    let direction = 1;
    let offset = 0;

    const createPixels = () => {
      const count = width < 760 ? 130 : 280;
      pixels = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.7 + Math.random() * 2.6,
        alpha: 0.16 + Math.random() * 0.58,
        phase: Math.random() * Math.PI * 2,
        depth: 0.2 + Math.random() * 1.25,
      }));
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPixels();
    };

    const handleScroll = () => {
      const now = performance.now();
      const distance = window.scrollY - lastScrollY;
      const elapsed = Math.max(16, now - lastScrollTime);
      if (Math.abs(distance) > 0.5) direction = Math.sign(distance);
      targetEnergy = clamp(Math.abs(distance) / elapsed, 0, 3);
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    const draw = (now: number) => {
      const elapsed = Math.min(34, now - lastFrame);
      lastFrame = now;
      scrollEnergy += (targetEnergy - scrollEnergy) * 0.14;
      targetEnergy *= 0.88;
      offset += (0.012 + scrollEnergy * 1.9) * elapsed * direction;

      context.clearRect(0, 0, width, height);

      for (const pixel of pixels) {
        const travel = offset * pixel.depth;
        const x = ((pixel.x + travel) % (width + 40) + width + 40) % (width + 40) - 20;
        const y = pixel.y + Math.sin(pixel.phase + now * 0.00034 * pixel.depth) * 4;
        const stretch = 1 + scrollEnergy * pixel.depth * 6;
        context.fillStyle = `rgba(155, 221, 255, ${pixel.alpha})`;
        context.fillRect(x, y, pixel.size * stretch, pixel.size);
      }

      if (!reducedMotion.matches) frame = window.requestAnimationFrame(draw);
    };

    resize();
    if (reducedMotion.matches) draw(performance.now());
    else frame = window.requestAnimationFrame(draw);

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="pixel-backdrop" aria-hidden="true" />;
}
