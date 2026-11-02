// Two-column section: a short label on the left, content on the right.
export default function Section({ id, title, intro, children, tinted = false }) {
  return (
    <section id={id} className={`border-t border-line py-16 md:py-24 ${tinted ? 'bg-subtle/40' : ''}`}>
      <div className="container grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14">
        <div>
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            {intro && <p className="mt-2 max-w-prose text-[15px] text-muted lg:max-w-[24ch]">{intro}</p>}
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
