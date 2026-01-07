import HeroImage from "@/components/HeroImage";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/lib/content";

export default function ContactPage() {
  const { hero, info } = siteContent.contact;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <section className="py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {info.map((block) => (
              <article key={block.title} className="rounded-3xl border border-ink/10 bg-white/70 p-6">
                <h2 className="text-sm uppercase tracking-[0.2em] text-ink/60">{block.title}</h2>
                <p className="mt-3 text-sm text-ink/70 md:text-base">{block.text}</p>
              </article>
            ))}
          </div>
          <form className="space-y-4 rounded-3xl border border-ink/10 bg-white/70 p-6">
            <div>
              <h2 className="text-2xl font-light text-ink">Formulaire</h2>
              <p className="mt-2 text-sm text-ink/60">
                Décrivez votre projet, nous reviendrons vers vous sous un délai raisonnable.
              </p>
            </div>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-ink/60">
              Nom
              <input className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink" />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-ink/60">
              Email
              <input type="email" className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink" />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-ink/60">
              Projet
              <textarea
                rows={4}
                className="rounded-3xl border border-ink/20 px-4 py-3 text-sm text-ink"
              />
            </label>
            <button
              type="button"
              className="rounded-full border border-ink bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
      <CTASection
        title="Évoquer un besoin précis"
        description="Notre équipe vous guide pour traduire vos usages en solutions concrètes."
        href="/gammes"
        label="Voir les gammes"
      />
    </>
  );
}
