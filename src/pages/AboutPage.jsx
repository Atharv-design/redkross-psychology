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
  GraduationCap
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
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-4">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-4">
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
              <h4 className="font-semibold text-amber-300 mb-1">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-4">
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
            className="p-8 sm:p-12 rounded-3xl glass-card flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Take the Next Step
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
                Need Support, Training, or Institutional Collaboration?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are seeking personal support, looking to build mental health literacy in your school or workplace, or wishing to apply for our training cohorts, we are here to guide you at your own pace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to="/counselling"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-button-primary text-slate-950 font-semibold text-sm"
              >
                <span>Explore Counselling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/workshops"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-button-secondary text-slate-200 font-semibold text-sm"
              >
                <span>Browse Workshops</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-button-secondary text-slate-200 font-semibold text-sm"
              >
                <span>Contact Desk</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
