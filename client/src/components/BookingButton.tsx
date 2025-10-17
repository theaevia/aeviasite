import * as React from "react";

interface BookingButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function BookingButton({ href, children, variant = "primary", className = "" }: BookingButtonProps) {
  const base =
    "inline-flex h-12 min-w-[180px] items-center justify-center border px-6 text-center text-xs font-medium uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary " +
    className;
  const primary =
    "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary";
  const secondary =
    "border-[#111] bg-transparent text-[#111] hover:bg-[#111] hover:text-white";
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
