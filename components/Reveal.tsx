"use client";

import { useEffect, useRef, useState } from "react";

type Props = { id?: string; className?: string; children: React.ReactNode };

export default function Reveal({ id, className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </section>
  );
}
