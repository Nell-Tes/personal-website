import { leadership } from '@/lib/data';
import Section from './Section';

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership" intro="Communities and events outside of engineering work.">
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 xl:grid-cols-3">
        {leadership.map((l) => (
          <article key={l.role + l.org} className="bg-surface p-6 transition-colors duration-300 hover:bg-subtle" data-reveal>
            <p className="eyebrow">{l.org}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">{l.role}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{l.detail}</p>
            <p className="mt-4 font-mono text-[12.5px] text-link">{l.period}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
