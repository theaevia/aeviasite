import { cn } from "@/lib/utils";

interface BnplNoticeProps {
  className?: string;
  variant?: "inline" | "banner";
}

export default function BnplNotice({ className, variant = "inline" }: BnplNoticeProps) {
  return (
    <div
      className={cn(
        "text-center",
        variant === "banner"
          ? "rounded-lg border border-[#d9d0c4] bg-secondary/60 px-6 py-4"
          : "text-sm text-[#3f3a33]/80",
        className
      )}
    >
      <p className={variant === "banner" ? "text-sm font-medium text-[#111]" : undefined}>
        Eligible clients may be able to use Clearpay at checkout for selected treatment plans. Approval and repayment terms are managed by Clearpay. Please only proceed if the repayments are manageable for you.
      </p>
    </div>
  );
}
