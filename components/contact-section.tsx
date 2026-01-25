import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Fale conosco
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Entre em Contato Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Solicite seu orçamento gratuito e tire suas dúvidas com nossos
            especialistas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Telefone
                  </div>
                  <a
                    href="tel:+5513991475064"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (13) 99147-5064
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">E-mail</div>
                  <a
                    href="mailto:2fengenhariaeletrica@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    2fengenhariaeletrica@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Endereço
                  </div>
                  <div className="text-muted-foreground">São Paulo, SP</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-card-foreground">
                    Horário
                  </div>
                  <div className="text-muted-foreground">
                    Seg-Sex: 8h às 18h
                  </div>
                  <div className="text-muted-foreground">Emergências: 24h</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gold-gradient border-0 flex flex-col justify-center">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground">
                Atendimento de Emergência
              </h3>
              <p className="text-primary-foreground/80 max-w-sm mx-auto">
                Problemas elétricos urgentes? Estamos disponíveis 24 horas para
                emergências.
              </p>
              <Link
                href="tel:+5513991475064"
                className="inline-block w-full bg-primary-foreground text-primary font-semibold py-3 rounded-md hover:bg-primary-foreground/90 transition-colors"
              >
                Ligar Agora: (13) 99147-5064
              </Link>
              <Link
                href="https://wa.me/5513991475064"
                target="_blank"
                className="inline-block w-full border-2 border-primary-foreground text-primary-foreground font-semibold py-3 rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                WhatsApp
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
