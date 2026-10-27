import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  PhoneCall, 
  Download, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  AlertTriangle, 
  Clock, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  HelpCircle,
  Users
} from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';
import PsychologyThemedCard from '@/components/ui/PsychologyThemedCard';
import FrequentlyAskedQuestions from '@/components/ui/frequently-asked-questions-with-accordion';

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

export default function ResourcesPage() {
  const { emergency, faqs } = PSYCHOLOGY_DATA;

  // Curated downloadable guides mapped to card motifs
  const guideResources = [
    {
      variant: 5,
      tagLeft: "Toolkit",
      tagRight: "PDF Guide",
      title: "Exam Anxiety Blueprint",
      description: "Cognitive reframing techniques, study-break pacing intervals, and breathing exercises specifically designed for board and entrance exams.",
      format: "PDF // 8 Pages",
      readTime: "12 Min Read",
      downloadLabel: "Download Guide"
    },
    {
      variant: 8,
      tagLeft: "Somatic Protocol",
      tagRight: "Quick Reference",
      title: "5-4-3-2-1 Sensory Grounding",
      description: "Step-by-step nervous system de-escalation protocol to bring the prefrontal cortex back online during acute panic or hyperarousal.",
      format: "Pocket Card // 2 Pages",
      readTime: "5 Min Practice",
      downloadLabel: "Download Protocol"
    },
    {
      variant: 7,
      tagLeft: "Sleep Protocol",
      tagRight: "Circadian Health",
      title: "Sleep & Nervous Regulation",
      description: "Non-pharmacological bedtime decompression routines, blue-light mitigation, and progressive muscle relaxation routines.",
      format: "PDF // 6 Pages",
      readTime: "10 Min Read",
      downloadLabel: "Download Routine"
    },
    {
      variant: 2,
      tagLeft: "Caregiver Space",
      tagRight: "Workbook",
      title: "Caregiver Burnout Prevention",
      description: "Compassion fatigue indicators, healthy boundary-setting scripts, and emotional pacing strategies for family caregivers.",
      format: "Workbook // 12 Pages",
      readTime: "20 Min Read",
      downloadLabel: "Download Workbook"
    },
    {
      variant: 3,
      tagLeft: "Legal Rights",
      tagRight: "MHCA 2017",
      title: "Mental Health Rights Guide",
      description: "Plain-language summary of patient confidentiality, informed consent, and emergency rights under India's Mental Healthcare Act 2017.",
      format: "Statutory Brief // 4 Pages",
      readTime: "7 Min Read",
      downloadLabel: "Download Summary"
    },
    {
      variant: 4,
      tagLeft: "Digital Wellbeing",
      tagRight: "Self-Audit",
      title: "Digital Detox & Pacing Matrix",
      description: "Practical strategies to combat social media fatigue, notification anxiety, and nocturnal doomscrolling among students and professionals.",
      format: "Checklist // 3 Pages",
      readTime: "6 Min Read",
      downloadLabel: "Download Checklist"
    }
  ];

  const nationalHelplines = [
    {
      name: "Tele-MANAS",
      number: "14416",
      phoneLink: "tel:14416",
      operator: "Ministry of Health & Family Welfare, Govt. of India",
      details: "Toll-free 24/7 comprehensive tele-mental health support across 20+ Indian languages.",
      badge: "NATIONAL APEX // 24/7"
    },
    {
      name: "KIRAN Helpline",
      number: "1800-599-0019",
      phoneLink: "tel:18005990019",
      operator: "Dept. of Empowerment of Persons with Disabilities",
      details: "Toll-free 24/7 psychological first aid, distress mitigation, and crisis management.",
      badge: "GOVERNMENT OF INDIA"
    },
    {
      name: "Vandrevala Foundation",
      number: "+91 9999 666 555",
      phoneLink: "tel:9999666555",
      operator: "Cyrus & Priya Vandrevala Foundation",
      details: "24/7 free, confidential crisis counseling with trained psychological counsellors via call & WhatsApp.",
      badge: "24/7 NGO HELPLINE"
    },
    {
      name: "AASRA Suicide Helpline",
      number: "+91 98204 66726",
      phoneLink: "tel:919820466726",
      operator: "AASRA Trust",
      details: "24/7 non-judgmental crisis intervention and emotional support for individuals experiencing suicidal thoughts.",
      badge: "CRISIS INTERVENTION"
    },
    {
      name: "NIMHANS Psychosocial Desk",
      number: "080-46110007",
      phoneLink: "tel:08046110007",
      operator: "National Institute of Mental Health and Neuro Sciences",
      details: "Specialised psychosocial and psychiatric support helpline operating from Bangalore.",
      badge: "INSTITUTE OF EXCELLENCE"
    }
  ];

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
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>OPEN-ACCESS PSYCHOEDUCATION & SAFETY DIRECTORY</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent leading-[1.15]"
          >
            SELF-HELP RESOURCES & HELPLINE DIRECTORY
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            Freely accessible evidence-informed toolkits, somatic grounding frameworks, statutory patient rights summaries, and direct 24/7 national emergency helplines.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#helplines"
              className="px-6 py-3.5 rounded-xl bg-red-950/40 hover:bg-red-900/50 border border-red-500/40 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-red-200 hover:text-white transition-all duration-300 shadow-lg shadow-red-950/40 flex items-center gap-2.5 group"
            >
              <span>24/7 Emergency Helplines</span>
              <PhoneCall className="w-4 h-4 text-red-300 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="#guides"
              className="px-6 py-3.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/30 hover:border-teal-400/60 text-xs sm:text-sm font-royal font-bold uppercase tracking-wider text-teal-200 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Downloadable Toolkits</span>
              <Download className="w-4 h-4 text-teal-400" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* 24/7 Verified Emergency Helplines Directory */}
      <section id="helplines" className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Crisis Intervention Directory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            VERIFIED 24/7 NATIONAL HELPLINES (INDIA)
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            If you or someone you know is in acute distress or experiencing thoughts of self-harm, please connect immediately with these verified toll-free resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {nationalHelplines.map((hl, hidx) => (
            <PsychologyThemedCard
              key={hidx}
              variant={6}
              tagLeft={hl.name}
              tagRight={hl.badge}
              title={hl.number}
              description={hl.details}
              bullets={[
                hl.operator,
                "Toll-free 24/7 national mental health support",
                "Instant, confidential emergency response"
              ]}
              meta1={{ icon: PhoneCall, label: hl.name }}
              meta2={{ icon: Clock, label: "24/7 Active" }}
              ctaText={`Call ${hl.name}`}
              ctaLink={hl.phoneLink}
              motionVariants={itemVariants}
            />
          ))}
        </div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* Downloadable Guides & Psychoeducation using PsychologyThemedCard */}
      <section id="guides" className="relative px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest">
            <Download className="w-3.5 h-3.5" />
            <span>Curated Evidence-Informed Toolkits</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-royal font-bold uppercase tracking-tight bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
            EVIDENCE-INFORMED GUIDES & WORKBOOKS
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85">
            Designed by psychology researchers and counsellors. Free to read, print, and share for educational non-commercial purposes.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {guideResources.map((res, idx) => (
            <PsychologyThemedCard
              key={idx}
              variant={res.variant}
              tagLeft={res.tagLeft}
              tagRight={res.tagRight}
              title={res.title}
              description={res.description}
              bullets={[
                `Format: ${res.format}`,
                `Pacing: ${res.readTime}`,
                "Non-commercial open educational resource"
              ]}
              meta1={{ icon: BookOpen, label: res.readTime }}
              meta2={{ icon: Download, label: res.format }}
              ctaText={res.downloadLabel}
              ctaLink="#guides"
              motionVariants={itemVariants}
            />
          ))}
        </motion.div>
      </section>

      {/* Feathered Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      </div>

      {/* FAQ Accordion Component */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <FrequentlyAskedQuestions 
          title="FREQUENTLY ASKED CLINICAL & ACCESS QUESTIONS"
          description="Straightforward answers regarding confidentiality boundaries, sliding scale fees, adolescent consent, and workshop scheduling."
          supportEmail="support@redkross.org.in"
          data={faqs.map(f => ({ question: f.q, answer: f.a }))}
        />
      </section>
    </div>
  );
}
