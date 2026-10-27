# 🧠 RedKross Psychology Wing — Ethical Mental Health, Psychosocial Research & Grassroots Outreach

[![Subdomain](https://img.shields.io/badge/Subdomain-psychology.redkross.org.in-0D9488?style=for-the-badge&logo=heartpulse)](https://psychology.redkross.org.in)
[![Live Vercel](https://img.shields.io/badge/Live_Vercel-redkross--psychology.vercel.app-000000?style=for-the-badge&logo=vercel)](https://redkross-psychology.vercel.app)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Sound Engine](https://img.shields.io/badge/Sound-528_Hz_Healing_Frequency-F59E0B?style=for-the-badge&logo=soundcharts)](https://psychology.redkross.org.in)
[![Compliance](https://img.shields.io/badge/Standard-MHCA_2017_Compliant-10B981?style=for-the-badge)](https://main.mohfw.gov.in/)

> **Official web platform of the RedKross Psychology Wing** — a specialized division of RedKross Research Foundation dedicated to de-stigmatizing psychological support, delivering bilingual grassroots psychoeducation, and providing ethical, non-commercial mental health care across India.

- **Primary Canonical Domain:** [https://psychology.redkross.org.in](https://psychology.redkross.org.in)
- **Live Production URL:** [https://redkross-psychology.vercel.app](https://redkross-psychology.vercel.app)
- **Parent Foundation Portal:** [https://redkross.org.in](https://redkross.org.in)
- **Cyber Subdomain Portal:** [https://cyber.redkross.org.in](https://cyber.redkross.org.in)

---

## 🏛️ Clinical Scope & Ethical Safeguarding Charter

The RedKross Psychology Wing operates under rigorous ethical and statutory guardrails in full compliance with the **Mental Healthcare Act (MHCA 2017)**:
- **Stepped-Care Model:** Triage is calibrated to the user's specific distress level — ranging from self-guided digital toolkits and peer circles to supervised individual counseling and emergency hospital referrals.
- **Strict Clinical Boundaries:** We do not prescribe psychotropic medications or handle involuntary acute psychiatric emergencies online.
- **Emergency Integration:** Every page prominently embeds verified 24/7 National Emergency Helplines:
  - 📞 **Tele-MANAS:** `14416` (Ministry of Health & Family Welfare, Govt. of India)
  - 📞 **KIRAN Helpline:** `1800-599-0019` (Ministry of Social Justice and Empowerment)
- **Non-Commercial Mandate:** No paywalls, no aggressive monetization, and no sponsored clinical recommendations.

---

## 🎨 Visual Identity & Signature Architecture

### 1. Royal Typographic Hierarchy
- **Headings & Action Buttons:** Elegant **Cinzel** (`font-royal`) with uppercase tracking and a custom `bg-gradient-to-r from-teal-200 via-white to-teal-300` metallic clip.
- **Body & Data Typography:** High-legibility modern sans-serif optimized for 65–75 character measure and prolonged reading comfort.

### 2. The 10 Signature Psychology Themed Cards (`PsychologyThemedCard`)
Every card across all 7 pages features custom thematic artwork, metallic status pills, and high-contrast solid backgrounds (`#071320`) ensuring clean readability:
1. `Individual Counselling` (Personalized one-on-one sessions)
2. `Group Therapy` (Guided safe peer sharing circles)
3. `Student & Youth Mental Health` (Academic distress and somatic anxiety)
4. `Trauma & Grief Support` (Somatic grounding & bereavement care)
5. `Corporate & Institutional Wellness` (Workplace burnout prevention)
6. `Queer & Gender-Affirming Care` (Inclusive, identity-safe therapeutic space)
7. `Caregiver Support Circles` (Family psychoeducation for chronic illness)
8. `Geriatric & Elder Mental Health` (Cognitive health, memory, and loneliness)
9. `Neurodivergent Support Desk` (ADHD, Autism spectrum coaching)
10. `Crisis & Psychological First Aid` (Emergency stabilization & referral triage)

### 3. Integrated 528 Hz Healing Soundscape Engine (`AmbienceAudioPlayer`)
- **Icon-Only Minimal Control:** Clean circular `[ Play/Pause | Volume ]` button group with zero visual clutter.
- **Zero-Gap Volume Flyout:** Smooth mouse-hover popover with zero-gap hover bridge, debounced grace period, direct click-to-pin support, and 4 audio presets (Mute, 40%, 72%, 100%).
- **Native Audio Persistence:** Manages HTML5 audio elements directly tied to `audio.paused` physical state for instantaneous playback toggling.

---

## 🗺️ Complete Information Architecture & Pages

| Route | Page | Purpose & Core Layout Highlights |
| :--- | :--- | :--- |
| `/` | `HomePage` | Hero showcase, **2x2 Choose Your Journey**, Modalities of Care, Stepped-Care Matching, **Centered 5-Card Community Activities**, and Governance. |
| `/about` | `AboutPage` | Section 8 foundation charter, **2x2 4-Step Journey**, ethical boundaries, MHCA 2017 compliance, and leadership bios. |
| `/services` | `ServicesPage` | **Access & Affordability Framework (2x2 high-contrast grid)**, stepped triage model, care matching matrix, and intake protocols. |
| `/counselling` | `CounsellingPage` | Confidential counseling enquiry desk, modality comparisons, confidentiality ethical limits, and booking form. |
| `/workshops` | `WorkshopsPage` | College and corporate psychoeducation workshops, customized training modules, and institutional booking desk. |
| `/internships` | `InternshipsPage` | Supervised psychology trainee internships, supervisory criteria, curriculum modules, and application portal. |
| `/community` | `CommunityPage` | Grassroots public drives (**Row 1: Top 3 cards; Row 2: Mindful Mornings & World Mental Health Day centered in middle**), and Safeguarding Charter. |
| `/resources` | `ResourcesPage` | Verified 24/7 National Helplines (Tele-MANAS, KIRAN), self-help grounding audiobooks, and emergency action guides. |
| `/contact` | `ContactPage` | **2x2 Specialised Inquiry Desks** (Clinical, Institutional, Academic, General) and emergency protocol escalations. |

---

## ⚡ Performance & Zero-Lag Scrolling

- **GPU Acceleration:** All Framer Motion animations animate purely on GPU transforms (`opacity` and `transform: translateY(20px)`) with zero expensive CSS `filter: blur(...)` during scroll.
- **Selective Viewport Triggering:** Components strictly animate only when entering the user's active viewport (`amount: 0.25`, `once: true`) preventing premature background rendering or frame drops.
- **Glassmorphic Footer:** Seamless gradient transition from the main body into deep frosted glass without visible dividing lines.

---

## 🛠️ Local Development & Quickstart

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

```bash
# Clone the repository
git clone https://github.com/Atharv-design/redkross-psychology.git
cd redkross-psychology

# Install dependencies
npm install

# Start development server
npm run dev
# Live at http://localhost:5173

# Production build
npm run build

# Preview build locally
npm run preview
```

---

## 🔗 RedKross Digital Ecosystem

| Portal | URL | Mission |
| :--- | :--- | :--- |
| **RedKross Research Foundation (Main)** | [redkross.org.in](https://redkross.org.in) | Central institutional governance, leadership, and public partnerships |
| **Cyber Wing** | [cyber.redkross.org.in](https://cyber.redkross.org.in) | Applied systems research, academic labs, and technical training |
| **Psychology Wing** | [psychology.redkross.org.in](https://psychology.redkross.org.in) | Grassroots psychoeducation, stepped-care counseling, and community wellness |

---

## 📞 Immediate Crisis Helplines (India)

If you or someone you know is undergoing an acute psychological crisis or feeling overwhelmed:
- 🆘 **Tele-MANAS:** `14416` or `1800-891-4416` (Toll-Free, 24/7, Multi-lingual)
- 🆘 **KIRAN Mental Health Helpline:** `1800-599-0019` (24/7 Support)
- 🆘 **Vandrevala Foundation:** `+91 9999 666 555`

© 2026 RedKross Psychology Wing. All rights reserved.
