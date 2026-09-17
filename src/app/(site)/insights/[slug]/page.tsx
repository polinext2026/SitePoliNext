import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";
import { getPostBySlug, getPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            {post.published_at && (
              <Badge variant="blue" className="mb-4">
                {formatDate(post.published_at)}
              </Badge>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-text-muted">{post.excerpt}</p>
          </header>

          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
