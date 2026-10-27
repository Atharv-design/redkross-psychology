import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PsychologyNavbar from './components/PsychologyNavbar';
import PsychologyFooter from './components/PsychologyFooter';
import PsychologyBackgroundWatermark from './components/PsychologyBackgroundWatermark';
import AmbienceAudioPlayer from './components/AmbienceAudioPlayer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PagePlaceholder from './pages/PagePlaceholder';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08121E] text-slate-100 flex flex-col font-sans relative selection:bg-teal-500/30 selection:text-teal-200">
      <ScrollToTop />
      
      {/* 1. Ambient RedKross Crest Watermark & Calming Light Blooms */}
      <PsychologyBackgroundWatermark />

      {/* 2. Soft Rain & Forest Ambience Sound Controller */}
      <AmbienceAudioPlayer />

      {/* 3. Floating Glassmorphic Pill Navbar (with Top Crisis Strip) */}
      <PsychologyNavbar />

      {/* 4. Main Routed View with Safe Offset */}
      <main className="flex-1 relative z-10 pt-28 sm:pt-32">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<PagePlaceholder title="Programmes & Support" category="COMPREHENSIVE PROGRAMME INVENTORY" description="Overview of the 6 core programmes: Counselling, Support Groups, Outreach, PFA, and Research." />} />
          <Route path="/counselling" element={<PagePlaceholder title="Counselling Enquiries" category="CONFIDENTIAL CARE WITHIN BOUNDARIES" description="Information on individual and student/career counselling, session structures, and ethical intake." />} />
          <Route path="/support-groups" element={<PagePlaceholder title="Facilitated Support Groups" category="PEER SPACES & GUIDED DIALOGUES" description="Small closed peer circles for grief, caregiver stress, and young-adult wellbeing." />} />
          <Route path="/workshops" element={<PagePlaceholder title="Workshops Catalogue" category="INSTITUTIONAL CURRICULUM DELIVERY" description="The 6 evidence-informed workshop modules for schools, colleges, and workplaces." />} />
          <Route path="/internship" element={<PagePlaceholder title="Internship Opportunities" category="3 VERIFIED INTERNSHIP TRACKS" description="Foundation Track (4 weeks), Practice Track (8 weeks), and Research Track (8–12 weeks)." />} />
          <Route path="/community" element={<PagePlaceholder title="Community & Outreach" category="GRASSROOTS INITIATIVES & CAMPS" description="Mental health awareness camps, mindful mornings, and World Mental Health Day campaigns." />} />
          <Route path="/activities" element={<PagePlaceholder title="Community & Outreach" category="GRASSROOTS INITIATIVES & CAMPS" description="Mental health awareness camps, mindful mornings, and World Mental Health Day campaigns." />} />
          <Route path="/creative-corner" element={<PagePlaceholder title="Creative Corner" category="EXPRESSION & PSYCHOEDUCATION" description="Art, writing, and storytelling for emotional expression and psychoeducation." />} />
          <Route path="/resources" element={<PagePlaceholder title="Self-Help Resources & Guides" category="EVIDENCE-INFORMED GUIDES & DIRECTORIES" description="Verified helplines, psychoeducation booklets, and evidence-informed coping frameworks." />} />
          <Route path="/blog" element={<PagePlaceholder title="Educational Articles & Notes" category="PSYCHOEDUCATION & ESSAYS" description="Reviewed articles on exam anxiety, family mental health dialogues, and digital wellbeing." />} />
          <Route path="/blog/:slug" element={<PagePlaceholder title="Educational Article" category="PSYCHOEDUCATION" description="Evidence-backed perspective on mental health and psychological wellbeing." />} />
          <Route path="/research" element={<PagePlaceholder title="Psychology Research" category="RESEARCH THEMES & ETHICS" description="Inquiries into mental health literacy, digital doomscrolling, and help-seeking behavior." />} />
          <Route path="/volunteer" element={<PagePlaceholder title="Volunteer Community" category="COMMUNITY INVOLVEMENT" description="Supervised roles in event coordination, literacy drives, and community advocacy." />} />
          <Route path="/faq" element={<PagePlaceholder title="Frequently Asked Questions" category="TRANSPARENT ANSWERS" description="Clear explanations of confidentiality limits, fees, minor consent, and workshop bookings." />} />
          <Route path="/contact" element={<PagePlaceholder title="Contact Desks" category="NON-CLINICAL ENQUIRY ROUTING" description="Direct communication routing for general inquiries, workshops, and institutional partnerships." />} />
          <Route path="/privacy" element={<PagePlaceholder title="Privacy Policy" category="DATA GOVERNANCE" description="Transparent privacy and data minimization policies compliant with Indian law." />} />
          <Route path="/terms" element={<PagePlaceholder title="Terms of Use" category="EDUCATIONAL BOUNDARIES" description="Acceptable use, educational content limitations, and institutional disclaimers." />} />
          <Route path="/safeguarding" element={<PagePlaceholder title="Safeguarding & Clinical Boundaries" category="PROTECTION & ESCALATION" description="Protective policies for minors, vulnerable adults, and emergency referral protocols." />} />
          <Route path="*" element={<PagePlaceholder title="404 // Page Not Found" category="ROUTE UNRESOLVED" description="The requested route could not be found. Please return to our verified sections." />} />
        </Routes>
      </main>

      {/* 6. Unified Institutional Footer (Glassmorphic) */}
      <PsychologyFooter />
    </div>
  );
}
