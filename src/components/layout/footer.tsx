import { Logo } from "@/components/logo";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const FOOTER_SERVICES = [
  { href: "/servicos/desenvolvimento-web", label: "Desenvolvimento Web" },
  { href: "/servicos/aplicativos", label: "Aplicativos" },
  { href: "/servicos/design", label: "Design" },
  { href: "/servicos/marketing-digital", label: "Marketing Digital" },
  { href: "/servicos/inteligencia-artificial", label: "Inteligência Artificial" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-base">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Logo showTagline />
            <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-xs">
              {SITE.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-text-muted hover:text-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-blue transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-blue transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href={`mailto:${SITE.email}`} className="text-text-muted hover:text-blue transition-colors" aria-label="E-mail">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral mb-4">Navegação</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-neutral transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral mb-4">Serviços</h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-neutral transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-neutral transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-xs text-text-muted hover:text-neutral transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="text-xs text-text-muted hover:text-neutral transition-colors">
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
