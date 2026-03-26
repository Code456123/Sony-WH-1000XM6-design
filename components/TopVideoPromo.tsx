"use client";

import { motion } from "framer-motion";

export default function TopVideoPromo() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center z-20 bg-[#050505] border-b border-white/5">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        src="/videos/promo2.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black/30 to-[#050505]"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter">
          Designed for <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-cyan to-white pt-2 inline-block">everywhere.</span>
        </h2>
        <button className="relative group overflow-hidden rounded-full mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-cyan opacity-80 group-hover:opacity-100 blur-md transition duration-500"></div>
          <div className="relative px-12 py-5 bg-[#050505] border border-white/20 rounded-full text-white font-bold tracking-wide uppercase text-sm group-hover:border-white/40 transition-colors">
            Pre-order Now
          </div>
        </button>
      </motion.div>
    </section>
  );
}
