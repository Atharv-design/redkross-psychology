import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HeartHandshake, 
  Menu, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Phone,
  Compass
} from 'lucide-react';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';

export default function PsychologyNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Counselling', path: '/counselling' },
    { label: 'Workshops', path: '/workshops' },
    { label: 'Internships', path: '/internship' },
    { label: 'Community', path: '/community' },
    { label: 'Resources', path: '/resources' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A0F1D]/90 backdrop-blur-xl border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center p-1.5 group-hover:border-teal-400 transition-all shadow-[0_0_20px_rgba(20,184,166,0.15)]">
            <img 
              src="/assets/crest-clean-circle.png" 
              alt="RedKross Psychology Crest" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(20,184,166,0.4)]"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-royal font-bold text-base sm:text-lg text-white tracking-wider group-hover:text-teal-300 transition-colors">
                REDKROSS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 font-semibold uppercase tracking-wider">
                PSYCHOLOGY
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 tracking-tight">
              Research Foundation &bull; Mental Wellbeing Wing
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                isActive(item.path)
                  ? 'bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Sister Domain Links */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/counselling"
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-royal font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]"
          >
            Enquire for Support
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5 text-teal-300" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0F1D] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`p-2.5 rounded-lg text-xs font-mono transition-all text-center ${
                  isActive(item.path)
                    ? 'bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30'
                    : 'text-slate-300 bg-white/[0.03] border border-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              to="/counselling"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-xl bg-teal-600 text-white text-center font-royal font-bold text-xs uppercase tracking-wider"
            >
              Enquire for Support
            </Link>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
              <a 
                href={PSYCHOLOGY_DATA.identity.parentOrg.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-300 flex items-center gap-1"
              >
                <span>Main Foundation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href={PSYCHOLOGY_DATA.identity.cyberSubdomain.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-300 flex items-center gap-1"
              >
                <span>Cyber Division</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
