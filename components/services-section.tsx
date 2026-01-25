import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Camera, FileText, Home, Building } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Instalações Residenciais",
    description:
      "Instalações elétricas completas para residências, incluindo quadros, tomadas, iluminação e sistemas de proteção.",
    features: [
      "Quadros elétricos",
      "Iluminação LED",
      "Tomadas e interruptores",
      "Sistemas de proteção",
    ],
  },
  {
    icon: Building,
    title: "Instalações Prediais",
    description:
      "Projetos elétricos para edifícios comerciais e residenciais com foco em eficiência e segurança.",
    features: [
      "Projetos comerciais",
      "Sistemas trifásicos",
      "Automação predial",
      "Manutenção preventiva",
    ],
  },
  {
    icon: Camera,
    title: "Câmeras e Interfones",
    description:
      "Instalação de sistemas de segurança com câmeras de monitoramento e interfones digitais.",
    features: [
      "Câmeras IP",
      "Interfones digitais",
      "Monitoramento remoto",
      "Gravação em nuvem",
    ],
  },
  {
    icon: FileText,
    title: "Projetos e Laudos",
    description:
      "Elaboração de projetos técnicos, laudos de instalação elétrica, SPDA e sistemas de aterramento.",
    features: [
      "Projetos elétricos",
      "Laudos técnicos",
      "SPDA (Para-raios)",
      "Sistemas de aterramento",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas em engenharia elétrica com qualidade e
            segurança garantidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all gold-border-top"
            >
              <CardHeader className="text-center">
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-card-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Zap className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
