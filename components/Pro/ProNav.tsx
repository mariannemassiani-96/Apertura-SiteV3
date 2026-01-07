"use client";

import { cn } from "@/lib/utils";

type ProNavProps = {
  items: string[];
  active: string;
  onChange: (item: string) => void;
};

export default function ProNav({ items, active, onChange }: ProNavProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={cn(
            "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em]",
            active === item ? "border-ink bg-ink text-sand" : "border-ink/20 text-ink/70"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
