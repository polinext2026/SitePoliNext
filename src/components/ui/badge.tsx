import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "purple" | "cyan";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-surface text-neutral/80 border-border",
    blue: "bg-blue/10 text-blue border-blue/20",
    purple: "bg-purple/10 text-purple border-purple/20",
    cyan: "bg-cyan/10 text-cyan border-cyan/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
