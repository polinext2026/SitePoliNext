import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";

const STATUS_LABELS: Record<string, string> = {
  new: "Nova",
  contacted: "Contatado",
  qualified: "Qualificado",
  closed: "Fechado",
};

const STATUS_VARIANT: Record<string, "blue" | "cyan" | "purple" | "default"> = {
  new: "blue",
  contacted: "cyan",
  qualified: "purple",
  closed: "default",
};

export default async function AdminLeadsPage() {
  const supabase = await createClient();
  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral mb-8">Mensagens</h1>

      {leads && leads.length > 0 ? (
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-neutral">{lead.name}</h3>
                    <Badge variant={STATUS_VARIANT[lead.status] || "default"}>
                      {STATUS_LABELS[lead.status] || lead.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-text-muted mb-1">{lead.email}</p>
                  {lead.company && (
                    <p className="text-sm text-text-muted mb-1">Empresa: {lead.company}</p>
                  )}
                  <p className="text-sm text-blue mb-2">Serviço: {lead.service}</p>
                  {lead.budget && (
                    <p className="text-xs text-text-muted">Orçamento: {lead.budget}</p>
                  )}
                  {lead.deadline && (
                    <p className="text-xs text-text-muted">Prazo: {lead.deadline}</p>
                  )}
                  <p className="text-sm text-neutral/80 mt-3 leading-relaxed">{lead.message}</p>
                </div>
                <p className="text-xs text-text-muted shrink-0">
                  {formatDate(lead.created_at)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-text-muted text-center py-8">
            Nenhuma mensagem recebida ainda.
          </p>
        </Card>
      )}
    </div>
  );
}
