import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, CloudRain, Trees, Sliders, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * AmbienceAudioPlayer
 * Procedural Web Audio API engine synthesizing authentic Soft Rain & Forest Ambience.
 * Zero external audio downloads, 0 buffering, perfectly seamless infinite loop,
 * fully compliant with browser autoplay policies.
 */
export default function AmbienceAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preset, setPreset] = useState('rain-forest'); // 'rain-forest' | 'soft-rain' | 'deep-forest'
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const rainGainRef = useRef(null);
  const windGainRef = useRef(null);
  const dropGainRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Initialize Web Audio Synthesis Nodes
  const initAudioEngine = () => {
    if (audioCtxRef.current) return audioCtxRef.current;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;

    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume, ctx.currentTime);
    masterGain.connect(ctx.destination);
    masterGainRef.current = masterGain;

    // 1. Generate Continuous Noise Buffer (5 seconds looped)
    const bufferSize = ctx.sampleRate * 5;
    const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    const leftChannel = noiseBuffer.getChannelData(0);
    const rightChannel = noiseBuffer.getChannelData(1);

    // Pink noise generation
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      const pink = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
      leftChannel[i] = pink;
      rightChannel[i] = pink * (0.8 + Math.random() * 0.4);
    }

    // 2. Continuous Noise Source
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    // 3. Rain Filter Chain (Low-pass + Peaking for soothing rainfall texture)
    const rainFilter = ctx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.setValueAtTime(850, ctx.currentTime);
    rainFilter.Q.setValueAtTime(0.7, ctx.currentTime);

    const rainGain = ctx.createGain();
    rainGain.gain.setValueAtTime(0.55, ctx.currentTime);
    rainGainRef.current = rainGain;

    noiseSource.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(masterGain);

    // 4. Forest Wind / Foliage Resonance Chain (Modulated Bandpass)
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.setValueAtTime(320, ctx.currentTime);
    windFilter.Q.setValueAtTime(2.2, ctx.currentTime);

    // LFO for gentle wind breathing in the forest canopy
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8s cycle

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(140, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(windFilter.frequency);
    lfo.start();

    const windGain = ctx.createGain();
    windGain.gain.setValueAtTime(0.35, ctx.currentTime);
    windGainRef.current = windGain;

    noiseSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(masterGain);

    // 5. Individual Raindrop / Foliage Texture
    const dropFilter = ctx.createBiquadFilter();
    dropFilter.type = 'highpass';
    dropFilter.frequency.setValueAtTime(2800, ctx.currentTime);
    dropFilter.Q.setValueAtTime(1.0, ctx.currentTime);

    const dropGain = ctx.createGain();
    dropGain.gain.setValueAtTime(0.08, ctx.currentTime);
    dropGainRef.current = dropGain;

    noiseSource.connect(dropFilter);
    dropFilter.connect(dropGain);
    dropGain.connect(masterGain);

    noiseSource.start(0);
    return ctx;
  };

  // Start Audio Playback
  const startAudio = async () => {
    try {
      const ctx = initAudioEngine();
      if (!ctx) return;
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
      if (masterGainRef.current) {
        masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
        masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
        masterGainRef.current.gain.linearRampToValueAtTime(volume, ctx.currentTime + 1.2);
      }
      setIsPlaying(true);
      isPlayingRef.current = true;
    } catch (err) {
      console.warn('Audio start error:', err);
    }
  };

  // Stop Audio Playback with gentle fade
  const stopAudio = () => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
    masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
    masterGainRef.current.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    setTimeout(() => {
      if (!isPlayingRef.current && audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
    }, 850);
    setIsPlaying(false);
    isPlayingRef.current = false;
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  // Preset Adjustments
  useEffect(() => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    if (preset === 'rain-forest') {
      rainGainRef.current?.gain.linearRampToValueAtTime(0.55, now + 0.5);
      windGainRef.current?.gain.linearRampToValueAtTime(0.35, now + 0.5);
      dropGainRef.current?.gain.linearRampToValueAtTime(0.08, now + 0.5);
    } else if (preset === 'soft-rain') {
      rainGainRef.current?.gain.linearRampToValueAtTime(0.75, now + 0.5);
      windGainRef.current?.gain.linearRampToValueAtTime(0.12, now + 0.5);
      dropGainRef.current?.gain.linearRampToValueAtTime(0.12, now + 0.5);
    } else if (preset === 'deep-forest') {
      rainGainRef.current?.gain.linearRampToValueAtTime(0.20, now + 0.5);
      windGainRef.current?.gain.linearRampToValueAtTime(0.65, now + 0.5);
      dropGainRef.current?.gain.linearRampToValueAtTime(0.04, now + 0.5);
    }
  }, [preset]);

  // Handle Volume Change
  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (masterGainRef.current && audioCtxRef.current && isPlaying) {
      masterGainRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
      masterGainRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  // Browser Autoplay: Auto-play on first user click anywhere if desired
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        // Start soft ambience gently
        startAudio();
      }
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
    };

    window.addEventListener('click', handleFirstUserInteraction);
    window.addEventListener('keydown', handleFirstUserInteraction);

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [hasInteracted]);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* 1. Collapsible Settings Drawer (Glassmorphic) */}
      {isExpanded && (
        <div className="mb-3 p-4 rounded-2xl bg-[#08121E]/85 backdrop-blur-xl border border-teal-500/25 shadow-2xl shadow-black/60 w-72 text-slate-200 transition-all duration-300">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-teal-500/15">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-300">
              <CloudRain className="w-3.5 h-3.5 text-teal-400" />
              <span>Calming Ambience</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Sound Presets */}
          <div className="space-y-2 mb-4">
            <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
              Sound Atmosphere
            </label>
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              <button
                onClick={() => setPreset('rain-forest')}
                className={`px-2 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${
                  preset === 'rain-forest'
                    ? 'bg-teal-500/25 border-teal-400/60 text-teal-200 shadow-sm shadow-teal-500/20'
                    : 'bg-slate-900/40 border-white/5 text-slate-300 hover:border-teal-500/30'
                }`}
              >
                Rain & Forest
              </button>
              <button
                onClick={() => setPreset('soft-rain')}
                className={`px-2 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${
                  preset === 'soft-rain'
                    ? 'bg-teal-500/25 border-teal-400/60 text-teal-200 shadow-sm shadow-teal-500/20'
                    : 'bg-slate-900/40 border-white/5 text-slate-300 hover:border-teal-500/30'
                }`}
              >
                Soft Rain
              </button>
              <button
                onClick={() => setPreset('deep-forest')}
                className={`px-2 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${
                  preset === 'deep-forest'
                    ? 'bg-teal-500/25 border-teal-400/60 text-teal-200 shadow-sm shadow-teal-500/20'
                    : 'bg-slate-900/40 border-white/5 text-slate-300 hover:border-teal-500/30'
                }`}
              >
                Forest Breeze
              </button>
            </div>
          </div>

          {/* Volume Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Volume</span>
              </span>
              <span className="font-mono text-teal-300">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* 2. Floating Ambient Controller Pill (Glassmorphic) */}
      <div className="inline-flex items-center gap-2 p-1.5 pl-3 rounded-full bg-[#08121E]/80 backdrop-blur-xl border border-teal-500/30 shadow-xl shadow-black/40 hover:border-teal-400/50 transition-all duration-300">
        {/* Animated Equalizer Waves */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          title={isPlaying ? "Pause Ambience" : "Play Soft Rain & Forest Ambience"}
        >
          <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/40 group-hover:bg-teal-500/30 transition-colors">
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-teal-300" />
            ) : (
              <Play className="w-3.5 h-3.5 text-teal-300 ml-0.5" />
            )}
          </div>

          <div className="flex flex-col pr-1">
            <span className="text-[11px] font-semibold text-slate-100 flex items-center gap-1.5 leading-none">
              <span>Soft Rain & Forest</span>
              {isPlaying && (
                <span className="flex items-center gap-0.5 h-2.5">
                  <span className="w-0.5 h-full bg-teal-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
                  <span className="w-0.5 h-2/3 bg-teal-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.2s]" />
                  <span className="w-0.5 h-full bg-teal-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
                </span>
              )}
            </span>
            <span className="text-[9px] font-mono text-teal-400/80 leading-tight mt-0.5">
              {isPlaying ? 'Relaxing Ambience Active' : 'Click to Unmute / Play'}
            </span>
          </div>
        </button>

        {/* Expand / Adjust Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-teal-300 transition-colors border-l border-white/10 pl-2"
          title="Adjust Sound Atmosphere"
        >
          {isExpanded ? (
            <ChevronDown className="w-3.5 h-3.5" />
          ) : (
            <Sliders className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
