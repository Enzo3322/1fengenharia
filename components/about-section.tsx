import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Award, label: "Projetos Concluídos", value: "500+" },
  { icon: Users, label: "Clientes Satisfeitos", value: "300+" },
  { icon: Clock, label: "Anos de Experiência", value: "10+" },
  { icon: Shield, label: "Garantia dos Serviços", value: "2 Anos" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Quem somos
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Excelência em Engenharia Elétrica
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Somos uma empresa especializada em soluções elétricas com mais
                de uma década de experiência no mercado. Nossa equipe é formada
                por engenheiros e técnicos qualificados, registrados no CREA.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Por que nos escolher?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 gold-gradient rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Profissionais Certificados:
                    </strong>{" "}
                    Todos os nossos técnicos possuem certificação CREA
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 gold-gradient rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Materiais de Qualidade:
                    </strong>{" "}
                    Utilizamos apenas equipamentos de marcas reconhecidas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 gold-gradient rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Atendimento Personalizado:
                    </strong>{" "}
                    Cada projeto é único e recebe atenção especial
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:border-primary/40 transition-colors text-center p-6"
              >
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center mx-auto">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
