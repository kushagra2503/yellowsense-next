import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white/10">
              <Image
                src="/images/logo.webp"
                alt="YellowSense Logo"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-accent to-[#F9FF22] bg-clip-text text-transparent">
              YellowSense
            </h2>
          </div>
          <button className="bg-brand-secondary px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-brand-secondary transition-colors">
            Donate
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center md:text-left text-gray-400 text-sm">
          <div className="space-y-2">
            <p>CIN : {COMPANY_INFO.cin}</p>
            <p>PAN : {COMPANY_INFO.pan}</p>
            <p>TAN : {COMPANY_INFO.tan}</p>
          </div>
          <div className="space-y-2">
            <p>Startup India - DP - IIT: {COMPANY_INFO.startupIndia}</p>
            <p>MSME Udyog Aadhaar : {COMPANY_INFO.msme}</p>
            <div className="pt-4 flex justify-center md:justify-start">
              <Image
                src="/images/google.svg"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <h3 className="text-xl font-bold mb-6 text-center md:text-left">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-accent">
                <Phone className="w-5 h-5" />
              </div>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-accent transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-accent">
                <Mail className="w-5 h-5" />
              </div>
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-accent transition-colors">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Image src="/images/linkedin.webp" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Image src="/images/facebook.webp" alt="Facebook" width={32} height={32} />
            </a>
            <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Image src="/images/youtube.webp" alt="YouTube" width={32} height={32} />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex gap-6">
              <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
            <p className="md:ml-auto text-xs opacity-60">
              © {new Date().getFullYear()} YellowSense Technologies Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

