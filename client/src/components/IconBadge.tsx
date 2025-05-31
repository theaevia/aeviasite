import { cn } from "@/lib/utils";
import React from "react";

export function IconBadge({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "flex-shrink-0 flex items-center justify-center",
        "w-14 h-14 rounded-full",
        "bg-gradient-to-br from-primary to-primary/80",
        "text-primary-foreground shadow-lg ring-1 ring-primary/20",
        "transition-transform duration-200 group-hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
} 