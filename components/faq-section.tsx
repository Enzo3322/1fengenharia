import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "A 2f Engenharia Elétrica atende emergências 24 horas?",
    a: "Sim. Mantemos plantão de emergência 24h para problemas elétricos urgentes em toda a Baixada Santista e São Paulo. Basta ligar ou enviar mensagem no WhatsApp (13) 99147-5064.",
  },
  {
    q: "O orçamento é realmente gratuito?",
    a: "Sim. A visita técnica e o orçamento detalhado são totalmente gratuitos e sem compromisso. Solicite pelo WhatsApp ou pelo formulário do site.",
  },
  {
    q: "A empresa possui engenheiro com registro no CREA?",
    a: "Sim. Todos os projetos e laudos são assinados por engenheiro eletricista com registro ativo no CREA, garantindo conformidade com as normas técnicas.",
  },
  {
    q: "Quais cidades vocês atendem?",
    a: "Atendemos Santos, São Vicente, Praia Grande, Guarujá, Peruíbe e a região metropolitana de São Paulo. O deslocamento é informado junto com o orçamento.",
  },
  {
    q: "Qual a garantia dos serviços?",
    a: "Oferecemos 2 anos de garantia em mão de obra e acompanhamos o pós-obra para qualquer ajuste necessário.",
  },
  {
    q: "Vocês instalam câmeras de segurança e interfones?",
    a: "Sim. Trabalhamos com CFTV IP, monitoramento remoto pelo celular, gravação em nuvem e interfones digitais integrados, tanto residenciais quanto prediais.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="text-[color:var(--color-blue)] font-semibold text-xs uppercase tracking-widest">
            Perguntas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
            Tiramos suas dúvidas antes do orçamento
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-pretty">
            Se a sua pergunta não estiver aqui, fale com a gente no WhatsApp —
            respondemos rapidamente.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100">
          <Accordion type="single" collapsible className="px-2 sm:px-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-900 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-slate-600 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://wa.me/5513991475064?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full btn-wa px-6 py-3 text-sm font-semibold shadow"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com um especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
