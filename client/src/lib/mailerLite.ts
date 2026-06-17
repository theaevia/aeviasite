import { PEELS_WAITLIST_URL } from "@/lib/bookingUrls";

export const PEELS_WAITLIST_FORM_ID = "D9hJZq";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
  }
}

export function openPeelsWaitlistForm() {
  if (typeof window === "undefined") return;

  if (typeof window.ml === "function") {
    window.ml("show", PEELS_WAITLIST_FORM_ID, true);
    return;
  }

  window.location.href = PEELS_WAITLIST_URL;
}
