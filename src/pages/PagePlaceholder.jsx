import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Sparkles } from 'lucide-react';

export default function PagePlaceholder({ title, category, description, primaryAction }) {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-14 rounded-3xl glass-card relative overflow-hidden"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>{category || "REDKROSS PSYCHOLOGY SECTION"}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-royal uppercase tracking-tight mb-4 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          {description || "This section is actively structured strictly around RedKross_Psychology_Website_Developer_Specification.pdf."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#081524]/80 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400 text-xs transition-all group/btn shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-teal-400 group-hover/btn:-translate-x-0.5 transition-transform" />
            <span className="font-royal font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Back to Psychology Home</span>
          </Link>

          {primaryAction && (
            <Link
              to={primaryAction.href}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 via-teal-500/30 to-teal-500/20 border border-teal-400/50 hover:border-teal-300 text-xs transition-all shadow-md group/btn"
            >
              <span className="font-royal font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">{primaryAction.label}</span>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
