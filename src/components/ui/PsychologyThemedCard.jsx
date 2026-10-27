import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Monitor, CheckCircle2, ShieldCheck, HeartHandshake, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CARD_MOTIFS = {
  1: {
    key: 'individual-counselling',
    src: '/assets/cards/card-individual-counselling-fullspan.png',
    defaultTag: 'One-on-One',
    defaultMeta1: 'Personalized Focus',
    defaultMeta2: 'In-Person / Online'
  },
  2: {
    key: 'group-therapy',
    src: '/assets/cards/card-group-therapy-fullspan.png',
    defaultTag: 'Support Circle',
    defaultMeta1: 'Small Groups (6-10)',
    defaultMeta2: 'Guided Facilitation'
  },
  3: {
    key: 'psychological-assessments',
    src: '/assets/cards/card-psychological-assessments-fullspan.png',
    defaultTag: 'Diagnostic',
    defaultMeta1: 'Standardised Testing',
    defaultMeta2: 'RCI Clinical Protocol'
  },
  4: {
    key: 'workshops-programs',
    src: '/assets/cards/card-workshops-programs-fullspan.png',
    defaultTag: 'Outreach',
    defaultMeta1: 'Campuses & Workplace',
    defaultMeta2: 'Evidence-Based Modules'
  },
  5: {
    key: 'mental-wellness-resources',
    src: '/assets/cards/card-mental-wellness-resources-fullspan.png',
    defaultTag: 'Psychoeducation',
    defaultMeta1: 'Open Access Guides',
    defaultMeta2: 'Reflective Worksheets'
  },
  6: {
    key: 'crisis-support',
    src: '/assets/cards/card-crisis-support-fullspan.png',
    defaultTag: 'Safety & Care',
    defaultMeta1: 'De-escalation Protocol',
    defaultMeta2: '24/7 Verified Helplines'
  },
  7: {
    key: 'child-adolescent-support',
    src: '/assets/cards/card-child-adolescent-support-fullspan.png',
    defaultTag: 'Youth & Student',
    defaultMeta1: 'Ages 13-17 With Assent',
    defaultMeta2: 'Guardian Collaborative'
  },
  8: {
    key: 'therapy-approaches',
    src: '/assets/cards/card-therapy-approaches-fullspan.png',
    defaultTag: 'Evidence-Based',
    defaultMeta1: 'CBT / ACT / Somatic',
    defaultMeta2: 'Mindful Balance'
  },
  9: {
    key: 'about-therapist',
    src: '/assets/cards/card-about-therapist-fullspan.png',
    defaultTag: 'Clinical Ethics',
    defaultMeta1: 'Licensed Psychologists',
    defaultMeta2: 'Continuous Supervision'
  },
  10: {
    key: 'book-appointment',
    src: '/assets/cards/card-book-appointment-fullspan.png',
    defaultTag: 'Direct Intake',
    defaultMeta1: 'Sliding Scale Available',
    defaultMeta2: 'Flexible Scheduling'
  }
};

/**
 * PsychologyThemedCard
 * Dicto implementation of the 10 signature glassmorphic cards.
 * Artwork now spans the ENTIRE vertical height of the card seamlessly with zero box cutoff,
 * and vertical spacing is tight, balanced, and perfectly proportioned.
 */
export default function PsychologyThemedCard({
  variant = 1,
  tagLeft,
  tagRight = "Confidential",
  title,
  description,
  bullets = [],
  tags = [],
  meta1,
  meta2,
  ctaText = "Explore Details",
  ctaLink = "/programmes",
  className = "",
  motionVariants
}) {
  // Resolve motif data (supports numeric 1-10 or string key)
  const motifIndex = typeof variant === 'number' 
    ? ((variant - 1) % 10) + 1 
    : (Object.keys(CARD_MOTIFS).find(k => CARD_MOTIFS[k].key === variant) || 1);
  
  const motif = CARD_MOTIFS[motifIndex] || CARD_MOTIFS[1];

  const leftTagText = tagLeft || motif.defaultTag;
  const meta1Text = typeof meta1 === 'string' ? meta1 : (meta1?.label || motif.defaultMeta1);
  const Meta1Icon = (typeof meta1 === 'object' && meta1?.icon) ? meta1.icon : Users;

  const meta2Text = typeof meta2 === 'string' ? meta2 : (meta2?.label || motif.defaultMeta2);
  const Meta2Icon = (typeof meta2 === 'object' && meta2?.icon) ? meta2.icon : Monitor;

  const CardWrapper = motionVariants ? motion.div : 'div';
  const motionProps = motionVariants ? { variants: motionVariants } : {};

  const isExternal = typeof ctaLink === 'string' && (ctaLink.startsWith('http') || ctaLink.startsWith('mailto:') || ctaLink.startsWith('tel:'));

  return (
    <CardWrapper
      {...motionProps}
      className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-[#081524]/85 backdrop-blur-2xl border border-teal-500/20 hover:border-teal-400/45 transition-all duration-500 shadow-xl shadow-black/50 hover:shadow-teal-950/40 group ${className}`}
    >
      {/* Specular top border light beam */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent pointer-events-none z-10" />

      {/* Signature Ethereal Artwork Spanning the Full Vertical Height of the Card (No Box Cutoff) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0 select-none">
        <img
          src={motif.src}
          alt=""
          loading="lazy"
          className="absolute right-0 top-0 bottom-0 h-full w-[68%] sm:w-[60%] object-cover object-right opacity-55 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 mix-blend-screen"
        />
        {/* Ambient Teal Atmospheric Glow */}
        <div className="absolute -top-12 -right-12 w-56 h-56 bg-teal-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-teal-600/10 rounded-full blur-2xl" />
        {/* Soft Vignette ensuring 100% Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/95 via-[#071320]/75 to-transparent/30" />
      </div>

      {/* Card Header & Content Layer */}
      <div className="relative z-10 flex flex-col">
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-teal-300 bg-teal-500/15 border border-teal-500/35 backdrop-blur-md shadow-sm shadow-teal-950/30">
            {leftTagText}
          </span>
          {tagRight && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60 backdrop-blur-md">
              {tagRight}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight leading-snug font-royal mb-2 pr-12 drop-shadow-sm bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300/95 leading-relaxed font-light mb-3 drop-shadow-sm">
          {description}
        </p>

        {/* Optional Highlight Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-md text-[10px] font-mono text-teal-300/90 bg-teal-500/10 border border-teal-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Optional Bullet Points */}
        {bullets && bullets.length > 0 && (
          <ul className="mb-3.5 space-y-1.5 border-t border-teal-500/15 pt-2.5">
            {bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Area: 2 Metadata Rows + Full-Width Glowing Pill CTA Button */}
      <div className="relative z-10 pt-2 space-y-2">
        {/* Metadata Row 1 (Audience / Scope) */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#06101B]/80 border border-teal-500/15 text-slate-200 text-xs shadow-sm">
          <Meta1Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span className="truncate">{meta1Text}</span>
        </div>

        {/* Metadata Row 2 (Format / Delivery) */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#06101B]/80 border border-teal-500/15 text-slate-200 text-xs shadow-sm">
          <Meta2Icon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span className="truncate">{meta2Text}</span>
        </div>

        {/* Signature Full-Width Glowing Pill CTA Button */}
        {isExternal ? (
          <a
            href={ctaLink}
            className="mt-3.5 w-full h-11 sm:h-12 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-500/20 to-teal-500/25 border border-teal-500/35 hover:border-teal-400 hover:from-teal-500/25 hover:to-teal-500/40 flex items-center justify-between px-4 sm:px-5 transition-all duration-300 group/btn shadow-lg shadow-teal-950/40"
          >
            <span className="font-royal text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200 transition-all">
              {ctaText}
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-400 text-[#08121E] flex items-center justify-center font-bold shadow-md shadow-teal-400/40 group-hover/btn:translate-x-1 group-hover/btn:bg-teal-300 transition-all shrink-0">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </div>
          </a>
        ) : (
          <Link
            to={ctaLink}
            className="mt-3.5 w-full h-11 sm:h-12 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-500/20 to-teal-500/25 border border-teal-500/35 hover:border-teal-400 hover:from-teal-500/25 hover:to-teal-500/40 flex items-center justify-between px-4 sm:px-5 transition-all duration-300 group/btn shadow-lg shadow-teal-950/40"
          >
            <span className="font-royal text-xs sm:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200 transition-all">
              {ctaText}
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-400 text-[#08121E] flex items-center justify-center font-bold shadow-md shadow-teal-400/40 group-hover/btn:translate-x-1 group-hover/btn:bg-teal-300 transition-all shrink-0">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </div>
          </Link>
        )}
      </div>
    </CardWrapper>
  );
}
