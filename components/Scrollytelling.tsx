"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import SequencePlayer from "./SequencePlayer";

const StorySegment = ({
  progress,
  start,
  end,
  align = "center",
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  align?: "left" | "right" | "center";
  children: React.ReactNode;
}) => {
  const fadeStartIn = start + (end - start) * 0.15;
  const fadeEndOut = end - (end - start) * 0.15;

  const opacity = useTransform(
    progress,
    [start, fadeStartIn, fadeEndOut, end],
    [0, 1, 1, end >= 1.0 ? 1 : 0]
  );

  const y = useTransform(
    progress,
    [start, fadeStartIn, fadeEndOut, end],
    [50, 0, 0, end >= 1.0 ? 0 : -50]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center px-8 md:px-24 mx-auto max-w-7xl h-full w-full pointer-events-none z-10 
                  ${
                    align === "left"
                      ? "items-start text-left"
                      : align === "right"
                      ? "items-end text-right"
                      : "items-center text-center"
                  }`}
    >
      <div className="max-w-xl pointer-events-auto">{children}</div>
    </motion.div>
  );
};

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], 
  });

  return (
    <div ref={containerRef} className="relative w-full h-[600vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* The Image Sequence Player */}
        <SequencePlayer progress={scrollYProgress} totalFrames={234} />

        {/* Ambient background glow to separate text subtly from the 3D model */}
        <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none mix-blend-screen" />

        {/* Story Overlays */}
        {/* Hero: 0 - 0.15 */}
        <StorySegment progress={scrollYProgress} start={0} end={0.15} align="center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-xl saturate-150">
            Sony WH-1000XM6
          </h1>
          <p className="text-2xl lg:text-3xl font-medium tracking-tight text-white/90 mb-6 drop-shadow-md">
            Silence, perfected.
          </p>
          <p className="text-sm md:text-base text-white/60 font-medium">
            Flagship wireless noise cancelling,<br /> re-engineered for a world that never stops.
          </p>
        </StorySegment>

        {/* Engineering Reveal: 0.15 - 0.40 */}
        <StorySegment progress={scrollYProgress} start={0.15} end={0.4} align="left">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60 drop-shadow-lg">
            Precision-engineered<br />for silence.
          </h2>
          <div className="space-y-4 text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-md drop-shadow">
            <p>Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.</p>
            <p>Every component is tuned for balance, power, and comfort—hour after hour.</p>
          </div>
        </StorySegment>

        {/* Noise Cancelling: 0.40 - 0.65 */}
        <StorySegment progress={scrollYProgress} start={0.4} end={0.65} align="right">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-accent-cyan/80 drop-shadow-md">
            Adaptive noise<br />cancelling, redefined.
          </h2>
          <div className="space-y-4 text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-md ml-auto">
            <p className="flex items-start justify-end gap-3 text-right">
              Multi-microphone array listens in every direction.
            </p>
            <p className="flex items-start justify-end gap-3 text-right text-white/80">
              Real-time noise analysis adjusts to your environment.
            </p>
            <p className="flex items-start justify-end gap-3 text-right">
              Your music stays pure—planes, trains, and crowds fade away.
            </p>
          </div>
        </StorySegment>

        {/* Sound & Upscaling: 0.65 - 0.85 */}
        <StorySegment progress={scrollYProgress} start={0.65} end={0.85} align="left">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
            Immersive,<br />lifelike sound.
          </h2>
          <div className="space-y-4 text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-md">
            <p className="drop-shadow">High-performance drivers unlock detail, depth, and texture in every track.</p>
            <p className="text-white/80">AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.</p>
          </div>
        </StorySegment>

        {/* Reassembly & CTA: 0.85 - 1.0 */}
        <StorySegment progress={scrollYProgress} start={0.85} end={1.0} align="center">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg leading-tight">
            Hear everything.<br />Feel nothing else.
          </h2>
          <p className="text-xl md:text-2xl font-medium tracking-tight text-white/80 mb-10 drop-shadow">
            WH-1000XM6. Designed for focus, crafted for comfort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="relative group overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/80 to-accent-cyan/80 blur-md group-hover:opacity-100 opacity-60 transition duration-500"></div>
              <div className="relative px-8 py-3.5 bg-[#050505] border border-white/10 rounded-full text-white font-semibold flex items-center gap-2 group-hover:border-white/30 transition-colors shadow-2xl">
                Experience WH-1000XM6
              </div>
            </button>
            <button className="text-white/60 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white/50 pb-0.5">
              See full specs
            </button>
          </div>
          <p className="mt-10 text-[11px] text-white/30 tracking-widest uppercase font-semibold">
            Engineered for airports, offices, and everything in between.
          </p>
        </StorySegment>

      </div>
    </div>
  );
}
