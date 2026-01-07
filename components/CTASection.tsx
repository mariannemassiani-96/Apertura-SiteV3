import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export default function CTASection({ title, description, href, label }: CTASectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 rounded-[40px] border border-ink/10 bg-ink px-10 py-16 text-sand">
        <h2 className="max-w-2xl text-3xl font-light md:text-4xl">{title}</h2>
        <p className="max-w-2xl text-sm text-sand/80 md:text-base">{description}</p>
        <Link
          href={href}
          className="rounded-full border border-sand/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-sand"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
