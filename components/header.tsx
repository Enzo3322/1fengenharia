import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">
              ⚡
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              2f Engenharia Elétrica
            </h1>
            <p className="text-sm text-muted-foreground">
              Soluções Elétricas Profissionais
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#servicos"
            className="text-foreground hover:text-primary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">
                <a href="tel:(13) 99147-5064">(13) 99147-5064</a>
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground">
                2fengenhariaeletrica@gmail.com
              </span>
            </div>
          </div>
          <Link
            href={`https://wa.me/5513991475064`}
            target="_blank"
            className="bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded-md"
          >
            Orçamento Grátis
          </Link>
        </div>
      </div>
    </header>
  );
}
