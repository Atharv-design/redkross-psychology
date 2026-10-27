import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Users, 
  Globe, 
  Award, 
  CheckCircle2, 
  Building2, 
  School, 
  Briefcase, 
  Send,
  Sparkles,
  FileText
} from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';
import PsychologyThemedCard from '@/components/ui/PsychologyThemedCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function WorkshopsPage() {
  const { workshops } = PSYCHOLOGY_DATA;

  // Curated card motifs for workshops
  const workshopMotifs = [4, 8, 6, 5, 2, 9];

  const [bookingData, setBookingData] = useState({
    institutionName: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    module: 'mental-health-literacy-101',
    cohortSize: '50-100',
    mode: 'on-campus',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full overflow-hidden pb-24">
      {/* Ambient Radial Luminous Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[850px] -left-36 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-mono tracking-wider backdrop-blur-md">
            <School className="w-3.5 h-3.5 text-teal-400" />
            <span>INSTITUTIONAL CURRICULUM DELIVERY // SCHOOLS & COLLEGES</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent leading-[1.15]"
          >
            PSYCHOLOGY WORKSHOPS & INSTITUTIONAL PROGRAMMES
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            Evidence-informed mental health curricula designed for classrooms, auditoriums, and teams. We empower students, educators, and workplace leaders with actionable psychological literacy in Hindi and English.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#booking-form"
              className="px-6 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 shadow-lg shadow-teal-950/40 flex items-center gap-2.5 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-200">
                Book Institutional Workshop
              </span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#modules"
              className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-teal-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 group-hover:text-teal-200">
                View All 6 Modules
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

      {/* The 6 Signature Workshop Modules */}
      <section id="modules" className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Inventory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            THE 6 EVIDENCE-INFORMED MODULES
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Tailored for specific institutional audiences with verifiable learning outcomes and certified participation.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {workshops.map((ws, idx) => {
            const variantNumber = workshopMotifs[idx % workshopMotifs.length];
            return (
              <PsychologyThemedCard
                key={ws.id || idx}
                variant={variantNumber}
                tagLeft={ws.duration || "Workshop"}
                tagRight={ws.languages || "Bilingual"}
                title={ws.title}
                description={ws.summary}
                bullets={ws.outcomes ? ws.outcomes.slice(0, 3) : [ws.audience]}
                meta1={{ icon: Users, label: ws.groupSize || ws.audience }}
                meta2={{ icon: Award, label: ws.certification || "Certified" }}
                ctaText="Book This Module"
                ctaLink="#booking-form"
                motionVariants={itemVariants}
              />
            );
          })}
        </motion.div>
      </section>

      {/* Institutional Booking Request Form with Signature Themed Card Motif */}
      <section id="booking-form" className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#091522]/95 backdrop-blur-2xl border border-teal-500/35 hover:border-teal-400/60 shadow-2xl relative overflow-hidden group">
          {/* Signature Themed Card Background Artwork */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity group-hover:opacity-25 transition-opacity duration-700 pointer-events-none scale-105"
            style={{ backgroundImage: `url('/assets/cards/card-workshops-programs-fullspan.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101B]/95 via-[#06101B]/85 to-[#06101B]/75 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/40">
                OFFICIAL INSTITUTIONAL INTAKE
              </span>
              <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                REQUEST A WORKSHOP FOR YOUR INSTITUTION
              </h2>
              <p className="text-xs sm:text-sm text-slate-300/80 font-sans">
                Connect with our workshop coordination desk to schedule dates, tailor language preferences, and finalize participant cohorts.
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
                Workshop Inquiry Received
              </h3>
              <p className="text-sm text-slate-300 font-sans max-w-lg mx-auto">
                Thank you, <strong>{bookingData.contactName}</strong> from <strong>{bookingData.institutionName}</strong>. Our outreach director will reach out to <strong>{bookingData.email}</strong> within 1-2 business days with curriculum outlines, trainer bios, and date availability.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-xs font-royal uppercase font-bold text-teal-200"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Institution / Organisation Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.institutionName}
                    onChange={(e) => setBookingData({ ...bookingData, institutionName: e.target.value })}
                    placeholder="e.g. Government Degree College / Tech Corp"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Contact Person & Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.contactName}
                    onChange={(e) => setBookingData({ ...bookingData, contactName: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Verma (Dean of Student Welfare)"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    placeholder="e.g. dean.welfare@institution.edu.in"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Target Workshop Module *
                  </label>
                  <select
                    value={bookingData.module}
                    onChange={(e) => setBookingData({ ...bookingData, module: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm"
                  >
                    {workshops.map((w) => (
                      <option key={w.id} value={w.id}>
                        {w.title} ({w.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Estimated Cohort Size
                  </label>
                  <select
                    value={bookingData.cohortSize}
                    onChange={(e) => setBookingData({ ...bookingData, cohortSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm"
                  >
                    <option value="25-50">Small Cohort (25 - 50 Participants)</option>
                    <option value="50-100">Medium Audience (50 - 100 Participants)</option>
                    <option value="100-250">Auditorium / Keynote (100 - 250 Participants)</option>
                    <option value="250+">Large Campus Symposium (250+ Participants)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Delivery Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'on-campus', label: 'On-Campus In-Person Delivery' },
                    { id: 'virtual', label: 'Live Interactive Virtual Workshop' }
                  ].map((m) => (
                    <label 
                      key={m.id}
                      className={`p-3 rounded-xl border text-xs font-sans cursor-pointer transition-all flex items-center gap-2 ${
                        bookingData.mode === m.id 
                          ? 'bg-teal-950/80 border-teal-400 text-teal-200' 
                          : 'bg-[#06101B]/60 border-slate-700/60 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="workshopMode"
                        checked={bookingData.mode === m.id}
                        onChange={() => setBookingData({ ...bookingData, mode: m.id })}
                        className="hidden"
                      />
                      <span>{m.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Additional Notes / Specific Institutional Context (Optional)
                </label>
                <textarea
                  rows="3"
                  value={bookingData.message}
                  onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                  placeholder="e.g. We are organizing our annual youth week and would prefer bilingual Hindi-English delivery..."
                  className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 hover:border-teal-300 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-100 transition-all duration-300 shadow-xl shadow-teal-950/40 flex items-center justify-center gap-2 group"
              >
                <span>Submit Institutional Workshop Request</span>
                <Send className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
          </div>
        </div>
      </section>
    </div>
  );
}
