import React from 'react';

/**
 * PsychologyBackgroundWatermark
 * Persistent, serene watermark and ambient light layer centered in the viewport.
 * Features:
 * - RedKross crest in calming turquoise / deep teal with gentle breathing illumination
 * - Concentric Zen meditation ripple rings that expand outward slowly
 * - Deep midnight oceanic obsidian (#08121E) ambient light blooms matching the user's color spec
 * - Non-intrusive, WCAG compliant, non-blocking pointer-events-none
 */
export default function PsychologyBackgroundWatermark() {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
    >
      {/* 1. Ambient Background Light Blooms in Deep Ocean Teal (#08121E / #0d9488 / #2dd4bf) */}
      <div className="absolute w-[680px] h-[680px] bg-teal-500/[0.035] rounded-full blur-[160px] -top-32 -left-32 pointer-events-none" />
      <div className="absolute w-[720px] h-[720px] bg-[#0d9488]/[0.03] rounded-full blur-[180px] -bottom-32 -right-32 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-[#2dd4bf]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Soft Zen Concentric Ripple Rings (Breathing & Calm) */}
      {/* Outer Zen Ring (720px) */}
      <div className="absolute w-[720px] h-[720px] rounded-full border border-teal-400/[0.05] animate-[spin_320s_linear_infinite]">
        {/* Subtle Cardinal Anchor Points */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-teal-400/30 rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-teal-400/30 rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-[2px] bg-teal-400/30 rounded-full" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-[2px] bg-teal-400/30 rounded-full" />
      </div>

      {/* Middle Concentric Ring (560px) */}
      <div className="absolute w-[560px] h-[560px] rounded-full border border-teal-400/[0.06] border-dashed" />

      {/* Inner Concentric Ring (400px) */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-teal-400/[0.07]" />

      {/* Innermost Pulse Aura Ring (280px) */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-teal-400/[0.09] animate-pulse" style={{ animationDuration: '6s' }} />

      {/* 3. RedKross Crest Watermark (Layered Centered with Calming Turquoise Hue) */}
      <div className="relative z-0 flex items-center justify-center">
        <img 
          src="/assets/crest-clean-circle.png" 
          alt=""
          className="w-[280px] sm:w-[400px] md:w-[480px] lg:w-[540px] h-auto object-contain opacity-[0.14] pointer-events-none transition-opacity duration-1000"
          style={{
            filter: 'drop-shadow(0 0 50px rgba(45, 212, 191, 0.35)) drop-shadow(0 0 100px rgba(13, 148, 136, 0.2))',
            maskImage: 'radial-gradient(circle at center, black 45%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 80%)'
          }}
        />
        
        {/* Serene Core Water Drop / Mindfulness Focal Center */}
        <div className="absolute w-2.5 h-2.5 rounded-full border border-teal-300/40 bg-teal-400/20 shadow-[0_0_12px_rgba(45,212,191,0.5)]" />
      </div>

      {/* 4. Fine Zen Grid Watermark Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.02]" />
    </div>
  );
}
