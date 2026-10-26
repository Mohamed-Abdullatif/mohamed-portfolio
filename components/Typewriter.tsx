"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let i = 0;
    let n = 0;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      const word = words[i];
      n += deleting ? -1 : 1;
      setText(word.slice(0, n));
      let delay = deleting ? 35 : 75;
      if (!deleting && n === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && n === 0) {
        deleting = false;
        i = (i + 1) % words.length;
        delay = 350;
      }
      t = setTimeout(step, delay);
    };
    t = setTimeout(step, 1800);
    return () => clearTimeout(t);
  }, [words]);

  return (
    <>
      <b>{text}</b>
      <span className="caret" />
    </>
  );
}
