"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 240;
const FRAME_PATH = "/software_sequence/ezgif-frame-";
const PRELOAD_BUFFER = 20;

// Content beats synced with scroll progress
const contentBeats = [
  { progress: 0, title: "Altak", subtitle: "", opacity: [0, 0.08], showImmediately: true },
  { progress: 0.08, title: "Altak", subtitle: "builders of the future", opacity: [0.08, 0.2] },
  { progress: 0.2, title: "We build intelligence", subtitle: "AI agents that think, act, and evolve", opacity: [0.2, 0.35] },
  { progress: 0.35, title: "We engineer systems", subtitle: "On-chain infrastructure that scales", opacity: [0.35, 0.5] },
  { progress: 0.5, title: "We automate execution", subtitle: "Real-time data pipelines and trading engines", opacity: [0.5, 0.65] },
  { progress: 0.65, title: "We ship real products", subtitle: "From concept to production in weeks", opacity: [0.65, 0.8] },
  { progress: 0.8, title: "We scale on-chain", subtitle: "Web3 native. Always.", opacity: [0.8, 0.95] },
];

function getFramePath(frameIndex: number): string {
  const paddedIndex = String(frameIndex).padStart(3, "0");
  return `${FRAME_PATH}${paddedIndex}.jpg`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function CoreScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const currentFrameRef = useRef<number>(1);
  const rafRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeContent, setActiveContent] = useState(contentBeats[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images progressively
  const preloadImage = useCallback((index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      if (imagesRef.current.has(index)) {
        resolve(imagesRef.current.get(index)!);
        return;
      }

      const img = new Image();
      img.onload = () => {
        imagesRef.current.set(index, img);
        resolve(img);
      };
      img.onerror = reject;
      img.src = getFramePath(index);
    });
  }, []);

  // Preload frames around current position
  const preloadAroundFrame = useCallback(
    async (currentFrame: number) => {
      const start = Math.max(1, currentFrame - PRELOAD_BUFFER);
      const end = Math.min(TOTAL_FRAMES, currentFrame + PRELOAD_BUFFER);

      for (let i = start; i <= end; i++) {
        if (!imagesRef.current.has(i)) {
          preloadImage(i).catch(() => {});
        }
      }
    },
    [preloadImage]
  );

  // Initial load - preload first batch and critical frames
  useEffect(() => {
    const loadInitialFrames = async () => {
      const criticalFrames = [1, 60, 120, 180, 240];
      let loaded = 0;

      // Load critical frames first
      for (const frame of criticalFrames) {
        await preloadImage(frame);
        loaded++;
        setLoadProgress(Math.floor((loaded / criticalFrames.length) * 50));
      }

      // Then load the first 30 frames
      for (let i = 1; i <= 30; i++) {
        await preloadImage(i);
        loaded++;
        setLoadProgress(50 + Math.floor(((i - 1) / 30) * 50));
      }

      setIsLoading(false);
      setLoadProgress(100);
    };

    loadInitialFrames();
  }, [preloadImage]);

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    contextRef.current = ctx;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Redraw current frame after resize
      drawFrame(currentFrameRef.current);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Draw frame to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    const img = imagesRef.current.get(frameIndex);

    if (!canvas || !ctx || !img) return;

    const rect = canvas.getBoundingClientRect();
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;

    // Clear with background color
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Calculate cover dimensions
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Canvas is wider - fit to width
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      drawX = 0;
      drawY = (canvasHeight - drawHeight) / 2;
    } else {
      // Canvas is taller - fit to height
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
      drawX = (canvasWidth - drawWidth) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Handle scroll updates
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const frameIndex = clamp(Math.floor(progress * TOTAL_FRAMES) + 1, 1, TOTAL_FRAMES);

    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;

      // Use RAF for smooth drawing
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        drawFrame(frameIndex);
        preloadAroundFrame(frameIndex);
      });
    }

    // Update content based on progress
    for (let i = contentBeats.length - 1; i >= 0; i--) {
      if (progress >= contentBeats[i].opacity[0]) {
        if (activeContent !== contentBeats[i]) {
          setActiveContent(contentBeats[i]);
        }
        break;
      }
    }
  });

  // Draw first frame when loaded
  useEffect(() => {
    if (!isLoading && imagesRef.current.has(1)) {
      drawFrame(1);
    }
  }, [isLoading, drawFrame]);

  // Calculate content opacity based on progress
  const contentOpacity = useTransform(scrollYProgress, (progress) => {
    const current = contentBeats.find(
      (beat) => progress >= beat.opacity[0] && progress < beat.opacity[1]
    );
    if (!current) return 0;

    // Show immediately for first beat (no fade in)
    if ("showImmediately" in current && current.showImmediately) {
      const rangeEnd = current.opacity[1];
      // Only fade out at the end
      if (progress > rangeEnd - 0.02) {
        return (rangeEnd - progress) / 0.02;
      }
      return 1;
    }

    const rangeStart = current.opacity[0];
    const rangeEnd = current.opacity[1];
    const rangeProgress = (progress - rangeStart) / (rangeEnd - rangeStart);

    // Fade in for first 20%, full opacity for middle 60%, fade out for last 20%
    if (rangeProgress < 0.2) {
      return rangeProgress / 0.2;
    } else if (rangeProgress > 0.8) {
      return (1 - rangeProgress) / 0.2;
    }
    return 1;
  });

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--sequence-bg)]"
      style={{ height: "600vh" }}
    >
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--sequence-bg)]">
          <div className="text-center">
            <div className="mb-4 text-4xl font-bold text-white/90 tracking-tight">
              Altak
            </div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mt-2 text-sm text-white/40 font-mono">
              {loadProgress}%
            </div>
          </div>
        </div>
      )}

      {/* Sticky canvas container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: "var(--sequence-bg)" }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              style={{ opacity: contentOpacity }}
            >
              <motion.h2
                key={activeContent.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/90 tracking-tight mb-4"
              >
                {activeContent.title}
              </motion.h2>
              {activeContent.subtitle && (
                <motion.p
                  key={activeContent.subtitle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl md:text-2xl text-white/60 font-light tracking-wide"
                >
                  {activeContent.subtitle}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - only show at the start */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
          }}
        >
          <span className="text-xs text-white/40 font-mono tracking-wider uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
          <motion.div
            className="h-full bg-primary/60"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </section>
  );
}
