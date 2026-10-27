import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ExternalLink 
} from 'lucide-react';
import UrgentHelpStrip from './UrgentHelpStrip';
import { PSYCHOLOGY_DATA } from '../data/psychologyData';

export default function PsychologyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Curated, essential navigation links strictly mapped from Developer Specification (PDF Section 3)
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Counselling", path: "/counselling" },
    { label: "Workshops", path: "/workshops" },
    { label: "Internships", path: "/internship" },
    { label: "Community", path: "/community" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none select-none">
      {/* 1. Mandatory Top Urgent-Help Crisis Strip (Pointer-events-auto) */}
      <div className="pointer-events-auto">
        <UrgentHelpStrip />
      </div>

      {/* 2. Floating Rounded-Full Glassmorphic Pill Navbar (Structure like Cybersecurity Navbar) */}
      <div className="px-4 sm:px-8 pt-2.5">
        <div className={`max-w-7xl mx-auto rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          scrolled 
            ? "bg-[#060D17]/92 backdrop-blur-2xl border border-teal-500/35 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            : "bg-[#08121E]/80 backdrop-blur-xl border border-teal-500/20 shadow-lg shadow-black/40"
        }`}>
          
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black border border-[#2dd4bf]/50 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.3)] group-hover:scale-105 transition-transform">
              <img 
                src="/assets/crest-clean-circle.png" 
                alt="RedKross Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-royal font-bold text-sm tracking-wider leading-tight uppercase bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent">
                RedKross Psychology
              </span>
              <span className="text-[9px] font-mono tracking-widest text-teal-400/80 uppercase -mt-0.5">
                Mental Wellbeing &bull; Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-xs font-mono font-medium transition-colors duration-200 relative py-1 whitespace-nowrap ${
                    active ? "text-[#2dd4bf] font-bold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#2dd4bf] to-[#0d9488] rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Enquire For Support Button (Structure like Cyber) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/counselling"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 via-teal-500/30 to-teal-500/20 border border-teal-400/50 hover:border-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.35)] hover:scale-105 transition-all cursor-pointer uppercase group/navbtn"
            >
              <span className="font-royal text-xs font-bold tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/navbtn:from-white group-hover/navbtn:to-teal-200">Enquire For Support</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-teal-300 group-hover/navbtn:text-white" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-[#2dd4bf] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#2dd4bf]" /> : <Menu className="w-5 h-5 text-[#2dd4bf]" />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Drawer (Floats underneath pill) */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-2 pointer-events-auto">
          <div className="max-w-7xl mx-auto rounded-2xl bg-[#060D17]/95 border border-teal-500/30 p-5 shadow-2xl backdrop-blur-2xl">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-mono flex items-center justify-between ${
                    isActive(link.path) 
                      ? "bg-teal-500/15 text-[#2dd4bf] font-bold" 
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />}
                </Link>
              ))}
              
              <div className="pt-3 border-t border-teal-500/15 mt-2 flex flex-col gap-2">
                <Link
                  to="/counselling"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500/20 via-teal-500/30 to-teal-500/20 border border-teal-400/50 hover:border-teal-300 text-xs font-royal font-bold uppercase tracking-wider group/mobbtn"
                >
                  <span className="bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover/mobbtn:from-white group-hover/mobbtn:to-teal-200">Enquire For Support</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-teal-300 group-hover/mobbtn:text-white" />
                </Link>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
