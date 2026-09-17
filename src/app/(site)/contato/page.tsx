import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a POLINEXT. Solicite um orçamento ou fale com nossa equipe.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 orbital-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
            Vamos conversar
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Conte-nos sobre seu projeto. Responderemos em até 24 horas úteis.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <Suspense fallback={<div className="h-96 animate-pulse bg-surface rounded-lg" />}>
                  <ContactForm />
                </Suspense>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="font-semibold text-neutral mb-4">Informações de contato</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-muted">E-mail</p>
                      <a href={`mailto:${SITE.email}`} className="text-neutral hover:text-blue transition-colors">
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-muted">Telefone</p>
                      <p className="text-neutral">{SITE.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-muted">Localização</p>
                      <p className="text-neutral">São Paulo, Brasil</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="font-semibold text-neutral mb-2">O que acontece depois?</h3>
                <ol className="space-y-3 text-sm text-text-muted">
                  <li className="flex gap-2">
                    <span className="text-blue font-bold">1.</span>
                    Analisamos sua solicitação
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue font-bold">2.</span>
                    Entramos em contato para entender melhor
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue font-bold">3.</span>
                    Apresentamos proposta personalizada
                  </li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
