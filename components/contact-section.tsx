import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Entre em Contato Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Solicite seu orçamento gratuito e tire suas dúvidas com nossos
            especialistas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium text-card-foreground">
                    Telefone
                  </div>
                  <div className="text-muted-foreground">
                    <a href="tel:(13) 99147-5064">(13) 99147-5064</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium text-card-foreground">E-mail</div>
                  <div className="text-muted-foreground">
                    2fengenhariaeletrica@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium text-card-foreground">
                    Endereço
                  </div>
                  <div className="text-muted-foreground">São Paulo, SP</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
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

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center space-y-4">
              <h3 className="text-xl font-bold">Atendimento de Emergência</h3>
              <p className="text-primary-foreground/90">
                Problemas elétricos urgentes? Estamos disponíveis 24 horas para
                emergências.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Ligar Agora: (13) 99147-5064
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
