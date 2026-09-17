import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/cta-section";
import { getPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description: "Artigos, guias e insights sobre tecnologia, design, IA e marketing digital.",
};

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="py-20 orbital-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
            Insights
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Artigos, guias e reflexões sobre tecnologia, design e estratégia digital.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/insights/${post.slug}`} className="group block">
                <Card hover>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-neutral group-hover:text-blue transition-colors mb-2">
                        {post.title}
                      </h2>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    {post.published_at && (
                      <Badge variant="default" className="shrink-0">
                        {formatDate(post.published_at)}
                      </Badge>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Quer conversar sobre um tema?"
        primaryCta={{ label: "Entrar em contato", href: "/contato" }}
      />
    </>
  );
}
