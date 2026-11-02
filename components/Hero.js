import { highlights, profile } from '@/lib/data';
import Book from './Book';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Hero() {
  return (
    <section id="top" className="overflow-x-clip pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="container grid items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="animate-fade-up lg:max-w-[34rem]">
          <p className="text-[15px] text-muted">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-4 text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-6 max-w-[30ch] text-2xl font-medium leading-snug tracking-tight sm:text-[1.9rem] sm:leading-[1.25]">{profile.tagline}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-[15px] text-fg/90">
            <span className="h-2 w-2 rounded-full bg-ok" aria-hidden />
            {profile.status}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View projects
            </a>
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Résumé (PDF)
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-secondary !px-3">
              <GitHubIcon />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-secondary !px-3">
              <LinkedInIcon />
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight tabular-nums">{h.value}</dd>
                <p className="mt-1 text-[14px] leading-snug text-fg/85">{h.label}</p>
                <p className="text-[13px] text-muted">{h.source}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden justify-center lg:flex">
          <Book />
        </div>
      </div>
    </section>
  );
}
