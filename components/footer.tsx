import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">2f Engenharia Elétrica</h3>
                <p className="text-sm text-secondary-foreground/80">
                  Soluções Elétricas Profissionais
                </p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Soluções elétricas profissionais com mais de 10 anos de
              experiência no mercado.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Instalações Residenciais</li>
              <li>Instalações Prediais</li>
              <li>Câmeras e Interfones</li>
              <li>Projetos e Laudos</li>
              <li>Manutenção Elétrica</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(13) 99147-5064</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>2fengenhariaeletrica@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/2f_eng_eletrica_seguranca/"
                target="_blank"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>
            &copy; 2024 2f Engenharia Elétrica. Todos os direitos reservados.
          </p>
          <p className="mt-2">CREA-SP: 123456789 | CNPJ: 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  );
}
