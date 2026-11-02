'use client';

import { useId, useState } from 'react';
import { ChevronDown } from './Icons';

// Expands a project's details in place.
export default function ProjectDetails({ project, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 text-[15px] font-medium text-link"
      >
        {open ? 'Hide details' : 'How it works'}
        <ChevronDown width={16} height={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div id={id} className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="space-y-4 pt-4 text-[15.5px]">
            <p>
              <span className="font-medium">Problem. </span>
              <span className="text-muted">{project.problem}</span>
            </p>
            <p>
              <span className="font-medium">Approach. </span>
              <span className="text-muted">{project.approach}</span>
            </p>
            <ul className="space-y-2">
              {project.points.map((pt) => (
                <li key={pt} className="relative pl-5 text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-link">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
