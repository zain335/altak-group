"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Altak Group do?",
    answer:
      "Altak Group is a Web3 development studio specializing in building innovative products at the intersection of blockchain, AI, and on-chain automation. We create trading bots, social agents, launchpads, analytics tools, and consumer applications for the decentralized ecosystem.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work across multiple blockchain ecosystems including Solana, Avalanche (AVAX), and Stellar. Our tech stack includes AI/ML frameworks (OpenAI, elizaOS), trading infrastructure (Jupiter, TradingView), and modern web technologies (React, Next.js, Node.js). We're experts in building real-time systems, social agents, and DeFi applications.",
  },
  {
    question: "Can you build custom solutions for my project?",
    answer:
      "Absolutely! Beyond our flagship products, we offer custom development services for trading bots, analytics dashboards, Telegram/Discord bots, and specialized blockchain tools. Reach out to discuss your specific requirements.",
  },
  {
    question: "How can I use your products?",
    answer:
      "Most of our products are available through their respective platforms - Illuminatibot on X, Pawse on the iOS App Store, Trojan Bot on Telegram, and AlchemyEx through our web interface. Follow us on X (@altakgroup) for launch announcements and updates.",
  },
  {
    question: "What makes Altak different from other development studios?",
    answer:
      "We're builders who ship. Our team has successfully launched products with millions of users, and we specialize in the intersection of AI and blockchain - a space where most traditional agencies lack expertise. We build what we believe in, and our products serve real communities.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "You can reach us through X (@altakgroup), join our Telegram community, or send a direct inquiry through this website. We're always open to discussing new projects, partnerships, or collaboration opportunities.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 border-t border-primary/20">
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
            <span className="opacity-70">~/altak/faq</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            Everything you need to know about Altak Group.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-primary/20"
              >
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <span className="text-foreground font-medium">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
