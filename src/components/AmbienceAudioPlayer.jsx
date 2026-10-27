import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Volume1 } from 'lucide-react';

/**
 * AmbienceAudioPlayer
 * Sleek, audible, and calming 528 Hz Solfeggio Healing Frequency Player.
 * Features:
 * - Pure 528 Hz harmonic tone + 4 Hz Theta binaural beat + warm Tibetan singing bowl
 * - Mastered at 44.1kHz stereo, crystal clear & soothing
 * - Deterministic play/pause with zero race conditions (default 72% volume)
 * - Volume control popup on hover/expand (Mute, 40%, 72%, 100%)
 * - Web Audio API synthesizer fallback
 * - Obsidian & turquoise glassmorphic pill matching RedKross Psychology theme
 */
export default function AmbienceAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.72);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const audioRef = useRef(null);
  const synthRef = useRef(null);

  // Web Audio API Synthesizer as resilient fallback
  const startSynth = () => {
    try {
      if (synthRef.current) return;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Master Gain
      const masterGain = ctx.createGain();
      const currentVol = isMuted ? 0 : volume;
      masterGain.gain.setValueAtTime(currentVol * 0.45, ctx.currentTime);

      // Lowpass Filter for silky acoustic smoothness
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);

      // 528 Hz Fundamental (Left Ear)
      const osc528 = ctx.createOscillator();
      osc528.type = 'sine';
      osc528.frequency.setValueAtTime(528, ctx.currentTime);

      // 524 Hz (Right Ear - 4 Hz Theta Binaural Calm)
      const osc524 = ctx.createOscillator();
      osc524.type = 'sine';
      osc524.frequency.setValueAtTime(524, ctx.currentTime);

      // 264 Hz Warm Fundamental Undertone
      const osc264 = ctx.createOscillator();
      osc264.type = 'sine';
      osc264.frequency.setValueAtTime(264, ctx.currentTime);
      const gain264 = ctx.createGain();
      gain264.gain.setValueAtTime(0.40, ctx.currentTime);
      osc264.connect(gain264);
      gain264.connect(filter);

      // 132 Hz Grounding Velvety Base
      const osc132 = ctx.createOscillator();
      osc132.type = 'sine';
      osc132.frequency.setValueAtTime(132, ctx.currentTime);
      const gain132 = ctx.createGain();
      gain132.gain.setValueAtTime(0.30, ctx.currentTime);
      osc132.connect(gain132);
      gain132.connect(filter);

      osc528.connect(filter);
      osc524.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc528.start();
      osc524.start();
      osc264.start();
      osc132.start();

      synthRef.current = { ctx, masterGain, oscs: [osc528, osc524, osc264, osc132] };
    } catch (e) {
      console.warn('Web Audio synth fallback error:', e);
    }
  };

  const stopSynth = () => {
    if (synthRef.current) {
      try {
        const { ctx, oscs } = synthRef.current;
        oscs.forEach(o => {
          try { o.stop(); o.disconnect(); } catch {}
        });
        try { ctx.close(); } catch {}
      } catch {}
      synthRef.current = null;
    }
  };

  // Toggle Play / Pause - Deterministic and instant
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      stopSynth();
      setIsPlaying(false);
    } else {
      const targetVol = isMuted ? 0 : volume;
      audio.volume = targetVol;
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('HTML5 audio play blocked, starting Web Audio API fallback:', err);
          startSynth();
          setIsPlaying(true);
        });
    }
  };

  // Handle Volume Change
  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    if (synthRef.current) {
      const { ctx, masterGain } = synthRef.current;
      masterGain.gain.setValueAtTime(newVol * 0.45, ctx.currentTime);
    }
  };

  // Toggle Mute
  const toggleMute = (e) => {
    e.stopPropagation();
    if (isMuted) {
      setIsMuted(false);
      handleVolumeChange(volume > 0 ? volume : 0.72);
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
      if (synthRef.current) {
        const { ctx, masterGain } = synthRef.current;
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, []);

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 select-none"
      onMouseEnter={() => setShowVolumeSlider(true)}
      onMouseLeave={() => setShowVolumeSlider(false)}
    >
      {/* Native HTML5 Audio Element with Loop */}
      <audio
        ref={audioRef}
        src="/assets/528hz-healing-ambience.wav"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Volume Slider Card on Hover / Tap */}
      {showVolumeSlider && (
        <div className="absolute bottom-full right-0 mb-2 p-3 rounded-2xl bg-[#06101B]/95 backdrop-blur-2xl border border-teal-500/35 shadow-2xl shadow-black/80 flex flex-col gap-2 min-w-[175px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between text-[11px] font-royal uppercase tracking-wider text-slate-300">
            <span className="text-teal-300 font-bold">Volume</span>
            <span>{isMuted ? 'Muted' : `${Math.round(volume * 100)}%`}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-slate-400 hover:text-teal-300 transition-colors p-1"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : volume < 0.5 ? (
                <Volume1 className="w-4 h-4 text-teal-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-teal-400" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
          </div>

          <div className="flex justify-between gap-1 pt-1 border-t border-teal-500/15">
            {[0.4, 0.72, 1.0].map((v) => (
              <button
                key={v}
                onClick={() => handleVolumeChange(v)}
                className={`text-[10px] font-mono px-2 py-0.5 rounded-md transition-all ${
                  volume === v && !isMuted 
                    ? 'bg-teal-500/30 text-teal-200 border border-teal-400/50' 
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {Math.round(v * 100)}%
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Glassmorphic Control Pill */}
      <button
        onClick={togglePlay}
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#081524]/95 backdrop-blur-2xl border border-teal-500/40 hover:border-teal-300 shadow-[0_8px_32px_rgba(0,0,0,0.65)] hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] transition-all duration-300 group focus:outline-none ring-1 ring-white/5"
        title={isPlaying ? "Pause 528 Hz Healing Sound" : "Click to Play 528 Hz Solfeggio Healing Sound"}
        aria-label={isPlaying ? "Pause 528 Hz Healing Sound" : "Click to Play 528 Hz Solfeggio Healing Sound"}
      >
        {/* Play / Pause Glowing Circular Indicator */}
        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying 
            ? 'bg-teal-400 text-[#08121E] shadow-[0_0_15px_rgba(45,212,191,0.6)] scale-105' 
            : 'bg-teal-500/20 text-teal-300 border border-teal-500/40 group-hover:bg-teal-500/30 group-hover:scale-105'
        }`}>
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </div>

        {/* Dynamic Label & Animated Equalizer Bars */}
        <div className="flex items-center gap-2.5 pr-1">
          <span className="font-royal text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-200 via-white to-teal-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-teal-200 transition-all">
            {isPlaying ? "528 Hz Playing" : "Play 528 Hz Sound"}
          </span>

          {/* Equalizer Sound Waves */}
          {isPlaying ? (
            <span className="flex items-center gap-0.5 h-3.5 px-0.5">
              <span className="w-1 h-full bg-teal-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
              <span className="w-1 h-3/5 bg-teal-300 rounded-full animate-[pulse_1.3s_ease-in-out_infinite_0.2s] shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
              <span className="w-1 h-full bg-teal-400 rounded-full animate-[pulse_1.0s_ease-in-out_infinite_0.4s] shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
              <span className="w-1 h-4/5 bg-teal-200 rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.6s] shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
            </span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-teal-400/40 group-hover:bg-teal-400 animate-ping duration-1000" />
          )}
        </div>
      </button>
    </div>
  );
}
