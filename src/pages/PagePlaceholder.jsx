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

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          {title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          {description || "This section is actively structured strictly around RedKross_Psychology_Website_Developer_Specification.pdf."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-button-secondary text-xs font-mono transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Psychology Home</span>
          </Link>

          {primaryAction && (
            <Link
              to={primaryAction.href}
              className="px-5 py-2.5 rounded-xl glass-button-primary text-slate-950 text-xs font-bold uppercase tracking-wider transition-all"
            >
              {primaryAction.label}
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
