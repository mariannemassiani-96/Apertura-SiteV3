import { siteContent } from "@/lib/content";

export default function MentionsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
        <h1 className="text-3xl font-light text-ink md:text-4xl">{siteContent.mentions.title}</h1>
        <p className="text-sm text-ink/70 md:text-base">{siteContent.mentions.text}</p>
      </div>
    </section>
  );
}
