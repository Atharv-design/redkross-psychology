import React, { useState } from 'react';
import { Phone, AlertTriangle, ShieldAlert, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';

export default function UrgentHelpStrip() {
  const { emergency } = PSYCHOLOGY_DATA;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-[#181102] border-b border-amber-500/30 text-amber-200 text-xs select-none relative z-50">
      {/* Primary Compact Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Non-Emergency Statement */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-amber-400">
            Crisis Notice:
          </span>
          <span className="text-[11px] sm:text-xs text-amber-200/90 hidden md:inline">
            Not an emergency service. In crisis, call 24×7 national helplines:
          </span>
        </div>

        {/* Center / Right: Direct Click-to-Call Buttons */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <a 
            href="tel:14416"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold transition-all"
            title="Tele-MANAS National Helpline"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>Tele-MANAS: 14416</span>
          </a>

          <a 
            href="tel:18005990019"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold transition-all"
            title="KIRAN Ministry Helpline"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>KIRAN: 1800-599-0019</span>
          </a>

          <a 
            href="tel:112"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/60 hover:bg-red-900/60 border border-red-500/40 text-red-300 font-mono text-[11px] font-bold transition-all"
            title="National Unified Emergency"
          >
            <span>Emergency: 112</span>
          </a>

          {/* Expand Details Trigger */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded text-amber-400 hover:text-amber-200 transition-colors ml-1"
            aria-label="Toggle crisis helpline details"
          >
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded Accordion Panel for Detailed Helplines & Guidance */}
      {expanded && (
        <div className="bg-[#100B02] border-t border-amber-500/20 px-4 sm:px-6 py-4 transition-all">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-amber-200/80 mb-3 leading-relaxed">
              {emergency.disclaimer}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {emergency.helplines.map((item) => (
                <div 
                  key={item.number} 
                  className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-royal font-bold text-amber-300 text-sm">{item.name}</span>
                      <span className="text-[9px] font-mono text-amber-400/70">{item.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
                      {item.description}
                    </p>
                  </div>
                  <a 
                    href={item.phoneLink}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:underline pt-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Dial {item.number}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
