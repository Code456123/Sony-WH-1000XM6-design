"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function UniqueExperience() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Horizontal Scroll Magic (300vh space = 3 screens)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translates X from 0% to -66.66% so that the 300vw container pushes through the 3 slides
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  // Video Mask Magic
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoScroll } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(videoScroll, [0, 0.4], [0.8, 1]);
  const borderRadius = useTransform(videoScroll, [0, 0.4], ["3rem", "0rem"]);
  const opacity = useTransform(videoScroll, [0.8, 1], [1, 0.5]);

  return (
    <div className="relative z-20 bg-[#050505] flex flex-col pt-40 pb-10">
      
      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-accent-blue/50 tracking-tighter"
        >
          An artist's masterpiece.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-xl text-white/50 max-w-2xl mx-auto font-medium"
        >
          Form meets function in the most beautiful way possible. We obsess over every micrometer.
        </motion.p>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={targetRef} className="h-[300vh] relative w-full bg-[#0a0a0c]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[300vw] h-full items-center">
            
            <div className="w-screen h-[80vh] flex flex-col justify-center px-6 md:px-24">
              <div className="relative w-full h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl relative group bg-black">
                 <div className="absolute inset-0 bg-accent-blue/5 opacity-50 z-10"></div>
                 <Image src="/images/gallery1.png" fill alt="Masterpiece 1" className="object-cover md:object-contain mix-blend-screen scale-100 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="mt-10 ml-4 border-l-2 border-accent-blue pl-6">
                <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-2">Elegance in every curve.</h3>
                <p className="text-white/50 text-xl font-medium">A seamless finish crafted for pure aesthetic and aerodynamic performance.</p>
              </div>
            </div>

            <div className="w-screen h-[80vh] flex flex-col justify-center px-6 md:px-24">
              <div className="relative w-full h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl relative group bg-black">
                 <div className="absolute inset-0 bg-accent-cyan/5 opacity-50 z-10"></div>
                 <Image src="/images/gallery2.png" fill alt="Masterpiece 2" className="object-cover md:object-contain mix-blend-screen scale-100 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="mt-10 ml-4 border-l-2 border-accent-cyan pl-6">
                <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-2">The ultimate silhouette.</h3>
                <p className="text-white/50 text-xl font-medium">Understated matte finishes paired with an impossibly sleek headband design.</p>
              </div>
            </div>

            <div className="w-screen h-[80vh] flex flex-col justify-center px-6 md:px-24">
              <div className="relative w-full h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl relative group bg-black">
                 <div className="absolute inset-0 bg-white/5 opacity-50 z-10"></div>
                 <Image src="/images/gallery3.png" fill alt="Masterpiece 3" className="object-cover md:object-contain mix-blend-screen scale-100 group-hover:scale-105 transition-transform duration-1000 opacity-90" />
              </div>
              <div className="mt-10 ml-4 border-l-2 border-white/40 pl-6">
                <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-2">Untethered perfection.</h3>
                <p className="text-white/50 text-xl font-medium">Minimal gaps and joints ensure you see nothing but pure design intent.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Cinematic Scroll Mask Video */}
      <div ref={videoContainerRef} className="w-full relative py-32 md:py-48 flex justify-center overflow-hidden">
        <motion.div 
          style={{ scale, borderRadius, opacity }}
          className="relative w-full max-w-[1920px] aspect-video md:aspect-[21/9] overflow-hidden shadow-[0_0_50px_rgba(0,100,255,0.15)] bg-black"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover mix-blend-screen opacity-80 scale-105"
            src="/videos/promo3.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 mix-blend-multiply"></div>
          <div className="absolute bottom-12 left-6 right-6 md:bottom-24 md:left-24">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-2xl tracking-tighter mix-blend-overlay opacity-90">
              Vibrate Higher.
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-medium tracking-wide mt-4 ml-2">Experience the zenith of acoustic technology.</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
