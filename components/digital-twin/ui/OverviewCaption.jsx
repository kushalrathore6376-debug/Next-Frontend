'use client';

import { useState } from "react";
import { stageAt } from "../tour/stages.js";

// Presentation mode shows the plant at a single framing — a caption
// describing what's on screen. Users can dismiss it with the close button.
export function OverviewCaption() {
  const [open, setOpen] = useState(true);
  const stage = stageAt(0);

  if (!open) return null;

  return (
    <div className="dt-tour">
      <div className="dt-tour-card">
        <button
          type="button"
          className="dt-tour-close"
          onClick={() => setOpen(false)}
          aria-label="Close overview"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <p className="dt-tour-index">Overview</p>
        <h2 className="dt-tour-title">{stage.title}</h2>
        <p className="dt-tour-blurb">
          Flue gas from the stack is scrubbed, absorbed into solvent, and the
          loaded solvent is recovered downstream. Drag to orbit, or switch to
          the cutaway view to see the process inside.
        </p>
      </div>
    </div>
  );
}
