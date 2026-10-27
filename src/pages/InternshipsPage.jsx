import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Users, 
  Send,
  Sparkles
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

export default function InternshipsPage() {
  const { internships } = PSYCHOLOGY_DATA;

  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    academicLevel: 'undergrad',
    institution: '',
    track: 'foundation-track',
    sop: '',
    boundaryConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!applicationData.boundaryConsent) {
      alert("Please acknowledge that internships are strictly educational and do not involve independent clinical therapy.");
      return;
    }
    setSubmitted(true);
  };

  const trackVariants = [1, 4, 3];

  return (
    <div className="relative w-full overflow-hidden pb-24">
      {/* Ambient Radial Luminous Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[850px] -right-36 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-mono tracking-wider backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
            <span>STRUCTURED PRACTICUM & RESEARCH FELLOWSHIPS // 3 TRACKS</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent leading-[1.15]"
          >
            INTERNSHIP OPPORTUNITIES & RESEARCH PRACTICUM
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            Supervised experiential pathways for undergraduate and postgraduate psychology students. Gain grounded exposure in psychoeducation design, community outreach, and empirical research under licensed faculty supervision.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#apply-form"
              className="px-6 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 shadow-lg shadow-teal-950/40 flex items-center gap-2.5 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-200">
                Apply for Next Cohort
              </span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#tracks"
              className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-teal-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 group-hover:text-teal-200">
                Explore The 3 Tracks
              </span>
              <BookOpen className="w-4 h-4 text-teal-400" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* The 3 Signature Tracks using PsychologyThemedCard */}
      <section id="tracks" className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            THE 3 STRUCTURED INTERNSHIP TRACKS
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Clear duration, learning outcomes, and ethical supervision boundaries for every level of academic preparation.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {internships.map((track, idx) => {
            const variantNumber = trackVariants[idx % trackVariants.length];
            return (
              <PsychologyThemedCard
                key={track.id || idx}
                variant={variantNumber}
                tagLeft={track.duration || "Internship"}
                tagRight={track.badge || "Verified"}
                title={track.title}
                description={track.objectives}
                bullets={track.tasks ? track.tasks.slice(0, 3) : [track.level]}
                meta1={{ icon: Clock, label: track.commitment }}
                meta2={{ icon: ShieldCheck, label: track.supervision }}
                ctaText="Apply for Track"
                ctaLink="#apply-form"
                motionVariants={itemVariants}
              />
            );
          })}
        </motion.div>
      </section>

      {/* Ethical Guardrail Disclaimer Box */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto">
        <div className="rounded-2xl p-6 sm:p-8 bg-amber-950/20 border border-amber-500/30 flex flex-col sm:flex-row items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="text-base font-royal font-bold uppercase tracking-tight text-amber-200">
              STRICT ETHICAL SAFEGUARDING & CLINICAL BOUNDARIES
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
              At RedKross Psychology, student interns and volunteers <strong>NEVER</strong> independently diagnose, counsel, or access confidential client psychotherapy records. All internship activities are strictly educational, focused on psychoeducation synthesis, PFA observation, and research.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0B1E2E]/90 backdrop-blur-2xl border border-teal-500/30 shadow-2xl relative">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/40">
              COHORT INTAKE PORTAL
            </span>
            <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              APPLY FOR REDKROSS INTERNSHIP
            </h2>
            <p className="text-xs sm:text-sm text-slate-300/80 font-sans">
              Cohorts are selected based on academic alignment, curiosity, and commitment to ethical non-profit psychological science.
            </p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-teal-950/50 border border-teal-500/40 text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto" />
              <h3 className="text-xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                Application Submitted
              </h3>
              <p className="text-sm text-slate-300 font-sans max-w-lg mx-auto">
                Thank you, <strong>{applicationData.fullName}</strong>. Your application for the <strong>{applicationData.track}</strong> has been received. Our academic coordinator will review your profile and contact you at <strong>{applicationData.email}</strong> regarding interview dates.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-xs font-royal uppercase font-bold text-teal-200"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.fullName}
                    onChange={(e) => setApplicationData({ ...applicationData, fullName: e.target.value })}
                    placeholder="e.g. Aman Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                    placeholder="e.g. aman@university.edu"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    College / University Affiliation *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.institution}
                    onChange={(e) => setApplicationData({ ...applicationData, institution: e.target.value })}
                    placeholder="e.g. Delhi University / Panjab University"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Current Academic Level *
                  </label>
                  <select
                    value={applicationData.academicLevel}
                    onChange={(e) => setApplicationData({ ...applicationData, academicLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm"
                  >
                    <option value="undergrad">Undergraduate Student (BA/BSc Psychology / Humanities)</option>
                    <option value="postgrad">Postgraduate Student (MA/MSc / MSW)</option>
                    <option value="mphil-phd">Research Scholar / PhD Aspirant</option>
                    <option value="graduate">Recent Graduate Seeking Practicum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Desired Internship Track *
                  </label>
                  <select
                    value={applicationData.track}
                    onChange={(e) => setApplicationData({ ...applicationData, track: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm"
                  >
                    {internships.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} ({t.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Statement of Purpose / Why do you want to join? (Brief)
                </label>
                <textarea
                  rows="3"
                  value={applicationData.sop}
                  onChange={(e) => setApplicationData({ ...applicationData, sop: e.target.value })}
                  placeholder="Share your academic background and what you hope to learn during this practicum..."
                  className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={applicationData.boundaryConsent}
                    onChange={(e) => setApplicationData({ ...applicationData, boundaryConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-teal-500/40 text-teal-500 focus:ring-teal-400 focus:ring-offset-0 bg-[#06101B]"
                  />
                  <span className="text-xs text-slate-300 font-sans">
                    I acknowledge that internships are strictly educational and supervised. Interns <strong>never conduct independent clinical therapy, diagnosis, or client case consultations</strong>. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 hover:border-teal-300 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-100 transition-all duration-300 shadow-xl shadow-teal-950/40 flex items-center justify-center gap-2 group"
              >
                <span>Submit Internship Practicum Application</span>
                <Send className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
