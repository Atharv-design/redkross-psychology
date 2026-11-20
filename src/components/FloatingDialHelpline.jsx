import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  PhoneCall, 
  X, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';

/**
 * FloatingDialHelpline
 * Fixed helpline dial pill positioned cleanly above the audio player.
 * - Matches the exact glassmorphic pill shape of the Audio button (Icon | Dial)
 * - Zero yellow dots or clutter on the button
 * - Proper vertical breathing space (no overlap / sticking)
 * - Minimal 1-at-a-time slide popover with << >> navigation and mobile swipe
 * - Zero unnecessary helper text at the bottom
 */
export default function FloatingDialHelpline() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const containerRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Close when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen for audio volume slider: when volume opens upwards, Dial smoothly hides (gayab ho jata hai)
  useEffect(() => {
    const handleVolumeToggle = (e) => {
      const open = !!e.detail?.isOpen;
      setIsVolumeOpen(open);
      if (open) {
        setIsOpen(false);
      }
    };
    window.addEventListener('audio-volume-toggle', handleVolumeToggle);
    return () => window.removeEventListener('audio-volume-toggle', handleVolumeToggle);
  }, []);

  // Broadcast dial popover state so volume slider stays closed when dial is open
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('dial-popover-toggle', { detail: { isOpen } }));
  }, [isOpen]);

  // Verified 24x7 Helplines with concise details
  const helplines = [
    {
      id: "tele-manas",
      name: "Tele-MANAS",
      number: "14416",
      tel: "tel:14416",
      tag: "Govt of India • 24×7",
      detail: "Free, confidential multi-lingual mental health support across India.",
      accentBorder: "border-teal-400/40",
      accentBadge: "text-teal-300 bg-teal-500/15 border-teal-400/30",
      btnBg: "bg-gradient-to-r from-teal-500/20 to-teal-500/30 hover:from-teal-500/30 hover:to-teal-500/40 border-teal-400/40 text-teal-200"
    },
    {
      id: "kiran",
      name: "KIRAN Helpline",
      number: "1800-599-0019",
      tel: "tel:18005990019",
      tag: "Social Justice Ministry • 24×7",
      detail: "Mental health rehabilitation, counseling & psychological support.",
      accentBorder: "border-teal-400/40",
      accentBadge: "text-teal-300 bg-teal-500/15 border-teal-400/30",
      btnBg: "bg-gradient-to-r from-teal-500/20 to-teal-500/30 hover:from-teal-500/30 hover:to-teal-500/40 border-teal-400/40 text-teal-200"
    },
    {
      id: "emergency-112",
      name: "Emergency Services",
      number: "112",
      tel: "tel:112",
      tag: "National Emergency • 24×7",
      detail: "Unified helpline for immediate police, ambulance & life safety.",
      accentBorder: "border-rose-500/40",
      accentBadge: "text-rose-300 bg-rose-500/15 border-rose-500/30",
      btnBg: "bg-gradient-to-r from-rose-500/20 to-rose-500/30 hover:from-rose-500/30 hover:to-rose-500/40 border-rose-400/40 text-rose-200"
    },
    {
      id: "vandrevala",
      name: "Vandrevala Foundation",
      number: "+91 9999 666 555",
      tel: "tel:+919999666555",
      tag: "NGO Counseling • 24×7",
      detail: "Free psychological distress counseling and compassionate listening.",
      accentBorder: "border-teal-400/40",
      accentBadge: "text-teal-300 bg-teal-500/15 border-teal-400/30",
      btnBg: "bg-gradient-to-r from-teal-500/20 to-teal-500/30 hover:from-teal-500/30 hover:to-teal-500/40 border-teal-400/40 text-teal-200"
    },
    {
      id: "redkross-desk",
      name: "RedKross General Desk",
      number: "+91 73032 63719",
      tel: "tel:+917303263719",
      tag: "Non-Clinical Desk",
      detail: "General inquiries, workshop bookings, and session coordination.",
      accentBorder: "border-cyan-400/40",
      accentBadge: "text-cyan-300 bg-cyan-500/15 border-cyan-400/30",
      btnBg: "bg-gradient-to-r from-cyan-500/20 to-cyan-500/30 hover:from-cyan-500/30 hover:to-cyan-500/40 border-cyan-400/40 text-cyan-200"
    }
  ];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? helplines.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === helplines.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;
    
    // Swipe left -> Next, Swipe right -> Prev
    if (diff < -40) {
      handleNext();
    } else if (diff > 40) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  const current = helplines[currentIndex];

  return (
    <div 
      ref={containerRef}
      className={`fixed bottom-[80px] right-6 z-40 select-none transition-all duration-300 ${
        isVolumeOpen 
          ? 'opacity-0 pointer-events-none scale-90 translate-y-3' 
          : 'opacity-100 pointer-events-auto scale-100 translate-y-0'
      }`}
    >
      {/* Popover Carousel: Shows ONLY 1 CARD at a time with << >> navigation & mobile swipe */}
      {isOpen && (
        <div 
          className="absolute bottom-full right-0 mb-3 w-[280px] sm:w-[310px] p-3 rounded-2xl bg-[#06101B]/96 backdrop-blur-2xl border border-teal-500/35 shadow-[0_16px_50px_rgba(0,0,0,0.85)] animate-in fade-in slide-in-from-bottom-2 duration-200"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="font-royal font-bold text-[11px] uppercase tracking-wider text-teal-300">
                Helplines
              </span>
              <span className="text-[10px] font-mono text-slate-400 ml-1">
                ({currentIndex + 1}/{helplines.length})
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dial menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Active Single Card Display */}
          <div className="relative">
            <div className={`p-3 rounded-xl border bg-slate-900/60 backdrop-blur-md transition-all duration-300 ${current.accentBorder}`}>
              {/* Badge + Name */}
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-semibold text-xs text-white truncate">
                  {current.name}
                </span>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${current.accentBadge}`}>
                  {current.tag}
                </span>
              </div>

              {/* Small Detail */}
              <p className="text-[11px] text-slate-300/90 leading-tight mb-2.5 line-clamp-2">
                {current.detail}
              </p>

              {/* Direct Tap-To-Call Button */}
              <a
                href={current.tel}
                className={`w-full py-2 px-3 rounded-lg border flex items-center justify-center gap-2 font-mono text-xs font-bold transition-all shadow-sm ${current.btnBg}`}
                title={`Call ${current.number}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {current.number}</span>
              </a>
            </div>

            {/* Navigation Controls: Just << >> arrows and pagination dots (No extra words or clutter) */}
            <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-white/5">
              {/* Left << Arrow */}
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-teal-500/20 text-slate-300 hover:text-teal-200 border border-white/10 hover:border-teal-400/40 transition-colors cursor-pointer"
                aria-label="Previous Helpline"
                title="Previous"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* Clickable Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {helplines.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`rounded-full transition-all cursor-pointer ${
                      dotIdx === currentIndex
                        ? 'w-4 h-1.5 bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]'
                        : 'w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Right >> Arrow */}
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-teal-500/20 text-slate-300 hover:text-teal-200 border border-white/10 hover:border-teal-400/40 transition-colors cursor-pointer"
                aria-label="Next Helpline"
                title="Next"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button: Identical Pill Layout & Dimensions as Audio Button [ Icon | Dial ] (Exact w-[94px] h-[48px]) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-[94px] h-[48px] p-1.5 rounded-full backdrop-blur-2xl border transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.65)] hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] cursor-pointer group focus:outline-none ring-1 ring-white/5 ${
          isOpen
            ? 'bg-teal-500/20 border-teal-300 text-teal-200'
            : 'bg-[#081524]/95 border-teal-500/40 hover:border-teal-300 text-slate-200 hover:text-white'
        }`}
        title={isOpen ? "Close Dial Menu" : "Open 24×7 Helplines"}
        aria-label="Toggle Dial Helplines"
      >
        {/* Left Circular Icon Button (matching audio play button w-9 h-9) */}
        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
          isOpen
            ? 'bg-teal-400 text-[#08121E] shadow-[0_0_15px_rgba(45,212,191,0.6)] scale-105'
            : 'bg-teal-500/20 text-teal-300 border border-teal-500/40 group-hover:bg-teal-500/30 group-hover:scale-105'
        }`}>
          <PhoneCall className="w-4 h-4" />
        </div>

        {/* Vertical Divider Line */}
        <div className="w-[1px] h-5 bg-teal-500/25 shrink-0" />

        {/* "DIAL" Text (matching right w-9 button space) */}
        <div className="w-9 h-9 flex items-center justify-center shrink-0">
          <span className="font-mono text-xs font-bold tracking-wider uppercase text-slate-200 group-hover:text-teal-200 transition-colors">
            DIAL
          </span>
        </div>
      </button>
    </div>
  );
}
