# Redesign Visual — 2f Engenharia Elétrica

## Resumo

Redesign completo do site da 2f Engenharia Elétrica com foco em identidade profissional, SEO e exposição de serviços. Migração de single-page para multi-page com páginas dedicadas por serviço.

## Decisões de Design

### Identidade Visual
- **Estilo**: Clean & Profissional — fundo claro, espaço generoso, hierarquia forte
- **Tipografia**: Outfit (única fonte, pesos 300–800)
- **Paleta**: Azul Institucional
  - Navy: `#0a1628`
  - Blue-700: `#1d4ed8`
  - Blue-600: `#2563eb`
  - Blue-500: `#3b82f6`
  - Slate-900: `#0f172a`
  - Green-500: `#22c55e` (WhatsApp CTA)
  - Brancos/cinzas: slate scale do Tailwind

### CTA Principal
- WhatsApp como ação primária em toda a página
- Botão verde (#22c55e) com ícone WhatsApp
- Presente no header (fixo), hero, CTA banner e floating button mobile

## Arquitetura de Páginas

### Rotas
```
/                                    → Homepage
/servicos/instalacoes-residenciais   → Página dedicada
/servicos/instalacoes-prediais       → Página dedicada
/servicos/cameras-interfones         → Página dedicada
/servicos/projetos-laudos            → Página dedicada
/areas-de-atuacao                    → SEO local
```

### Homepage — Seções em Ordem
1. **Header** — Logo + nav (Serviços, Sobre, Áreas, Contato) + botão WhatsApp. Fixo, glassmorphism (blur + borda sutil).
2. **Hero** — Layout 2 colunas. Esquerda: badge animado, headline Outfit 800 com "segurança" em gradient azul, subtitle, 2 CTAs (WhatsApp + Ver Serviços). Direita: card glassmorphism com 4 métricas (500+ projetos, 10+ anos, 300+ clientes, 24h emergência). Fundo navy com grid sutil.
3. **Trust Bar** — Faixa branca com 4 badges horizontais: CREA ativo, Garantia 2 anos, Orçamento gratuito, Emergência 24h. Separados por dividers.
4. **Serviços** — Header split (título esquerda, descrição direita). Grid 2x2 de cards com: ícone, seta de navegação, título, descrição, tags de sub-serviços. Hover: barra azul inferior + elevação. Link "Saiba mais" leva à página dedicada.
5. **Sobre a 2f** — Layout 2 colunas. Esquerda: texto institucional + badges (CREA, Garantia, 24h, Orçamento). Direita: grid de métricas (card navy com 500+ projetos spanning 2 colunas + 2 cards menores). Foco na marca, sem destaque individual da equipe.
6. **Galeria** — Header com título + filtros por categoria (Todos, Residencial, Predial, Câmeras, Projetos). Grid estilo Airbnb: 1 foto grande (span 2x2) + 4 menores. Botão "Ver todas as fotos". Ao clicar abre lightbox/carrossel com: navegação por setas e teclado, counter, caption com descrição + cidade, thumbnails na base, ESC para fechar.
7. **Áreas de Atuação** — Grid 3x2 com cards por cidade: Santos, São Vicente, Praia Grande, Guarujá, São Paulo, Peruíbe. Cada card com ícone de pin + nome. Hover com elevação e fundo azul claro.
8. **CTA Banner** — Fundo navy com grid sutil, headline, descrição, botão WhatsApp grande.
9. **Contato** — Layout 2 colunas. Esquerda: lista de contatos (telefone, email, horário, localização, Instagram). Direita: formulário (nome, telefone, email, select de serviço, mensagem, botão enviar).
10. **Footer** — Fundo navy. Grid 4 colunas: marca + descrição, links de serviços, links de regiões, links de contato. Linha inferior: copyright + CREA/CNPJ.

### Páginas de Serviço (`/servicos/:slug`)
Cada página dedicada contém:
- Hero compacto com título do serviço e breadcrumb
- Descrição detalhada do serviço
- Lista de sub-serviços com ícones
- Diferenciais específicos
- Galeria de fotos do serviço (com lightbox)
- CTA WhatsApp contextual ("Solicitar orçamento para [serviço]")
- Schema markup ServiceType individual

### Página Áreas de Atuação (`/areas-de-atuacao`)
- Hero com mapa ou visual da região
- Card por cidade com: nome, serviços disponíveis, CTA
- Schema markup GeoCircle por cidade
- Texto SEO por cidade ("Eletricista em Santos", "Instalação elétrica em Guarujá")

## SEO

### Metadata por Página
- Title único por página (ex: "Instalações Elétricas Residenciais em Santos | 2f Engenharia")
- Description única e descritiva
- Open Graph + Twitter Cards
- Canonical URLs

### Schema Markup (JSON-LD)
- Homepage: `ElectricalContractor` com `ServiceCatalog`
- Serviços: `Service` individual com `areaServed`
- Áreas: `LocalBusiness` com `GeoCircle`
- Todas: `BreadcrumbList`

### SEO Local
- Página dedicada de áreas de atuação
- Texto otimizado por cidade + serviço
- Cidades: Santos, São Vicente, Praia Grande, Guarujá, São Paulo, Peruíbe

### Sitemap
- Sitemap XML com todas as páginas
- Prioridades: Home (1.0), Serviços (0.9), Áreas (0.8)

## Stack Técnica

- **Framework**: Next.js 14 (app router, static export para GitHub Pages)
- **Styling**: Tailwind CSS v4 com CSS variables customizadas
- **Componentes**: shadcn/ui existente + componentes customizados
- **Fonte**: Google Fonts — Outfit (300, 400, 500, 600, 700, 800)
- **Ícones**: Lucide React (já no projeto)
- **Analytics**: Vercel Analytics (já integrado)
- **Deploy**: GitHub Pages via GitHub Actions (já configurado)

## Dados da Empresa

- **Nome**: 2f Engenharia Elétrica
- **Telefone**: (13) 99147-5064
- **Email**: 2fengenhariaeletrica@gmail.com
- **Instagram**: @2f_eng_eletrica_seguranca
- **Horário**: Seg-Sex 8h–18h, Emergência 24h
- **Regiões**: Santos, São Vicente, Praia Grande, Guarujá, São Paulo, Peruíbe

## Serviços

1. **Instalações Residenciais** — quadros elétricos, iluminação LED, tomadas/interruptores, sistemas de proteção
2. **Instalações Prediais** — projetos comerciais, sistemas trifásicos, automação predial, manutenção preventiva
3. **Câmeras e Interfones** — câmeras IP, interfones digitais, monitoramento remoto, gravação em nuvem
4. **Projetos e Laudos** — projetos elétricos, laudos técnicos, SPDA (para-raios), sistemas de aterramento
