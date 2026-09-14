'use client';

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep the route recoverable without exposing internal error details to users.
  }, []);

  return (
    <main style={{minHeight:'70vh',display:'grid',placeItems:'center',padding:24,background:'var(--bg)',color:'var(--ink)'}}>
      <section style={{width:'min(560px,100%)',textAlign:'center'}}>
        <div style={{font:'9px "DM Mono",monospace',letterSpacing:'.16em',color:'var(--accent)'}}>CAMPUSOS · RECOVERY</div>
        <h1 style={{font:'clamp(44px,7vw,72px)/.9 "Instrument Serif",serif',letterSpacing:'-.04em',margin:'15px 0'}}>Something went off campus.</h1>
        <p style={{color:'var(--muted)',lineHeight:1.7,margin:'0 auto 24px'}}>This page hit an unexpected error. You can safely try the route again.</p>
        <button onClick={() => reset()} style={{display:'inline-flex',alignItems:'center',gap:8,border:0,borderRadius:10,padding:'11px 15px',background:'var(--ink)',color:'var(--surface)',fontSize:12,cursor:'pointer'}}><RotateCcw size={15}/> Try again</button>
      </section>
    </main>
  );
}
