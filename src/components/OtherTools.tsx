"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  BarChart3,
  Copy,
  Database,
  MessageSquare,
  Radio,
  Search,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    title: "Stellarchain Launchpad",
    description: "AI agents paired with XLM liquidity pools",
    icon: Star,
  },
  {
    title: "DEX Monitors",
    description: "Real-time price and volume tracking",
    icon: Activity,
  },
  {
    title: "Copy Trading Bots",
    description: "Mirror top wallet strategies automatically",
    icon: Copy,
  },
  {
    title: "Wallet Analytics",
    description: "Deep-dive into any wallet's history",
    icon: Wallet,
  },
  {
    title: "Bundle Detection",
    description: "Identify coordinated trading activity",
    icon: Search,
  },
  {
    title: "Alpha Tools",
    description: "Discord & Telegram trading signals",
    icon: MessageSquare,
  },
  {
    title: "On-Chain Dashboards",
    description: "Comprehensive analytics interfaces",
    icon: BarChart3,
  },
  {
    title: "Data Aggregators",
    description: "Multi-source data consolidation",
    icon: Database,
  },
  {
    title: "Signal Bots",
    description: "Automated alert systems",
    icon: Radio,
  },
  {
    title: "Custom Solutions",
    description: "Tailored tools for your needs",
    icon: Sparkles,
  },
];

export function OtherTools() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".tool-card");

      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.03,
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
      id="tools"
      className="relative py-24 border-t border-primary/20"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="font-mono text-primary text-sm mb-4 flex items-center justify-center gap-2">
            <span className="animate-pulse">▸</span>
            <span className="opacity-70">~/altak/toolbox</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            More Tools & Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            Beyond our flagship products, we've built dozens of specialized
            tools for Discord/TG alpha groups and traders.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tools.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="tool-card group relative overflow-hidden rounded-xl border border-primary/15 bg-background/60 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-lg border border-primary/30 bg-background/80 p-2 text-primary transition-colors duration-300 group-hover:bg-primary/10">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-11">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
