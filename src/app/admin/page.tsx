import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { MessageSquare, FolderOpen, FileText, Users } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [leadsResult, projectsResult, postsResult] = await Promise.all([
    supabase.from("leads").select("id, status", { count: "exact" }),
    supabase.from("projects").select("id, status", { count: "exact" }),
    supabase.from("posts").select("id, status", { count: "exact" }),
  ]);

  const newLeads = leadsResult.data?.filter((l) => l.status === "new").length || 0;
  const totalProjects = projectsResult.count || 0;
  const totalPosts = postsResult.count || 0;

  const stats = [
    { label: "Novas mensagens", value: newLeads, icon: MessageSquare, href: "/admin/leads", color: "text-blue" },
    { label: "Projetos", value: totalProjects, icon: FolderOpen, href: "/admin/projetos", color: "text-purple" },
    { label: "Artigos", value: totalPosts, icon: FileText, href: "/admin/posts", color: "text-cyan" },
  ];

  const { data: recentLeads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral mb-8">Dashboard</h1>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                  <p className="text-3xl font-bold text-neutral mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color} opacity-60`} />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-neutral mb-4">Mensagens recentes</h2>
        {recentLeads && recentLeads.length > 0 ? (
          <div className="space-y-3">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-neutral">{lead.name}</p>
                  <p className="text-xs text-text-muted">{lead.email} — {lead.service}</p>
                </div>
                <Badge variant={lead.status === "new" ? "blue" : "default"}>
                  {lead.status === "new" ? "Nova" : lead.status}
                </Badge>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-muted">Nenhuma mensagem recebida ainda.</p>
        )}
      </Card>
    </div>
  );
}
