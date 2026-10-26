"use client";

import { useEffect, useState } from "react";

const links = ["about", "skills", "experience", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const l of links) {
        const el = document.getElementById(l);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.45) current = l;
      }
      setActive(current);
      setScrolled(scrollY > 40);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`} id="top">
      <div className="nav-left">
        <a className="logo" href="#top">
          Mohamed Latif<span>.</span>
        </a>
      </div>
      <div className="nav-right">
        <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
          {links.map((l) => (
            <a key={l} href={`#${l}`} className={active === l ? "active" : ""}>
              {l}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button onClick={toggleTheme} aria-label="Toggle light/dark theme" title="Toggle theme">
            ◐
          </button>
          <button id="burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
