import { Award, Clock, FileText, ShieldCheck } from "lucide-react";

const badges = [
  { icon: Award, title: "CREA ativo", subtitle: "Responsável técnico" },
  { icon: ShieldCheck, title: "Garantia 2 anos", subtitle: "Mão de obra coberta" },
  { icon: FileText, title: "Orçamento gratuito", subtitle: "Sem compromisso" },
  { icon: Clock, title: "Emergência 24h", subtitle: "Plantão elétrico" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Garantias e credenciais"
      className="relative z-10 -mt-10 sm:-mt-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 grid grid-cols-2 sm:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex items-center gap-3 p-4 sm:p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-blue)]/10 text-[color:var(--color-blue)] flex-shrink-0">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">
                  {b.title}
                </div>
                <div className="text-xs text-slate-500">{b.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
