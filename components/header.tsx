"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X, MessageCircle } from "lucide-react";

const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-slate-200/70 shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="2f Engenharia Elétrica - Início"
            className="flex items-center gap-3"
          >
            <img
              src="/logo-dark.png"
              alt="2f Engenharia Elétrica"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <div className="text-[15px] font-bold tracking-tight text-slate-900">
                2f Engenharia Elétrica
              </div>
              <div className="text-[11px] font-medium text-[color:var(--color-blue)]">
                Soluções Elétricas Profissionais
              </div>
            </div>
          </Link>

          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-[color:var(--color-blue)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+5513991475064"
              aria-label="Ligar para (13) 99147-5064"
              className="inline-flex lg:hidden items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-700 hover:text-[color:var(--color-blue)] hover:border-[color:var(--color-blue)] transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5513991475064?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento grátis via WhatsApp"
              className="hidden sm:inline-flex items-center gap-2 rounded-full btn-wa px-4 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Orçamento Grátis</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex lg:hidden items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-slate-700"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div
            className="absolute inset-0 bg-slate-900/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl flex flex-col fade-up">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 h-16">
              <div className="flex items-center gap-2">
                <img
                  src="/logo-dark.png"
                  alt=""
                  className="h-8 w-8 object-contain"
                />
                <span className="font-bold text-slate-900">2f Engenharia</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-slate-100"
              >
                <X className="h-5 w-5 text-slate-700" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-3">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-slate-100 p-5 space-y-3">
              <a
                href="https://wa.me/5513991475064?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-full btn-wa py-3 text-sm font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                Orçamento no WhatsApp
              </a>
              <a
                href="tel:+5513991475064"
                className="flex items-center justify-center gap-2 w-full rounded-full border border-slate-200 py-3 text-sm font-semibold text-slate-800"
              >
                <Phone className="h-4 w-4" />
                (13) 99147-5064
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
