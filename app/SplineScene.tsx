"use client";

import { lazy, Suspense, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const scene = "https://prod.spline.design/HqdfCmOueigtautT/scene.splinecode";

export function SplineScene() {
  const [ready, setReady] = useState(false);

  return (
    <div className={`spline-canvas${ready ? " is-ready" : ""}`} aria-label="Interactive 3D systems visualization">
      <Suspense fallback={<div className="spline-loader"><span /><span /><span /><b>Loading 3D scene</b></div>}>
        <Spline scene={scene} renderOnDemand onLoad={() => setReady(true)} />
      </Suspense>
      <div className="spline-ready" aria-hidden="true"><i /> Interactive field loaded</div>
    </div>
  );
}
