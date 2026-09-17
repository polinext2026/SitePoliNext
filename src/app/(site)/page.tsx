import { ServiceCard, ProjectCard } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { HeroVisual } from "@/components/sections/hero-visual";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DIFFERENTIALS, SITE } from "@/lib/constants";
import { getServices, getProjects } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default async function HomePage() {
  const [services, projects] = await Promise.all([
    getServices(),
    getProjects(true),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 orbital-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-cyan mb-4">
                {SITE.areas.join(" • ")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral leading-tight mb-6">
                Transformamos ideias em{" "}
                <span className="gradient-text">experiências digitais</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
                {SITE.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/contato" size="lg">
                  Começar um projeto
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/projetos" variant="outline" size="lg">
                  Ver nossos projetos
                </ButtonLink>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
              O que fazemos
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Soluções digitais completas para impulsionar seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                summary={service.summary}
                icon={service.icon || undefined}
                href={`/servicos/${service.slug}`}
                ctaText={service.cta_text || "Conhecer serviço"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
                Projetos em destaque
              </h2>
              <p className="text-lg text-text-muted max-w-xl">
                Conheça alguns dos projetos que desenvolvemos.
              </p>
            </div>
            <ButtonLink href="/projetos" variant="outline">
              Ver todos os projetos
            </ButtonLink>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                summary={project.summary}
                category={project.category}
                technologies={project.technologies}
                href={`/projetos/${project.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* Differentials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
              Por que a POLINEXT?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Diferenciais que fazem a diferença em cada projeto.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIALS.map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-neutral mb-1">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
}
