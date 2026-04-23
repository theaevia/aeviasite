import { Button } from "@/components/ui/button";
import { CLINIC_WHATSAPP_ENQUIRE_URL } from "@/lib/bookingUrls";
import { cn } from "@/lib/utils";

interface EnquireToBookButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnquireToBookButton({ className, children }: EnquireToBookButtonProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <Button asChild variant="ghost" className="border border-primary/70 px-5 py-2 text-sm normal-case tracking-normal text-primary hover:border-primary hover:text-primary">
        <a href={CLINIC_WHATSAPP_ENQUIRE_URL} target="_blank" rel="noopener noreferrer">
          {children || "Enquire to book"}
        </a>
      </Button>
      <p className="text-xs text-[#3f3a33]/70 max-w-[280px] text-center leading-relaxed">
        Course bookings require a deposit larger than our online system supports. Enquire and we'll set you up directly.
      </p>
    </div>
  );
}
