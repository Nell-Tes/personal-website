import { about, profile } from '@/lib/data';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-14">
        <div className="space-y-5 text-[17px] leading-relaxed" data-reveal>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="max-w-prose">
              {p}
            </p>
          ))}
        </div>

        <aside className="space-y-5" data-reveal>
          <figure className="overflow-hidden rounded-lg border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt="Helena Tesfaye" className="aspect-[4/5] w-full object-cover object-[50%_15%]" />
          </figure>
          <dl className="divide-y divide-line border-y border-line">
            {about.facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[96px_1fr] gap-3 py-2.5 text-[15px]">
                <dt className="text-muted">{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
