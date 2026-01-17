"use client";

import { useEffect, useRef } from "react";
import NextImage from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bot,
  Rocket,
  LineChart,
  Shield,
  Smartphone,
  Image,
  Mic,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Illuminatibot",
    subtitle: '"Harvey" Social Agent',
    highlight: "2.3M Followers",
    description:
      "Harvey is a lightning-fast social agent that tracks smart money on-chain. It monitors whale and KOL wallet movements, instantly tweeting human-readable insights about wallet activity, transaction sizes, and their market significance. Integrated burn/lock mechanisms respond to sentiment shifts in real time.",
    tags: ["elizaOS", "Solana", "AI Agent", "Real-time"],
    icon: Bot,
    gradient: "from-purple-500/20 to-blue-500/20",
    image: "/illu.png",
  },
  {
    id: 2,
    title: "Cooking City Launchpad",
    subtitle: "Social On-Chain Leaderboards",
    highlight: "Community Hub",
    description:
      "A social hub with on-chain leaderboards that reward diamond-hand holders and creators. Building a community-driven ecosystem where engagement and holding are rewarded transparently on-chain.",
    tags: ["Launchpad", "Leaderboards", "Social", "Rewards"],
    icon: Rocket,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    title: "AlchemyEx",
    subtitle: "Trade Bots Powered by AI + DEX Aggregation",
    highlight: "AI Trading",
    description:
      "A Solana order-flow engine that pipes AI-generated trading signals straight through. Uses TradingView and Jupiter aggregator as a middle party. Users can automate any strategy in PineScript and create bots on the platform, or generate strategies by just typing a prompt on Alchemy AI.",
    tags: ["TradingView", "Jupiter", "PineScript", "AI Signals"],
    icon: LineChart,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Plasmic Bot",
    subtitle: "Plasmic Chain's Trading Companion",
    highlight: "Best-in-Class UX",
    description:
      "The ultimate trading companion on Plasmic chain. Execute limit orders with precision, manage your positions through a clean intuitive interface, and get the best routes with solid quotes. Built for traders who demand speed, clarity, and optimal execution.",
    tags: ["Plasmic", "Telegram", "Trading", "DEX"],
    icon: Shield,
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    id: 5,
    title: "Pawse App",
    subtitle: "Detox-to-Earn on Web3",
    highlight: "iOS App",
    description:
      "The first 'detox-to-earn' mobile suite in Web3. Users track screen time, earn points for stepping away, and flex streaks directly to X via one-tap sharing. Features a polished Solana wallet, real-time leaderboards, and purpose-built UI for healthier engagement.",
    tags: ["iOS", "Solana", "Wellness", "Gamification"],
    icon: Smartphone,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 6,
    title: "AI Wall-Portrait Gen",
    subtitle: "Decor Photos, Reimagined",
    highlight: "GPT-4o Vision",
    description:
      "Turns a plain wall into a Pinterest-ready showcase in seconds. Users upload one photo of their wall and one of any artwork; our pipeline blends OpenAI GPT-4o vision with the Pinterest API to produce photorealistic mock-ups that help shoppers visualise decor before they buy.",
    tags: ["GPT-4o", "Pinterest API", "Vision AI", "E-commerce"],
    icon: Image,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 7,
    title: "VoiceGPT",
    subtitle: "Conversations in Any Language",
    highlight: "Multilingual",
    description:
      "A voice-first interface that lets non-English users converse with GPT in their native tongue. Speech-to-text captures queries, GPT processes them, and OpenAI's TTS streams expressive replies back in real time - no typing, just natural dialogue.",
    tags: ["Voice AI", "TTS", "Multilingual", "OpenAI"],
    icon: Mic,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const projectCards = sectionRef.current.querySelectorAll(".project-card");

      projectCards.forEach((card, index) => {
        const isEven = index % 2 === 0;

        gsap.fromTo(
          card,
          {
            x: isEven ? -80 : 80,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 border-t border-primary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="font-mono text-primary text-sm mb-4 flex items-center justify-center gap-2">
            <span className="animate-pulse">▸</span>
            <span className="opacity-70">~/altak/projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We've Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            Shipping amazing products that push the boundaries of Web3, AI, and on-chain automation.
          </p>
        </div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`project-card grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  isEven ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* Content Side */}
                <div className={`space-y-6 ${isEven ? "" : "md:[direction:ltr]"}`}>
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-primary/30 bg-background/80 p-3 text-primary shrink-0">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-mono text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-card border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${isEven ? "" : "md:[direction:ltr]"}`}>
                  {"image" in project && project.image ? (
                    <div className="relative aspect-[4/3] flex items-center justify-center">
                      <NextImage
                        src={project.image}
                        alt={project.title}
                        width={450}
                        height={450}
                        className="object-contain drop-shadow-[0_0_40px_rgba(0,255,200,0.25)] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div
                      className={`relative aspect-[4/3] rounded-2xl border border-primary/20 bg-gradient-to-br ${project.gradient} overflow-hidden group`}
                    >
                      {/* Decorative Grid Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>

                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-6 rounded-full bg-background/10 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="h-16 w-16 text-primary/60" />
                        </div>
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-4 left-4 font-mono text-xs text-primary/40">
                        [{String(index + 1).padStart(2, "0")}]
                      </div>
                      <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/40">
                        {project.title.toLowerCase().replace(/\s+/g, "_")}.tsx
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
