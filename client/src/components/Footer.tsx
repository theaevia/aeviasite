import { Link } from "wouter";
import { Instagram } from "lucide-react";
import logoBlack from "@assets/logos/logo-black-transparent.webp";
import TikTokIcon from "@assets/svgs/tiktok-fill-svgrepo-com.svg?react";
import { journalUrl } from "@/lib/journal";
import { MIND_DISCOVERY_URL, SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-16 text-white">
      <div className="hero-safe-padding">
        <div className="mx-auto grid max-w-6xl gap-12 border-b border-white/10 pb-12 md:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <img
                src={logoBlack}
                alt="The Aevia"
                width="916"
                height="500"
                className="mb-6 h-10 w-auto invert"
              />
            </Link>
            <p className="max-w-xs text-sm text-white/60">
              Excellence and longevity in skin and mind.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-primary">Services</h4>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/skin" className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Aevia Skin
                </Link>
              </li>
              <li>
                <Link href="/mind" className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Aevia Mind
                </Link>
              </li>
              <li>
                <a
                  href={SKIN_CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Skin Consultation
                </a>
              </li>
              <li>
                <a
                  href={MIND_DISCOVERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Mind Discovery Call
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-primary">Resources</h4>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={journalUrl("/")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Journal
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Privacy & Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-primary">Connect</h4>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/the.aevia"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@the.aevia"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <span className="text-xs text-white/50">@the.aevia</span>
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:hello@theaevia.co.uk"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  hello@theaevia.co.uk
                </a>
                <a
                  href="tel:+447448012556"
                  className="transition-colors duration-150 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  +44 7448 012556
                </a>
                <address className="not-italic">
                  <div className="flex flex-col space-y-1">
                    <span>Minsony, 260 Pentonville Road</span>
                    <span>N1 9JY, Kings Cross, London</span>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl text-center text-xs text-white/40">
          <p>&copy; 2024 The Aevia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
