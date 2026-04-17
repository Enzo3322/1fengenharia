import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Camera,
  FileText,
  Home,
} from "lucide-react";

type Service = {
  icon: typeof Home;
  title: string;
  description: string;
  tags: string[];
  waMessage: string;
};

const services: Service[] = [
  {
    icon: Home,
    title: "Instalações residenciais",
    description:
      "Projetos e execução para casas e apartamentos, com foco em segurança, conforto e eficiência energética.",
    tags: [
      "Quadros elétricos",
      "Iluminação LED",
      "Tomadas e interruptores",
      "Sistemas de proteção",
    ],
    waMessage:
      "Olá! Gostaria de um orçamento para instalação elétrica residencial.",
  },
  {
    icon: Building2,
    title: "Instalações prediais e comerciais",
    description:
      "Projetos trifásicos, automação predial e manutenção preventiva para edifícios, lojas e indústrias.",
    tags: [
      "Projetos comerciais",
      "Sistemas trifásicos",
      "Automação predial",
      "Manutenção preventiva",
    ],
    waMessage:
      "Olá! Gostaria de um orçamento para instalação elétrica predial / comercial.",
  },
  {
    icon: Camera,
    title: "Câmeras e interfones",
    description:
      "CFTV com câmeras IP, monitoramento remoto via aplicativo, gravação em nuvem e interfones digitais.",
    tags: [
      "Câmeras IP Full HD",
      "Interfones digitais",
      "Monitoramento remoto",
      "Gravação em nuvem",
    ],
    waMessage:
      "Olá! Gostaria de orçamento para instalação de câmeras de segurança e interfone.",
  },
  {
    icon: FileText,
    title: "Projetos e laudos técnicos",
    description:
      "Elaboração de projetos, laudos elétricos, SPDA (para-raios) e sistemas de aterramento assinados por engenheiro CREA.",
    tags: [
      "Projeto elétrico",
      "Laudo técnico",
      "SPDA / Para-raios",
      "Aterramento",
    ],
    waMessage:
      "Olá! Preciso de um projeto ou laudo elétrico (SPDA, aterramento, etc.).",
  },
];

const buildWa = (msg: string) =>
  `https://wa.me/5513991475064?text=${encodeURIComponent(msg)}`;

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end mb-12 sm:mb-16">
          <div className="space-y-3">
            <span className="text-[color:var(--color-blue)] font-semibold text-xs uppercase tracking-widest">
              O que fazemos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-balance">
              Soluções completas em engenharia elétrica
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 text-pretty">
            Do pequeno reparo ao projeto completo de edificação, entregamos
            serviços padronizados, seguros e em conformidade com as normas
            técnicas — com responsável técnico CREA em todas as etapas.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-all hover:border-[color:var(--color-blue)]/40 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-blue)]/10 text-[color:var(--color-blue)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-[color:var(--color-blue)] transition-colors" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {s.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <Link
                href={buildWa(s.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Solicitar orçamento de ${s.title} pelo WhatsApp`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-blue)] hover:text-[color:var(--color-navy)] transition-colors"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl bg-gradient-to-r from-[color:var(--color-blue)] to-[color:var(--color-blue-light)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
