import { CheckCircle, Shield, Clock, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Engenharia Elétrica de Confiança</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Soluções Elétricas
                <span className="text-primary block">Profissionais</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                Especialistas em instalações elétricas prediais e residenciais,
                sistemas de segurança e projetos técnicos com mais de 10 anos de
                experiência.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Licenciado CREA
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Garantia Total
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Atendimento 24h
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/5513991475064"
                target="_blank"
                className="gold-gradient text-primary-foreground font-semibold flex items-center justify-center px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                <Zap className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Link>
              <a
                href="#projetos"
                className="border-2 border-primary text-primary font-semibold flex items-center justify-center px-8 py-3 rounded-md hover:bg-primary/10 transition-colors"
              >
                Ver Nossos Projetos
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl bg-card border border-border p-6 shadow-lg gold-glow flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="2f Engenharia Elétrica"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 gold-gradient text-primary-foreground px-5 py-3 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm font-medium">Anos de Experiência</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-primary/30 text-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">Projetos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
