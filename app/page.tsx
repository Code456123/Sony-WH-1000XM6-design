import Nav from "@/components/Nav";
import Scrollytelling from "@/components/Scrollytelling";
import TopVideoPromo from "@/components/TopVideoPromo";
import UniqueExperience from "@/components/UniqueExperience";
import FeaturesExtended from "@/components/FeaturesExtended";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Nav />
      {/* 
        The Scrollytelling component takes care of 600vh height. 
        It plays the immersive headphone product sequence as user scrolls down.
      */}
      <Scrollytelling />

      {/* Moved from bottom to immediately after 3D sequence */}
      <TopVideoPromo />

      {/* Unique Awwwards style horizontal gallery and parallax video mask */}
      <UniqueExperience />
      
      {/* Extended feature blocks added below the main cinematic sequence */}
      <FeaturesExtended />
      
      {/* Footer matching standard corporate minimalism */}
      <footer className="h-64 flex flex-col items-center justify-center border-t border-white/5 bg-[#050505]/50 backdrop-blur-3xl">
        <div className="text-sm font-semibold tracking-widest text-white/30 mb-8 uppercase">WH-1000XM6</div>
        <p className="text-white/20 text-xs font-medium tracking-wider text-center max-w-xs">
          © 2026 Sony Corporation. <br/> Concept by Antigravity Design.
        </p>
      </footer>
    </main>
  );
}
