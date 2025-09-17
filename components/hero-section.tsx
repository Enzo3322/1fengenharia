import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Soluções Elétricas
                <span className="text-primary block">Profissionais</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Especialistas em instalações elétricas prediais e residenciais,
                sistemas de segurança e projetos técnicos com mais de 10 anos de
                experiência.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Licenciado CREA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Garantia Total</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Atendimento 24h</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`https://wa.me/5513991475064`}
                target="_blank"
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center p-2 rounded-md"
              >
                <Zap className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Ver Nossos Projetos
              </Button> */}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-card rounded-2xl p-8 shadow-lg">
              <img
                src="/logo.png"
                alt="Profissional realizando instalação elétrica"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
