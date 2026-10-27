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
  Monitor
} from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';
import FrequentlyAskedQuestions from '@/components/ui/frequently-asked-questions-with-accordion';
import PsychologyThemedCard from '@/components/ui/PsychologyThemedCard';

// Bidirectional Slow-Motion Animation System
// once: false ensures smooth re-triggering whenever scrolling up or down
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 36,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 28,
    filter: 'blur(3px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const bidirectionalViewport = {
  once: false,
  amount: 0.12,
  margin: '-40px'
};

export default function HomePage() {
  const { programmes, howSupportWorks, accessAndAffordability, internships, workshops, communityActivities, trustAndSafety, faqs } = PSYCHOLOGY_DATA;

  const paths = [
    {
      title: "I Need Support",
      desc: "One-on-one confidential counselling, student emotional guidance, and small facilitated peer support circles.",
      badge: "CARE & COUNSELLING",
      linkText: "Explore Support Options",
      href: "/counselling",
      icon: HeartHandshake,
      tags: ["Confidential Assessment", "Licensed Practitioners", "Sliding Scale Available"],
      meta1: "Youth & Adults (Ages 13+)",
      meta2: "Tele-Therapy & Clinic Sessions"
    },
    {
      title: "I Want to Learn or Train",
      desc: "Psychological First Aid (PFA) and 3 supervised psychology internship tracks with strict clinical boundaries.",
      badge: "SKILLS & INTERNSHIPS",
      linkText: "View Internship Tracks",
      href: "/internship",
      icon: GraduationCap,
      tags: ["Psychological First Aid", "3 Supervised Tracks", "Faculty Mentorship"],
      meta1: "UG & Postgrad Scholars",
      meta2: "Case Observation & Research"
    },
    {
      title: "Bring a Programme to My Institution",
      desc: "Evidence-informed workshops for schools, universities, and workplace corporate wellness teams.",
      badge: "INSTITUTIONAL WORKSHOPS",
      linkText: "Explore Workshop Catalogue",
      href: "/workshops",
      icon: Building2,
      tags: ["Customized Modules", "Corporate Wellness", "Campus Gatekeeper PFA"],
      meta1: "Institutions & Workplaces",
      meta2: "Interactive Modules & Guides"
    },
    {
      title: "I Want to Volunteer or Collaborate",
      desc: "Community awareness drives, psychoeducation campaigns, and academic research collaboration.",
      badge: "COMMUNITY & INQUIRIES",
      linkText: "Get Involved",
      href: "/community",
      icon: Users,
      tags: ["Peer Support Facilitation", "Community Mental Health", "Open Research"],
      meta1: "Advocates & Allies",
      meta2: "Community Outreach Circles"
    }
  ];

  return (
    <div className="space-y-32 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION (PDF Section 4.2) */}
      <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Institutional Glass Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono mb-6"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
            <span>REDKROSS RESEARCH FOUNDATION &bull; PSYCHOLOGY WING</span>
          </motion.div>

          {/* Canonical Headline from Spec with glowing understanding */}
          <motion.h1 
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.15, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-bold font-royal uppercase tracking-tight leading-[1.18] mb-6 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent"
          >
            Your mind deserves care, understanding and support.
          </motion.h1>

          {/* Canonical Subtitle from Spec */}
          <motion.p 
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.15, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10"
          >
            RedKross Psychology connects people with mental-health information, counselling enquiries, learning opportunities and community programmes. Explore what is available and take the next step at your own pace.
          </motion.p>

          {/* 3 Primary Glass CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider"
          >
            <Link
              to="/counselling"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-500/20 via-teal-500/30 to-teal-500/20 border border-teal-400/50 hover:border-teal-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] flex items-center gap-2.5 transition-all duration-300 group/btn shadow-lg shadow-teal-950/40"
            >
              <span className="font-royal font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Explore Counselling</span>
              <div className="w-6 h-6 rounded-full bg-teal-400 text-[#08121E] flex items-center justify-center font-bold shadow-md shadow-teal-400/40 group-hover/btn:translate-x-1 group-hover/btn:bg-teal-300 transition-all shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>

            <Link
              to="/services"
              className="px-6 py-3.5 rounded-full bg-[#081524]/80 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400 flex items-center gap-2 transition-all duration-300 group/btn shadow-md shadow-black/40"
            >
              <span className="font-royal font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Explore Services</span>
            </Link>

            <Link
              to="/workshops"
              className="px-6 py-3.5 rounded-full bg-[#081524]/80 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400 flex items-center gap-2 transition-all duration-300 group/btn shadow-md shadow-black/40"
            >
              <span className="font-royal font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Bring a Workshop to Your Institution</span>
            </Link>
          </motion.div>

          {/* Calming Clinical Care Standard */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Supervised Clinical Oversight</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Zero Artificial Diagnostic Claims</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Sliding-Scale &amp; Student Subsidies</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR PATH (PDF Section 4.3) - Bidirectional Slomo Stagger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Navigation Pathways
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-3 font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            Choose Your Journey
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Whether seeking personal solace, practical training, or institutional workshops, explore our verified avenues.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
        >
          {paths.map((p, idx) => (
            <PsychologyThemedCard
              key={idx}
              variant={[1, 4, 8, 10][idx % 4]}
              tagLeft={p.badge}
              tagRight={`Pathway 0${idx + 1}`}
              title={p.title}
              description={p.desc}
              tags={p.tags}
              meta1={{ icon: Users, label: p.meta1 }}
              meta2={{ icon: Monitor, label: p.meta2 }}
              ctaText={p.linkText}
              ctaLink={p.href}
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* 3. SIX CORE PROGRAMMES (PDF Section 2 & 5.2) - Bidirectional Slomo Stagger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Verified Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-3 font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              The Six Core Programmes
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Structured psychological support, institutional training modules, and ethical research inquiries delivered under qualified supervision.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 hover:border-teal-400 transition-all duration-300 group/btn shrink-0 shadow-sm"
          >
            <span className="font-royal text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">View Complete Inventory</span>
            <ArrowRight className="w-4 h-4 text-teal-400 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programmes.map((prog, idx) => (
            <PsychologyThemedCard
              key={prog.id}
              variant={[1, 2, 7, 3, 5, 8][idx % 6]}
              tagLeft={prog.category}
              tagRight={prog.statusBadge}
              title={prog.title}
              description={prog.summary}
              meta1={{ icon: Users, label: `Audience: ${prog.audience}` }}
              meta2={{ icon: Monitor, label: `Format: ${prog.format}` }}
              ctaText={prog.actionText}
              ctaLink={prog.actionHref}
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* 4. HOW SUPPORT WORKS (PDF Section 4.5) - Master Journey Signature Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-[#081524]/85 backdrop-blur-2xl border border-teal-500/25 shadow-2xl shadow-black/60 group">
          {/* Specular top border light beam */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent pointer-events-none z-10" />

          {/* Signature Ethereal Artwork Spanning the Full-Height of the Container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0 select-none">
            <img
              src="/assets/cards/card-workshops-programs-fullspan.png"
              alt=""
              loading="lazy"
              className="absolute right-0 top-0 bottom-0 h-full w-[55%] sm:w-[48%] object-cover object-right opacity-45 group-hover:opacity-75 transition-all duration-700 mix-blend-screen"
            />
            {/* Ambient Teal Glow */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl" />
            {/* Smooth left-to-center dark vignette for perfect text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/95 via-[#071320]/80 to-transparent/30" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10">
            {/* Top Badges Row */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={bidirectionalViewport}
              className="flex flex-wrap items-center justify-between gap-3 mb-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-teal-300 bg-teal-500/15 border border-teal-500/35 backdrop-blur-md shadow-sm shadow-teal-950/30">
                  Ethical Process
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60 backdrop-blur-md">
                  4–Step Clinical Journey
                </span>
              </div>
              <span className="text-xs font-mono text-teal-400/80 bg-teal-500/5 px-3 py-1 rounded-full border border-teal-500/15">
                MHCA 2017 &amp; RCI Compliant
              </span>
            </motion.div>

            {/* Header Text */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={bidirectionalViewport}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight font-royal mb-3 uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                How Support Works: Our 4-Step Journey
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                We eliminate ambiguity. Every individual receives clear communication, transparent boundary briefings, and zero pressure at every phase.
              </p>
            </motion.div>

            {/* Steps Timeline - Process Flow (Connected Steps, Not Boxy) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={bidirectionalViewport}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
            >
              {howSupportWorks.map((step, idx) => (
                <PsychologyThemedCard
                  key={step.step}
                  variant={[1, 8, 9, 10][idx % 4]}
                  tagLeft={step.badge}
                  tagRight={`Phase ${step.step}`}
                  title={step.title}
                  description={step.description}
                  bullets={[
                    "Transparent communication & zero pressure",
                    "Complete data minimisation guarantee",
                    "Immediate withdrawal rights at any point"
                  ]}
                  meta1={{ icon: ShieldCheck, label: "Verified Protocol" }}
                  meta2={{ icon: Clock, label: `Phase ${step.step} of 04` }}
                  ctaText="Explore Care Pathway"
                  ctaLink="/counselling"
                  motionVariants={itemVariants}
                />
              ))}
            </motion.div>

            {/* Bottom Full-Width Glowing Pill CTA Action Bar (Signature Dicto Element) */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={bidirectionalViewport}
              className="mt-12 pt-6 border-t border-teal-500/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero unsolicited calls • Complete data minimisation • Immediate withdrawal rights</span>
              </div>

              <Link
                to="/counselling"
                className="h-11 sm:h-12 px-6 rounded-full bg-gradient-to-r from-teal-500/20 via-teal-500/25 to-teal-500/30 border border-teal-500/40 hover:border-teal-300 hover:from-teal-500/35 hover:to-teal-500/50 flex items-center justify-between gap-4 transition-all duration-300 group/btn shadow-lg shadow-teal-950/50 text-xs sm:text-sm font-semibold shrink-0"
              >
                <span className="font-royal font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Initiate Confidential Enquiry</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-400 text-[#08121E] flex items-center justify-center font-bold shadow-md shadow-teal-400/40 group-hover/btn:translate-x-1 group-hover/btn:bg-teal-300 transition-all shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ACCESS & AFFORDABILITY (PDF Section 4.6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="lg:col-span-5 space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Fair &amp; Transparent Care
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-snug font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              {accessAndAffordability.headline}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {accessAndAffordability.statement}
            </p>
            <div className="pt-2">
              <Link
                to="/counselling"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 via-teal-500/25 to-teal-500/30 border border-teal-500/40 hover:border-teal-300 transition-all duration-300 group/btn shadow-md"
              >
                <span className="font-royal text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Read Counselling Fee Details</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {accessAndAffordability.principles.map((pr, idx) => (
              <PsychologyThemedCard
                key={idx}
                variant={[6, 8, 10, 3][idx % 4]}
                tagLeft={`Principle 0${idx + 1}`}
                tagRight="Affordability"
                title={pr.title}
                description={pr.description}
                meta1={{ icon: Users, label: "Transparent Criteria" }}
                meta2={{ icon: Monitor, label: "Sliding Scale & Subsidy" }}
                ctaText="Read Fee Details"
                ctaLink="/counselling"
                motionVariants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TRAINING & INTERNSHIPS (PDF Section 5.6) - Bidirectional Slomo Stagger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Responsible Academics
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-3 font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              Supervised Psychology Internship Tracks
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Three accredited learning pathways for undergraduate and postgraduate scholars. Supervised by qualified faculty with strict clinical boundaries.
            </p>
          </div>
          <Link
            to="/internship"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 hover:border-teal-400 transition-all duration-300 group/btn shrink-0 shadow-sm"
          >
            <span className="font-royal text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Track Application Details</span>
            <ArrowRight className="w-4 h-4 text-teal-400 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {internships.map((track, idx) => (
            <PsychologyThemedCard
              key={track.id}
              variant={[3, 4, 9][idx % 3]}
              tagLeft={track.badge}
              tagRight={track.commitment}
              title={track.title}
              description={track.objectives}
              bullets={[
                `Eligibility: ${track.level}`,
                `Boundary: ${track.boundaries}`
              ]}
              meta1={{ icon: GraduationCap, label: track.level }}
              meta2={{ icon: ShieldCheck, label: "Supervised • Non-Autonomous" }}
              ctaText="Review Track & Apply"
              ctaLink="/internship"
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* 7. WORKSHOPS CATALOGUE (PDF Section 5.5) - Bidirectional Slomo Stagger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Institutional Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-3 font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              Workshops for Schools, Colleges &amp; Workplaces
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Curated psychoeducation modules designed to cultivate psychological literacy, emotional regulation, and peer listening capacity.
            </p>
          </div>
          <Link
            to="/workshops"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 hover:border-teal-400 transition-all duration-300 group/btn shrink-0 shadow-sm"
          >
            <span className="font-royal text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">View All Modules</span>
            <ArrowRight className="w-4 h-4 text-teal-400 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workshops.map((ws, idx) => (
            <PsychologyThemedCard
              key={ws.id}
              variant={[4, 2, 8][idx % 3]}
              tagLeft={ws.duration}
              tagRight={ws.languages}
              title={ws.title}
              description={ws.summary}
              bullets={[
                `Audience: ${ws.audience}`,
                `Cohort Cap: ${ws.groupSize}`
              ]}
              meta1={{ icon: Users, label: `Cohort: ${ws.groupSize}` }}
              meta2={{ icon: Monitor, label: ws.languages }}
              ctaText="Request Session"
              ctaLink="/workshops"
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* 8. COMMUNITY & ACTIVITIES (PDF Section 5.7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Grassroots Outreach
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-3 font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            Community Activities &amp; Awareness
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Taking mental health awareness beyond clinical doors and into schools, public spaces, and peer circles.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {communityActivities.map((act, idx) => (
            <PsychologyThemedCard
              key={idx}
              variant={[2, 5, 7, 8][idx % 4]}
              tagLeft={act.type}
              tagRight={act.frequency}
              title={act.title}
              description={act.description}
              meta1={{ icon: Users, label: "Open Public Circles" }}
              meta2={{ icon: Clock, label: act.frequency }}
              ctaText="Join Activity Circle"
              ctaLink="/community"
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* 9. TRUST, SAFETY & CLINICAL BOUNDARIES (PDF Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card relative overflow-hidden">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="max-w-2xl mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Institutional Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-3 font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              {trustAndSafety.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We never compromise on safety, legal boundaries, or privacy. Here is our ethical commitment to every visitor.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {trustAndSafety.corePillars.map((pillar, idx) => (
              <PsychologyThemedCard
                key={idx}
                variant={[6, 9, 3, 1][idx % 4]}
                tagLeft="Safety Pillar"
                tagRight={`0${idx + 1}`}
                title={pillar.title}
                description={pillar.description}
                meta1={{ icon: ShieldCheck, label: "Strict Clinical Governance" }}
                meta2={{ icon: Users, label: "Safeguarding Protocol" }}
                ctaText="Read Safeguarding Charter"
                ctaLink="/trust-and-safety"
                motionVariants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (Accordion Component - PDF Section 5.13) */}
      <FrequentlyAskedQuestions 
        title="Frequently Asked Questions"
        description="Transparent guidance regarding clinical confidentiality, session protocols, sliding scales, and institutional workshops. If you don't find what you need, please reach out directly to"
        supportEmail="psychology@redkross.org.in"
        data={faqs.map(f => ({ question: f.q, answer: f.a }))}
        className="py-12"
      />

      {/* 11. CLOSING INSTITUTIONAL CTA - Signature Themed Card Motif */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="p-8 sm:p-14 rounded-3xl bg-[#091522]/95 backdrop-blur-2xl border border-teal-500/35 hover:border-teal-400/60 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative overflow-hidden shadow-2xl shadow-black/80 group"
        >
          {/* Full-bleed signature background pattern illustration */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity group-hover:opacity-35 transition-opacity duration-700 pointer-events-none scale-105"
            style={{ backgroundImage: `url('/assets/cards/card-book-appointment-fullspan.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101B]/95 via-[#06101B]/85 to-[#06101B]/75 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 font-mono">
              Take the Next Step // Confidential Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-4 font-royal uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              Begin an Enquiry at Your Own Pace
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              We provide a safe, respectful environment. No sensitive clinical disclosures in public forms—just a compassionate conversation about how we can help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 relative z-10">
            <Link
              to="/counselling"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-500/20 via-teal-500/30 to-teal-500/20 border border-teal-400/50 hover:border-teal-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] transition-all duration-300 group/btn shadow-lg shadow-teal-950/40"
            >
              <span className="font-royal font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Enquire for Counselling</span>
              <div className="w-6 h-6 rounded-full bg-teal-400 text-[#08121E] flex items-center justify-center font-bold shadow-md shadow-teal-400/40 group-hover/btn:translate-x-1 group-hover/btn:bg-teal-300 transition-all shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#081524]/80 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400 transition-all duration-300 group/btn shadow-md"
            >
              <span className="font-royal font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Contact Coordinator</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
