import { profile } from '@/lib/data';
import CopyEmail from './CopyEmail';
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-subtle/40 py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let&apos;s keep in touch.</h2>
          <p className="mt-4 max-w-prose text-[17px] text-muted">
            Open to new-grad software engineering roles starting in 2027. Email is the fastest way to get in touch.
          </p>
          <p className="mt-2 text-[16px]">
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>

        {/* The back cover of the book */}
        <div className="flex justify-center" data-reveal>
          <div className="relative w-full max-w-[360px]" style={{ perspective: '1600px' }}>
            <div className="absolute inset-y-1.5 -left-1.5 right-0 rounded-l-md bg-[#FEFEFE] shadow-[-2px_0_0_#EEF0F5,-4px_0_0_#D9DCE6]" aria-hidden />
            <article
              className="cloth-back relative flex flex-col rounded-l-lg rounded-r-sm p-7 text-[#E7E9F0] shadow-[0_40px_60px_-30px_rgba(5,23,71,.6)] transition-transform duration-500 hover:[transform:rotateY(-6deg)]"
              aria-label="Contact card"
            >
              <div className="pointer-events-none absolute inset-3 rounded-sm border border-[#E7E9F0]/30" />
              <div className="mx-auto aspect-square w-32 overflow-hidden rounded-sm border border-[#E7E9F0]/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profile.photoSquare} alt="Helena Tesfaye" className="h-full w-full object-cover object-[50%_20%]" />
              </div>
              <p className="mt-5 text-center text-xl font-semibold uppercase tracking-[0.16em]">{profile.name}</p>
              <p className="mt-2 text-center text-[14.5px] leading-relaxed text-[#E7E9F0]/80">
                Software engineer and CS senior at the University of Maryland. Previously at Amazon and Goodshuffle.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E7E9F0]/35 py-2.5 text-sm font-medium transition-colors hover:bg-[#E7E9F0] hover:text-[#051747]">
                  <LinkedInIcon width={16} height={16} /> LinkedIn
                </a>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E7E9F0]/35 py-2.5 text-sm font-medium transition-colors hover:bg-[#E7E9F0] hover:text-[#051747]">
                  <GitHubIcon width={16} height={16} /> GitHub
                </a>
                <a href={profile.links.resume} download className="col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#E7E9F0] py-2.5 text-sm font-semibold text-[#051747] transition-opacity hover:opacity-90">
                  <DownloadIcon width={16} height={16} /> Download résumé
                </a>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#E7E9F0]/20 pt-4 text-[14px]">
                <a href={`mailto:${profile.email}`} className="truncate hover:underline">
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} className="shrink-0 rounded border border-[#E7E9F0]/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors hover:bg-[#E7E9F0] hover:text-[#051747]" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
