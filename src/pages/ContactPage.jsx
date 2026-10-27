import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Send,
  MessageSquare,
  Lock,
  Globe
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

export default function ContactPage() {
  const { identity, emergency } = PSYCHOLOGY_DATA;

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'counselling-intake',
    subject: '',
    message: '',
    disclaimerConsent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData.disclaimerConsent) {
      alert("Please acknowledge that this form is for non-emergency inquiries.");
      return;
    }
    setSubmitted(true);
  };

  const deskCards = [
    {
      variant: 10,
      tagLeft: "Intake Desk",
      tagRight: "Confidential",
      title: "Counselling Intake",
      description: "For scheduling confidential one-on-one sessions, sliding scale verification, and intake eligibility questions.",
      email: identity.contacts.counselling,
      phone: identity.contacts.phone,
      response: "Within 24 Business Hours"
    },
    {
      variant: 4,
      tagLeft: "Outreach Desk",
      tagRight: "Institutional",
      title: "Workshops & Campuses",
      description: "For schools, colleges, and workplaces seeking evidence-based mental health literacy or PFA training programmes.",
      email: identity.contacts.general,
      phone: identity.contacts.phone,
      response: "Within 1-2 Business Days"
    },
    {
      variant: 3,
      tagLeft: "Academic Desk",
      tagRight: "Research",
      title: "Research & Internships",
      description: "For academic queries regarding our 3 internship tracks, empirical survey collaborations, and ethics protocols.",
      email: identity.contacts.general,
      phone: identity.contacts.phone,
      response: "Within 2 Business Days"
    },
    {
      variant: 9,
      tagLeft: "Ethics Desk",
      tagRight: "Safeguarding",
      title: "Governance & Ethics",
      description: "For safeguarding escalations, clinical governance inquiries, or responsible vulnerability disclosures.",
      email: identity.contacts.disclosure,
      phone: identity.contacts.phone,
      response: "Priority Response"
    }
  ];

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
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>NON-CLINICAL COMMUNICATION ROUTING // SECTION 8 GOVERNANCE</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent leading-[1.15]"
          >
            CONTACT OUR COORDINATION DESKS
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            Direct routing to our clinical intake coordinators, workshop planning team, academic research supervisors, and institutional leadership.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="px-6 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 shadow-lg shadow-teal-950/40 flex items-center gap-2.5 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-200">
                Send Direct Message
              </span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`tel:${identity.contacts.phone.replace(/[^0-9+]/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-teal-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 group-hover:text-teal-200">
                Call: {identity.contacts.phone}
              </span>
              <Phone className="w-4 h-4 text-teal-400" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* The 4 Signature Desks using PsychologyThemedCard */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Dedicated Desks</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            OUR SPECIALISED INQUIRY DESKS
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Your inquiry is routed directly to the appropriate team member to ensure prompt and confidential attention.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {deskCards.map((desk, idx) => (
            <PsychologyThemedCard
              key={idx}
              variant={desk.variant}
              tagLeft={desk.tagLeft}
              tagRight={desk.tagRight}
              title={desk.title}
              description={desk.description}
              bullets={[
                `Email: ${desk.email}`,
                `Phone: ${desk.phone}`,
                `Response: ${desk.response}`
              ]}
              meta1={{ icon: Mail, label: desk.email }}
              meta2={{ icon: Clock, label: desk.response }}
              ctaText="Write To Desk"
              ctaLink={`mailto:${desk.email}`}
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* Institutional Registered Entity Box */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#091522]/90 to-[#060D17]/95 backdrop-blur-2xl border border-teal-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-teal-400 font-semibold uppercase tracking-wider block">
                REGISTERED NON-PROFIT ENTITY
              </span>
              <h3 className="text-lg font-royal font-bold uppercase text-slate-100">
                {identity.parentOrg.name}
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                {identity.parentOrg.legalStatus}
              </p>
              <p className="text-xs font-mono text-teal-300">
                CIN: {identity.parentOrg.cin}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-teal-400 font-semibold uppercase tracking-wider block">
                REGISTERED OFFICE & HEADQUARTERS
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{identity.parentOrg.registeredOffice}</span>
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-teal-400 font-semibold uppercase tracking-wider block">
                OPERATIONAL TIMINGS
              </span>
              <p className="text-xs text-slate-300 font-sans flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Monday – Saturday: 10:00 AM – 6:00 PM IST</span>
              </p>
              <p className="text-xs text-slate-400 font-sans">
                Closed on Sundays and national public holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Inquiry Routing Form */}
      <section id="contact-form" className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0B1E2E]/90 backdrop-blur-2xl border border-teal-500/30 shadow-2xl relative">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/40">
              GENERAL INQUIRY DESK
            </span>
            <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              SEND A DIRECT MESSAGE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300/80 font-sans">
              Have a question about our programmes, institutional collaborations, or research? Reach out to us below.
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
                Message Dispatched
              </h3>
              <p className="text-sm text-slate-300 font-sans max-w-lg mx-auto">
                Thank you, <strong>{contactData.name}</strong>. Your inquiry has been routed to our <strong>{contactData.department}</strong> desk. A coordinator will reply to <strong>{contactData.email}</strong> within 1-2 business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-xs font-royal uppercase font-bold text-teal-200"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    placeholder="e.g. Dr. Ananya Sen"
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
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="e.g. ananya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Target Department *
                  </label>
                  <select
                    value={contactData.department}
                    onChange={(e) => setContactData({ ...contactData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm"
                  >
                    <option value="counselling-intake">Counselling & Intake Desk</option>
                    <option value="workshops-institutional">Workshops & Institutional Bookings</option>
                    <option value="internships-academic">Internship Practicum & Academic Desk</option>
                    <option value="community-volunteer">Community Drives & Volunteering</option>
                    <option value="safeguarding-ethics">Safeguarding & Ethics Desk</option>
                    <option value="general-inquiry">General Non-Profit Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={contactData.subject}
                  onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                  placeholder="e.g. Inquiry regarding campus workshop delivery"
                  className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  required
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  placeholder="Please describe your query in detail..."
                  className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={contactData.disclaimerConsent}
                    onChange={(e) => setContactData({ ...contactData, disclaimerConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-teal-500/40 text-teal-500 focus:ring-teal-400 focus:ring-offset-0 bg-[#06101B]"
                  />
                  <span className="text-xs text-slate-300 font-sans">
                    I understand this form is for non-emergency inquiries. For acute crisis or thoughts of self-harm, reach out directly to 24/7 Tele-MANAS at <strong>14416</strong>. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 hover:border-teal-300 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-100 transition-all duration-300 shadow-xl shadow-teal-950/40 flex items-center justify-center gap-2 group"
              >
                <span>Dispatch Inquiry</span>
                <Send className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
