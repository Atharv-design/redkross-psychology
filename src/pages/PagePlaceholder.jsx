import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Phone } from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';

export default function PagePlaceholder({ title, category, description, primaryAction }) {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center select-none">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-xs font-mono text-teal-300 mb-6">
        <Compass className="w-3.5 h-3.5" />
        <span>{category || "REDKROSS PSYCHOLOGY SECTION"}</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-black text-white font-royal tracking-tight mb-4">
        {title}
      </h1>

      <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-10">
        {description || "This section is actively structured strictly around RedKross_Psychology_Website_Developer_Specification.pdf."}
      </p>

      <div className="flex items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Psychology Home</span>
        </Link>

        {primaryAction && (
          <Link
            to={primaryAction.href}
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-xs font-royal font-bold text-white uppercase tracking-wider transition-all"
          >
            {primaryAction.label}
          </Link>
        )}
      </div>
    </div>
  );
}
