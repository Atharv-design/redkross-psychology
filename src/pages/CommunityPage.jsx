import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  Send,
  MessageCircle,
  Sun,
  ShieldCheck
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

export default function CommunityPage() {
  const { communityActivities } = PSYCHOLOGY_DATA;

  const [volunteerData, setVolunteerData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interest: 'campus-drives',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const communityMotifs = [2, 5, 6, 8, 10];

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
            <Users className="w-3.5 h-3.5 text-teal-400" />
            <span>GRASSROOTS INITIATIVES & STIGMA DECONSTRUCTION</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent leading-[1.15]"
          >
            COMMUNITY OUTREACH & PSYCHOEDUCATION CAMPS
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            Building local capacity where people live, study, and work. We organize bilingual mental health drives, caregiver circles, and open-air somatic grounding mornings across Haryana and North India.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#volunteer-form"
              className="px-6 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 shadow-lg shadow-teal-950/40 flex items-center gap-2.5 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-200">
                Join As Community Volunteer
              </span>
              <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#initiatives"
              className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-teal-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="font-royal font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-200 group-hover:text-teal-200">
                Explore Initiatives
              </span>
              <Sparkles className="w-4 h-4 text-teal-400" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* The 5 Community Initiatives using PsychologyThemedCard */}
      <section id="initiatives" className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <Sun className="w-3.5 h-3.5" />
            <span>Active Community Drives</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            OUR COMMUNITY MENTAL HEALTH PROGRAMMES
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Non-commercial, culturally respectful, and delivered in bilingual Hindi-English formats to ensure true grassroots accessibility.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {communityActivities.map((act, idx) => {
            const variantNumber = communityMotifs[idx % communityMotifs.length];
            return (
              <PsychologyThemedCard
                key={idx}
                variant={variantNumber}
                tagLeft={act.type || "Community"}
                tagRight={act.frequency || "Scheduled"}
                title={act.title}
                description={act.description}
                bullets={[
                  `Format: ${act.frequency}`,
                  "Bilingual Hindi & English dialogue",
                  "Free public attendance & open participation"
                ]}
                meta1={{ icon: Calendar, label: act.frequency }}
                meta2={{ icon: Users, label: act.type }}
                ctaText="Participate in Drive"
                ctaLink="#volunteer-form"
                motionVariants={itemVariants}
              />
            );
          })}
        </motion.div>
      </section>

      {/* Community Charter - 2x2 Grid with Signature Themed Cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <ShieldCheck className="w-8 h-8 text-teal-400 mx-auto" />
          <h3 className="text-xl sm:text-3xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            COMMUNITY CIRCLE SAFEGUARDING CHARTER
          </h3>
          <p className="text-xs sm:text-sm text-slate-300/80 font-sans">
            Every peer circle and public gathering operates under four non-negotiable community values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Radical Empathy",
              desc: "We listen to understand, not to judge or offer unasked prescriptive advice.",
              tag: "NON-JUDGMENTAL",
              variant: 2
            },
            {
              title: "Circle Privacy",
              desc: "Stories shared within community support groups remain strictly within that circle.",
              tag: "STRICT PRIVACY",
              variant: 6
            },
            {
              title: "Zero Clinical Claims",
              desc: "Peer spaces do not replace medical psychiatry or professional psychotherapy.",
              tag: "BOUNDARIES",
              variant: 8
            },
            {
              title: "Inclusive Dignity",
              desc: "Zero tolerance for discrimination based on caste, gender, faith, or background.",
              tag: "UNIVERSAL CARE",
              variant: 5
            }
          ].map((p, pidx) => (
            <PsychologyThemedCard
              key={pidx}
              variant={p.variant}
              tagLeft={p.tag}
              tagRight="Core Pillar"
              title={p.title}
              description={p.desc}
              bullets={[
                "Unconditional positive regard",
                "Safe emotional sharing boundaries",
                "Community-first integrity"
              ]}
              meta1={{ icon: ShieldCheck, label: "Safeguarded Space" }}
              meta2={{ icon: Users, label: "Community Circle" }}
              ctaText="Read Charter Policy"
              ctaLink="#volunteer-form"
              motionVariants={itemVariants}
            />
          ))}
        </div>
      </section>

      {/* Volunteer Registration Form with Signature Themed Card Motif */}
      <section id="volunteer-form" className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#091522]/95 backdrop-blur-2xl border border-teal-500/35 hover:border-teal-400/60 shadow-2xl relative overflow-hidden group">
          {/* Signature Themed Card Background Artwork */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity group-hover:opacity-25 transition-opacity duration-700 pointer-events-none scale-105"
            style={{ backgroundImage: `url('/assets/cards/card-group-therapy-fullspan.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101B]/95 via-[#06101B]/85 to-[#06101B]/75 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/40">
                JOIN THE VOLUNTEER CORPS
              </span>
              <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                BECOME A COMMUNITY ADVOCATE
              </h2>
              <p className="text-xs sm:text-sm text-slate-300/80 font-sans">
                Help coordinate local awareness camps, distribute psychoeducation booklets, or co-facilitate open-air mindful mornings.
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
                Volunteer Profile Registered
              </h3>
              <p className="text-sm text-slate-300 font-sans max-w-lg mx-auto">
                Thank you for your solidarity, <strong>{volunteerData.fullName}</strong>. Our volunteer lead will contact you at <strong>{volunteerData.email}</strong> ahead of our next district community camp in <strong>{volunteerData.city || 'your region'}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-xs font-royal uppercase font-bold text-teal-200"
              >
                Register Another Volunteer
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerData.fullName}
                    onChange={(e) => setVolunteerData({ ...volunteerData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
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
                    value={volunteerData.email}
                    onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={volunteerData.phone}
                    onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                    City / District *
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerData.city}
                    onChange={(e) => setVolunteerData({ ...volunteerData, city: e.target.value })}
                    placeholder="e.g. Panipat / Karnal / Delhi NCR"
                    className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Volunteer Focus Area *
                </label>
                <select
                  value={volunteerData.interest}
                  onChange={(e) => setVolunteerData({ ...volunteerData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm"
                >
                  <option value="campus-drives">Campus Awareness Kiosks & Drives</option>
                  <option value="bilingual-translation">Psychoeducation Translation (Hindi / Regional)</option>
                  <option value="mindful-mornings">Mindful Morning Walk & Grounding Sessions</option>
                  <option value="caregiver-circles">Caregiver Support Logistics</option>
                  <option value="flagship-events">World Mental Health Day Annual Symposium</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-royal uppercase font-bold text-slate-300 mb-2">
                  Why do you wish to volunteer with us? (Brief)
                </label>
                <textarea
                  rows="3"
                  value={volunteerData.message}
                  onChange={(e) => setVolunteerData({ ...volunteerData, message: e.target.value })}
                  placeholder="Share a few words on what drives your commitment to mental wellbeing..."
                  className="w-full px-4 py-3 rounded-xl bg-[#06101B]/90 border border-teal-500/20 focus:border-teal-400 focus:outline-none text-slate-100 text-sm placeholder:text-slate-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 hover:border-teal-300 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-100 transition-all duration-300 shadow-xl shadow-teal-950/40 flex items-center justify-center gap-2 group"
              >
                <span>Register As Community Volunteer</span>
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
