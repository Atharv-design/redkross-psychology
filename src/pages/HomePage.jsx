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
  PhoneCall, 
  Compass, 
  Clock, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  HelpCircle,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';

export default function HomePage() {
  const { programmes, howSupportWorks, accessAndAffordability, internships, workshops, trustAndSafety } = PSYCHOLOGY_DATA;

  const paths = [
    {
      title: "I Need Support",
      desc: "One-on-one counselling, student guidance, and small guided peer support circles.",
      badge: "CARE & COUNSELLING",
      linkText: "Explore Support Options",
      href: "/counselling",
      icon: HeartHandshake,
      color: "from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-300"
    },
    {
      title: "I Want to Learn or Train",
      desc: "Psychological First Aid (PFA) and 3 supervised psychology internship tracks.",
      badge: "SKILLS & INTERNSHIPS",
      linkText: "View Internship Tracks",
      href: "/internship",
      icon: GraduationCap,
      color: "from-blue-500/20 to-teal-500/10 border-blue-500/30 text-blue-300"
    },
    {
      title: "Bring a Programme to My Institution",
      desc: "Evidence-informed workshops for schools, universities, and workplace teams.",
      badge: "INSTITUTIONAL WORKSHOPS",
      linkText: "Explore Workshop Catalogue",
      href: "/workshops",
      icon: Building2,
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300"
    },
    {
      title: "I Want to Volunteer or Collaborate",
      desc: "Community awareness drives, psychoeducation campaigns, and research inquiries.",
      badge: "COMMUNITY & INQUIRIES",
      linkText: "Get Involved",
      href: "/community",
      icon: Users,
      color: "from-purple-500/20 to-teal-500/10 border-purple-500/30 text-purple-300"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION (PDF Section 4.2) */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Soft Calming Ambient Background Light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-emerald-600/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Institutional Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-xs font-mono text-teal-300 mb-6 backdrop-blur-md"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
            <span>REDKROSS RESEARCH FOUNDATION &bull; PSYCHOLOGY WING</span>
          </motion.div>

          {/* Canonical Headline from Spec */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white font-royal tracking-tight leading-[1.15] mb-6"
          >
            Your mind deserves care, <span className="text-teal-400 font-sans font-extrabold">understanding</span> and support.
          </motion.h1>

          {/* Canonical Subtitle from Spec */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-10"
          >
            RedKross Psychology connects people with mental-health information, counselling enquiries, learning opportunities and community programmes. Explore what is available and take the next step at your own pace.
          </motion.p>

          {/* 3 Primary CTAs per Section 4.2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-royal font-bold uppercase tracking-wider"
          >
            <Link
              to="/counselling"
              className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white transition-all shadow-[0_0_25px_rgba(13,148,136,0.35)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] flex items-center gap-2"
            >
              <span>Explore Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-teal-500/40 text-slate-200 hover:text-white transition-all backdrop-blur-md"
            >
              Explore All Services
            </Link>

            <Link
              to="/workshops"
              className="px-6 py-3.5 rounded-xl bg-amber-500/15 border border-amber-500/35 hover:border-amber-400 text-amber-300 hover:bg-amber-500/25 transition-all"
            >
              Bring a Workshop to Your Institution
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 2. CHOOSE YOUR PATH (PDF Section 4.3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-2 font-semibold">
            VISITOR JOURNEYS
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-royal text-white tracking-tight">
            Choose Your Path
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans">
            How can RedKross Psychology assist or collaborate with you today?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-b ${p.color} border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 font-bold uppercase">
                      {p.badge}
                    </span>
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="text-lg font-bold font-royal text-white mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    {p.desc}
                  </p>
                </div>

                <Link
                  to={p.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:underline"
                >
                  <span>{p.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. THE 6 CORE PROGRAMMES (PDF Section 4.4 & 5.2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-2 font-semibold">
            PROGRAMME INVENTORY // ACCREDITED SCOPE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-royal text-white tracking-tight">
            Comprehensive Services Overview
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans leading-relaxed">
            Direct personal support, youth counselling, guided peer groups, frontline training, and community research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0F172A]/70 border border-white/10 hover:border-teal-500/35 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group hover:shadow-[0_10px_30px_rgba(13,148,136,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-semibold uppercase">
                    {prog.category}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                    {prog.statusBadge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-royal text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {prog.summary}
                </p>

                <div className="space-y-2 mb-4 text-[11px] font-mono">
                  <div className="text-slate-400">
                    <strong className="text-slate-300">Format:</strong> {prog.format}
                  </div>
                  <div className="text-slate-400">
                    <strong className="text-slate-300">Audience:</strong> {prog.audience}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[10px] font-sans text-slate-400 mb-4 leading-relaxed">
                  <strong className="text-teal-300 font-mono uppercase block mb-0.5">What is Offered:</strong>
                  {prog.whatIsOffered}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={prog.actionHref}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-400 hover:underline"
                >
                  <span>{prog.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[9px] font-mono text-slate-500">
                  {prog.availability}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. HOW SUPPORT WORKS (PDF Section 4.5 & 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131C2E] to-[#0D1424] border border-white/10 relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-2 font-semibold">
              CLINICAL ETHICS &amp; INTAKE PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-royal text-white tracking-tight">
              How Support Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans">
              A transparent, safe 4-step process designed to protect personal boundaries and assess genuine mutual fit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {howSupportWorks.map((st) => (
              <div 
                key={st.step}
                className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-royal text-teal-400">
                      {st.step}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 uppercase">
                      {st.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-royal text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ACCESS & AFFORDABILITY (PDF Section 4.6 & 10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="lg:col-span-1">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-2 font-semibold">
              TRANSPARENT CONTRIBUTION POLICY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-royal text-white tracking-tight leading-tight mb-4">
              Access &amp; Affordability
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
              {accessAndAffordability.statement}
            </p>
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Ethical Note:</strong> We publish auditable sliding-scale slots rather than making false claims like "no one is ever turned away."
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {accessAndAffordability.principles.map((pr) => (
              <div 
                key={pr.title}
                className="p-5 rounded-2xl bg-[#0F172A]/70 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <h3 className="text-sm font-bold font-royal text-white">
                    {pr.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TRAINING & INTERNSHIPS (PDF Section 4.7 & 5.6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-2 font-semibold">
            ACADEMIC INTEGRITY &bull; PROFESSIONAL SUPERVISION
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-royal text-white tracking-tight">
            Internship Programmes (3 Verified Tracks)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans">
            Structured experiential learning for undergraduate and postgraduate psychology students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {internships.map((track) => (
            <div 
              key={track.id}
              className="p-6 rounded-2xl bg-[#0F172A]/70 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-semibold uppercase">
                    {track.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{track.duration}</span>
                </div>

                <h3 className="text-xl font-bold font-royal text-white mb-2">
                  {track.title}
                </h3>

                <div className="text-xs font-mono text-slate-400 mb-3">
                  Eligibility: {track.level}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {track.objectives}
                </p>

                <div className="space-y-1.5 mb-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Core Tasks:</div>
                  {track.tasks.slice(0, 3).map((t, i) => (
                    <div key={i} className="text-[11px] text-slate-300 font-sans flex items-start gap-1.5">
                      <span className="text-teal-400">&bull;</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-amber-500/[0.08] border border-amber-500/20 text-[10px] text-amber-200/90 leading-relaxed mb-4">
                  <strong>Strict Boundary:</strong> {track.boundaries}
                </div>
              </div>

              <Link
                to="/internship"
                className="w-full py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-teal-500/40 text-center text-xs font-mono font-bold text-teal-300 hover:text-white transition-all"
              >
                Review Track &amp; Apply
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMMUNITY & WORKSHOPS (PDF Section 4.8 & 5.5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-950/40 via-[#0B1526] to-[#0A1020] border border-teal-500/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-2 font-semibold">
              INSTITUTIONAL CURRICULUM DELIVERY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-royal text-white mb-3">
              Workshops for Schools, Colleges &amp; Workplaces
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
              Bring tailored psychoeducation, Psychological First Aid (PFA), exam anxiety management, and digital wellbeing workshops to your campus or organizational team.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5">Mental Health Literacy 101</span>
              <span className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5">Exam Stress Coping</span>
              <span className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5">Frontline PFA</span>
              <span className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5">Digital Wellbeing</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              to="/workshops"
              className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-royal font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] text-center"
            >
              Explore Full Catalogue
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-white font-royal font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Request Institutional Booking
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TRUST, SAFETY & BOUNDARIES (PDF Section 4.10 & 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-2 font-semibold">
            ETHICAL ACCOUNTABILITY &bull; CLINICAL GOVERNANCE
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-royal text-white tracking-tight">
            Trust &amp; Clinical Safety Pillars
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans">
            Our explicit policies on confidentiality limits, professional supervision, and emergency boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {trustAndSafety.corePillars.map((p) => (
            <div 
              key={p.title}
              className="p-6 rounded-2xl bg-[#0F172A]/80 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                  <h3 className="text-base font-bold font-royal text-white">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
