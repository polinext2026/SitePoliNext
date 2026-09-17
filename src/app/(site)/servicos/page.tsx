import { ServiceCard } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { getServices } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça os serviços da POLINEXT: desenvolvimento web, apps, design, marketing digital, IA e soluções tecnológicas.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="py-20 orbital-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
            Nossos serviços
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Soluções digitais completas para transformar ideias em resultados.
            Cada serviço é pensado para resolver problemas reais do seu negócio.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      <CtaSection />
    </>
  );
}
