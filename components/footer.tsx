import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Instalações residenciais", href: "#servicos" },
  { label: "Instalações prediais", href: "#servicos" },
  { label: "Câmeras e interfones", href: "#servicos" },
  { label: "Projetos e laudos", href: "#servicos" },
  { label: "Manutenção elétrica", href: "#servicos" },
];

const regionLinks = [
  "Santos",
  "São Vicente",
  "Praia Grande",
  "Guarujá",
  "Peruíbe",
  "São Paulo",
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-navy-deep)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-dark.png"
                alt="2f Engenharia Elétrica"
                className="h-10 w-10 object-contain bg-white rounded-md p-1"
              />
              <div className="leading-tight">
                <div className="text-base font-bold">2f Engenharia Elétrica</div>
                <div className="text-[11px] font-medium text-[color:var(--color-blue-light)]">
                  Soluções Elétricas Profissionais
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Mais de 10 anos entregando instalações elétricas, câmeras,
              interfones, projetos e laudos em Santos, Baixada Santista e São
              Paulo.
            </p>
            <Link
              href="https://wa.me/5513991475064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full btn-wa px-4 py-2.5 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="hover:text-[color:var(--color-blue-light)] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Atendemos</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {regionLinks.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[color:var(--color-blue-light)]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Contato</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:+5513991475064"
                  className="flex items-center gap-2 hover:text-[color:var(--color-blue-light)] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (13) 99147-5064
                </a>
              </li>
              <li>
                <a
                  href="mailto:2fengenhariaeletrica@gmail.com"
                  className="flex items-center gap-2 hover:text-[color:var(--color-blue-light)] transition-colors break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  2fengenhariaeletrica@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Baixada Santista / SP
              </li>
            </ul>
            <a
              href="https://www.instagram.com/2f_eng_eletrica_seguranca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da 2f Engenharia"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} 2f Engenharia Elétrica. Todos os
            direitos reservados.
          </p>
          <p>Engenharia elétrica com responsável técnico CREA.</p>
        </div>
      </div>
    </footer>
  );
}
