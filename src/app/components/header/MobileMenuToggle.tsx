"use client";

import { useRef, useState } from "react";

export default function MobileMenuToggle({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <button
        className="lg:hidden ml-auto p-2 text-white hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="navbarScroll"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
        <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
      <div
        id="navbarScroll"
        className="lg:!max-h-none lg:!block overflow-hidden transition-all duration-300 ease-in-out w-full lg:w-auto"
        style={{
          maxHeight: isOpen ? `${(contentRef.current?.scrollHeight ?? 500) + 20}px` : "0px",
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </>
  );
}
