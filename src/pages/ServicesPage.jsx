import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Building2, 
  Clock, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Monitor,
  PhoneCall,
  Lock,
  Layers,
  Activity
} from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';
import PsychologyThemedCard from '@/components/ui/PsychologyThemedCard';

import { bidirectionalViewport, containerVariants, itemVariants, sectionVariants } from '../utils/animationConfig';

export default function ServicesPage() {
  const { programmes, accessAndAffordability } = PSYCHOLOGY_DATA;

  // Curated variants mapping ensuring rich representation of the 10 motifs
  const serviceVariants = [1, 7, 2, 6, 4, 3];

  const steppedCareLevels = [
    {
      level: "Level 01",
      title: "Universal Psychoeducation",
      focus: "Mental Literacy & Preventative Care",
      desc: "Open-access digital guides, grounding exercises, and awareness toolkits to build everyday psychological resilience.",
      format: "Self-Paced / Digital Guides",
      badge: "FREE // OPEN ACCESS"
    },
    {
      level: "Level 02",
      title: "Facilitated Peer Spaces",
      focus: "Mutual Support & Reduced Isolation",
      desc: "Small closed groups for exam stress, caregiver fatigue, and shared life challenges facilitated by trained coordinators.",
      format: "Bi-Weekly Cohorts (6-10 Participants)",
      badge: "COMMUNITY FUNDED"
    },
    {
      level: "Level 03",
      title: "One-on-One Counselling",
      focus: "Structured Talking Therapy",
      desc: "Tailored individual sessions using CBT, ACT, and somatic techniques with qualified counsellors under supervision.",
      format: "50-Min Confidential Sessions",
      badge: "SLIDING SCALE AVAILABLE"
    },
    {
      level: "Level 04",
      title: "Specialised Medical Referral",
      focus: "Clinical & Psychiatric Care",
      desc: "Ethical signposting and warm handover to accredited government or tertiary psychiatric hospitals for clinical pharmacotherapy.",
      format: "External Vetted Hospitals",
      badge: "ETHICAL TRIAGE"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden pb-24">
      {/* Ambient Radial Luminous Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] -left-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[1600px] -right-40 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-mono tracking-wider backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            <span>ETHICAL PROGRAMME INVENTORY // EVIDENCE-INFORMED</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent leading-[1.15]"
          >
            OUR CLINICAL & COMMUNITY SERVICES
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            From one-on-one structured counselling to student decompression groups, campus workshops, and emergency signposting. Every service is grounded in clear clinical boundaries, data privacy, and the Indian Mental Healthcare Act 2017.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/counselling"
              className="px-6 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 shadow-lg shadow-teal-950/40 flex items-center gap-2.5 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-200">
                Initiate Confidential Enquiry
              </span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/workshops"
              className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-teal-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 group-hover:text-teal-200">
                Explore Workshops
              </span>
              <BookOpen className="w-4 h-4 text-teal-400" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* Core 6 Programmes Showcase using PsychologyThemedCard */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5" />
            <span>Comprehensive Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            THE 6 SPECIALISED SUPPORT PATHWAYS
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Designed for different stages of emotional need, with distinct practitioner oversight and transparent boundaries.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {programmes.map((p, idx) => {
            const variantNumber = serviceVariants[idx % serviceVariants.length];
            return (
              <PsychologyThemedCard
                key={p.id || idx}
                variant={variantNumber}
                tagLeft={p.category || "Service Pathway"}
                tagRight={p.statusBadge || "Verified Care"}
                title={p.title}
                description={p.summary}
                bullets={[
                  p.whatIsOffered || p.audience,
                  `Eligibility: ${p.eligibility || "Open consultation"}`,
                  `Mode: ${p.format || "Online / In-person"}`
                ]}
                meta1={{ icon: Users, label: p.audience ? p.audience.slice(0, 28) + "..." : "Structured Care" }}
                meta2={{ icon: Clock, label: p.availability || "Direct Scheduling" }}
                ctaText={p.actionText || "Learn More & Enquire"}
                ctaLink={p.actionHref || "/counselling"}
                motionVariants={itemVariants}
              />
            );
          })}
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* Stepped Care Framework */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Clinical Stepped-Care Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            HOW WE MATCH CARE TO YOUR NEED
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            We adhere to a stepped-care philosophy: interventions should be least invasive, evidence-informed, and seamlessly escalated when deeper clinical attention is required.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
        >
          {steppedCareLevels.map((lvl, index) => (
            <PsychologyThemedCard
              key={index}
              variant={[1, 2, 8, 3][index % 4]}
              tagLeft={lvl.level}
              tagRight={lvl.badge}
              title={lvl.title}
              description={lvl.desc}
              bullets={[
                `Focus: ${lvl.focus}`,
                `Delivery: ${lvl.format}`,
                "Evidence-informed stepped escalation"
              ]}
              meta1={{ icon: ShieldCheck, label: lvl.focus }}
              meta2={{ icon: Clock, label: lvl.format }}
              ctaText="Explore Level"
              ctaLink="/counselling"
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* Transparent Fee & Community Subsidies Section - Crystal Clear 2x2 Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 text-teal-300 border border-teal-500/40 text-xs font-mono tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>SECTION 8 NON-PROFIT COMMITMENT // FINANCIAL TRANSPARENCY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            {accessAndAffordability.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed max-w-2xl mx-auto">
            {accessAndAffordability.statement} We operate with strict financial transparency and verified institutional sliding scales for students and economically challenged applicants.
          </p>
        </motion.div>

        {/* 2x2 Grid of the 4 Principles with Pristine Contrast & Signature Motif */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12"
        >
          {accessAndAffordability.principles.map((pr, pidx) => (
            <PsychologyThemedCard
              key={pidx}
              variant={[10, 8, 2, 9][pidx % 4]}
              tagLeft={`Principle 0${pidx + 1}`}
              tagRight="Transparent Policy"
              title={pr.title}
              description={pr.description}
              bullets={[
                "Pre-session transparent disclosure",
                "Need-based fee adjustment upon request",
                "Zero hidden costs or retainers"
              ]}
              meta1={{ icon: ShieldCheck, label: "Non-Profit Ethics" }}
              meta2={{ icon: Users, label: "Equitable Care" }}
              ctaText="Read Fee Details"
              ctaLink="/counselling"
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>

        {/* High-Impact Horizontal Intake & Emergency Notice Banner */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#091522]/95 backdrop-blur-2xl border border-teal-500/40 shadow-2xl relative overflow-hidden group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity group-hover:opacity-25 transition-opacity duration-700 pointer-events-none scale-105"
            style={{ backgroundImage: `url('/assets/cards/card-book-appointment-fullspan.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101B]/95 via-[#06101B]/90 to-[#06101B]/80 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                Ethical Intake Coordination
              </span>
              <h3 className="text-xl sm:text-2xl font-royal font-bold uppercase tracking-tight text-white">
                Ready to Discuss Support Options?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-sans">
                Submit a brief non-clinical intake request. Our care coordinator assesses suitability and contacts you with transparent sliding-scale options within 24 business hours.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/counselling"
                className="w-full py-3.5 px-6 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/50 hover:border-teal-300 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-100 transition-all duration-300 shadow-md shadow-teal-950/40 text-center block"
              >
                Book Counselling Intake
              </Link>
              <p className="text-[11px] text-slate-400 text-center font-sans">
                Emergency? Call Tele-MANAS at <a href="tel:14416" className="text-amber-300 font-bold underline">14416</a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
