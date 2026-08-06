'use client';

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Scene } from "./Scene.jsx";
import { useSimStore } from "./store.js";
import { ViewToggle } from "./ui/ViewToggle.jsx";
import { OverviewCaption } from "./ui/OverviewCaption.jsx";
import { CanvasErrorBoundary } from "./ui/CanvasErrorBoundary.jsx";
import { hasWebGL } from "./ui/hasWebGL.js";
import "./twin.css";

// Phones do the same work as a desktop on a fraction of the power budget,
// and at 3x device pixel ratio they are shading nine times the fragments.
// Capping the ratio is by far the cheapest win available; a 1.2x cap on a
// small screen is visually indistinguishable and roughly doubles the frame
// rate.
function useIsCompact() {
  // Always start false so SSR + first client paint match; measure after mount.
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 899px)");
    const update = (e) => setCompact(e.matches);
    setCompact(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return compact;
}

// A handful of real environments — hardware acceleration turned off,
// virtualised sessions without GPU passthrough, a blocklisted driver —
// can't create a WebGL context at all. Checked once, up front, rather than
// mounting <Canvas> and hoping: react-three-fiber's own failure in that
// case doesn't reliably surface as a catchable error.
function Fallback() {
  return (
    <div className="dt-twin-fallback">
      <h2>3D view unavailable in this browser</h2>
      <p>
        This browser or device can&apos;t create a WebGL context, so the
        interactive model can&apos;t render here. It works normally in a
        standard browser with hardware acceleration on.
      </p>
    </div>
  );
}

// The carbon capture unit digital twin — a single overview framing with
// free orbit and the exterior/cutaway toggle.
export default function DigitalTwinCanvas() {
  const compact = useIsCompact();
  const setViewMode = useSimStore((s) => s.setViewMode);
  const setTourActive = useSimStore((s) => s.setTourActive);
  const requestRecenter = useSimStore((s) => s.requestRecenter);
  // Defer WebGL probe until after mount — document is unavailable during SSR.
  const [webgl, setWebgl] = useState(true);
  useEffect(() => {
    setWebgl(hasWebGL());
  }, []);

  useEffect(() => {
    setTourActive(false);
  }, [setTourActive]);

  // The Canvas is lazily mounted (dynamic import, ssr:false) and its
  // internal ResizeObserver-based measurement (react-use-measure, inside
  // r3f's <Canvas>) occasionally misses the container's real size on that
  // first mount — it settles at the browser's default 300x150 canvas until
  // something nudges it. A single requestAnimationFrame isn't reliably late
  // enough (the inner Canvas's own ref/observer can attach a frame or two
  // after this component mounts), so this fires a few staggered, harmless
  // synthetic resize events to reliably catch it regardless of timing.
  useEffect(() => {
    const nudge = () => window.dispatchEvent(new Event('resize'));
    const raf1 = requestAnimationFrame(() => {
      nudge();
      requestAnimationFrame(nudge);
    });
    const timers = [100, 300, 800].map((ms) => setTimeout(nudge, ms));
    return () => {
      cancelAnimationFrame(raf1);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!webgl) {
    return (
      <div className="dt-app-layout">
        <div className="dt-canvas-wrap">
          <Fallback />
        </div>
      </div>
    );
  }

  return (
    <div className="dt-app-layout">
      <div className="dt-canvas-wrap">
        <CanvasErrorBoundary>
          <Canvas
            gl={{
              antialias: true,
              powerPreference: "high-performance",
              toneMapping: THREE.NeutralToneMapping,
              failIfMajorPerformanceCaveat: false,
            }}
            style={{
              background:
                "radial-gradient(ellipse 90% 75% at 55% 38%, #232c38 0%, #171b22 45%, #0e1116 100%)",
              width: "100%",
              height: "100%",
              display: "block",
            }}
            camera={{ position: [19, 12, 25], fov: 40 }}
            dpr={[1, compact ? 1.2 : 1.5]}
          >
            <Scene />
            <OrbitControls
              makeDefault
              enableDamping
              dampingFactor={0.06}
              minDistance={7}
              maxDistance={compact ? 46 : 38}
              rotateSpeed={0.35}
              touches={{ ONE: 0, TWO: 2 }}
              zoomSpeed={compact ? 0.7 : 1}
              maxPolarAngle={Math.PI * 0.49}
              target={[-1.2, 5.2, 0]}
            />
          </Canvas>
        </CanvasErrorBoundary>
        <ViewToggle />
        {/* <button
          type="button"
          className="dt-reset-view"
          onClick={() => {
            setViewMode("exterior");
            requestRecenter();
          }}
          title="Back to the overview"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path
              d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"
              fill="currentColor"
            />
          </svg>
          Reset view
        </button> */}
        <OverviewCaption />
      </div>
    </div>
  );
}
