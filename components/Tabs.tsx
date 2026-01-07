"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TabsProps = {
  items: { title: string; content: string }[];
};

export default function Tabs({ items }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-wrap gap-3">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em]",
                active === index
                  ? "border-ink bg-ink text-sand"
                  : "border-ink/20 text-ink/70"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white/70 p-8">
          <p className="text-sm text-ink/70 md:text-base">{items[active]?.content}</p>
        </div>
      </div>
    </section>
  );
}
