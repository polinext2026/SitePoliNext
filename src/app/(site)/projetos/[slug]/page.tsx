import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { getProjectBySlug, getProjects } from "@/lib/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { title: "Desafio", content: project.challenge },
    { title: "Objetivos", content: project.objectives },
    { title: "Estratégia", content: project.strategy },
    { title: "Resultado", content: project.result },
  ].filter((s) => s.content);

  return (
    <>
      <section className="relative py-32 orbital-bg overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {project.category && (
            <Badge variant="blue" className="mb-4">{project.category}</Badge>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
            {project.summary}
          </p>
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="purple">{tech}</Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-neutral mb-4">{section.title}</h2>
              <p className="text-text-muted leading-relaxed">{section.content}</p>
            </div>
          ))}

          {project.content && (
            <div>
              <h2 className="text-2xl font-bold text-neutral mb-4">Sobre o projeto</h2>
              <p className="text-text-muted leading-relaxed">{project.content}</p>
            </div>
          )}
        </div>
      </section>

      <CtaSection
        title="Quer um projeto semelhante?"
        description="Conte-nos sobre seu desafio e vamos construir a solução ideal."
        primaryCta={{ label: "Solicitar projeto semelhante", href: "/contato" }}
      />
    </>
  );
}
