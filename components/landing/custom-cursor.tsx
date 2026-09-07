"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, summary, [role="button"], [role="link"], [role="tab"]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const activate = () => {
      dotRef.current?.classList.add("is-active");
      ringRef.current?.classList.add("is-active");
    };

    const handleMove = (e: MouseEvent) => {
      activate();
      root.style.setProperty("--cursor-x", `${e.clientX}px`);
      root.style.setProperty("--cursor-y", `${e.clientY}px`);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = !!target?.closest(INTERACTIVE_SELECTOR);
      dotRef.current?.classList.toggle("is-hovering", isInteractive);
      ringRef.current?.classList.toggle("is-hovering", isInteractive);
    };

    const handleLeaveWindow = () => {
      dotRef.current?.classList.remove("is-active");
      ringRef.current?.classList.remove("is-active");
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
