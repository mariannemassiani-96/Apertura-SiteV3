import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60svh] items-center justify-center py-24">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-light text-ink">Page introuvable</h1>
        <p className="max-w-md text-sm text-ink/70">
          Cette page n'existe pas ou a été déplacée. Revenez à l'accueil pour poursuivre votre visite.
        </p>
        <Link
          href="/"
          className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/70"
        >
          Retour accueil
        </Link>
      </div>
    </section>
  );
}
