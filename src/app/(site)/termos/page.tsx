import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site institucional da POLINEXT.",
};

export default function TermsPage() {
  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral mb-8">Termos de Uso</h1>

        <div className="space-y-6 text-text-muted leading-relaxed">
          <p>
            Ao acessar e utilizar o site da POLINEXT, você concorda com os termos descritos
            nesta página.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">1. Uso do site</h2>
            <p>
              O conteúdo deste site é fornecido para fins informativos sobre os serviços
              da POLINEXT. É proibido utilizar o site para fins ilegais ou não autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">2. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo, design, marca e materiais presentes neste site são de
              propriedade da POLINEXT ou licenciados para seu uso. Reprodução não autorizada
              é proibida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">3. Limitação de responsabilidade</h2>
            <p>
              A POLINEXT se esforça para manter informações precisas, mas não garante
              completude ou atualização em tempo real. O uso das informações é por conta
              e risco do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">4. Links externos</h2>
            <p>
              O site pode conter links para sites de terceiros. A POLINEXT não se
              responsabiliza pelo conteúdo ou práticas de privacidade desses sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">5. Alterações</h2>
            <p>
              Reservamo-nos o direito de alterar estes termos a qualquer momento.
              Alterações entram em vigor após publicação nesta página.
            </p>
          </section>

          <p className="text-sm text-text-muted pt-4">
            Última atualização: setembro de 2026. Estes termos devem ser revisados por
            profissional jurídico antes da produção.
          </p>
        </div>
      </div>
    </article>
  );
}
