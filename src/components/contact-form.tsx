"use client";

import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";
import { BUDGET_OPTIONS, SERVICE_OPTIONS } from "@/lib/constants";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("servico") || "";

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      budget: formData.get("budget") as string,
      deadline: formData.get("deadline") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string,
    };

    const fieldErrors: FormErrors = {};
    if (!data.name?.trim()) fieldErrors.name = "Nome é obrigatório";
    if (!data.email?.trim()) fieldErrors.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) fieldErrors.email = "E-mail inválido";
    if (!data.service) fieldErrors.service = "Selecione um serviço";
    if (!data.message?.trim()) fieldErrors.message = "Descrição é obrigatória";

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Erro ao enviar formulário");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-neutral mb-2">Mensagem enviada!</h3>
        <p className="text-text-muted mb-6">
          Recebemos sua solicitação e entraremos em contato em breve.
        </p>
        <Button onClick={() => setSuccess(false)} variant="outline">
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400" role="alert">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <Input label="Nome" name="name" required error={errors.name} placeholder="Seu nome completo" />
        <Input label="E-mail" name="email" type="email" required error={errors.email} placeholder="seu@email.com" />
      </div>

      <Input label="Empresa / Projeto" name="company" placeholder="Nome da empresa ou projeto (opcional)" />

      <Select
        label="Serviço de interesse"
        name="service"
        required
        error={errors.service}
        defaultValue={preselectedService}
      >
        <option value="">Selecione um serviço</option>
        {SERVICE_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </Select>

      <div className="grid sm:grid-cols-2 gap-6">
        <Select label="Faixa de orçamento" name="budget">
          <option value="">Selecione (opcional)</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>
        <Input label="Prazo desejado" name="deadline" placeholder="Ex: 2 meses (opcional)" />
      </div>

      <Textarea
        label="Descreva sua necessidade"
        name="message"
        required
        error={errors.message}
        placeholder="Conte-nos sobre seu projeto, objetivos e expectativas..."
        rows={5}
      />

      {/* Honeypot anti-spam */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <Button type="submit" loading={loading} size="lg" className="w-full sm:w-auto">
        Solicitar projeto
      </Button>
    </form>
  );
}
