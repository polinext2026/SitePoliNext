import { ProjectCard } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { getProjects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os projetos e cases da POLINEXT. Soluções digitais que transformam negócios.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="py-20 orbital-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
            Nossos projetos
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Cada projeto é uma história de transformação digital.
            Veja como ajudamos empresas a alcançar seus objetivos.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
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

      <CtaSection
        title="Quer um projeto como estes?"
        primaryCta={{ label: "Solicitar projeto", href: "/contato" }}
      />
    </>
  );
}
