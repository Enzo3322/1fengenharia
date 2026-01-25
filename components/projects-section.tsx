import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Home, Building, Camera, CheckCircle } from "lucide-react";

type Project = {
  icon: typeof Home;
  title: string;
  subtitle: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    icon: Home,
    title: "Instalação Residencial – Jardim Paulistano",
    subtitle: "Quadro, iluminação e revisão completa",
    highlights: [
      "Troca completa do quadro elétrico",
      "Instalação de iluminação LED",
      "Revisão de toda fiação",
      "Adequação às normas NBR 5410",
    ],
  },
  {
    icon: Building,
    title: "Automação Predial – Centro Comercial",
    subtitle: "Integração de iluminação e segurança",
    highlights: [
      "Automação de iluminação",
      "Sistema de controle centralizado",
      "Integração com segurança",
      "Redução de 40% no consumo",
    ],
  },
  {
    icon: Camera,
    title: "Sistema de Câmeras – Condomínio",
    subtitle: "CFTV com monitoramento remoto",
    highlights: [
      "16 câmeras IP Full HD",
      "Monitoramento 24h via app",
      "Gravação em nuvem",
      "Interfone digital integrado",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Projetos Recentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Alguns trabalhos que demonstram nossa qualidade em engenharia
            elétrica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="h-48 bg-secondary flex items-center justify-center">
                <div className="w-20 h-20 gold-gradient rounded-2xl flex items-center justify-center">
                  <project.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
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
