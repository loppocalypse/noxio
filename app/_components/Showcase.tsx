"use client";

import React from "react";
import { Box, Lock, Search, Settings, Sparkles, Cpu, UnfoldHorizontal } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Showcase() {
  return (
    <section className="relative px-8 md:px-20 py-32 z-20 border-t border-white/5 bg-nox-black">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-20 space-y-4">
          <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.8em]">Core_Systems</span>
          <h2 className="text-4xl font-light tracking-tighter uppercase">Technological <i className="serif-italic opacity-40 lowercase">framework</i></h2>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[38rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<UnfoldHorizontal className="h-4 w-4 text-white/70" />}
            title="Custom Node Architecture"
            description="We don't just use standard tools. We build custom n8n nodes and JavaScript logic to solve your most specific business hurdles."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4 text-white/70" />}
            title="Legacy-to-Cloud Sync"
            description="We bridge the gap between your old-school databases and modern SaaS tools using n8n’s powerful orchestration."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Cpu className="h-4 w-4 text-white/70" />}
            title="Autonomous AI Agents"
            description="We integrate LLMs (OpenAI/Anthropic) directly into your n8n workflows to handle smart data processing and decision making."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-white/70" />}
            title="Infrastructure Setup"
            description="We handle the heavy lifting: Secure self-hosted n8n deployments or cloud scaling tailored to your data volume."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4 text-white/70" />}
            title="Workflow Auditing"
            description="We analyze your existing manual mess and re-engineer it into a streamlined, error-free automation roadmap."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/5 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-[#050505]/50 backdrop-blur-sm shadow-[0px_0px_27px_0px_#111111]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-white/10 p-2 bg-white/5">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-audiowide text-xl tracking-tight text-white uppercase">
                {title}
              </h3>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed italic">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};