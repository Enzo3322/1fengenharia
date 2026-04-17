import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

type City = {
  name: string;
  note: string;
};

const cities: City[] = [
  { name: "Santos", note: "Sede de atendimento" },
  { name: "São Vicente", note: "Residencial e predial" },
  { name: "Praia Grande", note: "Instalações e câmeras" },
  { name: "Guarujá", note: "Condomínios e comércios" },
  { name: "Peruíbe", note: "Obras e manutenção" },
  { name: "São Paulo", note: "Grande SP sob consulta" },
];

const waUrl = (city: string) =>
  `https://wa.me/5513991475064?text=${encodeURIComponent(
    `Olá! Sou de ${city} e gostaria de um orçamento.`,
  )}`;

export function AreasSection() {
  return (
    <section id="areas" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-[color:var(--color-blue)] font-semibold text-xs uppercase tracking-widest">
            Onde atendemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
            Baixada Santista e São Paulo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-pretty">
            Presença local com equipe própria nas principais cidades do litoral
            e atendimento sob consulta na região metropolitana de São Paulo.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <Link
              key={c.name}
              href={waUrl(c.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Solicitar orçamento em ${c.name}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-[color:var(--color-blue)]/40 hover:shadow-lg hover:shadow-slate-900/5 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-blue)]/10 text-[color:var(--color-blue)] group-hover:bg-[color:var(--color-blue)] group-hover:text-white transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{c.name}</div>
                  <div className="text-xs text-slate-500">{c.note}</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-[color:var(--color-blue)] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
