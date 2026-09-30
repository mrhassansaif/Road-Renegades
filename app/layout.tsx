import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { oswald, roboto } from "@/lib/fonts";
import { siteConfig } from "@/lib/data/site";
import { assets } from "@/lib/assets";
import { defaultOgImage, publicAssetPath } from "@/lib/seo";
import "./globals.css";

const favicon = publicAssetPath(assets.icons.favicon);

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}/`),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "custom motorcycle",
    "bike modification",
    "cafe racer",
    "scrambler",
    "motorcycle workshop",
    "Road Renegades",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: [{ url: favicon, type: "image/png" }],
    shortcut: favicon,
    apple: favicon,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
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
        <a href="#content" className="rr-skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content" className="rr-main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
