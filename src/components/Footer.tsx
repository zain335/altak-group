"use client";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-primary/20">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="font-mono text-primary text-sm mb-4 flex items-center justify-center gap-2">
            <span className="animate-pulse">▸</span>
            <span className="opacity-70">~/contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 font-mono">
            Let's discuss your next project. We're always looking for new challenges.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="font-mono text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-[0_0_10px_rgba(0,255,200,0.2)] hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-primary/10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">A</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Altak<span className="text-primary">Group</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Altak Group. Building the future of Web3.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/altakgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://t.me/altakgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Telegram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
