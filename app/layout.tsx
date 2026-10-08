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
  metadataBase: new URL("https://www.gabrielarodriguesadv.com.br"),
  title:
    "Dra. Gabriela Rodrigues | Advocacia Criminal, Família e Cível em Lavras - MG",
  description:
    "Defesa técnica de alta precisão, rigor analítico e dedicação artesanal conduzida pela Dra. Gabriela Rodrigues (Lhorrana & Rodrigues Advocacia). Atuação especializada em Direito Criminal, Família e Cível. Atendimento presencial na R. Firmino Sales, 491, Centro de Lavras - MG e on-line para todo o Brasil. Classificação 5,0 estrelas no Google (92 avaliações).",
  keywords: [
    "Dra. Gabriela Rodrigues",
    "Gabriela Rodrigues Advogada",
    "Lhorrana e Rodrigues Advocacia",
    "Advogada Criminalista Lavras MG",
    "Advocacia Criminal Especializada",
    "Direito de Família Lavras",
    "Direito Cível Lavras",
    "Advogado em Lavras MG",
    "Audiência de Custódia Lavras",
    "Tribunal do Júri Lavras",
    "Contratos e Assessoria Jurídica Minas Gerais",
  ],
  authors: [{ name: "Dra. Gabriela Rodrigues" }],
  creator: "Lhorrana & Rodrigues Advocacia e Assessoria Jurídica",
  publisher: "Dra. Gabriela Rodrigues - Escritório de Advocacia",
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
    url: "https://www.gabrielarodriguesadv.com.br",
    title:
      "Dra. Gabriela Rodrigues | Advocacia e Assessoria Jurídica em Lavras - MG",
    description:
      "Defesa técnica com dedicação artesanal a cada caso. Avaliação máxima de 5,0 estrelas no Google com 92 avaliações. Atendimento presencial em Lavras - MG e on-line para todo o Brasil.",
    siteName: "Lhorrana & Rodrigues — Advocacia e Assessoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 1774,
        height: 887,
        alt: "Lhorrana & Rodrigues — Advocacia e Assessoria Jurídica",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
