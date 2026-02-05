"use client";

import { useEffect, useRef, useState } from "react";
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
  Trophy,
  Radio,
  Cpu,
  Wallet,
  Sparkles,
  Target,
  Zap,
  Gamepad2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// All 16 projects from the PDF
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
    logo: "/illu.png",
    category: "AI Agent",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    title: "AlchemyEx",
    subtitle: "Trade Bots Powered by AI + DEX Aggregation",
    highlight: "AI Trading",
    description:
      "A Solana order-flow engine that pipes AI-generated trading signals straight through. Uses TradingView and Jupiter aggregator as a middle party. Users can automate any strategy in PineScript and create bots on the platform, or generate strategies by just typing a prompt on Alchemy AI.",
    tags: ["TradingView", "Jupiter", "PineScript", "AI Signals"],
    icon: LineChart,
    logo: "/alchemyEx.png",
    category: "DeFi",
    featured: true,
    size: "large",
  },
  {
    id: 3,
    title: "Dare.Live",
    subtitle: "Decentralized Live Challenge Platform",
    highlight: "Live Streaming",
    description:
      "A blockchain-powered platform where creators post challenges (dares) with SOL rewards, and participants compete by live streaming or uploading video proof of completion. Each dare mints its own tradeable token with a bonding curve that graduates to DEX upon completion.",
    tags: ["Solana", "Live Streaming", "Tokenized Economics", "Raydium"],
    icon: Radio,
    logo: "/darelive.png",
    category: "Social",
    featured: false,
    size: "medium",
  },
  {
    id: 4,
    title: "Robotics Layer",
    subtitle: "Decentralized AI Platform",
    highlight: "100K+ Contributors",
    description:
      "A production-grade Web3 platform enabling 100,000+ contributors to participate in the $750B robotics revolution. Features passwordless authentication, scalable file uploads, and comprehensive dashboard for data submissions and rewards tracking.",
    tags: ["Next.js 14", "PostgreSQL", "Web3", "Enterprise"],
    icon: Cpu,
    logo: "/roboticslayer.png",
    category: "Infrastructure",
    featured: false,
    size: "medium",
  },
  {
    id: 5,
    title: "Plasmic Bot",
    subtitle: "Plasmic Chain's Trading Companion",
    highlight: "Best-in-Class UX",
    description:
      "The ultimate trading companion on Plasmic chain featuring enterprise-grade security through Privy's custodial wallet infrastructure with TEE-secured key management. Execute limit orders, manage positions, and get optimal routes with KyberSwap aggregation.",
    tags: ["Plasmic", "TEE Security", "KyberSwap", "DeBridge"],
    icon: Shield,
    logo: "/plasmicBot.png",
    category: "DeFi",
    featured: false,
    size: "medium",
  },
  {
    id: 6,
    title: "Cooking City Launchpad",
    subtitle: "Social On-Chain Leaderboards",
    highlight: "Community Hub",
    description:
      "A social hub with on-chain leaderboards that reward diamond-hand holders and creators. Building a community-driven ecosystem where engagement and holding are rewarded transparently on-chain.",
    tags: ["Launchpad", "Leaderboards", "Social", "Rewards"],
    icon: Rocket,
    logo: "/cooking.png",
    category: "Social",
    featured: false,
    size: "medium",
  },
  {
    id: 7,
    title: "Pawse App",
    subtitle: "Detox-to-Earn on Web3",
    highlight: "iOS App",
    description:
      "The first 'detox-to-earn' mobile suite in Web3. Users track screen time, earn points for stepping away, and flex streaks directly to X via one-tap sharing. Features a polished Solana wallet, real-time leaderboards, and purpose-built UI.",
    tags: ["iOS", "Solana", "Wellness", "Gamification"],
    icon: Smartphone,
    logo: "/pawse.png",
    category: "Mobile",
    featured: false,
    size: "medium",
  },
  {
    id: 8,
    title: "Stellar Launchpad",
    subtitle: "AI-Agent Launch Platform",
    highlight: "Stellar Chain",
    description:
      "A decentralized platform built on Stellar blockchain empowering users to create, launch, and discover AI agents with tokenized economies. Features sophisticated multi-step agent creation, integrated wallet connectivity, and rich text editing capabilities.",
    tags: ["Stellar", "AI Agents", "Tokenomics", "Next.js 14"],
    icon: Sparkles,
    logo: "/stellarlaunchpad.png",
    category: "Launchpad",
    featured: false,
    size: "medium",
  },
  {
    id: 9,
    title: "Shred Bot",
    subtitle: "AVAX Trading Companion for Shred",
    highlight: "Sub-second Execution",
    description:
      "An AVAX trading companion that mirrors top-wallet strategies, snipes fresh liquidity pools, and executes buy-or-sell calls in sub-second windows while auto-optimising. Built for traders who demand speed and precision.",
    tags: ["AVAX", "Trading", "Sniping", "Automation"],
    icon: Zap,
    logo: "/trojanbot.png",
    category: "DeFi",
    featured: false,
    size: "small",
  },
  {
    id: 10,
    title: "AI Wall-Portrait Gen",
    subtitle: "Decor Photos, Reimagined",
    highlight: "GPT-4o Vision",
    description:
      "Turns a plain wall into a Pinterest-ready showcase in seconds. Users upload one photo of their wall and one of any artwork; our pipeline blends OpenAI GPT-4o vision with the Pinterest API to produce photorealistic mock-ups.",
    tags: ["GPT-4o", "Pinterest API", "Vision AI", "E-commerce"],
    icon: Image,
    logo: "/wallgen.png",
    category: "AI Tool",
    featured: false,
    size: "small",
  },
  {
    id: 11,
    title: "VoiceGPT",
    subtitle: "Conversations in Any Language",
    highlight: "Multilingual",
    description:
      "A voice-first interface that lets non-English users converse with GPT in their native tongue. Speech-to-text captures queries, GPT processes them, and OpenAI's TTS streams expressive replies back in real time.",
    tags: ["Voice AI", "TTS", "Multilingual", "OpenAI"],
    icon: Mic,
    logo: "/voicegpt.png",
    category: "AI Tool",
    featured: false,
    size: "small",
  },
  {
    id: 12,
    title: "Stellarchain",
    subtitle: "AI-Agent Launchpad",
    highlight: "Revenue Sharing",
    description:
      "Deployed core contracts that let anyone spin up revenue-sharing AI agents paired with XLM liquidity pools. Early partners are already seeding the first agent-token economies on the Stellar network.",
    tags: ["Stellar", "AI Agents", "XLM", "Revenue Share"],
    icon: Bot,
    logo: "/stellarchain.png",
    category: "Launchpad",
    featured: false,
    size: "small",
  },
  {
    id: 13,
    title: "Solanacasino",
    subtitle: "On-Chain Casino & Sports Betting",
    highlight: "Order-Book Model",
    description:
      "A full-fledged on-chain casino combining classic gameplay with a true order-book model for sports betting. Uses bid/ask markets where users place, match, and settle wagers transparently on-chain with provable settlement.",
    tags: ["Solana", "Gaming", "Sports Betting", "On-chain"],
    icon: Target,
    logo: "/solanacasino.png",
    category: "Gaming",
    featured: false,
    size: "small",
  },
  {
    id: 14,
    title: "Outlaw",
    subtitle: "Play-to-Earn Game",
    highlight: "P2E Gaming",
    description:
      "A play-to-earn game built on Solana combining fast, low-fee on-chain transactions with engaging gameplay. Players earn rewards through progression and competitive modes, with tokenized assets for true ownership and trading.",
    tags: ["Solana", "P2E", "Gaming", "NFT"],
    icon: Gamepad2,
    logo: "/outlaw.png",
    category: "Gaming",
    featured: false,
    size: "small",
  },
  {
    id: 15,
    title: "Multichain Wallet",
    subtitle: "Secure Cross-Chain Asset Manager",
    highlight: "Multi-Network",
    description:
      "A secure, user-friendly multichain wallet enabling users to store, send, receive, and manage digital assets across multiple blockchain networks. Supports seamless token swaps, dApp connectivity, and encrypted key storage.",
    tags: ["Wallet", "Multi-chain", "DeFi", "Security"],
    icon: Wallet,
    logo: "/multichainwallet.png",
    category: "Infrastructure",
    featured: false,
    size: "small",
  },
  {
    id: 16,
    title: "Fortuna",
    subtitle: "NFT & RWA Raffle Platform",
    highlight: "Verifiable Randomness",
    description:
      "A Solana-based raffle platform merging NFT drops with real-world asset giveaways. Users enter raffles using crypto, receive on-chain proof of participation, and view verifiable winner selection recorded on Solana.",
    tags: ["Solana", "Raffles", "NFT", "RWA"],
    icon: Trophy,
    logo: "/fortuna.png",
    category: "Gaming",
    featured: false,
    size: "small",
  },
];

const categories = ["All", "AI Agent", "DeFi", "Gaming", "Infrastructure", "Launchpad", "Mobile", "Social", "AI Tool"];

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Handle card click/tap for mobile
  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".section-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 85%",
          },
        }
      );

      // Staggered grid items animation
      gsap.fromTo(
        ".project-card",
        { 
          y: 60, 
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  // 3D tilt effect handler - reduced intensity for large cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, size: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Much larger divisor for large cards = very subtle tilt
    const tiltIntensity = size === "large" ? 80 : size === "medium" ? 40 : 25;
    const rotateX = (y - centerY) / tiltIntensity;
    const rotateY = (centerX - x) / tiltIntensity;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section 
      ref={sectionRef} 
      id="projects" 
      className="relative py-24 border-t border-primary/20 overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="section-header mb-16 text-center">
          <div className="font-mono text-primary text-sm mb-4 flex items-center justify-center gap-2">
            <span className="animate-pulse">◈</span>
            <span className="opacity-70 tracking-widest">~/altak/projects</span>
            <span className="animate-pulse">◈</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            What We&apos;ve Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm md:text-base">
            16 production-grade products shipping at the intersection of Web3, AI, and on-chain automation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto sm:auto-rows-[300px]"
        >
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const isLarge = project.size === "large";
            const isMedium = project.size === "medium";
            const isActive = activeCard === project.id;

            return (
              <div
                key={project.id}
                className={`project-card group relative ${
                  isLarge ? "sm:col-span-2 sm:row-span-2" :
                  isMedium ? "sm:col-span-2" : ""
                } ${isActive ? "is-active" : ""}`}
                onMouseMove={(e) => handleMouseMove(e, project.size)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(project.id)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`
                  relative h-full rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm
                  overflow-hidden transition-all duration-500 cursor-pointer
                  hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)]
                  ${isActive ? "border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.15)]" : ""}
                  p-5 ${isLarge ? "sm:p-8" : isMedium ? "sm:p-6" : ""}
                `}>

                  {/* Holographic Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

                  {/* Scanline Effect */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                    <div className="h-full w-full" style={{
                      background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Flip Card Container */}
                      <div
                        className={`relative w-11 h-11 ${isLarge ? "sm:w-16 sm:h-16" : ""}`}
                        style={{ perspective: "1000px" }}
                      >
                        <div
                          className={`relative w-full h-full transition-transform duration-500 ${isActive ? "[transform:rotateY(180deg)]" : ""} group-hover:[transform:rotateY(180deg)]`}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* Front - Icon */}
                          <div
                            className={`
                              absolute inset-0 rounded-xl border border-primary/30 bg-background/80
                              text-primary flex items-center justify-center
                              transition-all duration-300 group-hover:border-primary/60
                              ${isActive ? "border-primary/60" : ""}
                              p-3
                            `}
                            style={{ backfaceVisibility: "hidden" }}
                          >
                            <Icon className={`h-5 w-5 ${isLarge ? "sm:h-8 sm:w-8" : ""}`} />
                          </div>

                          {/* Back - Logo */}
                          <div
                            className={`
                              absolute inset-0 rounded-xl border border-primary/60 bg-background/90
                              flex items-center justify-center overflow-hidden
                              [transform:rotateY(180deg)]
                            `}
                            style={{ backfaceVisibility: "hidden" }}
                          >
                            <NextImage
                              src={project.logo}
                              alt={project.title}
                              fill
                              className="object-contain p-1.5"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary/60 border border-primary/20 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-3">
                      <h3 className={`font-bold transition-colors ${
                        isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                      } text-lg ${isLarge ? "sm:text-3xl sm:mb-2" : isMedium ? "sm:text-2xl sm:mb-1" : "sm:mb-1"}`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-mono text-xs">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Highlight Badge */}
                    <div className="mb-3 sm:mb-4">
                      <span className="font-mono uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 text-[10px]">
                        {project.highlight}
                      </span>
                    </div>

                    {/* Description - Always visible on mobile, hover on desktop for small cards */}
                    <p className={`
                      text-muted-foreground leading-relaxed text-xs sm:text-sm
                      line-clamp-3 ${isLarge ? "sm:line-clamp-4" : "sm:line-clamp-2"}
                      ${!isLarge && !isMedium ? `sm:opacity-0 sm:group-hover:opacity-100 ${isActive ? "sm:opacity-100" : ""} transition-opacity` : ""}
                    `}>
                      {project.description}
                    </p>

                    {/* Tags - Always visible on mobile, hover on desktop for small cards */}
                    <div className={`flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 ${
                      !isLarge && !isMedium ? `sm:opacity-0 sm:group-hover:opacity-100 ${isActive ? "sm:opacity-100" : ""} transition-opacity` : ""
                    }`}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-mono px-2 py-1 rounded-full bg-background/80 border border-border text-muted-foreground transition-colors ${
                            isActive ? "border-primary/30" : "group-hover:border-primary/30"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Corner Accents - Hidden on mobile for cleaner look */}
                    <div className={`hidden sm:block absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl transition-colors ${isActive ? "border-primary/50" : "group-hover:border-primary/50"}`} />
                    <div className={`hidden sm:block absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/20 rounded-tr-2xl transition-colors ${isActive ? "border-primary/50" : "group-hover:border-primary/50"}`} />
                    <div className={`hidden sm:block absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/20 rounded-bl-2xl transition-colors ${isActive ? "border-primary/50" : "group-hover:border-primary/50"}`} />
                    <div className={`hidden sm:block absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/20 rounded-br-2xl transition-colors ${isActive ? "border-primary/50" : "group-hover:border-primary/50"}`} />

                    {/* Index Number */}
                    <div className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 font-mono text-xs transition-colors ${isActive ? "text-primary/40" : "text-primary/20 group-hover:text-primary/40"}`}>
                      {String(project.id).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Footer */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Shipped", value: "16+" },
            { label: "Lines of Code", value: "500K+" },
            { label: "Active Users", value: "100K+" },
            { label: "Blockchains", value: "8+" },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="text-center p-6 rounded-xl border border-primary/10 bg-card/30 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}