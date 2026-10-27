import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ExternalLink, Heart } from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';
import DoodleCrewFooter from './ui/doodle-crew-footer-psychology';

/**
 * PsychologyFooter
 * Frosted Glassmorphic Footer seamlessly blended with upper sections.
 * Features:
 * - Zero hard horizontal top border line (soft vertical gradient mask)
 * - Ambient radial turquoise light bloom for organic seamless transition
 * - Floating glassmorphic emergency crisis guidance card
 * - Feathered specular dividers that naturally fade to zero opacity at edges
 * - Royal Cinzel typography with radiant turquoise-to-white color blend
 * - Interactive Doodle Crew brandmark with cute characters
 */
export default function PsychologyFooter() {
  const { identity, emergency } = PSYCHOLOGY_DATA;

  return (
    <footer className="w-full relative z-20 select-none text-slate-400 font-sans overflow-hidden bg-gradient-to-b from-transparent via-[#060D17]/85 to-[#040810]/98 backdrop-blur-3xl pt-8 sm:pt-16">
      
      {/* Ambient Ethereal Teal Light Bloom - Seamless blend with preceding section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-gradient-to-b from-teal-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Integrated Floating Crisis Guidance Glass Card (Organic & Non-Linear, Zero Full-Width Hard Lines) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#06101B]/80 backdrop-blur-2xl border border-amber-400/25 shadow-xl shadow-black/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-amber-200/90">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-400/35 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <span className="leading-relaxed">
              <strong className="font-royal text-amber-300 tracking-wider uppercase text-[11px] block sm:inline mr-1.5">Immediate Crisis Guidance:</strong>
              If you or someone you know is in acute distress, reach out to national 24×7 crisis helplines immediately.
            </span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 font-mono text-[11px] flex-wrap justify-center">
            <a href="tel:14416" className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-300 hover:bg-amber-500/25 hover:border-amber-300 transition-all shadow-sm">Tele-MANAS: 14416</a>
            <a href="tel:18005990019" className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-300 hover:bg-amber-500/25 hover:border-amber-300 transition-all shadow-sm">KIRAN: 1800-599-0019</a>
            <a href="tel:112" className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-400/35 text-rose-300 hover:bg-rose-500/25 hover:border-rose-300 transition-all shadow-sm">Emergency: 112</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand & Institutional Positioning */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-teal-500/15 backdrop-blur-md border border-teal-500/30 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(45,212,191,0.2)] group-hover:scale-105 transition-transform">
                <img 
                  src="/assets/crest-clean-circle.png" 
                  alt="RedKross Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-royal font-bold text-lg tracking-wide uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                RedKross Psychology
              </span>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 max-w-sm font-light">
              The official psychology and mental-wellbeing wing of RedKross Research Foundation. Grounded in empathetic listening, ethical boundaries, evidence-informed research, and accessible community care.
            </p>

            <div className="p-4 rounded-2xl bg-[#06101B]/80 backdrop-blur-xl border border-teal-500/20 text-[11px] font-mono text-slate-400 space-y-1.5 shadow-md shadow-black/30">
              <div><strong className="text-slate-300">Parent Body:</strong> {identity.parentOrg.name}</div>
              <div><strong className="text-slate-300">Corporate Status:</strong> {identity.parentOrg.legalStatus}</div>
              <div><strong className="text-slate-300">Govt CIN:</strong> {identity.parentOrg.cin} (RoC Haryana)</div>
              <div><strong className="text-slate-300">Reg. Office:</strong> Panipat, Haryana 132103, India</div>
            </div>
          </div>

          {/* Col 3: Programmes & Care */}
          <div>
            <h4 className="text-xs font-royal font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              Support &amp; Programmes
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/services" className="hover:text-teal-300 transition-colors">All 6 Programmes</Link></li>
              <li><Link to="/counselling" className="hover:text-teal-300 transition-colors">Individual Counselling</Link></li>
              <li><Link to="/counselling" className="hover:text-teal-300 transition-colors">Student &amp; Career Counselling</Link></li>
              <li><Link to="/support-groups" className="hover:text-teal-300 transition-colors">Facilitated Support Groups</Link></li>
              <li><Link to="/community" className="hover:text-teal-300 transition-colors">Community Outreach Camps</Link></li>
              <li><Link to="/resources" className="hover:text-teal-300 transition-colors">Self-Help &amp; Guides</Link></li>
            </ul>
          </div>

          {/* Col 4: Learning & Institutions */}
          <div>
            <h4 className="text-xs font-royal font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              Learning &amp; Training
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/workshops" className="hover:text-teal-300 transition-colors">Workshops Catalogue</Link></li>
              <li><Link to="/workshops" className="hover:text-teal-300 transition-colors">Psychological First Aid (PFA)</Link></li>
              <li><Link to="/internship" className="hover:text-teal-300 transition-colors">Internship (3 Vetted Tracks)</Link></li>
              <li><Link to="/community" className="hover:text-teal-300 transition-colors">Request Institutional Session</Link></li>
              <li><Link to="/research" className="hover:text-teal-300 transition-colors">Research &amp; Inquiries</Link></li>
              <li><Link to="/faq" className="hover:text-teal-300 transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 5: Sister Wings & Cross-Links */}
          <div>
            <h4 className="text-xs font-royal font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
              RedKross Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href={identity.parentOrg.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors flex items-center justify-between"
                >
                  <span>RedKross Foundation</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href={identity.cyberSubdomain.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors flex items-center justify-between"
                >
                  <span>Cybersecurity Research</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Official canonical domains:
                <div className="font-mono text-[10px] text-teal-400/80 mt-1 space-y-0.5">
                  <div>redkross.org.in</div>
                  <div>cyber.redkross.org.in</div>
                  <div>psychology.redkross.org.in</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Feathered Specular Divider (Smooth fade out at both sides - No Hard Cut Lines) */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/25 to-transparent my-8" />

        {/* Interactive Hand-Drawn Doodle Crew Brandmark for RedKross Psychology */}
        <div className="my-6 overflow-hidden">
          <DoodleCrewFooter
            as="div"
            showTop={false}
            showBar={false}
            wordmark="REDKROSS"
            subWordmark="PSYCHOLOGY"
            fontFamily="'Cinzel', serif"
            wordmarkColorMode="logo"
            tagline="Empathetic Listening, Stigma-Free Support, Ethical Governance & Community Psychological Literacy"
            height="520px"
            palette={{
              background: "transparent",
              ink: "#f1f5f9",
              accent: "#2DD4BF"
            }}
            crew={[
              { kind: "yeti", letter: 0, seat: "front", scale: 0.44, offset: -0.32, says: "Deep breath: inhale calm, exhale tension 🌿" },
              { kind: "bird", letter: 1, seat: "top", offset: 0.08, says: "Your feelings are valid, take all the time you need 💚" },
              { kind: "ghost", letter: 2, seat: "behind", offset: 0.0, says: "You don't have to carry it all alone ✨" },
              { kind: "cat", letter: 3, seat: "top", offset: 0.05, says: "Safe, confidential space with zero judgment 🕊️" },
              { kind: "kid", letter: 4, seat: "front", offset: 0.1, says: "One gentle step at a time, at your own pace 🌸" },
              { kind: "mushroom", letter: 5, seat: "front", offset: -0.05, says: "Your mind deserves the exact same care as your body 🧘" },
              { kind: "bird", letter: 6, seat: "top", offset: -0.08, flip: true, says: "Kindness and empathy start from within 🌿" },
              { kind: "cat", letter: 7, seat: "front", flip: true, offset: 0.12, says: "Listening with an open, caring heart 💙" }
            ]}
            doodles={[]}
            doodleCount={0}
            actions={[
              { label: "Enquire for Support", href: "/counselling", variant: "solid" },
              { label: "Institutional Workshops", href: "/workshops", variant: "outline" }
            ]}
          />
        </div>

        {/* Feathered Specular Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent my-6" />

        {/* Bottom Legal & Safeguarding Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} RedKross Research Foundation. All rights reserved. Registered Section 8 Non-Profit Organisation.
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <Link to="/privacy" className="hover:text-teal-300 transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-teal-300 transition-colors">Terms of Use</Link>
            <span>&bull;</span>
            <Link to="/safeguarding" className="hover:text-teal-300 transition-colors">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
