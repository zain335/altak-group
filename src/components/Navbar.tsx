"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // CoreScroll has height of 600vh, show header after ~500vh (5x viewport)
      const scrollThreshold = window.innerHeight * 5;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // Delay scroll to allow menu close animation to complete
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 w-full z-50 border-b border-primary/20 backdrop-blur-md bg-background/80"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo.png"
                    alt="Altak Group"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-foreground">
                  Altak<span className="text-primary">Group</span>
                </span>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors relative group font-mono"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Desktop Social Links & CTA */}
              <div className="hidden md:flex items-center gap-3">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/altakgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/altakgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Telegram"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>

                {/* Contact Button */}
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                >
                  <Button
                    size="sm"
                    className="ml-2 font-mono text-xs bg-primary hover:bg-primary/90 shadow-[0_0_10px_rgba(0,255,200,0.2)] hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all"
                  >
                    Contact Us
                  </Button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-md overflow-hidden"
              >
                <div className="container mx-auto px-6 py-4 space-y-4">
                  {/* Navigation Links */}
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block text-lg text-foreground hover:text-primary transition-colors font-mono"
                    >
                      <span className="text-primary/50 mr-2">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                      {link.label}
                    </motion.a>
                  ))}

                  {/* Divider */}
                  <div className="border-t border-primary/20 pt-4">
                    {/* Social Links */}
                    <div className="flex items-center gap-4 mb-4">
                      <a
                        href="https://x.com/altakgroup"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on X"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                        className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      </a>
                    </div>

                    {/* Contact Button */}
                    <a
                      href="#contact"
                      onClick={(e) => handleSmoothScroll(e, "#contact")}
                      className="block"
                    >
                      <Button
                        className="w-full font-mono text-sm bg-primary hover:bg-primary/90 shadow-[0_0_10px_rgba(0,255,200,0.2)] hover:shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all"
                      >
                        Contact Us
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
