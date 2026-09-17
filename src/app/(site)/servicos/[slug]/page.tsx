import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { getServiceBySlug, getServices, getProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/card";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Serviço não encontrado" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const projects = await getProjects();

  return (
    <>
      <section className="py-20 orbital-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge variant="blue" className="mb-4">Serviço</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {service.problem && (
            <div>
              <h2 className="text-2xl font-bold text-neutral mb-4">O problema</h2>
              <p className="text-text-muted leading-relaxed">{service.problem}</p>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold text-neutral mb-4">Como abordamos</h2>
            <p className="text-text-muted leading-relaxed">{service.content}</p>
          </div>

          {service.deliverables && service.deliverables.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-neutral mb-6">Entregáveis</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue shrink-0" />
                    <span className="text-neutral/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.technologies && service.technologies.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-neutral mb-4">Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <Badge key={tech} variant="purple">{tech}</Badge>
                ))}
              </div>
            </div>
          )}

          <Card className="text-center">
            <h3 className="text-xl font-bold text-neutral mb-2">Pronto para começar?</h3>
            <p className="text-text-muted mb-6">
              Conte-nos sobre seu projeto e receba um diagnóstico personalizado.
            </p>
            <ButtonLink href={`/contato?servico=${service.slug}`} size="lg">
              {service.cta_text || "Solicitar projeto"}
            </ButtonLink>
          </Card>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="py-16 bg-surface/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral mb-8">Cases relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project) => (
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
      )}

      <CtaSection
        title={`Vamos construir seu ${service.title.toLowerCase()}?`}
        primaryCta={{ label: service.cta_text || "Solicitar projeto", href: `/contato?servico=${service.slug}` }}
      />
    </>
  );
}
