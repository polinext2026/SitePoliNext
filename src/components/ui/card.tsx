import { cn } from "@/lib/utils";
import Link from "next/link";
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface/50 p-6",
        hover && "transition-all duration-200 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  summary: string;
  icon?: string;
  href: string;
  ctaText?: string;
}

const iconMap: Record<string, string> = {
  code: "💻",
  smartphone: "📱",
  palette: "🎨",
  "trending-up": "📈",
  brain: "🧠",
  settings: "⚙️",
};

export function ServiceCard({ title, summary, icon, href, ctaText = "Conhecer serviço" }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <Card hover className="h-full">
        <div className="mb-4 text-3xl">{icon ? iconMap[icon] || "✦" : "✦"}</div>
        <h3 className="mb-2 text-lg font-semibold text-neutral group-hover:text-blue transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm text-text-muted leading-relaxed">{summary}</p>
        <span className="text-sm font-medium text-blue group-hover:underline">
          {ctaText} →
        </span>
      </Card>
    </Link>
  );
}

interface ProjectCardProps {
  title: string;
  summary: string;
  category?: string | null;
  technologies?: string[] | null;
  href: string;
}

export function ProjectCard({ title, summary, category, technologies, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <Card hover className="h-full overflow-hidden p-0">
        <div className="aspect-video bg-gradient-to-br from-blue/20 via-purple/10 to-surface relative">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border border-blue/30 bg-blue/10 flex items-center justify-center">
              <span className="text-2xl text-blue">✦</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          {category && <Badge variant="blue" className="mb-3">{category}</Badge>}
          <h3 className="mb-2 text-lg font-semibold text-neutral group-hover:text-blue transition-colors">
            {title}
          </h3>
          <p className="mb-4 text-sm text-text-muted leading-relaxed line-clamp-2">{summary}</p>
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="default">{tech}</Badge>
              ))}
              {technologies.length > 3 && (
                <Badge variant="default">+{technologies.length - 3}</Badge>
              )}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}

import { Badge } from "./badge";
