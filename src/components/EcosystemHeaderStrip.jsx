import React from 'react';
import { 
  Building2, 
  Shield, 
  GraduationCap, 
  HeartHandshake, 
  ArrowUpRight 
} from 'lucide-react';
import { getEcosystemUrl } from '../utils/ecosystemLinks';

/**
 * EcosystemHeaderStrip
 * Top-most global ecosystem header bar connecting all RedKross portals:
 * - RedKross Foundation (Parent)
 * - RedKross Cybersecurity
 * - RedKross Academy
 * - RedKross Psychology (Current Active Wing)
 */
export default function EcosystemHeaderStrip() {
  const ecosystemPortals = [
    {
      id: 'main',
      name: 'RedKross Foundation',
      shortName: 'Foundation',
      url: getEcosystemUrl('main'),
      icon: Building2,
      badge: 'Parent Body',
      accent: 'hover:border-slate-400/50 hover:text-white'
    },
    {
      id: 'cyber',
      name: 'RedKross Cybersecurity',
      shortName: 'Cybersecurity',
      url: getEcosystemUrl('cyber'),
      icon: Shield,
      badge: 'Cyber Wing',
      accent: 'hover:border-cyan-400/50 hover:text-cyan-200'
    },
    {
      id: 'academy',
      name: 'RedKross Academy',
      shortName: 'Academy',
      url: getEcosystemUrl('academy'),
      icon: GraduationCap,
      badge: 'Courses & Labs',
      accent: 'hover:border-indigo-400/50 hover:text-indigo-200'
    }
  ];

  return (
    <div className="w-full bg-[#050C16]/92 backdrop-blur-xl border-b border-teal-500/20 text-slate-300 text-xs select-none sticky top-0 z-50 transition-all duration-300 shadow-md shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Foundation Identity Emblem */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-teal-300">
            RedKross Ecosystem
          </span>
          <span className="text-[11px] text-slate-400 hidden lg:inline font-light">
            &bull; Official Portals of RedKross Research Foundation
          </span>
        </div>

        {/* Center / Right: Ecosystem Portal Links + Active Psychology Pill */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {ecosystemPortals.map((portal) => {
            const Icon = portal.icon;
            return (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 text-slate-300 font-mono text-[10px] sm:text-[11px] transition-all shadow-sm group ${portal.accent}`}
                title={`Visit ${portal.name}`}
              >
                <Icon className="w-3 h-3 text-slate-400 group-hover:text-teal-300 transition-colors" />
                <span className="hidden sm:inline">{portal.name}</span>
                <span className="sm:hidden">{portal.shortName}</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            );
          })}

          {/* Current Active Platform Chip (Psychology) */}
          <div 
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-teal-500/15 border border-teal-400/40 text-teal-300 font-mono text-[10px] sm:text-[11px] font-bold shadow-sm shadow-teal-950/40"
            title="You are currently on RedKross Psychology"
          >
            <HeartHandshake className="w-3 h-3 text-teal-400" />
            <span className="hidden sm:inline">Psychology Wing</span>
            <span className="sm:hidden">Psychology</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping ml-0.5" />
          </div>
        </div>

      </div>
    </div>
  );
}
