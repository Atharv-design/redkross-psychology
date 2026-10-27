import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  Scale, 
  BookOpen, 
  Users, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  Building2,
  FileText,
  UserCheck,
  Stethoscope,
  GraduationCap,
  Monitor
} from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';
import PsychologyThemedCard from '@/components/ui/PsychologyThemedCard';

// Bidirectional Slow-Motion Animation System
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

export default function AboutPage() {
  const { identity, about } = PSYCHOLOGY_DATA;

  return (
    <div className="min-h-screen text-slate-100 pb-20 overflow-hidden">
      {/* 1. Page Header & Editorial Breadcrumb */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-teal-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold tracking-wider uppercase mb-5">
              <Compass className="w-3.5 h-3.5" />
              <span>Organisational Origin &amp; Ethical Governance</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-royal uppercase tracking-tight mb-6 leading-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              About RedKross Psychology
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              We are the psychology and mental-wellbeing wing of RedKross Research Foundation. Founded on the belief that scientific knowledge must directly protect human dignity, we provide accessible, evidence-informed, and stigma-free support within transparent clinical boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Origin Story: From Technology to Community Wellbeing (Bidirectional) */}
      <section className="py-16 md:py-24 border-b border-teal-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Origin Story */}
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={bidirectionalViewport}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Our Provenance
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-royal uppercase tracking-tight leading-snug bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                {about.origin.headline}
              </h2>
              
              <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  RedKross began its journey as a technology and cybersecurity research organisation with a fundamental conviction: technical knowledge and scientific inquiry must directly serve human dignity and societal resilience.
                </p>
                <p>
                  As our interdisciplinary teams engaged across educational institutions, youth initiatives, and community digital literacy programmes, we witnessed first-hand the pervasive, silent crises of academic burnout, examination anxiety, caregiver fatigue, and deep-seated cultural stigma around psychological distress.
                </p>
                <p>
                  The psychology wing emerged in direct response to these community realities. Rather than creating a commercial wellness brand or algorithmic app, we established an ethical, community-anchored mental health division dedicated to accessible, stigma-free guidance, validated psychoeducation, and transparent clinical governance.
                </p>
              </div>

              {/* Institutional Registration Glass Card */}
              <div className="mt-8 p-6 rounded-2xl glass-card space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>Institutional Backing &amp; Corporate Registration</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {about.origin.institutionalBacking}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400 border-t border-teal-500/15">
                  <div>
                    <span className="text-slate-500">CIN: </span>
                    <span className="text-slate-200">{identity.parentOrg.cin}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Legal Form: </span>
                    <span className="text-slate-200">Section 8 Non-Profit</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Jurisdiction: </span>
                    <span className="text-slate-200">RoC Haryana</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mission & Vision Glass Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={bidirectionalViewport}
              className="lg:col-span-5 space-y-6"
            >
              <PsychologyThemedCard
                variant={4}
                tagLeft="Core Direction"
                tagRight="Established"
                title="Our Mission"
                description={about.mission}
                meta1={{ icon: Compass, label: "Compassionate De-Stigmatisation" }}
                meta2={{ icon: Users, label: "Equitable Community Care" }}
                ctaText="Read Clinical Values"
                ctaLink="#values"
                motionVariants={itemVariants}
              />

              <PsychologyThemedCard
                variant={5}
                tagLeft="Future Aspiration"
                tagRight="Horizon 2030"
                title="Our Vision"
                description={about.vision}
                meta1={{ icon: Sparkles, label: "Holistic Mental Literacy" }}
                meta2={{ icon: ShieldCheck, label: "Highest Ethical Standards" }}
                ctaText="Explore Governance"
                ctaLink="#governance"
                motionVariants={itemVariants}
              />

              {/* Ecosystem Cross-Link */}
              <motion.div variants={itemVariants} className="p-6 rounded-2xl glass-card flex items-start gap-4">
                <FileText className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-semibold text-white mb-1">Parent Foundation Governance</div>
                  <p className="text-slate-400 mb-3 text-xs leading-relaxed">
                    View official foundation articles, registered office filings, board disclosures, and institutional reports on the main foundation platform.
                  </p>
                  <a
                    href={identity.parentOrg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span>Visit redkross.org.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values & Ethical Pillars (PDF Section 5.1) - Bidirectional Slomo Stagger */}
      <section className="py-16 md:py-24 border-b border-teal-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="max-w-3xl mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Ethical Code
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-royal uppercase tracking-tight mt-2 mb-4 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              Core Values &amp; Non-Negotiable Standards
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We operate under six foundational principles that govern every service, interaction, training track, and community dialogue.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {about.values.map((val, idx) => (
              <PsychologyThemedCard
                key={val.id}
                variant={[1, 2, 6, 7, 8, 9][idx % 6]}
                tagLeft={val.principle}
                tagRight={`Value 0${idx + 1}`}
                title={val.name}
                description={val.description}
                meta1={{ icon: CheckCircle2, label: "Enforced Across All Programmes" }}
                meta2={{ icon: ShieldCheck, label: "Code of Ethics Compliance" }}
                ctaText="Read Ethical Scope"
                ctaLink="#governance"
                motionVariants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Clinical Governance, Role Boundaries & Safety Architecture (PDF Section 5.1 & 6) */}
      <section className="py-16 md:py-24 border-b border-teal-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Clinical Integrity
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-royal uppercase tracking-tight mt-2 mb-4 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              {about.governance.headline}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {about.governance.description}
            </p>
          </motion.div>

          {/* Delineated Scope of Practice Table / Glass Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
          >
            {about.governance.roles.map((item, idx) => (
              <PsychologyThemedCard
                key={idx}
                variant={[1, 3, 9, 7][idx % 4]}
                tagLeft={idx === 0 ? "Tier 1: Talk Therapy" : idx === 1 ? "Tier 2: RCI Clinical" : idx === 2 ? "Tier 3: Medical / MD" : "Tier 4: Supervised"}
                tagRight={`Role 0${idx + 1}`}
                title={item.role}
                description={item.scope}
                bullets={[`Credentials: ${item.credentials}`]}
                meta1={{ icon: idx === 0 ? UserCheck : idx === 1 ? ShieldCheck : idx === 2 ? Stethoscope : GraduationCap, label: item.credentials }}
                meta2={{ icon: ShieldCheck, label: "Strict Supervision Boundary" }}
                ctaText="View Clinical Framework"
                ctaLink="/counselling"
                motionVariants={itemVariants}
              />
            ))}
          </motion.div>

          {/* Explicit Clinical Governance Note from Specification */}
          <div className="p-6 rounded-2xl bg-amber-500/10 backdrop-blur-md border border-amber-500/25 flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <h4 className="font-royal font-bold uppercase tracking-wider text-amber-300 mb-1">
                Practitioner Credential Transparency Policy
              </h4>
              <p className="text-amber-200/90 text-xs sm:text-sm leading-relaxed">
                In strict compliance with our ethical brief (October 2026), practitioner biographies and individual qualifications are published only after thorough credential verification, verified background checks, and signed practitioner consent. We do not use generic stock avatars, unverified claims of external accreditation, or fabricated outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The RedKross Tri-Platform Ecosystem Context */}
      <section className="py-16 md:py-24 border-b border-teal-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Ecosystem Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-royal uppercase tracking-tight mt-2 mb-4 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              How RedKross Operates Across Disciplines
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              RedKross Research Foundation operates three dedicated platforms, each with strict domain boundaries, specialized teams, and transparent governance.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* 1. Parent Foundation */}
            <PsychologyThemedCard
              variant={4}
              tagLeft="Parent Non-Profit Entity"
              tagRight="redkross.org.in"
              title="RedKross Foundation"
              description="Section 8 non-profit institutional home. Manages overall corporate governance, institutional compliance, research ethics committees, and multi-stakeholder partnerships."
              meta1={{ icon: Building2, label: "Corporate Governance & Compliance" }}
              meta2={{ icon: FileText, label: "Registered Non-Profit Section 8" }}
              ctaText="Visit Main Foundation"
              ctaLink={identity.parentOrg.url}
              motionVariants={itemVariants}
            />

            {/* 2. Psychology Subdomain (Current) */}
            <PsychologyThemedCard
              variant={10}
              tagLeft="Mental Wellbeing Division"
              tagRight="Current Platform"
              title="RedKross Psychology"
              description="Accessible counselling enquiries, facilitated support groups, institutional workshops, Psychological First Aid (PFA) training, and community mental health literacy."
              meta1={{ icon: Heart, label: "Clinical & Community Services" }}
              meta2={{ icon: Users, label: "Active Platform Session" }}
              ctaText="Explore Care Inventory"
              ctaLink="/programmes"
              motionVariants={itemVariants}
              className="border-2 border-teal-400/50 shadow-2xl shadow-teal-950/40"
            />

            {/* 3. Cybersecurity Subdomain */}
            <PsychologyThemedCard
              variant={8}
              tagLeft="Technical Security Division"
              tagRight="cyber.redkross.org.in"
              title="RedKross Cybersecurity"
              description="Technical security research, open-source penetration testing tools, red-teaming frameworks, vulnerability advisories, and cybersecurity training laboratories."
              meta1={{ icon: ShieldCheck, label: "Securing Digital Infrastructure" }}
              meta2={{ icon: Monitor, label: "Red-Teaming & Research" }}
              ctaText="Visit Cybersecurity Wing"
              ctaLink={identity.cyberSubdomain.url}
              motionVariants={itemVariants}
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Direct Action & Support Next Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="p-8 sm:p-12 rounded-3xl bg-[#091522]/95 backdrop-blur-2xl border border-teal-500/35 hover:border-teal-400/60 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative overflow-hidden shadow-2xl shadow-black/80 group"
          >
            {/* Signature Themed Card Background Artwork */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity group-hover:opacity-35 transition-opacity duration-700 pointer-events-none scale-105"
              style={{ backgroundImage: `url('/assets/cards/card-about-therapist-fullspan.png')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06101B]/95 via-[#06101B]/85 to-[#06101B]/75 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 font-mono">
                Take the Next Step // Institutional Collaboration
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-royal uppercase tracking-tight mt-2 mb-3 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                Need Support, Training, or Institutional Collaboration?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                Whether you are seeking personal support, looking to build mental health literacy in your school or workplace, or wishing to apply for our training cohorts, we are here to guide you at your own pace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 relative z-10">
              <Link
                to="/counselling"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-500/20 via-teal-500/30 to-teal-500/20 border border-teal-400/50 hover:border-teal-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] transition-all duration-300 group/btn shadow-lg shadow-teal-950/40"
              >
                <span className="font-royal font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Explore Counselling</span>
                <div className="w-6 h-6 rounded-full bg-teal-400 text-[#08121E] flex items-center justify-center font-bold shadow-md shadow-teal-400/40 group-hover/btn:translate-x-1 group-hover/btn:bg-teal-300 transition-all shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </Link>
              <Link
                to="/workshops"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#081524]/80 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400 transition-all duration-300 group/btn shadow-md"
              >
                <span className="font-royal font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Browse Workshops</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#081524]/80 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400 transition-all duration-300 group/btn shadow-md"
              >
                <span className="font-royal font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/btn:from-white group-hover/btn:to-teal-200">Contact Desk</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
