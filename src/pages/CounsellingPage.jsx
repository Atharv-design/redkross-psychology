import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  FileCheck, 
  Sparkles, 
  HelpCircle,
  Calendar,
  Send,
  MessageSquare
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

export default function CounsellingPage() {
  const { howSupportWorks, accessAndAffordability, trustAndSafety } = PSYCHOLOGY_DATA;

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    concern: 'anxiety-stress',
    mode: 'online-video',
    studentAssistance: false,
    consentAcknowledged: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consentAcknowledged) {
      alert("Please review and acknowledge the ethical consent disclaimer.");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="relative w-full overflow-hidden pb-24">
      {/* Ambient Radial Luminous Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[900px] -right-32 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-mono tracking-wider backdrop-blur-md">
            <Lock className="w-3.5 h-3.5 text-teal-400" />
            <span>CONFIDENTIAL CARE WITHIN BOUNDARIES // RCI STANDARDS</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent leading-[1.15]"
          >
            COUNSELLING SERVICES & ETHICAL INTAKE
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            Evidence-informed dialogue tailored to your lived experience. We work collaboratively to alleviate personal distress, navigate transitions, and build lasting psychological resilience without judgment or clinical condescension.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#intake-form"
              className="px-6 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 shadow-lg shadow-teal-950/40 flex items-center gap-2.5 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-200">
                Submit Intake Request
              </span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#boundaries"
              className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-teal-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 group-hover:text-teal-200">
                Confidentiality Limits
              </span>
              <ShieldCheck className="w-4 h-4 text-teal-400" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* Signature Themed Cards for Counselling Pathways */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Personalised Modalities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            MODALITIES OF CARE WE OFFER
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Every individual is unique. We integrate evidence-based approaches (CBT, ACT, Person-Centered & Somatic Grounding) mapped to your specific goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <PsychologyThemedCard
            variant={1}
            tagLeft="Individual Care"
            tagRight="1-on-1 Intake"
            title="Adult Counselling"
            description="Focused one-on-one sessions addressing emotional distress, relationship strain, burnout, life transitions, and anxiety."
            bullets={[
              "50-minute structured sessions",
              "Bi-weekly or weekly frequency",
              "Evidence-backed coping routines"
            ]}
            meta1={{ icon: Users, label: "Ages 18+" }}
            meta2={{ icon: Clock, label: "Online / In-Person" }}
            ctaText="Request Intake"
            ctaLink="#intake-form"
          />

          <PsychologyThemedCard
            variant={7}
            tagLeft="Youth & Students"
            tagRight="Parental Consent"
            title="Student Support"
            description="Dedicated guidance for adolescents and college aspirants facing examination anxiety, parental pressure, and academic burnout."
            bullets={[
              "Cognitive reframing for test stress",
              "Adolescent assent & guardian consent",
              "Time and emotional rhythm management"
            ]}
            meta1={{ icon: Users, label: "High School & College" }}
            meta2={{ icon: Sparkles, label: "Subsidised Rates" }}
            ctaText="Student Intake"
            ctaLink="#intake-form"
          />

          <PsychologyThemedCard
            variant={8}
            tagLeft="Evidence-Based"
            tagRight="Modern Modalities"
            title="Therapy Approaches"
            description="We apply Cognitive Behavioural Therapy (CBT), Acceptance & Commitment Therapy (ACT), and somatic nervous-system regulation."
            bullets={[
              "Zero pseudoscience or miracle cures",
              "Actionable emotional regulation tools",
              "Supervised case reviews"
            ]}
            meta1={{ icon: ShieldCheck, label: "Empirical Grounding" }}
            meta2={{ icon: FileCheck, label: "Tailored Plans" }}
            ctaText="Read Methodologies"
            ctaLink="#intake-form"
          />

          <PsychologyThemedCard
            variant={10}
            tagLeft="Direct Scheduling"
            tagRight="Sliding Scale"
            title="Ethical Appointments"
            description="Transparent fees with sliding-scale slots for students and low-income individuals. Zero surprise retainers or lock-ins."
            bullets={[
              "Clear upfront contributions",
              "Need-based fee waivers",
              "Respectful capacity management"
            ]}
            meta1={{ icon: Calendar, label: "Flexible Timing" }}
            meta2={{ icon: CheckCircle2, label: "Verified Psychologists" }}
            ctaText="Schedule Session"
            ctaLink="#intake-form"
          />
        </div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* 4-Step Patient Journey - 2x2 Grid with Signature Themed Cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            <span>The Care Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            WHAT TO EXPECT WHEN YOU REACH OUT
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Transparent, predictable, and pressure-free. We eliminate confusion at every step of your intake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {howSupportWorks.map((step, idx) => (
            <PsychologyThemedCard
              key={idx}
              variant={[1, 8, 9, 10][idx % 4]}
              tagLeft={step.badge}
              tagRight={`Step ${step.step}`}
              title={step.title}
              description={step.description}
              bullets={[
                "Transparent communication & zero pressure",
                "Complete data minimisation guarantee",
                "Immediate withdrawal rights at any point"
              ]}
              meta1={{ icon: ShieldCheck, label: "Verified Protocol" }}
              meta2={{ icon: Clock, label: `Phase ${step.step} of 04` }}
              ctaText="Initiate This Step"
              ctaLink="#intake-form"
              motionVariants={itemVariants}
            />
          ))}
        </div>
      </section>

      {/* Confidentiality Limits Section with Signature Motif */}
      <section id="boundaries" className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#091522]/95 backdrop-blur-2xl border border-teal-500/35 hover:border-teal-400/60 relative overflow-hidden group shadow-2xl">
          {/* Signature Motif Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity group-hover:opacity-25 transition-opacity duration-700 pointer-events-none scale-105"
            style={{ backgroundImage: `url('/assets/cards/card-crisis-support-fullspan.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101B]/95 via-[#06101B]/85 to-[#06101B]/75 pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>LEGAL & CLINICAL BOUNDARIES // MHCA 2017</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              CONFIDENTIALITY HAS STRICT ETHICAL LIMITS
            </h2>

            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-sans">
              We protect your privacy completely. Your personal disclosures will never be shared with your family, college, or employer. However, in accordance with the <strong>Mental Healthcare Act 2017</strong> and clinical safeguarding ethics, confidentiality must be broken under three legally mandated conditions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3">
              <div className="p-5 rounded-2xl bg-[#06101B]/90 border border-red-500/30 hover:border-red-400/50 transition-all shadow-lg shadow-red-950/20">
                <span className="font-mono text-xs text-red-400 font-bold block mb-1">LIMIT 01</span>
                <h4 className="text-sm font-royal font-bold uppercase text-slate-100 mb-1.5">Imminent Self-Harm</h4>
                <p className="text-xs text-slate-300/80 font-sans leading-relaxed">Clear, immediate risk of life or suicide where emergency intervention is required.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#06101B]/90 border border-amber-500/30 hover:border-amber-400/50 transition-all shadow-lg shadow-amber-950/20">
                <span className="font-mono text-xs text-amber-400 font-bold block mb-1">LIMIT 02</span>
                <h4 className="text-sm font-royal font-bold uppercase text-slate-100 mb-1.5">Harm to Others</h4>
                <p className="text-xs text-slate-300/80 font-sans leading-relaxed">Credible threat of physical harm or violence directed toward another person.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#06101B]/90 border border-teal-500/30 hover:border-teal-400/50 transition-all shadow-lg shadow-teal-950/20">
                <span className="font-mono text-xs text-teal-400 font-bold block mb-1">LIMIT 03</span>
                <h4 className="text-sm font-royal font-bold uppercase text-slate-100 mb-1.5">Child Protection</h4>
                <p className="text-xs text-slate-300/80 font-sans leading-relaxed">Disclosures involving child abuse or exploitation under mandatory POCSO reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Intake Enquiry Form with Signature Motif */}
      <section id="intake-form" className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#091522]/95 backdrop-blur-2xl border border-teal-500/35 hover:border-teal-400/60 shadow-2xl relative overflow-hidden group">
          {/* Signature Motif Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity group-hover:opacity-25 transition-opacity duration-700 pointer-events-none scale-105"
            style={{ backgroundImage: `url('/assets/cards/card-individual-counselling-fullspan.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101B]/95 via-[#06101B]/85 to-[#06101B]/75 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/40">
              NON-CLINICAL INITIAL INTAKE
            </span>
            <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              INITIATE CONFIDENTIAL COUNSELLING ENQUIRY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300/80 font-sans">
              Please share minimal non-sensitive details. We never ask for trauma details or diagnostic histories in online web forms.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-teal-950/50 border border-teal-500/40 text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto" />
              <h3 className="text-xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                Enquiry Acknowledged
              </h3>
              <p className="text-sm text-slate-300 font-sans max-w-lg mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. A care coordinator will review our schedule and contact you at <strong>{formData.email}</strong> within 24 business hours to discuss session timings and sliding-scale support.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-xs font-royal uppercase font-bold text-teal-200"
              >
                Submit Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Full Name / Preferred Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. priya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    General Area of Concern *
                  </label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm"
                  >
                    <option value="anxiety-stress">Anxiety, Panic & Chronic Stress</option>
                    <option value="exam-burnout">Student Examination & Academic Burnout</option>
                    <option value="relationships">Relationship & Interpersonal Issues</option>
                    <option value="grief-loss">Grief, Bereavement & Life Transitions</option>
                    <option value="caregiver-stress">Caregiver Stress & Exhaustion</option>
                    <option value="other">General Psychological Well-being</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'online-video', label: 'Encrypted Video (Google Meet)' },
                    { id: 'voice-call', label: 'Confidential Voice Call' },
                    { id: 'in-person', label: 'In-Person (Panipat, Haryana)' }
                  ].map((m) => (
                    <label 
                      key={m.id}
                      className={`p-3 rounded-xl border text-xs font-sans cursor-pointer transition-all flex items-center gap-2 ${
                        formData.mode === m.id 
                          ? 'bg-teal-950/80 border-teal-400 text-teal-200' 
                          : 'bg-[#06101B]/60 border-slate-700/60 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mode"
                        checked={formData.mode === m.id}
                        onChange={() => setFormData({ ...formData, mode: m.id })}
                        className="hidden"
                      />
                      <span>{m.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.studentAssistance}
                    onChange={(e) => setFormData({ ...formData, studentAssistance: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-teal-500/40 text-teal-500 focus:ring-teal-400 focus:ring-offset-0 bg-[#06101B]"
                  />
                  <span className="text-xs text-slate-300 font-sans">
                    I am an enrolled student or facing financial hardship and wish to request <strong>sliding-scale fee support</strong>.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consentAcknowledged}
                    onChange={(e) => setFormData({ ...formData, consentAcknowledged: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-teal-500/40 text-teal-500 focus:ring-teal-400 focus:ring-offset-0 bg-[#06101B]"
                  />
                  <span className="text-xs text-slate-300 font-sans">
                    I understand that this service is <strong>not an emergency crisis response</strong> and I acknowledge the legal limits of confidentiality explained above. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 hover:border-teal-300 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-100 transition-all duration-300 shadow-xl shadow-teal-950/40 flex items-center justify-center gap-2 group"
              >
                <span>Submit Confidential Intake Enquiry</span>
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
