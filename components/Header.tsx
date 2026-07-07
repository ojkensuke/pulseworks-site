"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-[60] border-b border-white/[0.08] backdrop-blur-[14px]"
      style={{ background: "rgba(11,18,32,0.72)" }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-4">
        <Link href="#top" aria-label="PulseWorks ホーム" className="flex flex-none items-center gap-[11px] no-underline">
          <svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path
              d="M5 32H17C19 32 20 31 21 29L25 19L32 47L39 12L45 30C46 31.5 47 32 49 32H59"
              stroke="var(--ac)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-[-0.01em] text-white">PulseWorks</span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-[clamp(20px,2.6vw,40px)] min-[921px]:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="pw-nav-link font-mono text-[12.5px] font-medium tracking-[0.02em] text-white/74 no-underline"
              style={{ color: "rgba(255,255,255,0.74)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="pw-btn-header-cta inline-flex items-center gap-2 rounded-[var(--r-btn)] px-[18px] py-[10px] text-[13.5px] font-semibold no-underline"
            style={{ color: "var(--ac-ink)", background: "var(--ac)" }}
          >
            無料相談をする <span aria-hidden="true" className="font-mono">→</span>
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
          className="flex flex-col gap-[5px] border-none bg-transparent p-2 min-[921px]:hidden"
        >
          <span className="block h-0.5 w-6 rounded-sm bg-white" />
          <span className="block h-0.5 w-6 rounded-sm bg-white" />
          <span className="block h-0.5 w-6 rounded-sm bg-white" />
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="モバイルナビゲーション"
          className="flex flex-col gap-0.5 border-t border-white/[0.08] bg-[#0B1220] px-[clamp(20px,5vw,56px)] pb-[22px] pt-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/[0.07] px-1 py-[13px] text-base font-semibold text-white/90 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-[14px] rounded-[var(--r-btn)] p-[15px] text-center text-base font-semibold no-underline"
            style={{ color: "var(--ac-ink)", background: "var(--ac)" }}
          >
            無料相談をする
          </a>
        </nav>
      )}
    </header>
  );
}
