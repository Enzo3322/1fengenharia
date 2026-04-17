# Redesign Visual — 2f Engenharia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual redesign of the 2f Engenharia Elétrica website — migrating from single-page gold theme to multi-page clean/professional blue theme with SEO-optimized service pages, gallery section, and areas de atuação page.

**Architecture:** Next.js 14 app router with static export. Homepage sections as individual components, service detail pages via dynamic `[slug]` route, centralized data layer for services/areas. All styling via Tailwind CSS v4 custom properties. No dark mode.

**Tech Stack:** Next.js 14, Tailwind CSS v4, Outfit font (Google Fonts), Lucide React icons, shadcn/ui (existing), Vercel Analytics.

**Design reference:** See prototype at `docs/superpowers/specs/2026-04-07-redesign-visual-design.md` and visual prototypes in `.superpowers/brainstorm/` directory.

**Testing note:** This is a static marketing site with purely presentational components. There is no business logic to unit test. Verification is visual: run `npm run dev` and check localhost:3000 after each task.

---

## File Structure

### New Files
- `lib/data/services.ts` — Service definitions (slug, title, description, features, icon)
- `lib/data/areas.ts` — Area definitions (name, slug)
- `components/trust-bar.tsx` — Trust badges below hero
- `components/gallery-section.tsx` — Photo grid with filter tabs
- `components/lightbox.tsx` — Airbnb-style fullscreen carousel
- `components/areas-section.tsx` — Areas de atuação grid
- `components/cta-banner.tsx` — Navy CTA section with WhatsApp
- `components/whatsapp-fab.tsx` — Floating WhatsApp button (mobile)
- `app/servicos/[slug]/page.tsx` — Dynamic service detail page
- `app/areas-de-atuacao/page.tsx` — Areas page

### Modified Files
- `app/globals.css` — New blue color scheme, Outfit font, remove gold utilities
- `app/layout.tsx` — Swap Geist → Outfit, update metadata
- `app/page.tsx` — New section order with new components
- `app/sitemap.ts` — Add service and area pages
- `app/robots.ts` — No change needed
- `components/header.tsx` — Full rewrite (blue theme, glassmorphism)
- `components/hero-section.tsx` — Full rewrite (2-col, navy hero, stats card)
- `components/services-section.tsx` — Full rewrite (split header, card grid with arrows)
- `components/about-section.tsx` — Full rewrite (brand focus, metrics grid)
- `components/contact-section.tsx` — Full rewrite (info list + form)
- `components/footer.tsx` — Full rewrite (4-col navy footer)

### Delete Files
- `components/team-section.tsx` — Replaced by subtle about section
- `components/projects-section.tsx` — Replaced by gallery
- `components/theme-provider.tsx` — No dark mode in new design
- `styles/globals.css` — Unused duplicate

---

### Task 1: Foundation — Global Styles & Font

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Delete: `styles/globals.css`
- Delete: `components/theme-provider.tsx`

- [ ] **Step 1: Replace globals.css with new blue theme**

Replace the entire content of `app/globals.css` with:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  /* Navy & Blues */
  --navy: #0a1628;
  --navy-light: #0f1f3d;
  --blue-700: #1d4ed8;
  --blue-600: #2563eb;
  --blue-500: #3b82f6;
  --blue-400: #60a5fa;
  --blue-100: #dbeafe;
  --blue-50: #eff6ff;

  /* Slate scale */
  --slate-900: #0f172a;
  --slate-800: #1e293b;
  --slate-700: #334155;
  --slate-600: #475569;
  --slate-500: #64748b;
  --slate-400: #94a3b8;
  --slate-300: #cbd5e1;
  --slate-200: #e2e8f0;
  --slate-100: #f1f5f9;
  --slate-50: #f8fafc;

  /* Functional */
  --green-500: #22c55e;
  --green-600: #16a34a;
  --white: #ffffff;

  /* shadcn/ui compatibility */
  --background: var(--white);
  --foreground: var(--slate-900);
  --card: var(--white);
  --card-foreground: var(--slate-900);
  --popover: var(--white);
  --popover-foreground: var(--slate-900);
  --primary: var(--blue-600);
  --primary-foreground: var(--white);
  --secondary: var(--slate-100);
  --secondary-foreground: var(--slate-900);
  --muted: var(--slate-100);
  --muted-foreground: var(--slate-500);
  --accent: var(--slate-100);
  --accent-foreground: var(--slate-900);
  --destructive: #ef4444;
  --destructive-foreground: var(--white);
  --border: var(--slate-200);
  --input: var(--slate-200);
  --ring: var(--blue-500);
  --radius: 0.75rem;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Outfit', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Utility: gradient text */
.text-gradient-blue {
  background: linear-gradient(135deg, var(--blue-400), var(--blue-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Utility: grid pattern overlay */
.bg-grid {
  background-image:
    linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
  background-size: 64px 64px;
}

/* Utility: navy radial glow */
.bg-navy-glow {
  background: radial-gradient(ellipse 80% 50% at 65% 40%, rgba(29,78,216,0.14) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 15% 85%, rgba(29,78,216,0.06) 0%, transparent 60%);
}
```

- [ ] **Step 2: Update layout.tsx — swap font, remove dark mode, update metadata**

Replace the entire content of `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl = "https://2fengenhariaeseguranca.com";

export const metadata: Metadata = {
  title: "2f Engenharia Elétrica | Instalações Elétricas na Baixada Santista e São Paulo",
  description:
    "Engenharia elétrica profissional na Baixada Santista e São Paulo. Instalações residenciais e prediais, câmeras de segurança, projetos elétricos e laudos técnicos. Profissionais com CREA, garantia de 2 anos e atendimento 24h.",
  keywords: [
    "engenharia elétrica",
    "eletricista santos",
    "instalação elétrica residencial",
    "instalação elétrica predial",
    "câmeras de segurança santos",
    "CFTV baixada santista",
    "projeto elétrico",
    "laudo técnico elétrico",
    "SPDA para-raios",
    "automação predial",
    "eletricista são vicente",
    "eletricista praia grande",
    "eletricista guarujá",
    "eletricista são paulo",
    "eletricista peruíbe",
    "instalação elétrica baixada santista",
    "manutenção elétrica",
    "quadro elétrico",
  ],
  authors: [{ name: "2f Engenharia Elétrica" }],
  openGraph: {
    title: "2f Engenharia Elétrica | Instalações Elétricas Profissionais",
    description:
      "Soluções elétricas com segurança e qualidade. +500 projetos, +10 anos de experiência na Baixada Santista e São Paulo.",
    url: siteUrl,
    siteName: "2f Engenharia Elétrica",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${siteUrl}/logo-dark.png`, width: 512, height: 512, alt: "2f Engenharia Elétrica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2f Engenharia Elétrica",
    description: "Soluções elétricas profissionais na Baixada Santista e SP.",
    images: [`${siteUrl}/logo-dark.png`],
  },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  manifest: "/manifest.json",
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: "2f Engenharia Elétrica",
    url: siteUrl,
    logo: `${siteUrl}/logo-dark.png`,
    image: `${siteUrl}/logo-dark.png`,
    telephone: "+5513991475064",
    email: "2fengenhariaeletrica@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santos",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Santos" },
      { "@type": "City", name: "São Vicente" },
      { "@type": "City", name: "Praia Grande" },
      { "@type": "City", name: "Guarujá" },
      { "@type": "City", name: "São Paulo" },
      { "@type": "City", name: "Peruíbe" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Engenharia Elétrica",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalações Elétricas Residenciais" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalações Elétricas Prediais" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Câmeras de Segurança e Interfones" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Projetos Elétricos e Laudos Técnicos" } },
      ],
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "300" },
    sameAs: ["https://www.instagram.com/2f_eng_eletrica_seguranca/"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="bg-white text-[var(--slate-800)] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Delete unused files**

```bash
rm /Users/enzospagnolli/projects/pessoal/1fengenharia/styles/globals.css
rm /Users/enzospagnolli/projects/pessoal/1fengenharia/components/theme-provider.tsx
```

- [ ] **Step 4: Verify dev server starts**

Run: `cd /Users/enzospagnolli/projects/pessoal/1fengenharia && npm run dev`
Expected: Server starts without errors (page may be broken until components are updated)

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: update foundation styles to blue theme with Outfit font"
```

---

### Task 2: Data Layer

**Files:**
- Create: `lib/data/services.ts`
- Create: `lib/data/areas.ts`

- [ ] **Step 1: Create services data**

Create `lib/data/services.ts`:

```ts
import {
  Home,
  Building2,
  Camera,
  FileText,
  type LucideIcon,
} from "lucide-react";

type ServiceFeature = {
  readonly name: string;
};

type Service = {
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly icon: LucideIcon;
  readonly features: readonly ServiceFeature[];
  readonly tags: readonly string[];
  readonly metaTitle: string;
  readonly metaDescription: string;
};

export const services: readonly Service[] = [
  {
    slug: "instalacoes-residenciais",
    title: "Instalações Residenciais",
    shortDescription:
      "Quadros elétricos, iluminação LED, tomadas, interruptores e sistemas de proteção para sua residência.",
    fullDescription:
      "Realizamos instalações elétricas residenciais completas, desde a montagem de quadros de distribuição até a instalação de pontos de iluminação LED, tomadas e interruptores. Todos os serviços seguem as normas da ABNT NBR 5410, com materiais de primeira linha e garantia de 2 anos.",
    icon: Home,
    features: [
      { name: "Quadros elétricos e disjuntores" },
      { name: "Iluminação LED residencial" },
      { name: "Tomadas e interruptores" },
      { name: "Sistemas de proteção (DR, DPS)" },
      { name: "Aterramento" },
      { name: "Adequação de instalações antigas" },
    ],
    tags: ["Quadros elétricos", "Iluminação LED", "Proteção"],
    metaTitle: "Instalações Elétricas Residenciais | 2f Engenharia Elétrica",
    metaDescription:
      "Instalações elétricas residenciais em Santos, São Vicente, Praia Grande e região. Quadros elétricos, iluminação LED, proteção. CREA ativo, garantia 2 anos.",
  },
  {
    slug: "instalacoes-prediais",
    title: "Instalações Prediais",
    shortDescription:
      "Projetos comerciais, sistemas trifásicos, automação predial e manutenção preventiva para edifícios.",
    fullDescription:
      "Executamos instalações elétricas prediais e comerciais de pequeno, médio e grande porte. Trabalhamos com sistemas monofásicos e trifásicos, automação de iluminação e climatização, e oferecemos planos de manutenção preventiva para garantir a continuidade operacional do seu edifício.",
    icon: Building2,
    features: [
      { name: "Projetos comerciais e industriais" },
      { name: "Sistemas trifásicos" },
      { name: "Automação predial" },
      { name: "Manutenção preventiva" },
      { name: "Quadros de força e comando" },
      { name: "Adequação às normas NR-10" },
    ],
    tags: ["Comercial", "Trifásico", "Automação"],
    metaTitle: "Instalações Elétricas Prediais | 2f Engenharia Elétrica",
    metaDescription:
      "Instalações elétricas prediais e comerciais na Baixada Santista e SP. Sistemas trifásicos, automação, manutenção preventiva. Profissionais com CREA.",
  },
  {
    slug: "cameras-interfones",
    title: "Câmeras e Interfones",
    shortDescription:
      "Câmeras IP, interfones digitais, monitoramento remoto e gravação em nuvem para sua segurança.",
    fullDescription:
      "Projetamos e instalamos sistemas completos de CFTV com câmeras IP de alta definição, interfones digitais com vídeo e sistemas de monitoramento remoto. Acesse as imagens em tempo real pelo celular de qualquer lugar, com opção de gravação em nuvem.",
    icon: Camera,
    features: [
      { name: "Câmeras IP HD e Full HD" },
      { name: "Interfones digitais com vídeo" },
      { name: "Monitoramento remoto via app" },
      { name: "Gravação em nuvem" },
      { name: "DVR e NVR" },
      { name: "Cercas elétricas e alarmes" },
    ],
    tags: ["CFTV", "Interfones", "Monitoramento"],
    metaTitle: "Câmeras de Segurança e Interfones | 2f Engenharia Elétrica",
    metaDescription:
      "Instalação de câmeras de segurança e interfones em Santos e região. CFTV, monitoramento remoto, gravação em nuvem. Orçamento gratuito.",
  },
  {
    slug: "projetos-laudos",
    title: "Projetos e Laudos",
    shortDescription:
      "Projetos elétricos, laudos técnicos, SPDA (para-raios) e sistemas de aterramento com CREA.",
    fullDescription:
      "Elaboramos projetos elétricos residenciais, comerciais e industriais com ART (Anotação de Responsabilidade Técnica). Emitimos laudos técnicos de conformidade, projetamos sistemas SPDA (para-raios) e dimensionamos sistemas de aterramento conforme normas ABNT.",
    icon: FileText,
    features: [
      { name: "Projetos elétricos com ART" },
      { name: "Laudos técnicos de conformidade" },
      { name: "SPDA (para-raios)" },
      { name: "Sistemas de aterramento" },
      { name: "Dimensionamento de cargas" },
      { name: "As-built elétrico" },
    ],
    tags: ["Projetos elétricos", "SPDA", "Laudos"],
    metaTitle: "Projetos Elétricos e Laudos Técnicos | 2f Engenharia Elétrica",
    metaDescription:
      "Projetos elétricos com ART, laudos técnicos, SPDA e aterramento. Engenheiros com CREA na Baixada Santista e São Paulo.",
  },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
```

- [ ] **Step 2: Create areas data**

Create `lib/data/areas.ts`:

```ts
type Area = {
  readonly name: string;
  readonly slug: string;
};

export const areas: readonly Area[] = [
  { name: "Santos", slug: "santos" },
  { name: "São Vicente", slug: "sao-vicente" },
  { name: "Praia Grande", slug: "praia-grande" },
  { name: "Guarujá", slug: "guaruja" },
  { name: "São Paulo", slug: "sao-paulo" },
  { name: "Peruíbe", slug: "peruibe" },
] as const;

export const WHATSAPP_NUMBER = "5513991475064";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento.`;
export const PHONE_NUMBER = "(13) 99147-5064";
export const EMAIL = "2fengenhariaeletrica@gmail.com";
export const INSTAGRAM_HANDLE = "@2f_eng_eletrica_seguranca";
export const INSTAGRAM_URL = "https://www.instagram.com/2f_eng_eletrica_seguranca/";
```

- [ ] **Step 3: Commit**

```bash
git add lib/data/services.ts lib/data/areas.ts && git commit -m "feat: add centralized data layer for services and areas"
```

---

### Task 3: Header

**Files:**
- Modify: `components/header.tsx` (full rewrite)

- [ ] **Step 1: Rewrite header.tsx**

Replace the entire content of `components/header.tsx` with:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data/areas";

const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#areas", label: "Áreas" },
  { href: "/#contato", label: "Contato" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-xl border-b border-[var(--slate-200)]/60">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--blue-700)] rounded-[10px] flex items-center justify-center text-white text-[17px] font-bold tracking-tight relative overflow-hidden">
            2f
            <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-white/12 rounded-[0_10px_0_14px]" />
          </div>
          <span className="text-[19px] font-bold text-[var(--slate-900)] tracking-tight">
            <span className="text-[var(--blue-700)]">2f</span> Engenharia
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--slate-500)] hover:text-[var(--slate-900)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--blue-600)] after:rounded-sm after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--green-500)] hover:bg-[var(--green-600)] text-white text-[13px] font-semibold px-5 py-2.5 rounded-[10px] transition-all shadow-[0_2px_8px_rgba(34,197,94,0.25)] hover:shadow-[0_4px_16px_rgba(34,197,94,0.3)] hover:-translate-y-px"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--slate-200)] text-[var(--slate-500)]"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--slate-200)] bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[15px] font-medium text-[var(--slate-600)] hover:text-[var(--slate-900)] border-b border-[var(--slate-100)] last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-[var(--green-500)] text-white text-[15px] font-semibold px-5 py-3 rounded-[10px] w-full"
          >
            <WhatsAppIcon />
            Chamar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.683-1.378A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.39-.234-3.307.974.882-3.22-.258-.408A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
```

- [ ] **Step 2: Verify header renders**

Run: `npm run dev` — check that the header renders with blue logo, nav links, and green WhatsApp button at localhost:3000

- [ ] **Step 3: Commit**

```bash
git add components/header.tsx && git commit -m "feat: redesign header with blue theme and glassmorphism"
```

---

### Task 4: Hero Section

**Files:**
- Modify: `components/hero-section.tsx` (full rewrite)
- Create: `components/trust-bar.tsx`

- [ ] **Step 1: Rewrite hero-section.tsx**

Replace the entire content of `components/hero-section.tsx` with:

```tsx
import { Shield, Clock, MessageSquare, CheckCircle2, ChevronDown, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data/areas";

export function HeroSection() {
  return (
    <section className="relative min-h-[94vh] flex items-center bg-[var(--navy)] overflow-hidden">
      <div className="absolute inset-0 bg-navy-glow" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 sm:px-10 pt-[140px] pb-20 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[var(--blue-500)]/8 border border-[var(--blue-500)]/15 px-4 py-2 rounded-full text-xs font-semibold text-[var(--blue-400)] tracking-widest uppercase mb-7 animate-[fadeInUp_0.7s_ease_both]">
            <span className="w-1.5 h-1.5 bg-[var(--blue-400)] rounded-full animate-pulse" />
            Engenharia Elétrica Profissional
          </div>

          <h1 className="text-[clamp(44px,5vw,64px)] font-extrabold text-white leading-[1.05] tracking-[-2px] mb-5 animate-[fadeInUp_0.7s_ease_0.08s_both]">
            Soluções elétricas com{" "}
            <span className="text-gradient-blue">segurança</span> e excelência
          </h1>

          <p className="text-[17px] text-[var(--slate-400)] leading-relaxed max-w-[480px] mb-9 animate-[fadeInUp_0.7s_ease_0.16s_both]">
            Projetos, instalações e manutenção elétrica para residências e empresas na Baixada Santista e São Paulo. Profissionais habilitados pelo CREA.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 animate-[fadeInUp_0.7s_ease_0.24s_both]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[var(--green-500)] hover:bg-[var(--green-600)] text-white text-[15px] font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.35)] hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-[var(--slate-300)] text-[15px] font-medium px-7 py-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/4 hover:text-white transition-all"
            >
              Nossos Serviços
              <ChevronDown size={14} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block bg-white/4 border border-white/7 rounded-2xl p-9 backdrop-blur-sm animate-[fadeInUp_0.7s_ease_0.32s_both]">
          <div className="text-xs font-semibold text-[var(--slate-500)] tracking-widest uppercase mb-7">
            Nossos números
          </div>
          <div className="flex flex-col">
            <StatRow icon={<CheckCircle2 size={20} />} number="500+" label="Projetos realizados" />
            <StatRow icon={<Clock size={20} />} number="10+" label="Anos de experiência" />
            <StatRow icon={<Users size={20} />} number="300+" label="Clientes satisfeitos" />
            <StatRow icon={<Shield size={20} />} number="24h" label="Atendimento emergencial" last />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ icon, number, label, last }: { icon: React.ReactNode; number: string; label: string; last?: boolean }) {
  return (
    <div className={`flex items-center gap-4 py-4 ${last ? "" : "border-b border-white/5"}`}>
      <div className="w-11 h-11 bg-[var(--blue-500)]/8 rounded-[10px] flex items-center justify-center text-[var(--blue-400)] shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[28px] font-extrabold text-white tracking-tight leading-none">{number}</div>
        <div className="text-[13px] text-[var(--slate-500)] mt-0.5">{label}</div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.683-1.378A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.39-.234-3.307.974.882-3.22-.258-.408A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
```

- [ ] **Step 2: Create trust-bar.tsx**

Create `components/trust-bar.tsx`:

```tsx
import { CheckCircle2, Shield, MessageSquare, Clock } from "lucide-react";

const trustItems = [
  { icon: CheckCircle2, label: "Registro CREA ativo" },
  { icon: Shield, label: "Garantia de 2 anos" },
  { icon: MessageSquare, label: "Orçamento gratuito" },
  { icon: Clock, label: "Emergência 24 horas" },
] as const;

export function TrustBar() {
  return (
    <div className="bg-white border-b border-[var(--slate-100)] py-5 px-6 sm:px-10">
      <div className="mx-auto max-w-[1200px] flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {trustItems.map((item, i) => (
          <div key={item.label} className="flex items-center gap-2.5">
            {i > 0 && (
              <div className="hidden sm:block w-px h-5 bg-[var(--slate-200)] -ml-5 mr-5" />
            )}
            <item.icon size={18} className="text-[var(--blue-600)]" />
            <span className="text-[13px] font-medium text-[var(--slate-500)]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Add fadeInUp keyframe to globals.css**

Append to the end of `app/globals.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add components/hero-section.tsx components/trust-bar.tsx app/globals.css && git commit -m "feat: redesign hero section with stats card and trust bar"
```

---

### Task 5: Services Section

**Files:**
- Modify: `components/services-section.tsx` (full rewrite)

- [ ] **Step 1: Rewrite services-section.tsx**

Replace the entire content of `components/services-section.tsx` with:

```tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section id="servicos" className="py-[120px] px-6 sm:px-10 mx-auto max-w-[1200px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
        <div>
          <div className="text-xs font-semibold text-[var(--blue-600)] tracking-widest uppercase mb-2.5">
            Serviços
          </div>
          <h2 className="text-[clamp(32px,3.5vw,42px)] font-extrabold text-[var(--slate-900)] tracking-tight leading-[1.1]">
            Soluções completas em<br className="hidden sm:block" />
            engenharia elétrica
          </h2>
        </div>
        <p className="text-base text-[var(--slate-500)] max-w-[420px] leading-relaxed">
          Do projeto à execução, com segurança e qualidade para sua residência ou empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/servicos/${service.slug}`}
            className="group relative p-9 rounded-2xl bg-white border border-[var(--slate-200)] transition-all duration-350 hover:border-[var(--blue-100)] hover:shadow-[0_8px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1 overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[var(--blue-600)] after:to-[var(--blue-400)] after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 bg-[var(--blue-50)] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--blue-600)]">
                <service.icon
                  size={22}
                  className="text-[var(--blue-600)] transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <div className="w-8 h-8 rounded-lg border border-[var(--slate-200)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--blue-600)] group-hover:border-[var(--blue-600)]">
                <ArrowUpRight
                  size={14}
                  className="text-[var(--slate-400)] transition-all duration-300 group-hover:text-white group-hover:translate-x-px group-hover:-translate-y-px"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[var(--slate-900)] tracking-tight mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-[var(--slate-500)] leading-relaxed mb-5">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-[var(--slate-500)] bg-[var(--slate-50)] border border-[var(--slate-100)] px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/services-section.tsx && git commit -m "feat: redesign services section with card grid and navigation arrows"
```

---

### Task 6: About Section

**Files:**
- Modify: `components/about-section.tsx` (full rewrite)

- [ ] **Step 1: Rewrite about-section.tsx**

Replace the entire content of `components/about-section.tsx` with:

```tsx
import { CheckCircle2, Shield, Clock, MessageSquare } from "lucide-react";

const badges = [
  { icon: CheckCircle2, label: "Registro CREA" },
  { icon: Shield, label: "Garantia 2 anos" },
  { icon: Clock, label: "Emergência 24h" },
  { icon: MessageSquare, label: "Orçamento gratuito" },
] as const;

const metrics = [
  { number: "500+", label: "Projetos entregues com excelência", featured: true },
  { number: "10+", label: "Anos no mercado", featured: false },
  { number: "300+", label: "Clientes satisfeitos", featured: false },
] as const;

export function AboutSection() {
  return (
    <section id="sobre" className="bg-[var(--slate-50)] relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(29,78,216,0.03)_0%,transparent_70%)] rounded-full" />

      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="text-xs font-semibold text-[var(--blue-600)] tracking-widest uppercase mb-2.5">
            Sobre a 2f
          </div>
          <h2 className="text-[clamp(32px,3.5vw,42px)] font-extrabold text-[var(--slate-900)] tracking-tight leading-[1.1] mb-6">
            Excelência em<br />engenharia elétrica
          </h2>
          <p className="text-base text-[var(--slate-500)] leading-relaxed mb-8">
            Com mais de uma década de atuação, a 2f Engenharia Elétrica é referência em soluções elétricas na Baixada Santista. Nossa equipe de profissionais habilitados pelo CREA entrega projetos com segurança, eficiência e qualidade.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--slate-700)] bg-white border border-[var(--slate-200)] px-4 py-2.5 rounded-[10px] transition-all hover:border-[var(--blue-100)] hover:shadow-sm"
              >
                <badge.icon size={16} className="text-[var(--blue-600)]" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.number}
              className={`rounded-2xl p-7 transition-all hover:-translate-y-0.5 ${
                metric.featured
                  ? "col-span-2 bg-[var(--navy)] border-transparent"
                  : "bg-white border border-[var(--slate-200)] hover:border-[var(--blue-100)] hover:shadow-md"
              }`}
            >
              <div
                className={`text-4xl font-extrabold tracking-tight leading-none mb-1 ${
                  metric.featured ? "text-[var(--blue-400)]" : "text-[var(--slate-900)]"
                }`}
              >
                {metric.number}
              </div>
              <div
                className={`text-[13px] ${
                  metric.featured ? "text-[var(--slate-400)]" : "text-[var(--slate-500)]"
                }`}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/about-section.tsx && git commit -m "feat: redesign about section with brand focus and metrics grid"
```

---

### Task 7: Gallery + Lightbox

**Files:**
- Create: `components/lightbox.tsx`
- Create: `components/gallery-section.tsx`

- [ ] **Step 1: Create lightbox.tsx**

Create `components/lightbox.tsx`:

```tsx
"use client";

import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
};

type LightboxProps = {
  readonly images: readonly GalleryImage[];
  readonly currentIndex: number;
  readonly onClose: () => void;
  readonly onNavigate: (index: number) => void;
};

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const current = images[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, handlePrev, handleNext]);

  if (!current) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col animate-[fadeIn_0.25s_ease]">
      <div className="flex justify-between items-center px-6 py-4 shrink-0">
        <span className="text-[15px] font-medium text-white">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X size={20} className="text-white" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center relative px-20 min-h-0">
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-13 h-13 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <div className="max-w-full max-h-full flex items-center justify-center w-full">
          <div className="w-[800px] h-[500px] rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.4)] bg-[var(--slate-800)] flex items-center justify-center text-[var(--slate-400)] text-sm">
            {current.alt}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-13 h-13 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all"
          aria-label="Próximo"
        >
          <ChevronRight size={20} className="text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-5 py-2.5 rounded-[10px] text-[13px] text-white/90 whitespace-nowrap">
          {current.caption}
        </div>
      </div>

      <div className="px-6 pb-5 flex justify-center gap-2 shrink-0 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => onNavigate(i)}
            className={`w-16 h-11 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
              i === currentIndex ? "border-white opacity-100" : "border-transparent opacity-40 hover:opacity-70"
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
          >
            <div className="w-full h-full bg-[var(--slate-700)] flex items-center justify-center text-[8px] text-[var(--slate-400)]">
              {i + 1}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create gallery-section.tsx**

Create `components/gallery-section.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Grid2x2 } from "lucide-react";
import { Lightbox } from "@/components/lightbox";

const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Quadro elétrico residencial", caption: "Quadro elétrico residencial — Santos", category: "residencial" },
  { src: "/gallery/2.jpg", alt: "Automação predial", caption: "Automação predial — Guarujá", category: "predial" },
  { src: "/gallery/3.jpg", alt: "Sistema CFTV", caption: "CFTV comercial — Praia Grande", category: "cameras" },
  { src: "/gallery/4.jpg", alt: "Iluminação LED", caption: "Iluminação LED — São Vicente", category: "residencial" },
  { src: "/gallery/5.jpg", alt: "SPDA para-raios", caption: "SPDA — São Paulo", category: "projetos" },
] as const;

const filters = [
  { key: "todos", label: "Todos" },
  { key: "residencial", label: "Residencial" },
  { key: "predial", label: "Predial" },
  { key: "cameras", label: "Câmeras" },
  { key: "projetos", label: "Projetos" },
] as const;

const gradients = [
  "bg-gradient-to-br from-[#1e3a5f] via-[#1e40af] to-[#3b82f6]",
  "bg-gradient-to-br from-[#0f172a] to-[#1e293b]",
  "bg-gradient-to-br from-[#1e293b] to-[#334155]",
  "bg-gradient-to-br from-[#0c1b33] to-[#1d4ed8]",
  "bg-gradient-to-br from-[#1e40af] to-[#0f172a]",
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      <section id="galeria" className="py-[120px] px-6 sm:px-10 mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[var(--blue-600)] tracking-widest uppercase mb-2.5">
              Nossos Projetos
            </div>
            <h2 className="text-[clamp(32px,3.5vw,42px)] font-extrabold text-[var(--slate-900)] tracking-tight leading-[1.1]">
              Galeria de trabalhos
            </h2>
          </div>
          <p className="text-base text-[var(--slate-500)] max-w-[380px] leading-relaxed">
            Conheça alguns dos nossos projetos realizados na Baixada Santista e São Paulo.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`text-[13px] font-medium px-4 py-2 rounded-lg border transition-all ${
                activeFilter === f.key
                  ? "bg-[var(--slate-900)] text-white border-[var(--slate-900)]"
                  : "text-[var(--slate-500)] border-[var(--slate-200)] hover:border-[var(--slate-300)] hover:text-[var(--slate-700)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 grid-rows-[240px_240px] gap-2 rounded-2xl overflow-hidden">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`w-full h-full ${gradients[i % gradients.length]} flex items-center justify-center text-white/70 text-xs font-medium text-center p-4 transition-transform duration-400 group-hover:scale-[1.03]`}
              >
                {img.alt}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3.5 text-xs font-medium text-white opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {img.caption}
              </span>

              {i === filtered.length - 1 && (
                <div className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 bg-white text-[var(--slate-900)] text-[13px] font-semibold px-4 py-2 rounded-lg border border-[var(--slate-200)] shadow-md hover:bg-[var(--slate-900)] hover:text-white hover:border-[var(--slate-900)] transition-all">
                  <Grid2x2 size={14} />
                  Ver todas as fotos
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
```

- [ ] **Step 3: Add fadeIn keyframe to globals.css**

Append to `app/globals.css`:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

- [ ] **Step 4: Commit**

```bash
git add components/lightbox.tsx components/gallery-section.tsx app/globals.css && git commit -m "feat: add gallery section with Airbnb-style lightbox carousel"
```

---

### Task 8: Areas Section + CTA Banner

**Files:**
- Create: `components/areas-section.tsx`
- Create: `components/cta-banner.tsx`

- [ ] **Step 1: Create areas-section.tsx**

Create `components/areas-section.tsx`:

```tsx
import { MapPin } from "lucide-react";
import { areas } from "@/lib/data/areas";

export function AreasSection() {
  return (
    <section id="areas" className="py-[120px] px-6 sm:px-10 mx-auto max-w-[1200px] text-center">
      <div className="text-xs font-semibold text-[var(--blue-600)] tracking-widest uppercase mb-2.5">
        Áreas de atuação
      </div>
      <h2 className="text-[clamp(32px,3.5vw,42px)] font-extrabold text-[var(--slate-900)] tracking-tight leading-[1.1] mb-4">
        Atendemos toda a Baixada<br className="hidden sm:block" />
        Santista e São Paulo
      </h2>
      <p className="text-base text-[var(--slate-500)] max-w-[420px] mx-auto leading-relaxed mb-12">
        Equipe pronta para atender com agilidade e profissionalismo em toda a região.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-[800px] mx-auto">
        {areas.map((area) => (
          <div
            key={area.slug}
            className="flex items-center gap-3 bg-white border border-[var(--slate-200)] rounded-[14px] px-5 py-6 transition-all hover:border-[var(--blue-200)] hover:bg-[var(--blue-50)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(37,99,235,0.08)]"
          >
            <div className="w-9 h-9 bg-[var(--blue-50)] rounded-lg flex items-center justify-center shrink-0 transition-colors">
              <MapPin size={16} className="text-[var(--blue-600)]" />
            </div>
            <span className="text-[15px] font-semibold text-[var(--slate-800)]">
              {area.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create cta-banner.tsx**

Create `components/cta-banner.tsx`:

```tsx
import { WHATSAPP_URL } from "@/lib/data/areas";

export function CtaBanner() {
  return (
    <section className="relative bg-[var(--navy)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(29,78,216,0.1)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 mx-auto max-w-[800px] px-6 sm:px-10 py-[100px] text-center">
        <h2 className="text-[clamp(32px,3.5vw,44px)] font-extrabold text-white tracking-tight leading-[1.1] mb-3.5">
          Precisa de um eletricista<br className="hidden sm:block" />
          profissional?
        </h2>
        <p className="text-base text-[var(--slate-400)] mb-8">
          Orçamento gratuito com resposta em até 2 horas. Atendimento em toda a Baixada Santista e SP.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[var(--green-500)] hover:bg-[var(--green-600)] text-white text-base font-semibold px-10 py-[18px] rounded-[14px] transition-all shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.35)] hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.683-1.378A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.39-.234-3.307.974.882-3.22-.258-.408A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/areas-section.tsx components/cta-banner.tsx && git commit -m "feat: add areas section and CTA banner"
```

---

### Task 9: Contact Section + Footer

**Files:**
- Modify: `components/contact-section.tsx` (full rewrite)
- Modify: `components/footer.tsx` (full rewrite)

- [ ] **Step 1: Rewrite contact-section.tsx**

Replace the entire content of `components/contact-section.tsx` with:

```tsx
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { PHONE_NUMBER, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/data/areas";

const contactItems = [
  { icon: Phone, label: "Telefone", value: PHONE_NUMBER },
  { icon: Mail, label: "Email", value: EMAIL },
  { icon: Clock, label: "Horário", value: "Seg–Sex 8h às 18h · Emergência 24h" },
  { icon: MapPin, label: "Localização", value: "Baixada Santista e São Paulo, SP" },
] as const;

export function ContactSection() {
  return (
    <section id="contato" className="py-[120px] px-6 sm:px-10 mx-auto max-w-[1200px]">
      <div className="text-xs font-semibold text-[var(--blue-600)] tracking-widest uppercase mb-2.5">
        Contato
      </div>
      <h2 className="text-[clamp(32px,3.5vw,42px)] font-extrabold text-[var(--slate-900)] tracking-tight leading-[1.1] mb-3">
        Fale conosco
      </h2>
      <p className="text-base text-[var(--slate-500)] max-w-[420px] leading-relaxed mb-14">
        Entre em contato para um orçamento gratuito ou tire suas dúvidas.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16">
        <div className="flex flex-col gap-6">
          {contactItems.map((item) => (
            <div key={item.label} className="flex gap-3.5 items-start">
              <div className="w-11 h-11 bg-[var(--blue-50)] rounded-[10px] flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-[var(--blue-600)]" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-[var(--slate-400)] uppercase tracking-wider mb-0.5">
                  {item.label}
                </div>
                <div className="text-[15px] font-medium text-[var(--slate-800)]">{item.value}</div>
              </div>
            </div>
          ))}
          <div className="flex gap-3.5 items-start">
            <div className="w-11 h-11 bg-[var(--blue-50)] rounded-[10px] flex items-center justify-center shrink-0">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-[var(--blue-600)]">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[var(--slate-400)] uppercase tracking-wider mb-0.5">
                Instagram
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-[var(--slate-800)] hover:text-[var(--blue-600)] transition-colors"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[var(--slate-50)] rounded-2xl p-10 border border-[var(--slate-100)]">
          <h3 className="text-lg font-bold text-[var(--slate-900)] tracking-tight mb-6">
            Solicite um orçamento
          </h3>
          <form className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-[13px] font-medium text-[var(--slate-600)] mb-1.5 block">Nome</label>
                <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 border border-[var(--slate-200)] rounded-[10px] text-sm bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] outline-none focus:border-[var(--blue-500)] focus:ring-[3px] focus:ring-[var(--blue-500)]/8 transition-all" />
              </div>
              <div>
                <label className="text-[13px] font-medium text-[var(--slate-600)] mb-1.5 block">Telefone</label>
                <input type="tel" placeholder="(13) 99999-9999" className="w-full px-4 py-3 border border-[var(--slate-200)] rounded-[10px] text-sm bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] outline-none focus:border-[var(--blue-500)] focus:ring-[3px] focus:ring-[var(--blue-500)]/8 transition-all" />
              </div>
            </div>
            <div>
              <label className="text-[13px] font-medium text-[var(--slate-600)] mb-1.5 block">Email</label>
              <input type="email" placeholder="seu@email.com" className="w-full px-4 py-3 border border-[var(--slate-200)] rounded-[10px] text-sm bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] outline-none focus:border-[var(--blue-500)] focus:ring-[3px] focus:ring-[var(--blue-500)]/8 transition-all" />
            </div>
            <div>
              <label className="text-[13px] font-medium text-[var(--slate-600)] mb-1.5 block">Serviço</label>
              <select className="w-full px-4 py-3 border border-[var(--slate-200)] rounded-[10px] text-sm bg-white text-[var(--slate-800)] outline-none focus:border-[var(--blue-500)] focus:ring-[3px] focus:ring-[var(--blue-500)]/8 transition-all cursor-pointer">
                <option>Selecione o serviço</option>
                <option>Instalações Residenciais</option>
                <option>Instalações Prediais</option>
                <option>Câmeras e Interfones</option>
                <option>Projetos e Laudos</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="text-[13px] font-medium text-[var(--slate-600)] mb-1.5 block">Mensagem</label>
              <textarea placeholder="Descreva o que você precisa..." rows={4} className="w-full px-4 py-3 border border-[var(--slate-200)] rounded-[10px] text-sm bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] outline-none focus:border-[var(--blue-500)] focus:ring-[3px] focus:ring-[var(--blue-500)]/8 transition-all resize-y" />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-[var(--blue-600)] hover:bg-[var(--blue-700)] text-white text-[15px] font-semibold rounded-[10px] transition-all hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(37,99,235,0.2)] mt-1"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite footer.tsx**

Replace the entire content of `components/footer.tsx` with:

```tsx
import Link from "next/link";
import { services } from "@/lib/data/services";
import { areas, PHONE_NUMBER, WHATSAPP_URL, EMAIL, INSTAGRAM_URL } from "@/lib/data/areas";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] border-t border-white/4">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-9 border-b border-white/6">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[var(--blue-700)] rounded-[10px] flex items-center justify-center text-white text-[17px] font-bold tracking-tight">
                2f
              </div>
              <span className="text-[19px] font-bold text-white tracking-tight">
                <span className="text-[var(--blue-400)]">2f</span> Engenharia
              </span>
            </Link>
            <p className="text-sm text-[var(--slate-500)] leading-relaxed max-w-[300px]">
              Engenharia elétrica profissional na Baixada Santista e São Paulo. Soluções completas com segurança e qualidade.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-[var(--slate-400)] tracking-widest uppercase mb-5">
              Serviços
            </div>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicos/${s.slug}`} className="text-sm text-[var(--slate-500)] hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-[var(--slate-400)] tracking-widest uppercase mb-5">
              Regiões
            </div>
            <ul className="flex flex-col gap-3">
              {areas.map((a) => (
                <li key={a.slug}>
                  <span className="text-sm text-[var(--slate-500)]">{a.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-[var(--slate-400)] tracking-widest uppercase mb-5">
              Contato
            </div>
            <ul className="flex flex-col gap-3">
              <li><span className="text-sm text-[var(--slate-500)]">{PHONE_NUMBER}</span></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--slate-500)] hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--slate-500)] hover:text-white transition-colors">Instagram</a></li>
              <li><a href={`mailto:${EMAIL}`} className="text-sm text-[var(--slate-500)] hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[13px] text-[var(--slate-500)]">
          <span>&copy; {new Date().getFullYear()} 2f Engenharia Elétrica. Todos os direitos reservados.</span>
          <span>CREA registrado &middot; CNPJ ativo</span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/contact-section.tsx components/footer.tsx && git commit -m "feat: redesign contact section and footer"
```

---

### Task 10: Homepage Assembly + Cleanup

**Files:**
- Modify: `app/page.tsx`
- Delete: `components/team-section.tsx`
- Delete: `components/projects-section.tsx`
- Create: `components/whatsapp-fab.tsx`

- [ ] **Step 1: Create floating WhatsApp button**

Create `components/whatsapp-fab.tsx`:

```tsx
import { WHATSAPP_URL } from "@/lib/data/areas";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[var(--green-500)] hover:bg-[var(--green-600)] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_28px_rgba(34,197,94,0.5)] hover:scale-105 transition-all lg:hidden"
      aria-label="Chamar no WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.683-1.378A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.39-.234-3.307.974.882-3.22-.258-.408A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    </a>
  );
}
```

- [ ] **Step 2: Rewrite page.tsx**

Replace the entire content of `app/page.tsx` with:

```tsx
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { AreasSection } from "@/components/areas-section";
import { CtaBanner } from "@/components/cta-banner";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <AreasSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
```

- [ ] **Step 3: Delete old components**

```bash
rm /Users/enzospagnolli/projects/pessoal/1fengenharia/components/team-section.tsx
rm /Users/enzospagnolli/projects/pessoal/1fengenharia/components/projects-section.tsx
```

- [ ] **Step 4: Verify homepage loads correctly**

Run: `npm run dev` — open localhost:3000 and verify all sections render in order: Hero → Trust Bar → Services → About → Gallery → Areas → CTA → Contact → Footer

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: assemble redesigned homepage and remove old components"
```

---

### Task 11: Service Detail Pages

**Files:**
- Create: `app/servicos/[slug]/page.tsx`

- [ ] **Step 1: Create service detail page**

Create `app/servicos/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { Header } from "@/components/header";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { WHATSAPP_URL } from "@/lib/data/areas";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <Header />
      <main>
        <section className="bg-[var(--navy)] pt-[120px] pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-glow" />
          <div className="absolute inset-0 bg-grid" />
          <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10">
            <nav className="flex items-center gap-2 text-sm text-[var(--slate-400)] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <ChevronRight size={14} />
              <Link href="/#servicos" className="hover:text-white transition-colors">Serviços</Link>
              <ChevronRight size={14} />
              <span className="text-white">{service.title}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[var(--blue-500)]/10 rounded-xl flex items-center justify-center">
                <Icon size={28} className="text-[var(--blue-400)]" />
              </div>
              <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white tracking-tight leading-[1.1]">
                {service.title}
              </h1>
            </div>
            <p className="text-lg text-[var(--slate-400)] max-w-[640px] leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </section>

        <section className="py-[80px] px-6 sm:px-10 mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[var(--slate-900)] tracking-tight mb-4">
                Sobre o serviço
              </h2>
              <p className="text-base text-[var(--slate-500)] leading-relaxed mb-10">
                {service.fullDescription}
              </p>

              <h3 className="text-lg font-bold text-[var(--slate-900)] tracking-tight mb-5">
                O que inclui
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[var(--slate-200)] hover:border-[var(--blue-100)] hover:bg-[var(--blue-50)]/50 transition-all"
                  >
                    <CheckCircle2 size={18} className="text-[var(--blue-600)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--slate-700)]">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-[96px] h-fit">
              <div className="bg-[var(--slate-50)] border border-[var(--slate-100)] rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[var(--slate-900)] mb-2">
                  Solicite um orçamento
                </h3>
                <p className="text-sm text-[var(--slate-500)] mb-6 leading-relaxed">
                  Resposta em até 2 horas. Orçamento gratuito e sem compromisso.
                </p>
                <a
                  href={`${WHATSAPP_URL.replace("Olá!", `Olá! Tenho interesse em ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[var(--green-500)] hover:bg-[var(--green-600)] text-white text-[15px] font-semibold px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(34,197,94,0.3)] w-full"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.683-1.378A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.39-.234-3.307.974.882-3.22-.258-.408A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Solicitar Orçamento
                </a>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-[var(--slate-500)]">
                    <CheckCircle2 size={14} className="text-[var(--blue-600)]" />
                    Profissionais com CREA
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--slate-500)]">
                    <CheckCircle2 size={14} className="text-[var(--blue-600)]" />
                    Garantia de 2 anos
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--slate-500)]">
                    <CheckCircle2 size={14} className="text-[var(--blue-600)]" />
                    Atendimento emergencial 24h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
```

- [ ] **Step 2: Verify service pages render**

Run: `npm run dev` — navigate to localhost:3000/servicos/instalacoes-residenciais and verify it renders correctly with breadcrumb, hero, features, and CTA sidebar

- [ ] **Step 3: Commit**

```bash
git add app/servicos/[slug]/page.tsx && git commit -m "feat: add dedicated service detail pages with SEO metadata"
```

---

### Task 12: Areas de Atuação Page

**Files:**
- Create: `app/areas-de-atuacao/page.tsx`

- [ ] **Step 1: Create areas page**

Create `app/areas-de-atuacao/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { areas, WHATSAPP_URL } from "@/lib/data/areas";
import { services } from "@/lib/data/services";
import { Header } from "@/components/header";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Eletricista na Baixada Santista e São Paulo | 2f Engenharia",
  description:
    "Atendemos Santos, São Vicente, Praia Grande, Guarujá, São Paulo e Peruíbe. Serviços de engenharia elétrica, câmeras de segurança, projetos e laudos técnicos.",
};

export default function AreasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[var(--navy)] pt-[120px] pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-glow" />
          <div className="absolute inset-0 bg-grid" />
          <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10">
            <nav className="flex items-center gap-2 text-sm text-[var(--slate-400)] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <ChevronRight size={14} />
              <span className="text-white">Áreas de Atuação</span>
            </nav>
            <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Áreas de Atuação
            </h1>
            <p className="text-lg text-[var(--slate-400)] max-w-[640px] leading-relaxed">
              Atendemos toda a Baixada Santista e região metropolitana de São Paulo com agilidade e profissionalismo.
            </p>
          </div>
        </section>

        <section className="py-[80px] px-6 sm:px-10 mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area) => (
              <div
                key={area.slug}
                className="border border-[var(--slate-200)] rounded-2xl p-8 hover:border-[var(--blue-100)] hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-[var(--blue-50)] rounded-xl flex items-center justify-center mb-5">
                  <MapPin size={22} className="text-[var(--blue-600)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--slate-900)] tracking-tight mb-2">
                  Eletricista em {area.name}
                </h2>
                <p className="text-sm text-[var(--slate-500)] leading-relaxed mb-5">
                  Serviços de engenharia elétrica em {area.name}: instalações residenciais e prediais, câmeras de segurança, projetos e laudos técnicos.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {services.map((s) => (
                    <span
                      key={s.slug}
                      className="text-[11px] font-medium text-[var(--slate-500)] bg-[var(--slate-50)] border border-[var(--slate-100)] px-2.5 py-1 rounded-md"
                    >
                      {s.title}
                    </span>
                  ))}
                </div>
                <a
                  href={`${WHATSAPP_URL.replace("Olá!", `Olá! Preciso de um eletricista em ${area.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--blue-600)] hover:text-[var(--blue-700)] transition-colors"
                >
                  Solicitar orçamento
                  <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
```

- [ ] **Step 2: Verify areas page renders**

Run: `npm run dev` — navigate to localhost:3000/areas-de-atuacao

- [ ] **Step 3: Commit**

```bash
git add app/areas-de-atuacao/page.tsx && git commit -m "feat: add areas de atuacao page for local SEO"
```

---

### Task 13: SEO — Sitemap + Final Verification

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Update sitemap to include all pages**

Replace the entire content of `app/sitemap.ts` with:

```ts
import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";

const baseUrl = "https://2fengenhariaeseguranca.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${baseUrl}/servicos/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages,
    {
      url: `${baseUrl}/areas-de-atuacao`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
```

- [ ] **Step 2: Run build to verify no errors**

Run: `npm run build`
Expected: Build completes successfully with all pages generated (homepage, 4 service pages, areas page)

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts && git commit -m "feat: update sitemap with service and areas pages"
```

---

### Task 14: Final Build Verification

- [ ] **Step 1: Run full build**

```bash
cd /Users/enzospagnolli/projects/pessoal/1fengenharia && npm run build
```

Expected: Clean build with all static pages generated:
- `/` (homepage)
- `/servicos/instalacoes-residenciais`
- `/servicos/instalacoes-prediais`
- `/servicos/cameras-interfones`
- `/servicos/projetos-laudos`
- `/areas-de-atuacao`

- [ ] **Step 2: Visual verification**

Run: `npm run dev` and check:
- Homepage: all 10 sections render correctly with blue theme
- Service cards link to dedicated pages
- Service pages have breadcrumb, features, CTA sidebar
- Areas page shows all 6 cities with service tags
- Gallery opens lightbox on click
- WhatsApp FAB visible on mobile
- Header mobile menu works
- Footer links are correct
- All CTAs point to WhatsApp

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git add -A && git commit -m "fix: final adjustments from visual verification"
```
