import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://2fengenhariaeseguranca.com";
const siteName = "2f Engenharia Elétrica";
const phone = "+55-13-99147-5064";
const phoneDisplay = "(13) 99147-5064";
const email = "2fengenhariaeletrica@gmail.com";
const whatsapp = "https://wa.me/5513991475064";
const instagram = "https://www.instagram.com/2f_eng_eletrica_seguranca/";

const cities = [
  "Santos",
  "São Vicente",
  "Praia Grande",
  "Guarujá",
  "São Paulo",
  "Peruíbe",
];

const siteDescription =
  "Engenharia elétrica em Santos, Guarujá, São Vicente, Praia Grande, Peruíbe e São Paulo. Instalações residenciais e prediais, câmeras, interfones, projetos, laudos e SPDA. 10+ anos, CREA ativo, orçamento gratuito e atendimento de emergência 24h.";

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2f Engenharia Elétrica | Instalações, Câmeras e Projetos — Santos e Baixada Santista",
    template: "%s | 2f Engenharia Elétrica",
  },
  description: siteDescription,
  keywords: [
    "engenharia elétrica Santos",
    "eletricista Santos",
    "eletricista Guarujá",
    "eletricista São Vicente",
    "eletricista Praia Grande",
    "eletricista Peruíbe",
    "eletricista São Paulo",
    "instalação elétrica residencial",
    "instalação elétrica predial",
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
    "emergência elétrica 24h",
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
    title: "2f Engenharia Elétrica | Soluções Elétricas Profissionais",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/logo-dark.png`,
        width: 1200,
        height: 630,
        alt: "2f Engenharia Elétrica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2f Engenharia Elétrica",
    description: siteDescription,
    images: [`${siteUrl}/logo-dark.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo-white.png",
    apple: "/logo-white.png",
  },
};

const serviceCatalog = [
  {
    name: "Instalações Elétricas Residenciais",
    description:
      "Instalações elétricas completas para residências: quadros, tomadas, iluminação LED, fiação e sistemas de proteção conforme NBR 5410.",
  },
  {
    name: "Instalações Elétricas Prediais",
    description:
      "Projetos e execução para edifícios e comércios com sistemas trifásicos, automação predial, quadros de força e manutenção preventiva.",
  },
  {
    name: "Câmeras de Segurança e Interfones",
    description:
      "Instalação de CFTV com câmeras IP Full HD, interfones digitais, monitoramento remoto via aplicativo e gravação em nuvem.",
  },
  {
    name: "Projetos Elétricos e Laudos Técnicos",
    description:
      "Elaboração de projetos elétricos, laudos técnicos, SPDA (para-raios) e sistemas de aterramento com responsável técnico CREA.",
  },
];

const faqItems = [
  {
    q: "A 2f Engenharia Elétrica atende emergências 24 horas?",
    a: "Sim. Mantemos plantão de emergência 24h para problemas elétricos urgentes em toda a Baixada Santista e São Paulo. Basta ligar ou enviar mensagem no WhatsApp (13) 99147-5064.",
  },
  {
    q: "O orçamento é realmente gratuito?",
    a: "Sim. A visita técnica e o orçamento detalhado são totalmente gratuitos e sem compromisso. Solicite pelo WhatsApp ou pelo formulário do site.",
  },
  {
    q: "A empresa possui engenheiro com registro no CREA?",
    a: "Sim. Todos os projetos e laudos são assinados por engenheiro eletricista com registro ativo no CREA, garantindo conformidade com as normas técnicas.",
  },
  {
    q: "Quais cidades vocês atendem?",
    a: "Atendemos Santos, São Vicente, Praia Grande, Guarujá, Peruíbe e a região metropolitana de São Paulo, com deslocamento incluído no orçamento.",
  },
  {
    q: "Qual a garantia dos serviços?",
    a: "Oferecemos 2 anos de garantia em mão de obra e acompanhamos o pós-obra para qualquer ajuste necessário.",
  },
  {
    q: "Vocês instalam câmeras de segurança e interfones?",
    a: "Sim. Trabalhamos com CFTV IP, monitoramento remoto pelo celular, gravação em nuvem e interfones digitais integrados, tanto residenciais quanto prediais.",
  },
];

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "@id": `${siteUrl}#business`,
  name: siteName,
  alternateName: "2f Engenharia e Segurança",
  url: siteUrl,
  logo: `${siteUrl}/logo-dark.png`,
  image: `${siteUrl}/logo-dark.png`,
  description: siteDescription,
  telephone: phone,
  email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santos",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.9608,
    longitude: -46.3336,
  },
  areaServed: cities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  sameAs: [instagram],
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
    itemListElement: serviceCatalog.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${siteUrl}#business` },
        areaServed: cities.map((city) => ({ "@type": "City", name: city })),
      },
    })),
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
