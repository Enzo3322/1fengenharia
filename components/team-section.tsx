import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Fabio Rezende",
    role: "Engenheiro Eletricista (CREA)",
    initials: "FR",
    bio: "Especialista em projetos, instalações e laudos técnicos com foco em segurança e eficiência.",
  },
  {
    name: "Fabio Junior",
    role: "Técnico em Instalações",
    initials: "FJ",
    bio: "Execução de obras residenciais e prediais, manutenção preventiva e soluções sob medida.",
  },
  {
    name: "Adriano",
    role: "Especialista em Segurança",
    initials: "AD",
    bio: "Implementação de sistemas de câmeras, interfones e automação com alto padrão de qualidade.",
  },
];

export function TeamSection() {
  return (
    <section id="time" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Nossa equipe
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Nosso Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Profissionais certificados e experientes, comprometidos com a
            qualidade em cada projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="bg-background border-border hover:border-primary/40 transition-colors text-center"
            >
              <CardHeader className="items-center">
                <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <CardTitle className="mt-4 text-xl text-card-foreground">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
