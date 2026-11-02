import { skills } from '@/lib/data';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Highlighted items are the ones used most, in production or at the core of a project." tinted>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group} className="card p-5 transition-colors duration-300 hover:border-fg/30" data-reveal>
            <h3 className="eyebrow">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => {
                const core = g.core.includes(s);
                return (
                  <li
                    key={s}
                    className={`rounded-md px-2.5 py-1 text-[14.5px] ${
                      core ? 'bg-brand font-medium text-brand-fg' : 'border border-line bg-surface text-fg/85'
                    }`}
                  >
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
