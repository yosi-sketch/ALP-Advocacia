import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#141210",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.advocaciaalp.com.br"),
  title:
    "ALP Advocacia e Consultoria | Três Corações - MG | Dra. Ana Letícia Pereira",
  description:
    "Soluções jurídicas estratégicas com alto rigor técnico e atendimento humano conduzidas pela Dra. Ana Letícia Pereira na ALP Advocacia e Consultoria. Especialistas em Direito de Trânsito, Família, Cível, Previdenciário e Consumidor. Sede no Centro de Três Corações - MG (R. Joaquim Bento Carvalho, 108, Sala 2) e atendimento on-line em todo o Brasil. Avaliação máxima 5,0 estrelas no Google.",
  keywords: [
    "ALP Advocacia e Consultoria",
    "ALP Advocacia",
    "Dra. Ana Letícia Pereira",
    "Advogada Três Corações MG",
    "Advocacia Três Corações",
    "Direito de Trânsito Três Corações",
    "Suspensão de CNH Três Corações",
    "Direito de Família Três Corações",
    "Divórcio e Pensão Três Corações",
    "Direito Previdenciário INSS Três Corações",
    "Aposentadoria e BPC LOAS Três Corações",
    "Direito Cível Três Corações",
    "Direito do Consumidor Três Corações",
    "Consultoria Jurídica Três Corações",
  ],
  authors: [
    { name: "Dra. Ana Letícia Pereira" },
    { name: "ALP Advocacia e Consultoria" },
  ],
  creator: "ALP Advocacia e Consultoria",
  publisher: "ALP Advocacia e Consultoria",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.advocaciaalp.com.br",
    title:
      "ALP Advocacia e Consultoria | Soluções Jurídicas Estratégicas em Três Corações - MG",
    description:
      "Atuação jurídica com excelência técnica, ética intransigente e dedicação artesanal a cada causa. Nota 5,0 estrelas no Google. Atendimento presencial em Três Corações e digital para todo o país.",
    siteName: "ALP Advocacia e Consultoria",
    images: [
      {
        url: "/logo.png",
        width: 1774,
        height: 887,
        alt: "ALP Advocacia e Consultoria",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "ALP Advocacia e Consultoria",
    alternateName: "ALP Advocacia",
    founder: {
      "@type": "Person",
      name: "Dra. Ana Letícia Pereira",
      jobTitle: "Advogada e Sócia-Fundadora",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Joaquim Bento Carvalho, 108 - Sl 2 - Centro",
      addressLocality: "Três Corações",
      addressRegion: "MG",
      postalCode: "37410-000",
      addressCountry: "BR",
    },
    telephone: "+55-35-99190-6280",
    url: "https://www.advocaciaalp.com.br",
    image: "https://www.advocaciaalp.com.br/logo.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "30",
    },
    areaServed: ["Três Corações", "Minas Gerais", "Brasil"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
