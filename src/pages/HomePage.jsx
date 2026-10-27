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
  Lightbulb
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
      desc: "One-on-one counselling, student guidance, and small guided peer support circles.",
      badge: "CARE & COUNSELLING",
      linkText: "Explore Support Options",
      href: "/counselling",
      icon: HeartHandshake,
      accent: "teal"
    },
    {
      title: "I Want to Learn or Train",
      desc: "Psychological First Aid (PFA) and 3 supervised psychology internship tracks.",
      badge: "SKILLS & INTERNSHIPS",
      linkText: "View Internship Tracks",
      href: "/internship",
      icon: GraduationCap,
      accent: "cyan"
    },
    {
      title: "Bring a Programme to My Institution",
      desc: "Evidence-informed workshops for schools, universities, and workplace teams.",
      badge: "INSTITUTIONAL WORKSHOPS",
      linkText: "Explore Workshop Catalogue",
      href: "/workshops",
      icon: Building2,
      accent: "amber"
    },
    {
      title: "I Want to Volunteer or Collaborate",
      desc: "Community awareness drives, psychoeducation campaigns, and research inquiries.",
      badge: "COMMUNITY & INQUIRIES",
      linkText: "Get Involved",
      href: "/community",
      icon: Users,
      accent: "emerald"
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
            className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.14] mb-6"
          >
            Your mind deserves care, <span className="text-[#2dd4bf] drop-shadow-[0_0_25px_rgba(45,212,191,0.4)]">understanding</span> and support.
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
              className="px-6 py-3.5 rounded-xl glass-button-primary text-slate-950 flex items-center gap-2"
            >
              <span>Explore Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="px-6 py-3.5 rounded-xl glass-button-secondary flex items-center gap-2"
            >
              <span>Explore Services</span>
            </Link>

            <Link
              to="/workshops"
              className="px-6 py-3.5 rounded-xl glass-button-secondary text-slate-300 flex items-center gap-2"
            >
              <span>Bring a Workshop to Your Institution</span>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {paths.map((p, idx) => (
            <PsychologyThemedCard
              key={idx}
              variant={[1, 4, 8, 10][idx % 4]}
              tagLeft={p.badge}
              tagRight={`Pathway 0${idx + 1}`}
              title={p.title}
              description={p.desc}
              meta1={{ icon: Users, label: "Individual & Cohorts" }}
              meta2={{ icon: Monitor, label: "Online & In-Person" }}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
              The Six Core Programmes
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Structured psychological support, institutional training modules, and ethical research inquiries delivered under qualified supervision.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-400 hover:text-teal-300 transition-colors shrink-0"
          >
            <span>View Complete Inventory</span>
            <ArrowRight className="w-4 h-4" />
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

      {/* 4. HOW SUPPORT WORKS (PDF Section 4.5) - Bidirectional Slomo Stagger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card relative overflow-hidden">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Ethical Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
              How Support Works: Our 4-Step Journey
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We eliminate ambiguity. Every individual receives clear communication, transparent boundary briefings, and zero pressure.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={bidirectionalViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {howSupportWorks.map((step) => (
              <motion.div 
                key={step.step}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-[#08121E]/60 backdrop-blur-md border border-teal-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-teal-400/40 font-mono">
                      {step.step}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold uppercase tracking-wider">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {accessAndAffordability.headline}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {accessAndAffordability.statement}
            </p>
            <div className="pt-2">
              <Link
                to="/counselling"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-button-primary text-slate-950 text-xs font-bold uppercase tracking-wider"
              >
                <span>Read Counselling Fee Details</span>
                <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
              Supervised Psychology Internship Tracks
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Three accredited learning pathways for undergraduate and postgraduate scholars. Supervised by qualified faculty with strict clinical boundaries.
            </p>
          </div>
          <Link
            to="/internship"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-400 hover:text-teal-300 transition-colors shrink-0"
          >
            <span>Track Application Details</span>
            <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
              Workshops for Schools, Colleges &amp; Workplaces
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Curated psychoeducation modules designed to cultivate psychological literacy, emotional regulation, and peer listening capacity.
            </p>
          </div>
          <Link
            to="/workshops"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-400 hover:text-teal-300 transition-colors shrink-0"
          >
            <span>View All Modules</span>
            <ArrowRight className="w-4 h-4" />
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 mb-3">
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

      {/* 11. CLOSING INSTITUTIONAL CTA - Bidirectional Slomo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={bidirectionalViewport}
          className="p-8 sm:p-14 rounded-3xl glass-card flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Take the Next Step
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              Begin an Enquiry at Your Own Pace
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide a safe, respectful environment. No sensitive clinical disclosures in public forms—just a compassionate conversation about how we can help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              to="/counselling"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-button-primary text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Enquire for Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-button-secondary text-slate-200 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Contact Coordinator</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
