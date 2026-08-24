"use client";

import { useEffect, useRef, useState } from "react";

export default function FootstepSound() {
  const [enabled, setEnabled] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef(0);

  const playStep = () => {
    const context = contextRef.current;
    if (!context || context.state !== "running") return;

    const now = context.currentTime;
    const duration = 0.16;
    const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
    const data = buffer.getChannelData(0);

    for (let index = 0; index < data.length; index += 1) {
      const decay = Math.pow(1 - index / data.length, 3.2);
      data[index] = (Math.random() * 2 - 1) * decay;
    }

    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const pan = context.createStereoPanner();

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(stepRef.current % 2 === 0 ? 210 : 175, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.42, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    pan.pan.setValueAtTime(stepRef.current % 2 === 0 ? -0.18 : 0.18, now);

    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(pan);
    pan.connect(context.destination);
    source.start(now);
    source.stop(now + duration);
    stepRef.current += 1;
  };

  const stopSteps = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startSteps = async () => {
    const AudioContextClass = window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!contextRef.current) contextRef.current = new AudioContextClass();
    await contextRef.current.resume();
    stopSteps();
    playStep();
    timerRef.current = window.setInterval(playStep, 360);
  };

  const toggleSound = async () => {
    if (enabled) {
      stopSteps();
      setEnabled(false);
      return;
    }
    setEnabled(true);
    await startSteps();
  };

  useEffect(() => {
    return () => {
      stopSteps();
      void contextRef.current?.close();
    };
  }, []);

  return (
    <button
      className={"footstep-toggle " + (enabled ? "sound-on" : "")}
      type="button"
      onClick={toggleSound}
      aria-pressed={enabled}
    >
      <span>{enabled ? "🔊" : "🔇"}</span>
      <div>
        <strong>{enabled ? "Passos ativados" : "Ativar som dos passos"}</strong>
        <small>{enabled ? "Clique para silenciar" : "Clique para ouvir a caminhada"}</small>
      </div>
    </button>
  );
}
