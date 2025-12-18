import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                <Image
                  src="/images/logo.webp"
                  alt="Yellowsense Technologies Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-brand-accent to-[#F9FF22] bg-clip-text text-transparent">
                Yellowsense Technologies
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Driving financial inclusion in India through AI-based maid booking services.
            </p>
            <button className="bg-brand-secondary px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-brand-secondary transition-colors shadow-lg shadow-brand-secondary/20">
              Donate
            </button>
          </div>

          {/* Legal Info Column */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <h3 className="text-white font-semibold text-lg mb-2">Company Details</h3>
            <div className="space-y-2">
              <p><span className="text-gray-500 w-12 inline-block">CIN:</span> {COMPANY_INFO.cin}</p>
              <p><span className="text-gray-500 w-12 inline-block">PAN:</span> {COMPANY_INFO.pan}</p>
              <p><span className="text-gray-500 w-12 inline-block">TAN:</span> {COMPANY_INFO.tan}</p>
              <p><span className="text-gray-500 w-24 inline-block">Startup India:</span> {COMPANY_INFO.startupIndia}</p>
              <p><span className="text-gray-500 w-24 inline-block">MSME:</span> {COMPANY_INFO.msme}</p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <h3 className="text-white font-semibold text-lg mb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-accent transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-accent transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* App Download Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg mb-2">Get the App</h3>
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-3 items-center text-center">
                <Image
                  src="/images/Linkyellowsense.jpg"
                  alt="Scan QR Code to download app"
                  width={120}
                  height={120}
                  className="rounded-lg shadow-md"
                />
                <p className="text-xs text-gray-400">Scan to download</p>
              </div>
              <Image
                src="/images/google.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent hover:text-white transition-all group">
              <Image src="/images/linkedin.webp" alt="LinkedIn" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent hover:text-white transition-all group">
              <Image src="/images/facebook.webp" alt="Facebook" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent hover:text-white transition-all group">
              <Image src="/images/youtube.webp" alt="YouTube" width={20} height={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <p className="text-xs text-gray-600 text-center md:text-right">
            © {new Date().getFullYear()} Yellowsense Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
