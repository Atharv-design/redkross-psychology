import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

/**
 * AmbienceAudioPlayer
 * Sleek, single-button audio player for 528 Hz Solfeggio Healing Frequency.
 * Designed specifically for superior calming, deep stress relief, and gentle acoustics.
 * Features:
 * - 528 Hz pure harmonic tone with 4 Hz Theta binaural beat & warm Tibetan bowl resonance
 * - Mastered at soft, ear-friendly volume (zero harsh highs, zero treble hiss)
 * - Smooth 1.5s volume fade-in / fade-out (no clicks, no sudden jumps)
 * - Compact frosted glass pill design matching RedKross Psychology theme
 */
export default function AmbienceAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Smooth Volume Fade In / Out to protect ears from sudden jumps
  const fadeTo = (targetVolume, durationMs, onComplete) => {
    if (!audioRef.current) return;
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    const steps = 25;
    const stepTime = durationMs / steps;
    const initialVolume = audioRef.current.volume;
    const volumeDelta = (targetVolume - initialVolume) / steps;
    let stepCount = 0;

    fadeIntervalRef.current = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(fadeIntervalRef.current);
        return;
      }
      stepCount++;
      const newVol = initialVolume + volumeDelta * stepCount;
      audioRef.current.volume = Math.max(0, Math.min(1, newVol));

      if (stepCount >= steps) {
        clearInterval(fadeIntervalRef.current);
        audioRef.current.volume = targetVolume;
        if (onComplete) onComplete();
      }
    }, stepTime);
  };

  // Toggle Play / Pause with silky smooth volume fading
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Fade out gently before pausing
      fadeTo(0, 700, () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      });
    } else {
      audioRef.current.volume = 0;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          // Fade in gently to soft, soothing 0.22 level
          fadeTo(0.22, 1200);
        })
        .catch((err) => {
          console.warn('Audio play request blocked by browser policy:', err);
        });
    }
  };

  // Soft auto-start on first user interaction with gentle 1.5s fade-in
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.volume = 0;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            fadeTo(0.18, 1800); // Very gentle 0.18 background volume
          })
          .catch(() => {
            // Autoplay policy prevented playback, user can tap the button
          });
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Hidden Native Audio Element with Perfectly Looped 528Hz Solfeggio Soundscape */}
      <audio
        ref={audioRef}
        src="/assets/528hz-healing-ambience.wav"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Small, Sleek Single Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#08121E]/90 backdrop-blur-xl border border-teal-500/30 hover:border-teal-400/60 shadow-xl shadow-black/60 text-slate-100 hover:text-white transition-all duration-300 group focus:outline-none"
        title={isPlaying ? "Pause 528 Hz Healing Sound" : "Play 528 Hz Calming Frequency"}
        aria-label={isPlaying ? "Pause 528 Hz Healing Sound" : "Play 528 Hz Calming Frequency"}
      >
        {/* Compact Play / Pause Icon with Subtle Emerald/Teal Glow */}
        <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/40 group-hover:bg-teal-500/30 group-hover:scale-105 transition-all">
          {isPlaying ? (
            <Pause className="w-3 h-3 text-teal-300 fill-teal-300" />
          ) : (
            <Play className="w-3 h-3 text-teal-300 fill-teal-300 ml-0.5" />
          )}
        </div>

        {/* Minimal Calm Label with Realtime Sound Pulse */}
        <div className="flex items-center gap-2 pr-1">
          <span className="text-[11px] font-semibold tracking-wide text-slate-200 group-hover:text-teal-300 transition-colors">
            {isPlaying ? "528 Hz Healing" : "528 Hz Calm"}
          </span>
          {isPlaying && (
            <span className="flex items-center gap-0.5 h-2.5">
              <span className="w-0.5 h-full bg-teal-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" />
              <span className="w-0.5 h-2/3 bg-teal-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.3s]" />
              <span className="w-0.5 h-full bg-teal-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.6s]" />
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
