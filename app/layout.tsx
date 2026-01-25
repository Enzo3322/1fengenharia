import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://2fengenhariaeseguranca.com";
const siteName = "2f Engenharia Elétrica";
const siteDescription =
  "Engenharia elétrica em São Paulo: instalações residenciais e prediais, câmeras de segurança, interfones, projetos técnicos e laudos. Mais de 10 anos de experiência. CREA ativo. Orçamento grátis.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2f Engenharia Elétrica | Instalações Elétricas em São Paulo",
    template: "%s | 2f Engenharia Elétrica",
  },
  description: siteDescription,
  keywords: [
    "engenharia elétrica",
    "instalação elétrica residencial",
    "instalação elétrica predial",
    "eletricista São Paulo",
    "projeto elétrico",
    "laudo elétrico",
    "SPDA",
    "para-raios",
    "câmeras de segurança",
    "CFTV",
    "interfone digital",
    "automação predial",
    "manutenção elétrica",
    "quadro elétrico",
    "iluminação LED",
    "engenheiro eletricista CREA",
    "2f engenharia",
    "instalação elétrica SP",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
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
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: "2f Engenharia Elétrica | Soluções Elétricas Profissionais em SP",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "2f Engenharia Elétrica - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2f Engenharia Elétrica | Instalações Elétricas em São Paulo",
    description: siteDescription,
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    // Adicionar quando disponível:
    // google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: siteName,
  alternateName: "2f Engenharia e Segurança",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description: siteDescription,
  telephone: "+55-13-99147-5064",
  email: "2fengenhariaeletrica@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  areaServed: {
    "@type": "State",
    name: "São Paulo",
  },
  sameAs: [
    "https://www.instagram.com/2f_eng_eletrica_seguranca/",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "300",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Engenharia Elétrica",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalações Elétricas Residenciais",
          description:
            "Instalações elétricas completas para residências, incluindo quadros, tomadas, iluminação e sistemas de proteção.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalações Elétricas Prediais",
          description:
            "Projetos elétricos para edifícios comerciais e residenciais com foco em eficiência e segurança.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Câmeras e Interfones",
          description:
            "Instalação de sistemas de segurança com câmeras de monitoramento e interfones digitais.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Projetos e Laudos Técnicos",
          description:
            "Elaboração de projetos técnicos, laudos de instalação elétrica, SPDA e sistemas de aterramento.",
        },
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
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
