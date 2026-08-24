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
  alternates: {
    canonical: "/",
  },
  title: "PulseWorks | AIを、事業を動かす仕組みに。",
  description:
    "株式会社PulseWorks(パルスワークス)は、生成AIを活用したWeb制作、採用支援、業務改善、AI研修を通じて、企業の事業成長を支援します。",
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

// Single site-wide entity graph. The Organization @id is the one canonical
// identity for 株式会社PulseWorks — every other schema on the site must
// reference it via @id instead of declaring its own Organization.
const entityGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pulseworks.co.jp/#organization",
      name: "株式会社PulseWorks",
      legalName: "株式会社PulseWorks",
      alternateName: ["PulseWorks", "パルスワークス", "PulseWorks Inc."],
      url: "https://pulseworks.co.jp/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://pulseworks.co.jp/#logo",
        url: "https://pulseworks.co.jp/assets/pulseworks-logo-horizontal.svg",
        caption: "株式会社PulseWorks",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "法人番号",
        value: "4011001177194",
      },
      address: {
        "@type": "PostalAddress",
        postalCode: "150-0044",
        addressRegion: "東京都",
        addressLocality: "渋谷区",
        streetAddress: "円山町5番5号 Navi渋谷V 3階",
        addressCountry: "JP",
      },
      email: "contact@pulseworks.co.jp",
      foundingDate: "2026-04-14",
      founder: { "@type": "Person", name: "小塩 健介" },
      description:
        "株式会社PulseWorks(パルスワークス)は、生成AIを活用したWeb制作、採用支援、業務改善、AI研修を通じて企業の事業成長を支援する会社。",
      slogan: "AIを、事業を動かす仕組みに。",
    },
    {
      "@type": "WebSite",
      "@id": "https://pulseworks.co.jp/#website",
      url: "https://pulseworks.co.jp/",
      name: "PulseWorks",
      alternateName: "株式会社PulseWorks",
      inLanguage: "ja",
      publisher: { "@id": "https://pulseworks.co.jp/#organization" },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraphJsonLd) }}
        />
      </head>
      <body className="font-sans text-[#1F2937] antialiased">{children}</body>
    </html>
  );
}
