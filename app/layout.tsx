import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { oswald, roboto } from "@/lib/fonts";
import { siteConfig } from "@/lib/data/site";
import { assets } from "@/lib/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: assets.icons.favicon,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main id="content" className="rr-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
