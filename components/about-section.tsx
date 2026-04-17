import { Award, CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Engenheiro CREA",
    description: "Todos os projetos e laudos com responsável técnico registrado.",
  },
  {
    icon: ShieldCheck,
    title: "Materiais certificados",
    description: "Trabalhamos com marcas reconhecidas e componentes homologados.",
  },
  {
    icon: Users,
    title: "Atendimento direto",
    description: "Sem intermediários: você fala com quem executa o serviço.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="text-[color:var(--color-blue)] font-semibold text-xs uppercase tracking-widest">
              Sobre a 2f
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-balance">
              Mais de 10 anos transformando obras em{" "}
              <span className="text-gradient-blue">projetos seguros</span>.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 text-pretty">
              A 2f Engenharia Elétrica nasceu para oferecer serviços elétricos
              que unem técnica, segurança e acabamento de qualidade. Atuamos em
              Santos, Baixada Santista e São Paulo, atendendo residências,
              condomínios, comércios e indústrias.
            </p>

            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-blue)]/10 text-[color:var(--color-blue)]">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{h.title}</div>
                    <p className="text-sm text-slate-600">{h.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "CREA ativo",
                "Garantia 2 anos",
                "Orçamento grátis",
                "Emergência 24h",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--color-wa)]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-3xl bg-[color:var(--color-navy-deep)] text-white p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute inset-0 bg-navy-grid opacity-60" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  <Award className="h-3.5 w-3.5 text-[color:var(--color-blue-light)]" />
                  Trajetória
                </div>
                <div className="mt-5 text-6xl sm:text-7xl font-extrabold tracking-tight">
                  500+
                </div>
                <div className="mt-2 text-sm text-white/70 max-w-[18rem]">
                  Projetos residenciais, prediais e comerciais entregues em mais
                  de uma década de mercado.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <Clock className="h-6 w-6 text-[color:var(--color-blue)]" />
              <div className="mt-4 text-3xl font-extrabold text-slate-900">
                10+
              </div>
              <div className="text-sm text-slate-500">Anos de experiência</div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <Users className="h-6 w-6 text-[color:var(--color-blue)]" />
              <div className="mt-4 text-3xl font-extrabold text-slate-900">
                300+
              </div>
              <div className="text-sm text-slate-500">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
