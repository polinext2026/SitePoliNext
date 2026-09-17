import { ButtonLink } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center orbital-bg px-4">
      <div className="text-center">
        <p className="text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-neutral mb-2">Página não encontrada</h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink href="/">Voltar ao início</ButtonLink>
          <ButtonLink href="/contato" variant="outline">Falar conosco</ButtonLink>
        </div>
      </div>
    </div>
  );
}
