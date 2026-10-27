import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ExternalLink, 
  Sparkles,
  ArrowRight
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
    <header className="sticky top-[41px] z-40 w-full bg-[#08121E]/80 backdrop-blur-2xl border-b border-teal-500/20 select-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 backdrop-blur-md border border-teal-500/30 flex items-center justify-center p-1.5 group-hover:border-teal-400/60 group-hover:bg-teal-500/20 transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            <img 
              src="/assets/crest-clean-circle.png" 
              alt="RedKross Psychology Crest" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg text-white tracking-wide group-hover:text-teal-300 transition-colors">
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

        {/* Desktop Navigation Links (Glass Pills) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                isActive(item.path)
                  ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/35 backdrop-blur-md shadow-sm shadow-teal-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04] border border-transparent'
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
            className="px-4 py-2 rounded-xl glass-button-primary text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg shadow-teal-500/20"
          >
            <span>Enquire for Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5 text-teal-300" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#08121E]/95 backdrop-blur-2xl border-b border-teal-500/20 px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`p-2.5 rounded-xl text-xs font-mono transition-all text-center ${
                  isActive(item.path)
                    ? 'bg-teal-500/20 text-teal-300 font-bold border border-teal-500/35'
                    : 'text-slate-300 bg-white/[0.03] border border-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-teal-500/15 flex flex-col gap-2">
            <Link
              to="/counselling"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-xl glass-button-primary text-slate-950 text-center font-bold text-xs uppercase tracking-wider"
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
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a 
                href={PSYCHOLOGY_DATA.identity.cyberSubdomain.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-300 flex items-center gap-1"
              >
                <span>Cybersecurity</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
