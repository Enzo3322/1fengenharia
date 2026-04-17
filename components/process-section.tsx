import { ClipboardList, MessageSquare, Wrench, Search } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Contato inicial",
    description:
      "Fale com a gente no WhatsApp ou pelo formulário. Respondemos em poucos minutos no horário comercial.",
  },
  {
    icon: Search,
    title: "Visita técnica",
    description:
      "Um profissional avalia o local, entende a sua necessidade e levanta as informações técnicas do projeto.",
  },
  {
    icon: ClipboardList,
    title: "Orçamento detalhado",
    description:
      "Você recebe um orçamento transparente, com materiais, prazos e garantia — sem surpresas depois.",
  },
  {
    icon: Wrench,
    title: "Execução com garantia",
    description:
      "Obra executada com padrão técnico, limpeza e teste final. Pós-obra com 2 anos de garantia.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="py-20 sm:py-24 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-[color:var(--color-blue)] font-semibold text-xs uppercase tracking-widest">
            Como funciona
          </span>
          <h2
            id="processo-title"
            className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance"
          >
            Um processo simples, do orçamento à entrega
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-pretty">
            Do primeiro contato à execução, cada etapa é transparente e conduzida
            por profissionais qualificados.
          </p>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -top-4 left-6 flex h-8 min-w-8 items-center justify-center rounded-full bg-[color:var(--color-blue)] px-2 text-xs font-bold text-white shadow">
                Passo {i + 1}
              </div>
              <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-blue)]/10 text-[color:var(--color-blue)]">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
