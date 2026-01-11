"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function Pricing() {
  return (
    <section className="relative py-40 bg-nox-black">
      <div className="max-w-[1500px] mx-auto text-center mb-24">
        <span className="text-[10px] font-bold opacity-30 uppercase tracking-[1em]">Investment_Models</span>
        <h2 className="text-4xl font-light tracking-tighter uppercase mt-6 text-white italic">
          Scalable <span className="serif-italic opacity-40 lowercase">Automations</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 mx-auto px-8 max-w-[1400px]">
        
        {/* ALPHA: Starter Workflows */}
        <Card 
          title="Alpha Protocol" 
          deployFee="$2,500"
          monthlyFee="$149"
          description="Fundamental automation for core business operations."
          features={["3 Custom n8n Workflows", "Standard API Integrations", "Weekly System Audits"]}
          badge="Essential"
        >
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-zinc-900" colors={[[150, 150, 150]]} dotSize={2} />
        </Card>

        {/* ARCHITECT: Full Scale Automation */}
        <Card 
          title="Architect Node" 
          deployFee="$7,500"
          monthlyFee="$399"
          description="End-to-end operational engine for growing enterprises."
          features={["Unlimited Workflows", "Custom JS Node Development", "AI-Agent Integration", "24/7 Priority Support"]}
          badge="Recommended"
        >
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-blue-900" colors={[[59, 130, 246]]} dotSize={2} />
        </Card>

        {/* SOVEREIGN: Custom Infrastructure */}
        <Card 
          title="Sovereign Hub" 
          deployFee="Custom"
          monthlyFee="Variable"
          description="High-security on-premise infrastructure for global scale."
          features={["Private n8n Hosting", "Quantum-Safe Encryption", "Dedicated Logic Engineer", "White-Glove Service"]}
          badge="Enterprise"
        >
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-emerald-900" colors={[[16, 185, 129]]} dotSize={2} />
        </Card>
      </div>
    </section>
  );
}

const Card = ({ title, deployFee, monthlyFee, description, features, badge, children }: any) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // İstediğin uzun, ferah h-[42rem] dikey kart yapısı
      className="border border-white/[0.1] group/canvas-card flex items-center justify-center max-w-md w-full mx-auto p-10 relative h-[42rem] bg-[#050505] overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/20" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white/20" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/20" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full h-full flex flex-col justify-between">
        {/* Üst: Başlık ve Rozet */}
        <div className="space-y-6">
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 block">/ {badge}</span>
          <h2 className="text-white text-2xl font-audiowide uppercase tracking-tighter leading-none">{title}</h2>
          <p className="text-[11px] text-neutral-500 font-light leading-relaxed uppercase tracking-widest">{description}</p>
          <div className="h-[1px] w-12 bg-white/20 group-hover/canvas-card:w-full transition-all duration-1000" />
        </div>

        {/* Orta: Fiyatlandırma ve Özellikler */}
        <div className="space-y-10">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">One-time Deploy</span>
              <span className="text-4xl font-bold text-white tracking-tighter italic">{deployFee}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Monthly Service</span>
              <span className="text-xl font-light text-white tracking-tight italic opacity-80">
                {monthlyFee} <span className="text-[10px] lowercase opacity-40">/ mo</span>
              </span>
            </div>
          </div>
          
          <ul className="space-y-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            {features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <div className="h-[1px] w-3 bg-white/40" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/70 font-light">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Alt: CTA Butonu */}
        <button className="w-full py-5 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.5em] text-white hover:bg-white hover:text-black transition-all duration-700">
          Initialize_Deployment
        </button>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);