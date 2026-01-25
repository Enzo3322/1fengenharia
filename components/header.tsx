import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="2f Engenharia Elétrica"
            className="w-10 h-10 object-contain"
          />
          <div>
            <span className="text-lg font-bold text-foreground tracking-tight">
              2f Engenharia Elétrica
            </span>
            <p className="text-xs text-primary font-medium">
              Soluções Elétricas Profissionais
            </p>
          </div>
        </div>

        <nav aria-label="Navegação principal" className="hidden md:flex items-center space-x-8">
          <a
            href="#servicos"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a
              href="tel:+5513991475064"
              className="flex items-center space-x-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(13) 99147-5064</span>
            </a>
            <a
              href="mailto:2fengenhariaeletrica@gmail.com"
              className="flex items-center space-x-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>2fengenhariaeletrica@gmail.com</span>
            </a>
          </div>
          <Link
            href="https://wa.me/5513991475064"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento grátis via WhatsApp"
            className="gold-gradient text-primary-foreground font-semibold px-5 py-2 rounded-md text-sm hover:opacity-90 transition-opacity text-white"
          >
            Orçamento Grátis
          </Link>
        </div>
      </div>
    </header>
  );
}
