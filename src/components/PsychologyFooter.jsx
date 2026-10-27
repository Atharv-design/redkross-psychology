import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Phone, Mail, MapPin, ExternalLink, ShieldCheck, FileText, Lock, Globe } from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';

export default function PsychologyFooter() {
  const { identity, emergency } = PSYCHOLOGY_DATA;

  return (
    <footer className="w-full bg-[#060913] border-t border-white/10 text-slate-400 font-sans select-none relative z-20">
      
      {/* Top Banner in Footer: Crisis Reminder */}
      <div className="border-b border-amber-500/20 bg-[#0E0B04] px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-amber-200/90">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Emergency Guidance:</strong> If you are experiencing acute distress or self-harm thoughts, please reach out to national 24×7 crisis helplines immediately.
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 font-mono text-[11px]">
            <a href="tel:14416" className="text-amber-300 hover:underline">Tele-MANAS: 14416</a>
            <span className="text-slate-600">&bull;</span>
            <a href="tel:18005990019" className="text-amber-300 hover:underline">KIRAN: 1800-599-0019</a>
            <span className="text-slate-600">&bull;</span>
            <a href="tel:112" className="text-red-400 hover:underline">Emergency: 112</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand & Institutional Positioning */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center p-1.5">
                <img 
                  src="/assets/crest-clean-circle.png" 
                  alt="RedKross Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-royal font-bold text-lg text-white tracking-wider">
                REDKROSS <span className="text-teal-400 font-mono text-sm font-semibold">PSYCHOLOGY</span>
              </span>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 max-w-sm">
              The official psychology and mental-wellbeing wing of RedKross Research Foundation. Grounded in empathetic listening, ethical boundaries, evidence-informed research, and accessible community care.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Parent Body:</strong> {identity.parentOrg.name}</div>
              <div><strong className="text-slate-300">Corporate Status:</strong> {identity.parentOrg.legalStatus}</div>
              <div><strong className="text-slate-300">Govt CIN:</strong> {identity.parentOrg.cin} (RoC Haryana)</div>
              <div><strong className="text-slate-300">Reg. Office:</strong> Panipat, Haryana 132103, India</div>
            </div>
          </div>

          {/* Col 3: Programmes & Care */}
          <div>
            <h4 className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider mb-4">
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
            <h4 className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider mb-4">
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
            <h4 className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider mb-4">
              RedKross Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href={identity.parentOrg.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group"
                >
                  <span>Main Foundation</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href={identity.cyberSubdomain.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group"
                >
                  <span>Cybersecurity Division</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li className="pt-2 text-slate-500 font-mono text-[11px]">
                Direct Contacts:
              </li>
              <li>
                <a href={`mailto:${identity.contacts.counselling}`} className="text-slate-300 hover:underline">
                  {identity.contacts.counselling}
                </a>
              </li>
              <li>
                <a href={`tel:${identity.contacts.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:underline">
                  {identity.contacts.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Ethics, Safeguarding & Legal Notice */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} RedKross Research Foundation. All rights reserved.
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Use</Link>
            <Link to="/safeguarding" className="hover:text-slate-300">Safeguarding &amp; Boundaries</Link>
            <span className="text-teal-400">WCAG 2.2 AA Calibrated</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
