"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const PARTNERS = [
  { name: "Partner 1", logo: "/images/10008.webp" },
  { name: "Partner 2", logo: "/images/10009.webp" },
  { name: "Partner 3", logo: "/images/10010.webp" },
  { name: "Partner 4", logo: "/images/10011.webp" },
  { name: "Partner 5", logo: "/images/10012.webp" },
  { name: "Partner 6", logo: "/images/10013.webp" },
];

export default function TrustedPartners() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Trusted Partners
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading organizations to bring you the best service.
        </p>
      </div>

      <div className="relative">
        {/* Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <Marquee gradient={false} speed={40} pauseOnHover>
          <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

