import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";

export default async function AdminPostsPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral mb-8">Insights / Blog</h1>

      {posts && posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-neutral">{post.title}</h3>
                    <Badge variant={post.status === "published" ? "blue" : "default"}>
                      {post.status === "published" ? "Publicado" : "Rascunho"}
                    </Badge>
                  </div>
                  <p className="text-sm text-text-muted">{post.excerpt}</p>
                </div>
                <div className="text-right shrink-0">
                  <code className="text-xs text-text-muted block">{post.slug}</code>
                  {post.published_at && (
                    <p className="text-xs text-text-muted mt-1">{formatDate(post.published_at)}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-text-muted text-center py-8">
            Nenhum artigo cadastrado. Execute o seed.sql no Supabase.
          </p>
        </Card>
      )}
    </div>
  );
}
