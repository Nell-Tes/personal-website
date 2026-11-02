import { projects } from '@/lib/data';
import Section from './Section';
import ArchitectureDiagram from './ArchitectureDiagram';
import ProjectDetails from './ProjectDetails';
import { ArrowUpRight, GitHubIcon } from './Icons';

function Stack({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {items.map((s) => (
        <li key={s} className="chip">
          {s}
        </li>
      ))}
    </ul>
  );
}

function RepoLink({ href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-[15px] text-fg/80 transition-colors hover:text-fg">
      <GitHubIcon width={16} height={16} /> Code <ArrowUpRight width={14} height={14} />
    </a>
  );
}

function Meta({ lang, period }) {
  return (
    <div className="flex items-center gap-4 text-[13px] text-muted">
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: lang.color }} />
        {lang.name}
      </span>
      <span>{period}</span>
    </div>
  );
}

export default function Projects() {
  const [lead, ...rest] = projects;

  return (
    <Section id="work" title="Projects" intro="Three backend projects, each built around one problem: consistency, security, or scale." tinted>
      <article className="card p-6 md:p-8" data-reveal>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight">{lead.name}</h3>
          <RepoLink href={lead.repo} />
        </div>
        <p className="mt-2 max-w-prose text-[16.5px] text-muted">{lead.oneLiner}</p>
        <div className="mt-6">
          <ArchitectureDiagram />
        </div>
        <ul className="mt-6 space-y-3">
          {lead.points.map((pt) => (
            <li key={pt} className="relative max-w-prose pl-5 text-[15.5px] leading-relaxed before:absolute before:left-0 before:top-[0.72em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted/70">
              {pt}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <Stack items={lead.stack} />
          <Meta lang={lead.lang} period={lead.period} />
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <article key={p.slug} data-reveal className="card flex flex-col p-6 transition-colors duration-300 hover:border-fg/30">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
              <RepoLink href={p.repo} />
            </div>
            <p className="mt-2 text-[15.5px] text-muted">{p.oneLiner}</p>
            <div className="mt-4">
              <Stack items={p.stack} />
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <ProjectDetails project={p} />
            </div>
            <div className="mt-auto pt-5">
              <Meta lang={p.lang} period={p.period} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
