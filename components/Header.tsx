"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 20);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-colors",
        scrolled ? "bg-sand/90 backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href={routes.home} className="text-sm font-semibold uppercase tracking-[0.2em]">
          Apertura
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink/70 hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={routes.contact}
          className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/80 hover:border-ink"
        >
          Rendez-vous
        </Link>
      </div>
    </header>
  );
}
