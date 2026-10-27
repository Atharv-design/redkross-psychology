import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

/**
 * AmbienceAudioPlayer
 * Minimal single-button audio player for Soft Rain & Forest Ambience.
 * Plays authentic, calming natural rainfall & forest breeze.
 * Features:
 * - Single compact play/pause button (no sliders, no preset dropdowns)
 * - Auto-initializes on user's first interaction
 * - Completely reliable native HTML5 audio looping
 */
export default function AmbienceAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play request blocked by browser policy:', err);
        });
    }
  };

  // Auto-start on first user interaction (click/touch anywhere on the page)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.volume = 0.45;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Browser prevented autoplay, wait for direct button click
          });
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/soft-rain-ambience.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Small, Sleek Single Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#08121E]/85 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400/60 shadow-lg shadow-black/50 text-slate-100 hover:text-white transition-all duration-300 group focus:outline-none"
        title={isPlaying ? "Pause Rain Ambience" : "Play Rain & Forest Ambience"}
        aria-label={isPlaying ? "Pause Ambience" : "Play Ambience"}
      >
        {/* Compact Play / Pause Icon */}
        <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/40 group-hover:bg-teal-500/30 transition-colors">
          {isPlaying ? (
            <Pause className="w-3 h-3 text-teal-300 fill-teal-300" />
          ) : (
            <Play className="w-3 h-3 text-teal-300 fill-teal-300 ml-0.5" />
          )}
        </div>

        {/* Minimal Calm Label with Realtime Sound Pulse */}
        <div className="flex items-center gap-1.5 pr-1">
          <span className="text-[11px] font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
            {isPlaying ? "Rain Ambience" : "Play Ambience"}
          </span>
          {isPlaying && (
            <span className="flex items-center gap-0.5 h-2.5">
              <span className="w-0.5 h-full bg-teal-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 h-2/3 bg-teal-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.2s]" />
              <span className="w-0.5 h-full bg-teal-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
