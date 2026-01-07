import Link from "next/link";
import { navLinks, routes } from "@/lib/routes";
import { siteContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand/80 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-ink/60">Apertura di Corsica</h3>
          <p className="max-w-2xl text-sm text-ink/70">{siteContent.footerNote}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink/70 hover:text-ink">
              {link.label}
            </Link>
          ))}
          <Link href={routes.mentions} className="text-ink/70 hover:text-ink">
            Mentions
          </Link>
        </div>
        <div className="text-xs text-ink/50">© 2024 Apertura di Corsica</div>
      </div>
    </footer>
  );
}
