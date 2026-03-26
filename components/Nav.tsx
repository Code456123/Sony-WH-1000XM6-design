"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // We'll create a simple utlity next

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Add glassmorphism background after 50px of scroll
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide navbar on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-black/70 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="text-sm font-semibold tracking-wide text-white/90">
          WH-1000XM6
        </Link>
        
        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-[13px] font-medium text-white/60">
          {['Overview', 'Technology', 'Noise Cancelling', 'Specs', 'Buy'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors duration-200">
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <Link href="#buy" className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full opacity-60 group-hover:opacity-100 blur-[2px] transition duration-300"></div>
            <button className="relative text-xs font-semibold px-4 py-1.5 bg-primary text-white rounded-full leading-none">
              Experience WH-1000XM6
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
