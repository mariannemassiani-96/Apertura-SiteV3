import HeroImage from "@/components/HeroImage";
import AuthGate from "@/components/Pro/AuthGate";
import ProDashboard from "@/components/Pro/ProDashboard";
import { siteContent } from "@/lib/content";

export default function ProPage() {
  const { hero, description } = siteContent.pro;

  return (
    <>
      <HeroImage title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <section className="py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <p className="max-w-3xl text-sm text-ink/70 md:text-base">{description}</p>
          <AuthGate>
            <ProDashboard />
          </AuthGate>
        </div>
      </section>
    </>
  );
}
