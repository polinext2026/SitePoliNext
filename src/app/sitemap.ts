import { SITE } from "@/lib/constants";
import { getServices, getProjects, getPosts } from "@/lib/data";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE.url;

  const staticPages = [
    "",
    "/servicos",
    "/projetos",
    "/sobre",
    "/insights",
    "/contato",
    "/privacidade",
    "/termos",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const [services, projects, posts] = await Promise.all([
    getServices(),
    getProjects(),
    getPosts(),
  ]);

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/servicos/${s.slug}`,
    lastModified: new Date(s.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projetos/${p.slug}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postPages = posts.map((p) => ({
    url: `${baseUrl}/insights/${p.slug}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...postPages];
}
