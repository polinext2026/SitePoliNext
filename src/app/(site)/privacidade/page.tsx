import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da POLINEXT em conformidade com a LGPD.",
};

export default function PrivacyPage() {
  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral mb-8">Política de Privacidade</h1>

        <div className="space-y-6 text-text-muted leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como a POLINEXT coleta, usa e protege
            suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">1. Dados coletados</h2>
            <p>
              Coletamos apenas os dados necessários para atender sua solicitação: nome, e-mail,
              empresa (opcional), serviço de interesse, descrição do projeto e informações
              complementares que você optar por fornecer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">2. Finalidade</h2>
            <p>
              Seus dados são utilizados exclusivamente para responder sua solicitação de contato,
              elaborar propostas comerciais e manter comunicação relacionada ao seu projeto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">3. Retenção e exclusão</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir a finalidade descrita.
              Você pode solicitar a exclusão dos seus dados a qualquer momento pelo e-mail
              contato@polinext.com.br.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">4. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo
              criptografia, controle de acesso e monitoramento de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral mb-3">5. Seus direitos</h2>
            <p>
              Você tem direito de acesso, correção, exclusão, portabilidade e revogação do
              consentimento sobre seus dados pessoais, conforme previsto na LGPD.
            </p>
          </section>

          <p className="text-sm text-text-muted pt-4">
            Última atualização: setembro de 2026. Esta política deve ser revisada por
            profissional jurídico antes da produção.
          </p>
        </div>
      </div>
    </article>
  );
}
