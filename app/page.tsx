"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Cpu, UnfoldHorizontal, Plus } from 'lucide-react';
import Footer from '@/app/_components/Footer';
import Showcase from '@/app/_components/Showcase';
import Pricing from '@/app/_components/Pricing'

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { HyperText } from '@/components/ui/hyper-text';

export default function App() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollYProgress, { stiffness: 40, damping: 25 });
  
  const heroOpacity = useTransform(smoothY, [0, 0.25], [1, 0]);
  const heroScale = useTransform(smoothY, [0, 0.25], [1, 0.9]);
  const lineTranslate = useTransform(smoothY, [0, 1], [0, 400]);

  useEffect(() => {
    const win = window as any;

    const initScene = () => {
      if (win.UnicornStudio) {
        // Varsa eski instance'ı temizle
        try { win.UnicornStudio.destroy(); } catch (e) {}
        
        win.UnicornStudio.init().then(() => {
          // Sahne hesaplamaları bitene kadar 400ms bekle ve görünür yap
          setTimeout(() => {
            setIsLoaded(true);
            window.dispatchEvent(new Event('resize'));
          }, 400);
        });
      }
    };

    if (!win.UnicornStudio) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js";
      script.onload = initScene;
      document.head.appendChild(script);
    } else {
      initScene();
    }

    // Dom'a sonradan eklenen her türlü watermark linkini anında siler
    const observer = new MutationObserver(() => {
      const watermarks = document.querySelectorAll('a[href*="unicorn.studio"], [class*="unicorn-watermark"]');
      watermarks.forEach(el => (el as HTMLElement).remove());
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-nox-black text-nox-white antialiased min-h-screen">
      
      {/* Kinetik Dekoratif Çizgiler */}
      <motion.div 
        style={{ y: lineTranslate }}
        className="fixed top-0 left-[8%] w-[1px] h-screen bg-gradient-to-b from-white/10 via-transparent to-transparent z-10 pointer-events-none" 
      />
      <motion.div 
        style={{ y: lineTranslate }}
        className="fixed top-0 right-[8%] w-[1px] h-screen bg-gradient-to-b from-white/10 via-transparent to-transparent z-10 pointer-events-none" 
      />

      {/* Navigasyon */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-10 flex justify-between items-center mix-blend-difference">
        <div className="flex flex-col gap-0.5">
          <span className="text-[14px] font-bold tracking-[0.5em] uppercase leading-none">Noxio</span>
          <span className="text-[7px] tracking-[0.7em] uppercase opacity-30">Automation Atelier</span>
        </div>
        
        <div className="flex gap-12 items-center">
          <div className="hidden md:flex gap-10 text-[8px] font-bold tracking-[0.4em] uppercase opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity underline-offset-4 hover:underline">Collective</a>
            <a href="#" className="hover:opacity-100 transition-opacity underline-offset-4 hover:underline">Archive</a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Inquiry
          </button>
        </div>
      </nav>

      {/* Hero Alanı */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* ARKA PLAN CONTAINER */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.6 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div 
            data-us-project="HADgPBXffTUb142hINWF" 
            className="w-full h-full scale-[1.2]" // Scale artırıldı (filigranı dışarı iter)
            style={{ 
              minWidth: '100vw', 
              minHeight: '100vh',
              // Alt 80 piksellik kısmı tamamen render dışı bırakır
              clipPath: 'inset(0 0 80px 0)' 
            }}
          ></div>

          {/* WATERMARK MASKESİ */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[120px] z-[50]" 
            style={{ 
              backgroundColor: '#020202', // Tam siyah arkaplan
              boxShadow: '0 -30px 50px 10px #020202' // Üst tarafla yumuşak geçiş
            }} 
          />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-20 flex flex-col items-center"
        >
          <div className="mb-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center"
            >
              <Plus size={10} className="opacity-20" />
            </motion.div>
          </div>

          <div className="h-[20rem] flex items-center justify-center">
            <TextHoverEffect text="NOXIO" />
          </div>
          
          <div className="mt-12 overflow-hidden">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8, duration: 2 }}
              className="text-[9px] tracking-[1em] uppercase italic"
            >
              Digital Couture Intelligence
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll yazısının z-index'ini yükselttik */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-20 z-[60]">
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            <span className="text-[8px] tracking-[0.5em] uppercase font-bold">Scroll</span>
        </div>
      </section>      
      <Showcase />

      {/* Teknik Protokoller */}
      <section className="py-40 px-8 bg-nox-black">
        <div className="max-w-3xl mx-auto space-y-px bg-white/5">
            {[
              { name: "Core Engine", val: "active" },
              { name: "Sync Node", val: "0.4ms" },
              { name: "Privacy Layer", val: "enc-v3" },
              { name: "Visual Aura", val: "minimal" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="group flex justify-between items-center py-10 bg-[#020202] hover:bg-white hover:text-black transition-all duration-700 px-6 cursor-pointer"
              >
                 <div className="flex items-center gap-8">
                    <span className="text-[9px] opacity-20 font-bold uppercase tracking-widest">/0{i+1}</span>
                    <HyperText className="text-2xl font-light uppercase tracking-tighter">{item.name}</HyperText>
                 </div>
                 <span className="text-[8px] opacity-30 font-bold uppercase tracking-[0.5em] group-hover:opacity-100 italic">[{item.val}]</span>
              </motion.div>
            ))}
        </div>
      </section>
      <Pricing />
      <Footer />
    </div>
  );
}