import { experience } from '@/lib/data';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((job) => (
          <li key={job.company} className="py-8 first:pt-6" data-reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                {job.role}, <span className="text-link">{job.company}</span>
              </h3>
              <p className="text-[14px] tabular-nums text-muted">{job.period}</p>
            </div>
            <p className="mt-0.5 text-[14px] text-muted">{job.location}</p>

            <ul className="mt-4 space-y-2.5">
              {job.points.map((pt) => (
                <li key={pt} className="relative max-w-prose pl-5 text-[16px] leading-relaxed before:absolute before:left-0 before:top-[0.72em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted/70">
                  {pt}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[14px] text-muted">{job.stack.join(' · ')}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
