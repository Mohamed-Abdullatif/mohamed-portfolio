"use client";

import { useEffect, useRef, useState } from "react";

// Scroll progress bar, cursor glow, card spotlight and back-to-top button.
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      setShowTop(scrollY > 700);
    };
    const onMove = (e: MouseEvent) => {
      if (glow.current) {
        glow.current.style.opacity = "1";
        glow.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const card = (e.target as HTMLElement).closest<HTMLElement>(".card, .stat, .what");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("mousemove", onMove, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="progress" ref={bar} />
      <div className="cursor-glow" ref={glow} />
      <button className={`to-top ${showTop ? "show" : ""}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
        ↑
      </button>
    </>
  );
}
