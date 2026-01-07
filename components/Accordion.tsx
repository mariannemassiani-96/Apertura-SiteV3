"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  title?: string;
  items: AccordionItem[];
};

export default function Accordion({ title, items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        {title ? <h2 className="text-3xl font-light text-ink md:text-4xl">{title}</h2> : null}
        <div className="flex flex-col gap-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                type="button"
                key={item.question}
                className="rounded-3xl border border-ink/10 bg-white/70 px-6 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm uppercase tracking-[0.2em] text-ink/70">
                    {item.question}
                  </span>
                  <span className="text-ink/50">{isOpen ? "—" : "+"}</span>
                </div>
                {isOpen ? <p className="mt-4 text-sm text-ink/70">{item.answer}</p> : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
