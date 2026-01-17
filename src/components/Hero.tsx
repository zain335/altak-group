"use client";

import { Button } from "@/components/ui/button";
import Script from "next/script";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.03,
        }
      );
    }
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block overflow-hidden pb-0.5">
        <span className="char inline-block">{char === " " ? "\u00A0" : char}</span>
      </span>
    ));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background container for unicorn.studio */}
      <div
        id="unicorn-background"
        className="absolute inset-0 z-0"
        aria-label="Interactive background animation"
      >
        <div
          data-us-project="iZdhaQAxRtMBGj7SQ1EA"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Unicorn Studio Script */}
      <Script id="unicorn-studio-script" strategy="afterInteractive">
        {`
          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        `}
      </Script>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-end pb-32">
        <div className="max-w-4xl">
          {/* Terminal-style prompt */}
          <div className="mb-3 font-mono text-primary text-sm flex items-center gap-2">
            <span className="animate-pulse">▸</span>
            <span className="opacity-70">~/altak/studio</span>
          </div>

          {/* Main headline */}
          <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-[1.05]">
            <span className="text-primary font-mono tracking-tight block">
              {splitText("Altak Group")}
            </span>
            <span className="text-foreground block -translate-y-3">
              {splitText("builders of the future.")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-8 max-w-2xl leading-tight">
            Pushing the boundaries of{" "}
            <span className="text-primary">Web3</span>,{" "}
            <span className="text-primary">AI</span>, and{" "}
            <span className="text-primary">on-chain automation</span>.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="font-mono text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-[0_0_10px_rgba(0,255,200,0.2)] hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
