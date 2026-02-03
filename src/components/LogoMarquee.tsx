"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LogoMarquee() {
  const sectionRef = useRef<HTMLElement>(null);

  const logos = [
    { name: "Solana", abbr: "SOL" },
    { name: "Avalanche", abbr: "AVAX" },
    { name: "Stellar", abbr: "XLM" },
    { name: "OpenAI", abbr: "GPT" },
    { name: "Meteora", abbr: "MET" },
    { name: "Jupiter", abbr: "JUP" },
    { name: "TradingView", abbr: "TV" },
    { name: "elizaOS", abbr: "ELIZA" },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const logoItems = sectionRef.current.querySelectorAll(".logo-item");

      gsap.fromTo(
        logoItems,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.02,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 border-y border-primary/20 overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Section Label */}

      <div className="container mx-auto px-6 mb-8">
        <div className="font-mono text-primary text-sm flex items-center justify-center gap-2">
          <span className="animate-pulse">▸</span>
          <span className="opacity-70 tracking-widest">~/tech/stack</span>
        </div>
      </div>

      <div className="relative flex gap-16">
        {/* First set of logos */}
        <div className="flex animate-marquee gap-16 items-center shrink-0">
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${logo.name}-${index}`}
              className="group flex items-center gap-3 shrink-0 logo-item"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-mono text-sm font-bold">
                  {logo.abbr}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div
          className="flex animate-marquee gap-16 items-center shrink-0"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${logo.name}-${index}`}
              className="group flex items-center gap-3 shrink-0 logo-item"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-mono text-sm font-bold">
                  {logo.abbr}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Third set for extra seamlessness */}
        <div
          className="flex animate-marquee gap-16 items-center shrink-0"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <div
              key={`logo-3-${logo.name}-${index}`}
              className="group flex items-center gap-3 shrink-0 logo-item"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-mono text-sm font-bold">
                  {logo.abbr}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
