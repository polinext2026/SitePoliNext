import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral mb-8">Projetos</h1>

      {projects && projects.length > 0 ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-neutral">{project.title}</h3>
                    <Badge variant={project.status === "published" ? "blue" : "default"}>
                      {project.status === "published" ? "Publicado" : "Rascunho"}
                    </Badge>
                    {project.featured && <Badge variant="purple">Destaque</Badge>}
                  </div>
                  <p className="text-sm text-text-muted">{project.summary}</p>
                  {project.category && (
                    <p className="text-xs text-blue mt-1">{project.category}</p>
                  )}
                </div>
                <code className="text-xs text-text-muted">{project.slug}</code>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-text-muted text-center py-8">
            Nenhum projeto cadastrado. Execute o seed.sql no Supabase.
          </p>
        </Card>
      )}
    </div>
  );
}
