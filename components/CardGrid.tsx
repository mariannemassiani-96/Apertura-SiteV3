"use client";

type CardGridProps = {
  title?: string;
  items: { title: string; text: string }[];
};

export default function CardGrid({ title, items }: CardGridProps) {
  return (
    <section className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        {title ? <h2 className="text-3xl font-light text-ink md:text-4xl">{title}</h2> : null}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-ink/10 bg-white/60 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-ink/60">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/70 md:text-base">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
