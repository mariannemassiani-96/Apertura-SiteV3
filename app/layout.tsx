import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import GrainOverlay from "@/components/GrainOverlay";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <GrainOverlay />
        </Providers>
      </body>
    </html>
  );
}
