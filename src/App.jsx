import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PsychologyNavbar from './components/PsychologyNavbar';
import PsychologyFooter from './components/PsychologyFooter';
import PsychologyBackgroundWatermark from './components/PsychologyBackgroundWatermark';
import AmbienceAudioPlayer from './components/AmbienceAudioPlayer';

// Primary Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CounsellingPage from './pages/CounsellingPage';
import WorkshopsPage from './pages/WorkshopsPage';
import InternshipsPage from './pages/InternshipsPage';
import CommunityPage from './pages/CommunityPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

// Fallback & Ancillary
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/counselling" element={<CounsellingPage />} />
          <Route path="/support-groups" element={<ServicesPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/internship" element={<InternshipsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/activities" element={<CommunityPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/faq" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Ancillary & Policy Views */}
          <Route path="/creative-corner" element={<PagePlaceholder title="Creative Corner" category="EXPRESSION & PSYCHOEDUCATION" description="Art, writing, and storytelling for emotional expression and psychoeducation." />} />
          <Route path="/blog" element={<PagePlaceholder title="Educational Articles & Notes" category="PSYCHOEDUCATION & ESSAYS" description="Reviewed articles on exam anxiety, family mental health dialogues, and digital wellbeing." />} />
          <Route path="/blog/:slug" element={<PagePlaceholder title="Educational Article" category="PSYCHOEDUCATION" description="Evidence-backed perspective on mental health and psychological wellbeing." />} />
          <Route path="/research" element={<PagePlaceholder title="Psychology Research" category="RESEARCH THEMES & ETHICS" description="Inquiries into mental health literacy, digital doomscrolling, and help-seeking behavior." />} />
          <Route path="/volunteer" element={<CommunityPage />} />
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
