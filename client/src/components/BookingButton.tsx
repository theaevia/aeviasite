import { Link } from "wouter";
import React from "react";

interface BookingButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "skin" | "mind";
  className?: string;
}

export function BookingButton({ href, children, variant = "skin", className = "" }: BookingButtonProps) {
  const base =
    "block px-6 py-3 rounded-xl font-medium text-base smooth-transition shadow-lg border-2 border-primary transition-colors transition-shadow hover:shadow-xl " +
    className;
  const skin =
    "bg-primary text-primary-foreground hover:bg-white hover:text-primary hover:border-primary border-primary";
  const mind =
    "bg-white text-primary hover:bg-primary hover:text-primary-foreground border-primary";
  return (
    <Link href={href} className={`${base} ${variant === "skin" ? skin : mind}`}>
      {children}
    </Link>
  );
} 