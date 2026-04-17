"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

type ServiceOption =
  | "residencial"
  | "predial"
  | "cameras"
  | "projeto"
  | "emergencia"
  | "outro";

const serviceLabels: Record<ServiceOption, string> = {
  residencial: "Instalação residencial",
  predial: "Instalação predial / comercial",
  cameras: "Câmeras e interfones",
  projeto: "Projeto ou laudo técnico",
  emergencia: "Emergência elétrica",
  outro: "Outro",
};

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<ServiceOption>("residencial");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${name || "(sem nome)"}.`,
      `Serviço: ${serviceLabels[service]}.`,
      phone ? `Telefone: ${phone}.` : null,
      email ? `E-mail: ${email}.` : null,
      message ? `\nDetalhes: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/5513991475064?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-[color:var(--color-blue)] font-semibold text-xs uppercase tracking-widest">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
            Peça seu orçamento gratuito
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-pretty">
            Escolha o canal que preferir: WhatsApp, telefone ou o formulário
            abaixo. Respondemos em minutos no horário comercial.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-8 space-y-6">
            <ContactRow
              icon={Phone}
              title="Telefone"
              value="(13) 99147-5064"
              href="tel:+5513991475064"
            />
            <ContactRow
              icon={MessageCircle}
              title="WhatsApp"
              value="Resposta em minutos"
              href="https://wa.me/5513991475064"
              external
            />
            <ContactRow
              icon={Mail}
              title="E-mail"
              value="2fengenhariaeletrica@gmail.com"
              href="mailto:2fengenhariaeletrica@gmail.com"
            />
            <ContactRow
              icon={Clock}
              title="Horário"
              value="Seg-Sex 8h às 18h · Emergências 24h"
            />
            <ContactRow
              icon={MapPin}
              title="Área de atendimento"
              value="Santos, Baixada Santista e São Paulo"
            />
            <ContactRow
              icon={Instagram}
              title="Instagram"
              value="@2f_eng_eletrica_seguranca"
              href="https://www.instagram.com/2f_eng_eletrica_seguranca/"
              external
            />

            <div className="pt-4">
              <Link
                href="https://wa.me/5513991475064?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full btn-wa px-6 py-3.5 text-sm font-semibold shadow"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar mensagem agora
              </Link>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-8 space-y-5"
            aria-label="Formulário de orçamento"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" htmlFor="name">
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field"
                  placeholder="Seu nome completo"
                />
              </Field>
              <Field label="Telefone" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  required
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="field"
                  placeholder="(DDD) 9XXXX-XXXX"
                />
              </Field>
            </div>

            <Field label="E-mail (opcional)" htmlFor="email">
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field"
                placeholder="voce@exemplo.com"
              />
            </Field>

            <Field label="Serviço desejado" htmlFor="service">
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value as ServiceOption)}
                className="field"
              >
                {(Object.keys(serviceLabels) as ServiceOption[]).map((k) => (
                  <option key={k} value={k}>
                    {serviceLabels[k]}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Detalhes do projeto" htmlFor="message">
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="field resize-none"
                placeholder="Descreva brevemente o que você precisa (local, metragem, prazo)…"
              />
            </Field>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-blue)] px-6 py-3.5 text-sm font-semibold text-white shadow hover:bg-[color:var(--color-navy)] transition-colors"
            >
              <Send className="h-4 w-4" />
              Enviar e continuar no WhatsApp
            </button>
            <p className="text-xs text-slate-500 text-center">
              Ao enviar, você será direcionado ao WhatsApp com sua mensagem
              preenchida.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-800">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
  external,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-blue)]/10 text-[color:var(--color-blue)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-600">{value}</div>
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block hover:text-[color:var(--color-blue)] transition-colors"
    >
      {content}
    </a>
  );
}
