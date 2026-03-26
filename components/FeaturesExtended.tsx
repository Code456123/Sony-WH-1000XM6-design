"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesExtended() {
  return (
    <div className="relative bg-[#050505] z-20 flex flex-col">
      
      {/* Existing Feature 1 & 2 */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Section 1: All-Day Power */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow tracking-tight">
                Listen all day. <br />
                <span className="text-white/40">Charge in minutes.</span>
              </h3>
              <p className="text-lg md:text-xl text-white/50 mb-10 max-w-md leading-relaxed font-medium">
                With a massive 30 hours of battery life, you&apos;ll have enough power even for long trips. Need to top up in a hurry? Get 3 hours&apos; worth of charge after just 3 minutes.
              </p>
              <ul className="space-y-5 text-white/70 font-medium text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,214,255,0.8)]"></span>
                  Up to 30 hours of continuous listening
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(0,80,255,0.8)]"></span>
                  USB-PD Quick charging enabled
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-white/30"></span>
                  Premium collapsible carrying case
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-1 lg:order-2 relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden bg-[#0A0A0C] border border-white/5 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image 
                src="/images/sony1.png" 
                alt="Sony WH-1000XM6 Battery Life" 
                fill 
                className="object-cover md:object-contain object-center scale-100 group-hover:scale-105 transition-transform duration-1000 mix-blend-screen opacity-95"
              />
            </motion.div>
          </div>

          {/* Section 2: Multipoint Connection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden bg-[#0A0A0C] border border-white/5 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-accent-cyan/10 to-transparent z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image 
                src="/images/sony2.png" 
                alt="Sony WH-1000XM6 Multipoint" 
                fill 
                className="object-cover md:object-contain object-center scale-100 group-hover:scale-105 transition-transform duration-1000 mix-blend-screen opacity-95 p-8"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pl-0 lg:pl-10"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow tracking-tight">
                Seamless pairing. <br />
                <span className="text-white/40">Zero interruptions.</span>
              </h3>
              <p className="text-lg md:text-xl text-white/50 mb-10 max-w-md leading-relaxed font-medium">
                For ultimate convenience, these Bluetooth headphones can be paired with two devices simultaneously. When a call comes in, your headphones instantly connect to the ringing device.
              </p>
              <div className="flex gap-4 max-w-md">
                <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 flex-1 shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-3xl font-bold text-white mb-2">Dual</div>
                  <div className="text-sm text-white/50 font-medium tracking-wide">Device Sync</div>
                </div>
                <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 flex-1 shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-3xl font-bold text-white mb-2">5.3</div>
                  <div className="text-sm text-white/50 font-medium tracking-wide">Bluetooth®</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW Section 3: Full Width Cinematic Video (promo1) */}
      <section className="relative w-full h-screen overflow-hidden group border-y border-white/5">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-60 mix-blend-screen"
          src="/videos/promo1.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl tracking-tighter mb-4 saturate-150">
              Pure immersion.
            </h2>
            <p className="text-xl md:text-3xl text-white/80 font-medium drop-shadow-md tracking-tight">
              Step perfectly into the music.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW Section 5: The Final Video Push (promo2) */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center -mb-px">
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

    </div>
  );
}
