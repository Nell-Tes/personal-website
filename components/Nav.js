'use client';

import { useEffect, useState } from 'react';
import { nav, profile } from '@/lib/data';
import { CloseIcon, MenuIcon } from './Icons';

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container flex h-16 items-center justify-between gap-6" aria-label="Main">
        <a href="#top" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`rounded-md px-3 py-2 text-[15px] transition-colors ${
                  active === n.id ? 'bg-subtle text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-2 text-sm sm:inline-flex">
            Résumé
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container h-[calc(100dvh-4rem)] pb-10 pt-4 md:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-2xl font-semibold tracking-tight">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full justify-center">
            Download résumé
          </a>
        </div>
      )}
    </header>
  );
}
