import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});



export const metadata: Metadata = {
  title: "Healthzenix - AI Medical Scribe for Healthcare Professionals",
  description:
    "AI-powered medical scribe that automates clinical documentation to reduce administrative burden and enable healthcare professionals to focus more on patient care. HIPAA compliant, EHR integrated.",
  keywords: [
    "AI medical scribe",
    "clinical documentation",
    "healthcare AI",
    "medical transcription",
    "EHR integration",
    "HIPAA compliant",
    "healthcare automation",
    "medical assistant AI",
    "clinical workflow",
    "healthcare technology",
  ],
  authors: [{ name: "Healthzenix" }],
  creator: "Healthzenix",
  publisher: "Healthzenix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthzenix.com",
    title: "Healthzenix - AI Medical Scribe for Healthcare Professionals",
    description:
      "AI-powered medical scribe that automates clinical documentation to reduce administrative burden and enable healthcare professionals to focus more on patient care.",
    siteName: "Healthzenix",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healthzenix AI Medical Scribe Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthzenix - AI Medical Scribe for Healthcare Professionals",
    description:
      "AI-powered medical scribe that automates clinical documentation to reduce administrative burden and enable healthcare professionals to focus more on patient care.",
    images: ["/twitter-image.jpg"],
    creator: "@healthzenix",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://healthzenix.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className="hydrated"
      data-arp=""
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${ubuntu.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
