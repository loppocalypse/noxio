// components/Footer.tsx
"use client";

import React from 'react';
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Footer() {
  return (
    // 'border-t' sildik çünkü Spotlight'ın kendi sınırları daha şık duracaktır
    <footer className="w-full bg-nox-black relative z-20">
      <CardSpotlight className="w-full rounded-none border-none py-24 px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-[1500px] mx-auto relative z-50">
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-[0.4em] uppercase text-white">Noxio</div>
            <p className="max-w-xs text-[8px] font-bold uppercase tracking-widest leading-loose opacity-20 text-white">
              The Future of Automation, starts where aesthetic and function gets together. 2026.
            </p>
          </div>
          
          <div className="flex gap-24 relative z-50">
            <div className="flex flex-col gap-4 text-[9px] font-bold uppercase tracking-widest text-white">
              <span className="opacity-20 mb-2">Social</span>
              <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Behance</a>
            </div>
            <div className="flex flex-col gap-4 text-[9px] font-bold uppercase tracking-widest text-white">
              <span className="opacity-20 mb-2">Studio</span>
              <a href="#" className="hover:opacity-50 transition-opacity">Manifesto</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Collective</a>
            </div>
          </div>
        </div>

        <div className="mt-32 flex justify-between items-center text-[7px] font-bold tracking-[0.6em] uppercase opacity-10 max-w-[1500px] mx-auto text-white relative z-50">
          <span>Washington DC / Paris</span>
          <span>Noxio Space © All Rights Reserved</span>
        </div>
      </CardSpotlight>
    </footer>
  );
}