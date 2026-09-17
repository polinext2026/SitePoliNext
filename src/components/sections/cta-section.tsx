import { ButtonLink } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CtaSection({
  title = "Pronto para transformar sua ideia?",
  description = "Conte-nos sobre seu projeto e vamos construir juntos a solução ideal para o seu negócio.",
  primaryCta = { label: "Solicitar projeto", href: "/contato" },
  secondaryCta = { label: `Falar com a equipe`, href: `mailto:${SITE.email}` },
}: CtaSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 orbital-bg" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
          {title}
        </h2>
        <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink href={primaryCta.href} size="lg">
            {primaryCta.label}
          </ButtonLink>
          <ButtonLink href={secondaryCta.href} variant="outline" size="lg">
            {secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
