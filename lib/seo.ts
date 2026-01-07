import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Apertura di Corsica",
    template: "%s — Apertura di Corsica"
  },
  description:
    "Menuiseries et vitrages d'exception en Corse. Conception, fabrication et accompagnement premium pour des ouvertures lumineuses et durables.",
  metadataBase: new URL("https://apertura-di-corsica.vercel.app"),
  openGraph: {
    title: "Apertura di Corsica",
    description:
      "Menuiseries et vitrages d'exception en Corse. Conception, fabrication et accompagnement premium.",
    type: "website",
    locale: "fr_FR"
  },
  icons: {
    icon: "/favicon.ico"
  }
};
