import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://urphacapital.uz'),
  title: {
    default: "Urpha Capital — Investitsiya va trading akademiyasi",
    template: "%s | Urpha Capital",
  },
  description:
    "Urpha Capital (urphacapital) — O'zbekistondagi investitsiya, trading va moliyaviy savodxonlik bo'yicha professional ta'lim platformasi.",
  applicationName: "Urpha Capital",
  keywords: [
    "urphacapital",
    "urpha capital",
    "urpha",
    "urphacapital.uz",
    "investitsiya",
    "trading",
    "moliyaviy savodxonlik",
    "trading kurslari",
    "investitsiya kurslari",
    "Urpha Capital O'zbekiston",
  ],
  authors: [{ name: "Urpha Capital", url: "https://urphacapital.uz" }],
  creator: "Urpha Capital",
  publisher: "Urpha Capital",
  alternates: {
    canonical: "/",
    languages: {
      uz: "/uz",
      ru: "/ru",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    url: "https://urphacapital.uz",
    siteName: "Urpha Capital",
    title: "Urpha Capital — Investitsiya va trading akademiyasi",
    description:
      "urphacapital — investitsiya, trading va moliyaviy savodxonlik bo'yicha professional ta'lim.",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urpha Capital — Investitsiya va trading akademiyasi",
    description:
      "urphacapital — investitsiya va trading bo'yicha professional ta'lim platformasi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client-side
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Urpha Capital",
    alternateName: ["urphacapital", "Urpha"],
    url: "https://urphacapital.uz",
    logo: "https://urphacapital.uz/favicon.ico",
    sameAs: [] as string[],
  };

  return (
    <html lang={locale} className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0B] text-white selection:bg-emerald-500/30 overflow-x-hidden w-full relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
