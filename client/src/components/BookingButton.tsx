import * as React from "react";
import { cn } from "@/lib/utils";

interface BookingButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function BookingButton({ href, children, variant = "primary", className = "", onClick }: BookingButtonProps) {
  const base =
    "block px-6 py-3 rounded-xl font-medium text-base text-center smooth-transition shadow-lg border-2 border-primary transition-colors transition-shadow hover:shadow-xl";
  const primary =
    "bg-primary text-primary-foreground hover:bg-white hover:text-primary hover:border-primary border-primary";
  const secondary =
    "bg-white text-primary hover:bg-primary hover:text-primary-foreground border-primary";
  const classes = cn(base, variant === "primary" ? primary : secondary, className);

  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      onClick={onClick}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
