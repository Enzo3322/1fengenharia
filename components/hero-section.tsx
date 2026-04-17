import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const metrics = [
  { value: "500+", label: "Projetos entregues" },
  { value: "10+", label: "Anos de experiência" },
  { value: "300+", label: "Clientes atendidos" },
  { value: "24h", label: "Emergência elétrica" },
];

export function HeroSection() {
  return (
    <section
      aria-label="Engenharia elétrica profissional"
      className="relative overflow-hidden bg-navy-grid text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--color-navy-deep)]/70 pointer-events-none" />
      <div className="absolute -top-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-[color:var(--color-blue-light)]/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-blue-light)]" />
              Engenharia elétrica de confiança
            </span>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
              Energia, segurança e{" "}
              <span className="text-gradient-blue">projetos sob medida</span>{" "}
              para sua obra.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-white/75 text-pretty">
              Instalações residenciais e prediais, câmeras, interfones,
              projetos e laudos com responsável técnico no CREA. Atendemos
              Santos, Baixada Santista e São Paulo com orçamento gratuito e
              plantão 24h.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://wa.me/5513991475064?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp e solicitar orçamento"
                className="inline-flex items-center justify-center gap-2 rounded-full btn-wa px-6 py-3.5 text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-shadow"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar orçamento no WhatsApp
              </Link>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Ver serviços
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--color-wa)]" />
                CREA ativo
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[color:var(--color-wa)]" />
                Garantia de 2 anos
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--color-wa)]" />
                Orçamento gratuito
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-wa)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow">
                Confiança comprovada
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center sm:text-left"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-[13px] text-white/70">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                <img
                  src="/logo-dark.png"
                  alt=""
                  className="h-10 w-10 rounded-lg bg-white p-1"
                />
                <div className="text-sm text-white/80 leading-tight">
                  <div className="font-semibold text-white">
                    Atendimento humano
                  </div>
                  Resposta em poucos minutos pelo WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
