'use client';

import { useState } from 'react';
import { nav, profile } from '@/lib/data';

// A small 3D hardcover. Hover (or tap) opens it to a clickable table of contents.
export default function Book() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className={`book-scene relative h-[430px] w-[304px] ${open ? 'is-open' : ''}`}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="book h-full w-full">
          {/* back board */}
          <div className="absolute inset-0 rounded-r-lg rounded-l-sm bg-[#030F33] shadow-[0_40px_60px_-30px_rgba(5,23,71,.6)]" style={{ transform: 'translateZ(-3px)' }} />

          {/* page block with the contents */}
          <nav
            aria-label="Table of contents"
            className="absolute inset-y-1.5 left-0 right-1.5 rounded-r-md bg-[#FEFEFE] px-7 py-9 text-[#051747] shadow-[2px_0_0_#EEF0F5,4px_0_0_#D9DCE6,6px_0_0_#EEF0F5]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#535F80]">Contents</p>
            <ol className="mt-4 space-y-1">
              {nav.map((n, i) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="group flex items-baseline gap-2 rounded px-1 py-2 text-[17px] transition-colors hover:bg-[#E7E9F0]"
                  >
                    <span className="w-6 font-mono text-[12px] text-[#535F80]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-medium">{n.label}</span>
                    <span className="flex-1 translate-y-[-3px] border-b border-dotted border-[#051747]/30" />
                    <span className="font-mono text-[11px] text-[#535F80] transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* front cover */}
          <div className="book-cover absolute inset-0">
            <div className="book-face cloth absolute inset-0 flex flex-col items-center rounded-r-lg rounded-l-sm px-7 pb-7 pt-10 text-[#E7E9F0]">
              <div className="pointer-events-none absolute inset-3 rounded-sm border border-[#E7E9F0]/40" />
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#E7E9F0]/75">Meet</p>
              <p className="mt-2 text-center text-[28px] font-semibold uppercase leading-tight tracking-[0.16em]">
                Helena
                <br />
                Tesfaye
              </p>
              <div className="mt-5 aspect-[3/3.8] w-[58%] overflow-hidden rounded-t-full border border-[#E7E9F0]/70 bg-[#E7E9F0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.photo} alt="Helena Tesfaye" className="h-full w-full object-cover object-[50%_15%]" />
              </div>
              <p className="mt-auto font-mono text-[11px] uppercase tracking-[0.24em] text-[#E7E9F0]/70">Vol. 01 · 2026</p>
            </div>
            <div className="book-face book-back absolute inset-0 flex flex-col justify-center gap-3 rounded-l-lg rounded-r-sm bg-[#E7E9F0] px-9 text-[#051747]">
              <p className="text-2xl font-semibold tracking-tight">Welcome in.</p>
              <p className="text-[16px] leading-relaxed text-[#535F80]">Six short chapters. Pick one, or just keep scrolling.</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg"
      >
        {open ? 'Close the book' : 'Hover or tap to open'}
      </button>
    </div>
  );
}
