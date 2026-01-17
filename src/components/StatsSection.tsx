"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "10+",
    label: "Products Shipped",
    description: "Flagship applications & tools",
  },
  {
    value: "2.3M+",
    label: "Social Reach",
    description: "Combined followers across platforms",
  },
  {
    value: "5+",
    label: "Chains Supported",
    description: "Solana, AVAX, Stellar & more",
  },
  {
    value: "24/7",
    label: "Always Building",
    description: "Continuous development & support",
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const statCards = sectionRef.current.querySelectorAll(".stat-card");

      gsap.fromTo(
        statCards,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
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
    <section ref={sectionRef} className="relative py-24 border-t border-primary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="font-mono text-primary text-sm mb-4 flex items-center justify-center gap-2">
            <span className="animate-pulse">▸</span>
            <span className="opacity-70">~/altak/stats</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By The Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, description }) => (
            <div
              key={label}
              className="stat-card group relative overflow-hidden rounded-xl border border-primary/20 bg-background/60 p-8 text-center transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 font-mono">
                {value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {label}
              </div>
              <div className="text-sm text-muted-foreground">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
