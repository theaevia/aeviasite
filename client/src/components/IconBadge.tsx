import { cn } from "@/lib/utils";
import * as React from "react";

export function IconBadge({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "flex items-center gap-x-2 text-sm font-medium text-foreground/80",
        className
      )}
    >
      {children}
    </div>
  );
} 
