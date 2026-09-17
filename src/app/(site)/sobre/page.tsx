import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { DIFFERENTIALS, SITE } from "@/lib/constants";
import { getTeamMembers } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a POLINEXT: nossa história, visão, valores e equipe multidisciplinar.",
};

const VALUES = [
  { title: "Clareza", description: "Comunicação transparente em cada etapa do projeto." },
  { title: "Qualidade", description: "Excelência técnica e atenção aos detalhes." },
  { title: "Inovação", description: "Tecnologias modernas aplicadas com propósito." },
  { title: "Parceria", description: "Trabalhamos junto com nossos clientes, não apenas para eles." },
  { title: "Ética", description: "IA e automação responsáveis, dados protegidos." },
];

export default async function AboutPage() {
  const team = await getTeamMembers();

  return (
    <>
      <section className="py-20 orbital-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="cyan" className="mb-4">Sobre nós</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
            {SITE.tagline}
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            {SITE.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-neutral mb-4">Nossa história</h2>
            <p className="text-text-muted leading-relaxed">
              A POLINEXT nasceu da vontade de unir tecnologia, design e estratégia em soluções
              digitais que realmente fazem diferença. Somos uma empresa em construção, movida
              pela paixão de transformar ideias em experiências digitais de impacto.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral mb-4">Visão de futuro</h2>
            <p className="text-text-muted leading-relaxed">
              Queremos ser referência em soluções digitais que conectam negócios ao futuro,
              combinando engenharia sólida, design excepcional e inteligência artificial
              responsável para criar valor real.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral mb-6">Nossos valores</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {VALUES.map((value) => (
                <Card key={value.title}>
                  <h3 className="font-semibold text-neutral mb-1">{value.title}</h3>
                  <p className="text-sm text-text-muted">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral mb-6">Áreas de atuação</h2>
            <div className="flex flex-wrap gap-2">
              {SITE.areas.map((area) => (
                <Badge key={area} variant="blue">{area}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {team.length > 0 && (
        <section className="py-16 bg-surface/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral mb-8 text-center">Nossa equipe</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {team.map((member) => (
                <Card key={member.id} className="text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-neutral">{member.name}</h3>
                  <p className="text-sm text-blue mb-2">{member.role}</p>
                  {member.bio && (
                    <p className="text-sm text-text-muted">{member.bio}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
