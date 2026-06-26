"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Layer 1 - Slow parallax */}
      <div
        className="fixed inset-0 -z-20 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      </div>

      {/* Background Layer 2 - Medium parallax */}
      <div
        className="fixed inset-0 -z-10 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-96 right-10 w-96 h-96 bg-purple-200/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-200/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Static background */}
      <div className="fixed inset-0 -z-30 bg-[var(--background)]" />
    </>
  );
}
