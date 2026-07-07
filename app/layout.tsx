import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-jp",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pulseworks.co.jp"),
  title: "PulseWorks | AIを、事業を動かす仕組みに。",
  description:
    "PulseWorksは、生成AIを活用したWeb制作、採用支援、業務改善、AI研修を通じて、企業の事業成長を支援します。",
  icons: {
    icon: "/assets/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "PulseWorks",
    title: "PulseWorks | AIを、事業を動かす仕組みに。",
    description: "生成AIを現場で使える成果へ。課題整理から設計・実装・改善・定着まで伴走します。",
    images: ["/assets/pulse-icon-primary.svg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社PulseWorks",
  alternateName: "PulseWorks Inc.",
  url: "https://pulseworks.co.jp",
  logo: "/assets/pulseworks-logo-horizontal.svg",
  description: "生成AIを活用したWeb制作、採用支援、業務改善、AI研修を通じて企業の事業成長を支援する会社。",
  slogan: "AIを、事業を動かす仕組みに。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans text-[#1F2937] antialiased">{children}</body>
    </html>
  );
}
