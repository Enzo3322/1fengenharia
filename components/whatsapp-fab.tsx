import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <Link
        href="https://wa.me/5513991475064?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="wa-pulse group inline-flex items-center gap-2 rounded-full btn-wa pl-4 pr-5 h-14 shadow-xl shadow-emerald-500/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-5 w-5 text-white" />
        </span>
        <span className="hidden sm:inline text-sm font-semibold">
          Orçamento no WhatsApp
        </span>
      </Link>
    </div>
  );
}
