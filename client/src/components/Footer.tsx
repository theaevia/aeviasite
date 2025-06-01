import { Link } from "wouter";
import { Instagram } from "lucide-react";
import logoBlack from "@assets/logos/Logo Black.png";
import TikTokIcon from "@assets/svgs/tiktok-fill-svgrepo-com.svg?react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src={logoBlack} 
              alt="The Aevia" 
              className="h-10 w-auto mb-4 filter invert"
            />
            <p className="text-gray-300 text-sm">Doctor-led transformation for skin and mind</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/skin" className="hover:text-primary smooth-transition">
                  Aevia Skin
                </Link>
              </li>
              <li>
                <Link href="/mind" className="hover:text-primary smooth-transition">
                  Aevia Mind
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary smooth-transition">
                  Consultations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-primary smooth-transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-primary smooth-transition">
                  Journal
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-300 space-x-2">
                <a href="https://instagram.com/the.aevia" target="_blank" rel="noopener noreferrer" className="hover:text-primary smooth-transition">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.tiktok.com/@the.aevia" target="_blank" rel="noopener noreferrer" className="hover:text-primary smooth-transition">
                  <TikTokIcon className="h-4 w-4" />
                </a>
                <span className="ml-2">@the.aevia</span>
              </div>
              <a href="mailto:hello@theaevia.co.uk" className="flex items-center text-sm text-gray-300 hover:text-primary smooth-transition">
                hello@theaevia.co.uk
              </a>
              <a href="tel:+447448012556" className="flex items-center text-sm text-gray-300 hover:text-primary smooth-transition">
                +44 7448 012556
              </a>
              <p className="text-sm text-gray-300">Kings Cross, London</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 The Aevia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
