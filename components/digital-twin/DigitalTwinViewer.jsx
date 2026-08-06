'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DigitalTwinCanvas = dynamic(() => import('./DigitalTwinCanvas.jsx'), {
  ssr: false,
  loading: () => <TwinLoading />,
});

function TwinLoading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background: '#0e1116' }}>
      <span className="w-8 h-8 rounded-full border-2 border-white/15 border-t-white/70 animate-spin" />
      <span className="text-[11px] tracking-[.14em] uppercase text-white/40">Loading 3D model</span>
    </div>
  );
}

/** Interactive 3D digital twin of the TX-1000 capture unit. Client-only (WebGL). */
export default function DigitalTwinViewer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // Same loading shell on server + first client paint avoids hydration mismatch
  // from next/dynamic(ssr:false) swapping in the canvas too early.
  if (!ready) return <TwinLoading />;

  return <DigitalTwinCanvas />;
}
