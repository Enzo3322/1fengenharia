import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-grid p-8 sm:p-14 text-white">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-blue-light)]/25 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                Atendimento imediato
              </span>
              <h2
                id="cta-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance"
              >
                Pronto para resolver sua obra com{" "}
                <span className="text-gradient-blue">segurança</span>?
              </h2>
              <p className="text-base sm:text-lg text-white/75 max-w-xl">
                Envie uma mensagem no WhatsApp e receba seu orçamento gratuito
                hoje mesmo. Plantão 24h para emergências elétricas.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:justify-self-end lg:w-full lg:max-w-sm">
              <Link
                href="https://wa.me/5513991475064?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full btn-wa px-6 py-4 text-sm font-semibold shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Orçamento grátis no WhatsApp
              </Link>
              <a
                href="tel:+5513991475064"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (13) 99147-5064
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
