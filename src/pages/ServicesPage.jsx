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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

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
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
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
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steppedCareLevels.map((lvl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl p-6 bg-[#0A1826]/80 backdrop-blur-xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-teal-950/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-teal-400 tracking-wider">
                    {lvl.level}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-teal-950/60 text-teal-300 border border-teal-500/30">
                    {lvl.badge}
                  </span>
                </div>

                <h3 className="text-lg font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                  {lvl.title}
                </h3>

                <p className="text-xs font-mono text-teal-300/80">
                  {lvl.focus}
                </p>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-sans">
                  {lvl.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Format:</span>
                <span className="text-teal-300">{lvl.format}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transparent Fee & Community Subsidies Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0B1E2E]/90 to-[#07131F]/90 backdrop-blur-2xl border border-teal-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/40">
                SECTION 8 NON-PROFIT COMMITMENT
              </span>

              <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                {accessAndAffordability.headline}
              </h2>

              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-sans">
                {accessAndAffordability.statement} We operate with strict financial transparency and verified institutional sliding scales for students and economically challenged applicants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {accessAndAffordability.principles.map((pr, pidx) => (
                  <div key={pidx} className="p-3.5 rounded-xl bg-[#06101B]/80 border border-teal-500/20">
                    <h4 className="text-xs font-royal font-bold uppercase tracking-wider text-teal-200 mb-1">
                      {pr.title}
                    </h4>
                    <p className="text-xs text-slate-300/80 leading-relaxed font-sans">
                      {pr.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-2xl p-6 bg-[#06101B]/90 border border-teal-500/30 space-y-4 text-center">
                <ShieldCheck className="w-10 h-10 text-teal-400 mx-auto" />
                <h3 className="text-xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                  Confidential Intake Booking
                </h3>
                <p className="text-xs text-slate-300/80 font-sans">
                  Submit a brief non-clinical intake request. Our care coordinator assesses suitability and contacts you with transparent details within 24 business hours.
                </p>
                <Link
                  to="/counselling"
                  className="w-full py-3.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 hover:border-teal-300 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-100 transition-all duration-300 shadow-md shadow-teal-950/40 block"
                >
                  Book Counselling Intake
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-200/90 leading-relaxed font-sans">
                  <strong>Notice:</strong> Services are not an emergency crisis response. For acute distress or self-harm concerns, please call national toll-free Tele-MANAS at <a href="tel:14416" className="underline font-bold text-amber-300">14416</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
