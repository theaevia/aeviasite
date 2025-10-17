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

  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
