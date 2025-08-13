import { Link } from "wouter";
import * as React from "react";

interface BookingButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function BookingButton({ href, children, variant = "primary", className = "" }: BookingButtonProps) {
  const base =
    "block px-6 py-3 rounded-xl font-medium text-base text-center smooth-transition shadow-lg border-2 border-primary transition-colors transition-shadow hover:shadow-xl " +
    className;
  const primary =
    "bg-primary text-primary-foreground hover:bg-white hover:text-primary hover:border-primary border-primary";
  const secondary =
    "bg-white text-primary hover:bg-primary hover:text-primary-foreground border-primary";
  const classes = `${base} ${variant === "primary" ? primary : secondary}`;

  // If external link, use <a>
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  // Otherwise, use <Link>
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
} 