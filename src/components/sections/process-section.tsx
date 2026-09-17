import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section className="py-24 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
            Nosso método
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Um processo estruturado que garante qualidade, transparência e resultados em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="relative text-center group">
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden xl:block absolute top-6 left-[60%] w-full h-px bg-gradient-to-r from-blue/30 to-transparent" />
              )}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-blue/30 bg-blue/10 text-blue font-bold text-sm group-hover:bg-blue/20 transition-colors">
                {step.step}
              </div>
              <h3 className="text-sm font-semibold text-neutral mb-1">{step.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
