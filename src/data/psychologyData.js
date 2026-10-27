// Authoritative Data Store for RedKross Psychology Subdomain
// Strictly extracted and structured from:
// "RedKross_Psychology_Website_Developer_Specification.pdf" (October 2026)

import { getEcosystemUrl } from '../utils/ecosystemLinks';

export const PSYCHOLOGY_DATA = {
  // 1. Identity & Cross-Domain Ecosystem Routing (PDF Section 1 & 6)
  identity: {
    name: "RedKross Psychology",
    fullName: "RedKross Research Foundation — Psychology & Mental-Wellbeing Division",
    subdomainLabel: "psychology.redkross.org.in",
    tagline: "Your mind deserves care, understanding and support.",
    shortDesc: "The psychology and mental-wellbeing wing of RedKross Research Foundation. Connecting people with accessible mental-health information, counselling enquiries, learning opportunities, and community programmes.",
    parentOrg: {
      name: "RedKross Research Foundation",
      get url() { return getEcosystemUrl('main'); },
      canonicalUrl: "https://redkross.org.in",
      legalStatus: "Section 8 Registered Non-Profit Research Organisation",
      cin: "U85499HR2026NPL144741",
      registeredOffice: "11219 Mahadev Colony, near Samsan Road / Saini Chakki, Panipat, Haryana 132103, India"
    },
    cyberSubdomain: {
      name: "RedKross Cybersecurity",
      get url() { return getEcosystemUrl('cyber'); },
      canonicalUrl: "https://cyber.redkross.org.in"
    },
    contacts: {
      general: "contact@redkross.org.in",
      counselling: "support@redkross.org.in",
      disclosure: "security@redkross.org.in",
      phone: "+91 73032 63719"
    }
  },

  // 2. Critical Safety & Emergency Helplines (PDF Section 6 & 1)
  // MANDATORY: Non-negotiable crisis guidance. The site is NOT an emergency service.
  emergency: {
    disclaimer: "This website is an informational and enquiry platform, not an emergency crisis intervention service. If you, a student, or someone you know is in immediate danger, distress, or experiencing thoughts of self-harm, please reach out directly to 24×7 national helplines or nearest emergency services immediately.",
    helplines: [
      {
        name: "Tele-MANAS",
        number: "14416",
        phoneLink: "tel:14416",
        description: "National Tele Mental Health Programme of India. Free, confidential, 24×7 multi-lingual crisis support.",
        badge: "GOVERNMENT OF INDIA // TOLL-FREE 24×7",
        coverage: "All Indian States & Union Territories (Available in 20+ Regional Languages)"
      },
      {
        name: "KIRAN Helpline",
        number: "1800-599-0019",
        phoneLink: "tel:18005990019",
        description: "Mental Health Rehabilitation Helpline by the Ministry of Social Justice & Empowerment, Govt. of India.",
        badge: "MINISTRY OF SOCIAL JUSTICE // 24×7",
        coverage: "National Toll-Free Counselling & Psychological Support"
      },
      {
        name: "Emergency Services",
        number: "112",
        phoneLink: "tel:112",
        description: "National Unified Emergency Number for immediate police, medical, or life-safety dispatch.",
        badge: "NATIONAL EMERGENCY // 24×7",
        coverage: "Immediate Physical & Medical Rescue"
      }
    ]
  },

  // 3. The 6 Core Programmes (PDF Section 2 & 5.2)
  programmes: [
    {
      id: "individual-counselling",
      slug: "individual-counselling",
      title: "Individual Counselling",
      category: "Direct Support",
      audience: "Adults, college students, and professionals facing personal distress",
      format: "Online video/voice consultations & in-person scheduled sessions",
      summary: "One-on-one structured sessions exploring anxiety, life transitions, stress management, interpersonal relationships, and emotional wellbeing.",
      whatIsOffered: "Safe, non-judgmental space facilitated by verified practitioners. Structured goal-setting, evidence-informed coping frameworks, and empathetic listening.",
      eligibility: "Open to individuals aged 18+ (or adolescents with documented parent/guardian assent & consent).",
      availability: "Enquiry Required // Vetted Capacity",
      statusBadge: "Enquiry Required",
      confidentialityNote: "Confidential within professional legal limits (exceptions apply for imminent self-harm, harm to others, or child protection safeguarding).",
      actionText: "Enquire for Counselling",
      actionHref: "/counselling"
    },
    {
      id: "student-career-counselling",
      slug: "student-career-counselling",
      title: "Student & Career Counselling",
      category: "Academic & Youth Support",
      audience: "High school students, college undergraduates, exam aspirants & early career seekers",
      format: "Online & institutional campus sessions",
      summary: "Practical support addressing academic burnout, entrance exam stress, performance anxiety, career indecision, and identity development.",
      whatIsOffered: "Cognitive reframing for study pressure, career aptitude exploration, peer relationship navigation, and structured decompression routines.",
      eligibility: "Enrolled students, recent graduates, or competitive examination aspirants.",
      availability: "Available // Weekly Intake",
      statusBadge: "Active Intake",
      confidentialityNote: "Student discussions are kept confidential; institution or parents are not notified unless agreed upon or in cases of safety escalation.",
      actionText: "Explore Student Support",
      actionHref: "/counselling"
    },
    {
      id: "support-groups",
      slug: "support-groups",
      title: "Facilitated Support Groups",
      category: "Peer & Community Space",
      audience: "Caregivers, young adults, grieving individuals, and individuals managing anxiety",
      format: "Small closed cohorts (6–10 participants), bi-weekly structured meetings",
      summary: "Safe, guided group spaces where individuals share shared experiences, reduce feelings of isolation, and learn mutual coping strategies.",
      whatIsOffered: "Facilitator-guided dialogues, mutual peer validation, emotional check-ins, and established group safety agreements.",
      eligibility: "Pre-group screening interview required to ensure mutual group fit and individual safety.",
      availability: "Cohort Based // Pre-Registration",
      statusBadge: "Enrolment Open",
      confidentialityNote: "Group members sign a mutual confidentiality pledge, but peer spaces cannot legally guarantee complete privacy like one-on-one therapy.",
      actionText: "View Active Groups",
      actionHref: "/support-groups"
    },
    {
      id: "community-outreach",
      slug: "community-outreach",
      title: "Community Mental Health Outreach",
      category: "Community Literacy",
      audience: "Local neighborhoods, grassroots youth, tier-2/3 institutions & community centers",
      format: "On-ground awareness camps, interactive kiosks & open Q&A sessions",
      summary: "Demystifying mental health, reducing cultural stigma, and guiding people on when and how to seek professional mental healthcare.",
      whatIsOffered: "Bilingual (Hindi/English) psychoeducation, basic screening guidance, myth-busting sessions, and direct resource distribution.",
      eligibility: "Open to schools, resident associations, non-profits, and educational bodies.",
      availability: "Schedule Upon Request",
      statusBadge: "Partner Coordinated",
      confidentialityNote: "Public educational sessions. Does not involve clinical treatment on-site.",
      actionText: "Request Outreach Event",
      actionHref: "/community"
    },
    {
      id: "pfa-training",
      slug: "pfa-training",
      title: "Psychological First Aid (PFA) Training",
      category: "Skills & Capacity Building",
      audience: "Teachers, student council leads, workplace managers, emergency volunteers",
      format: "1-day & 2-day practical workshops (Case simulations & role-play)",
      summary: "Humanitarian-aligned frontline support training teaching non-mental health professionals how to listen, assess, comfort, and connect people in distress.",
      whatIsOffered: "The Look-Listen-Link framework, ethical boundaries, recognizing crisis signs, empathetic communication, and referral protocols.",
      eligibility: "Educators, community organizers, youth leaders, and organizational representatives.",
      availability: "Monthly Batches // Institutional Bookings",
      statusBadge: "Certified Workshop",
      confidentialityNote: "Issues a Certificate of Participation; explicitly not a license to practice clinical psychotherapy.",
      actionText: "Explore PFA Curriculum",
      actionHref: "/workshops"
    },
    {
      id: "psychology-research",
      slug: "psychology-research",
      title: "Psychology Research Programmes",
      category: "Evidence & Inquiries",
      audience: "Academic researchers, postgraduate psychology students, and public health partners",
      format: "Empirical survey methodology, qualitative interviews & public briefs",
      summary: "Investigating community mental-health literacy, digital wellbeing & doomscrolling patterns, and barriers to help-seeking behavior.",
      whatIsOffered: "Ethically vetted data collection, transparent participant consent, anonymized data retention, and open educational dissemination.",
      eligibility: "Postgraduate psychology researchers, academic collaborators, and institutional co-investigators.",
      availability: "Active Studies // Proposals Open",
      statusBadge: "Ethical Inquiry",
      confidentialityNote: "Strict institutional ethics review, anonymized storage, voluntary participation with complete right to withdraw at any stage.",
      actionText: "View Research Themes",
      actionHref: "/research"
    }
  ],

  // 4. How Support Works — 4-Step Ethical Journey (PDF Section 4 & 7)
  howSupportWorks: [
    {
      step: "01",
      title: "Initial Non-Clinical Enquiry",
      description: "Submit a brief, non-sensitive enquiry specifying your general context and preferred contact method. We never ask for diagnostic history or trauma details in generic web forms.",
      badge: "DATA MINIMISATION"
    },
    {
      step: "02",
      title: "Suitability & Availability Check",
      description: "A care coordinator reviews capacity, assesses whether our services align with your needs, and explains fees or available sliding-scale support transparently.",
      badge: "ETHICAL ASSESSMENT"
    },
    {
      step: "03",
      title: "Informed Consent & Boundaries",
      description: "Before any consultation begins, you receive an explicit briefing on practitioner qualifications, session lengths, data policies, and the exact legal limits of confidentiality.",
      badge: "INFORMED CONSENT"
    },
    {
      step: "04",
      title: "Scheduled Session or Vetted Referral",
      description: "Connect with a verified practitioner for your scheduled appointment, or receive ethical guidance to specialised hospital or crisis services if your needs require higher care.",
      badge: "RESPONSIBLE CARE"
    }
  ],

  // 5. Access & Affordability (PDF Section 4 & 10)
  accessAndAffordability: {
    headline: "Access & Affordability Framework",
    statement: "Financial constraints should never stand between an individual and emotional support. We operate an honest, transparent fee structure with funded community slots.",
    principles: [
      {
        title: "Transparent Standard Contributions",
        description: "Clear, predefined contribution tiers for individual counselling sessions, communicated upfront before booking. Zero hidden costs or surprise retainers."
      },
      {
        title: "Sliding-Scale Options",
        description: "Need-based fee adjustments for college students, unemployed youth, and individuals experiencing financial distress, subject to active institutional capacity."
      },
      {
        title: "Funded Community Spaces",
        description: "Support groups and public awareness camps are offered free of charge or through non-profit community sponsorships to ensure broad accessibility."
      },
      {
        title: "Honest Capacity Bounds",
        description: "We do not claim 'no one is ever turned away.' When our caseload is full, we maintain an ethical waitlist and connect visitors with accredited public hospital clinics."
      }
    ]
  },

  // 6. The 3 Internship Tracks (PDF Section 5.6)
  internships: [
    {
      id: "foundation-track",
      slug: "foundation-track",
      title: "Foundation Track",
      duration: "4 Weeks",
      level: "Undergraduate Students (Psychology / Social Work / Humanities)",
      commitment: "8–10 Hours / Week (Hybrid / Virtual)",
      supervision: "Supervised by Qualified Psychology Coordinators",
      objectives: "Introduction to mental health literacy, case observation methodologies, ethical boundaries, and psychoeducation content design.",
      tasks: [
        "Synthesise evidence-based mental health articles for youth literacy",
        "Participate in weekly group peer case discussions",
        "Observe structured communication role-plays in simulated safe environments",
        "Complete foundational training in Psychological First Aid (PFA)"
      ],
      boundaries: "Strictly educational. Interns do NOT independently counsel, diagnose, or interact with confidential client records.",
      status: "Cohort Applications Open",
      badge: "4 WEEKS // FOUNDATION"
    },
    {
      id: "practice-track",
      slug: "practice-track",
      title: "Practice Track",
      duration: "8 Weeks",
      level: "Final-Year Undergraduates & Postgraduate Students (MA / MSc Psychology)",
      commitment: "12–15 Hours / Week (Structured Practice)",
      supervision: "Clinical Case Review & Direct Faculty Mentorship",
      objectives: "Applied psychometric understanding, workshop co-facilitation, community support circle moderation, and qualitative assessment design.",
      tasks: [
        "Assist in delivering school and college mental-health literacy modules",
        "Co-moderate supervised peer support circles under senior supervision",
        "Develop structured intervention workbooks for exam anxiety",
        "Attend bi-weekly ethical reflective practice circles"
      ],
      boundaries: "All activities remain under direct practitioner oversight. Independent clinical diagnosis is strictly prohibited.",
      status: "Rolling Cohort Selection",
      badge: "8 WEEKS // APPLIED PRACTICE"
    },
    {
      id: "research-track",
      slug: "research-track",
      title: "Research Track",
      duration: "8–12 Weeks",
      level: "Postgraduate Students & Aspiring Research Fellows",
      commitment: "15 Hours / Week (Research & Data Synthesis)",
      supervision: "Research Methodology Supervisor",
      objectives: "Literature synthesis, ethical study design, survey methodology, and data analysis on digital wellbeing and youth mental health trends.",
      tasks: [
        "Conduct systematic literature reviews on help-seeking behavior",
        "Draft participant questionnaires and institutional ethics documentation",
        "Analyze anonymized survey datasets using empirical methods",
        "Contribute to public research whitepapers (authorship follows genuine contribution standards)"
      ],
      boundaries: "Human-participant research strictly abides by institutional ethics review and data anonymisation.",
      status: "Active Research Project Intake",
      badge: "8–12 WEEKS // EMPIRICAL RESEARCH"
    }
  ],

  // 7. Workshop Catalogue (PDF Section 5.5)
  workshops: [
    {
      id: "mental-health-literacy-101",
      slug: "mental-health-literacy-101",
      title: "Mental Health Literacy 101",
      duration: "2.5 Hours",
      audience: "High school & college students, parents, youth groups",
      format: "Interactive offline or live virtual session",
      languages: "English / Hindi",
      groupSize: "30–80 Participants",
      summary: "De-stigmatising emotional distress, understanding the spectrum between stress and disorder, and recognizing when to reach out for professional support.",
      outcomes: [
        "Learn the vocabulary of emotional wellbeing without clinical jargon",
        "Identify early warning signs of chronic stress, depression, and burnout",
        "Break pervasive cultural stigmas around seeking psychological therapy",
        "Access a curated directory of verified local and national support resources"
      ],
      certification: "Certificate of Participation (issued by RedKross Research Foundation)",
      status: "Available for Institutional Booking"
    },
    {
      id: "exam-stress-and-study-skills",
      slug: "exam-stress-and-study-skills",
      title: "Exam Stress & Study Skills",
      duration: "3 Hours (or 2-Part Series)",
      audience: "Board exam candidates, competitive exam aspirants (JEE/NEET/UPSC), college students",
      format: "Campus workshop with live exercises",
      languages: "English / Hindi",
      groupSize: "40–120 Participants",
      summary: "Cognitive strategies to conquer performance anxiety, establish sustainable study schedules, avoid catastrophic thinking, and maintain emotional equilibrium during exam seasons.",
      outcomes: [
        "Understand the physiological fight-or-flight response to tests",
        "Practical somatic grounding and progressive muscle relaxation routines",
        "Cognitive reframing techniques for 'fear of failure' and parental expectations",
        "Sleep hygiene and cognitive energy management during revision"
      ],
      certification: "Certificate of Participation",
      status: "Seasonal Booking Open"
    },
    {
      id: "psychological-first-aid-pfa",
      slug: "psychological-first-aid-pfa",
      title: "Psychological First Aid (PFA)",
      duration: "Full-Day (6 Hours) or 2-Day Intensive",
      audience: "Teachers, student council leads, workplace managers, community volunteers",
      format: "Simulation-based hands-on workshop",
      languages: "English / Hindi",
      groupSize: "20–40 Participants (Hands-On Cap)",
      summary: "Humanitarian-standard frontline distress response training. Equipping non-clinicians with the skills to provide humane, supportive, and practical care to people in acute crisis.",
      outcomes: [
        "Master the Look-Listen-Link intervention framework",
        "Establish non-intrusive emotional contact without forcing disclosure",
        "Safely de-escalate acute panic and severe distress states",
        "Identify high-risk indicators requiring immediate emergency medical referral"
      ],
      certification: "Certificate of Completion in Frontline Psychological First Aid",
      status: "Monthly Institutional Cohorts"
    },
    {
      id: "digital-wellbeing-and-doomscrolling",
      slug: "digital-wellbeing-and-doomscrolling",
      title: "Digital Wellbeing & Doomscrolling",
      duration: "2 Hours",
      audience: "Teens, young adults, remote workers, university campus students",
      format: "Interactive workshop & behavioral audit",
      languages: "English",
      groupSize: "30–75 Participants",
      summary: "Understanding the psychological architecture of algorithms, notification fatigue, digital comparison traps, and establishing mindful technological boundaries.",
      outcomes: [
        "Decode dopamine loops and cognitive exhaustion caused by social media",
        "Conduct a personal 7-day digital friction assessment",
        "Implement boundaries for bedtime screen use and compulsive checking",
        "Replace anxiety-inducing feeds with intentional real-world grounding habits"
      ],
      certification: "Certificate of Participation",
      status: "Available for Corporate & Campus Booking"
    },
    {
      id: "workplace-mental-wellbeing",
      slug: "workplace-mental-wellbeing",
      title: "Workplace Mental Wellbeing",
      duration: "Half-Day (4 Hours)",
      audience: "Corporate teams, HR leaders, managers, startup founders",
      format: "Executive seminar & interactive breakout discussions",
      languages: "English",
      groupSize: "15–45 Participants",
      summary: "Preventing chronic employee burnout, building psychological safety in team dynamics, and equipping managers with compassionate escalation protocols.",
      outcomes: [
        "Distinguish between healthy workload stress and toxic systemic burnout",
        "Foster environments where employees can voice overwhelm safely",
        "Managerial guidelines for handling employee personal crises with dignity",
        "Designing sustainable wellness interventions that go beyond superficial perks"
      ],
      certification: "Institutional Completion Record",
      status: "Corporate Booking Available"
    },
    {
      id: "peer-support-champions",
      slug: "peer-support-champions",
      title: "Peer Support Champions (Train-the-Trainer)",
      duration: "2-Day Cohort Programme (12 Hours Total)",
      audience: "Nominated student campus leaders, hostel wardens, college volunteers",
      format: "In-depth experiential training cohort",
      languages: "English / Hindi",
      groupSize: "15–25 Participants (Strict Cohort Limit)",
      summary: "Preparing designated student champions to serve as empathetic, safe, and confidential first-contact points on university and college campuses.",
      outcomes: [
        "Active empathetic listening and non-judgmental dialogue skills",
        "Strict understanding of peer boundaries: When to support vs. when to refer",
        "Protocol for escalating crisis situations to institution counsellors or helplines",
        "Self-care and boundary preservation for student helpers to prevent vicarious trauma"
      ],
      certification: "Certified RedKross Peer Support Champion",
      status: "Campus Partnership Programme"
    }
  ],

  // 8. Community Activities & Verified Events (PDF Section 2 & 5.7)
  communityActivities: [
    {
      title: "Campus Mental Health Awareness Drives",
      type: "College Partnership",
      frequency: "Scheduled per institutional academic calendar",
      description: "Interactive campus kiosks, anonymous question boxes, myth-busting quizzes, and introductory mental health guidance for students."
    },
    {
      title: "Community Psychoeducation Camps",
      type: "Grassroots Outreach",
      frequency: "Quarterly in targeted districts",
      description: "Free community sessions conducted in Hindi and local dialects addressing family mental health communication, stigma, and depression awareness."
    },
    {
      title: "Caregiver Support Circles",
      type: "Closed Guided Space",
      frequency: "Bi-weekly online & hybrid sessions",
      description: "Facilitated peer spaces for parents, siblings, and partners supporting loved ones with chronic psychological or physical conditions."
    },
    {
      title: "Mindful Morning Sessions",
      type: "Public Community",
      frequency: "Monthly weekend sessions",
      description: "Guided somatic grounding, diaphragmatic breathwork, and mindful walking exercises accessible to all age groups."
    },
    {
      title: "World Mental Health Day (October 10)",
      type: "Annual Flagship Event",
      frequency: "Annual symposium & community exhibition",
      description: "Panel discussions with mental health practitioners, student creative art showcases, and public policy dialogues."
    }
  ],

  // 9. Trust, Safety & Clinical Boundaries (PDF Section 6)
  trustAndSafety: {
    title: "Clinical Governance, Boundaries & Informed Trust",
    corePillars: [
      {
        title: "Limits to Confidentiality",
        description: "We respect your privacy deeply, but we never promise 'confidential always.' Confidentiality is strictly protected except when required by law: imminent threat of life or self-harm, risk of violence to another, or child sexual abuse / safeguarding escalation."
      },
      {
        title: "Qualified Supervision & Oversight",
        description: "All counsellors, facilitators, and student coordinators operate under regular clinical supervision. Student interns and volunteers never conduct clinical diagnosis or therapy independently."
      },
      {
        title: "Non-Emergency Signposting",
        description: "Our platform does not provide acute psychiatric emergency interventions or 24/7 suicide crisis desks. We clearly display verified national toll-free helplines (Tele-MANAS and KIRAN) on every single page."
      },
      {
        title: "Ethical Data Minimisation",
        description: "We deliberately do not ask for trauma histories, medical diagnoses, or sensitive personal records through public website forms. All communication is encrypted and handled strictly on a need-to-know basis."
      }
    ]
  },

  // 10. Frequently Asked Questions (PDF Section 5.13)
  faqs: [
    {
      q: "Is everything I say in counselling 100% confidential?",
      a: "Your sessions are confidential within established legal and professional boundaries. Your personal discussions will not be shared with employers, family, or colleges. However, confidentiality must be breached if there is an imminent risk to your life, danger to someone else, or a child protection concern, as mandated by Indian law and clinical ethics."
    },
    {
      q: "How does the fee structure and sliding scale work?",
      a: "We believe financial circumstances should not block access to mental wellbeing. We provide predefined standard fees, but reserve a percentage of our caseload for sliding-scale and subsidized sessions for students and those facing genuine financial constraints, verified through a respectful dialogue."
    },
    {
      q: "Can I get therapy if I am under 18 years old?",
      a: "For minors under the age of 18, counselling requires the informed consent of a parent or legal guardian alongside the adolescent's voluntary assent, in compliance with Indian healthcare guidelines and safeguarding principles."
    },
    {
      q: "What is the difference between a counsellor, clinical psychologist, and psychiatrist?",
      a: "A counsellor supports emotional distress, relationship challenges, and life transitions through talking therapies. A clinical psychologist holds specialized clinical qualifications (such as RCI registration) to assess, diagnose, and treat psychological disorders. A psychiatrist is a medical doctor (MBBS + MD/DNB) who can diagnose mental illnesses and prescribe psychiatric medications."
    },
    {
      q: "Do student interns independently provide counselling sessions?",
      a: "No. Student interns and volunteers at RedKross Psychology are strictly prohibited from conducting independent clinical therapy or diagnosis. Interns engage in psychoeducation design, research synthesis, and observe supervised peer support under senior practitioners."
    },
    {
      q: "How can our school, college, or workplace book an institutional workshop?",
      a: "You can submit an institutional inquiry through our Workshops page or Contact Desk. Our coordinator will discuss your institution's specific cohort size, language preferences, dates, and tailor the curriculum accordingly."
    }
  ]
};
