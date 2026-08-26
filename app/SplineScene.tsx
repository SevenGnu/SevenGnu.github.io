"use client";

import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const scene = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export function SplineScene() {
  return (
    <div className="spline-canvas" aria-label="Interactive 3D systems visualization">
      <Suspense fallback={<div className="spline-loader"><span /><span /><span /><b>Loading 3D scene</b></div>}>
        <Spline scene={scene} renderOnDemand />
      </Suspense>
    </div>
  );
}
