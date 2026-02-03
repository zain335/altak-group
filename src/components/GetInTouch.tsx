"use client";

import { Button } from "@/components/ui/button";

export function GetInTouch() {
  return (
    <section id="contact" className="relative py-24 border-t border-primary/20">
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
            <span className="opacity-70">~/altak/contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            Let&apos;s discuss your next project. We&apos;re always looking for new challenges.
          </p>
        </div>

        {/* CTA Content */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-8 md:p-12 text-center overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />

            <div className="relative z-10">
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you need a trading bot, AI agent, custom dashboard, or full-stack Web3 application — we&apos;ve got you covered.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://t.me/altakgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="font-mono text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-[0_0_10px_rgba(0,255,200,0.2)] hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Join Telegram
                  </Button>
                </a>

                <a
                  href="https://x.com/altakgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-mono text-base px-8 py-6 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Follow on X
                  </Button>
                </a>
              </div>

              {/* Response Time Badge */}
              <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Usually respond within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
