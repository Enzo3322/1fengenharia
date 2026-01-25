import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="border-t-2 border-primary/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="2f Engenharia Elétrica"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold">
                    2f Engenharia Elétrica
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Soluções Elétricas Profissionais
                  </p>
                </div>
              </div>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                Soluções elétricas profissionais com mais de 10 anos de
                experiência no mercado.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Serviços</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Instalações Residenciais
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Instalações Prediais
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Câmeras e Interfones
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Projetos e Laudos
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Manutenção Elétrica
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Contato</h4>
              <div className="space-y-3 text-sm text-secondary-foreground/70">
                <a
                  href="tel:+5513991475064"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(13) 99147-5064</span>
                </a>
                <a
                  href="mailto:2fengenhariaeletrica@gmail.com"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>2fengenhariaeletrica@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/2f_eng_eletrica_seguranca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga-nos no Instagram"
                  className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/10 mt-10 pt-8 text-center text-sm text-secondary-foreground/50">
            <p>
              &copy; {new Date().getFullYear()} 2f Engenharia Elétrica. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              CREA-SP: 123456789 | CNPJ: 12.345.678/0001-90
            </p>
            <p className="mt-3 text-secondary-foreground/40">
              Desenvolvido por{" "}
              <a
                href="https://pantecnologia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                pantecnologia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
