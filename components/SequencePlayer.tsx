"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface SequencePlayerProps {
  progress: MotionValue<number>;
  totalFrames?: number;
}

export default function SequencePlayer({ progress, totalFrames = 234 }: SequencePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const frameRef = useRef(1);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const numStr = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${numStr}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setLoaded(true);
        }
      };
      // Minimal error handling just skips
      img.onerror = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) setLoaded(true);
      };
      
      imgArray.push(img);
    }
    setImages(imgArray);
  }, [totalFrames]);

  // Render function
  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Constrain index
    const safeIndex = Math.max(0, Math.min(totalFrames - 1, index - 1));
    const img = images[safeIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const hRatio = cw / iw;
      const vRatio = ch / ih;
      const ratio = Math.min(hRatio, vRatio);

      const centerShift_x = (cw - iw * ratio) / 2;
      const centerShift_y = (ch - ih * ratio) / 2;

      ctx.clearRect(0, 0, cw, ch);
      // Fills to ensure clean #050505 background if the canvas ratio leaves gaps
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, cw, ch);
      
      ctx.drawImage(img, 0, 0, iw, ih, centerShift_x, centerShift_y, iw * ratio, ih * ratio);
    }
  };

  // Synchronize Scroll
  useMotionValueEvent(progress, "change", (latest) => {
    // latest goes from 0 to 1
    const frameNumber = Math.max(1, Math.min(totalFrames, Math.floor(latest * totalFrames)));
    if (frameNumber !== frameRef.current && loaded) {
      frameRef.current = frameNumber;
      requestAnimationFrame(() => renderFrame(frameNumber));
    }
  });

  // Initial render when loaded
  useEffect(() => {
    if (loaded && canvasRef.current) {
      renderFrame(frameRef.current);
    }
  }, [loaded]);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none bg-[#050505]">
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        style={{ mixBlendMode: 'screen' }}
        className="w-full h-[100dvh] object-cover md:object-contain max-w-full mix-blend-screen opacity-95 transition-opacity duration-1000"
      />
      
      {!loaded && (
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 text-sm font-medium z-50 bg-[#050505]">
           <span className="mb-2 uppercase tracking-widest text-[#00D6FF] drop-shadow-md">Loading High-Fidelity Sequence...</span>
           <span className="text-white/30">{loadingProgress}%</span>
         </div>
      )}
    </div>
  );
}
