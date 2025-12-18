"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { GlobeConfig, Position } from "@/components/ui/globe";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

// Globe configuration with all available props
const globeConfig: GlobeConfig = {
  // Point settings
  pointSize: 4,
  
  // Globe appearance
  globeColor: "#1e3a8a",
  emissive: "#1e40af",
  emissiveIntensity: 0.2,
  shininess: 0.9,
  
  // Atmosphere settings
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.15,
  
  // Polygon (country) settings
  polygonColor: "rgba(255,255,255,0.8)",
  
  // Lighting
  ambientLight: "#F9FF22",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#F9FF22",
  
  // Arc animation settings
  arcTime: 1000,
  arcLength: 0.9,
  
  // Ring settings
  rings: 1,
  maxRings: 3,
  
  // Initial camera position (centered on India)
  initialPosition: { 
    lat: 20.5937, 
    lng: 78.9629 
  },
  
  // Auto rotation
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

// Arc data: connections from Bangalore (headquarters) to other Indian cities
const arcsData: Position[] = [
  // Bangalore to Mumbai
  {
    order: 1,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 19.076,
    endLng: 72.8777,
    arcAlt: 0.1,
    color: "#F9FF22",
  },
  // Bangalore to Delhi
  {
    order: 2,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 28.7041,
    endLng: 77.1025,
    arcAlt: 0.15,
    color: "#FF9918",
  },
  // Bangalore to Kolkata
  {
    order: 3,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 22.5726,
    endLng: 88.3639,
    arcAlt: 0.12,
    color: "#F9FF22",
  },
  // Bangalore to Chennai
  {
    order: 4,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 13.0827,
    endLng: 80.2707,
    arcAlt: 0.05,
    color: "#FF9918",
  },
  // Bangalore to Hyderabad
  {
    order: 5,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 17.385,
    endLng: 78.4867,
    arcAlt: 0.08,
    color: "#F9FF22",
  },
  // Bangalore to Pune
  {
    order: 6,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 18.5204,
    endLng: 73.8567,
    arcAlt: 0.09,
    color: "#FF9918",
  },
  // Bangalore to Ahmedabad
  {
    order: 7,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 23.0225,
    endLng: 72.5714,
    arcAlt: 0.13,
    color: "#F9FF22",
  },
  // Bangalore to Jaipur
  {
    order: 8,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 26.9124,
    endLng: 75.7873,
    arcAlt: 0.14,
    color: "#FF9918",
  },
];

export default function GlobalExpansion() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left z-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-semibold mb-4"
            >
              🌍 Our Reach
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              We&apos;re{" "}
              <span className="bg-gradient-to-r from-brand-accent to-[#F9FF22] bg-clip-text text-transparent">
                Expanding
              </span>
              <br />
              Across Bengaluru
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Expanding across Bengaluru, we&apos;re bringing trusted home services to families in every neighborhood.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">10+</div>
                <div className="text-gray-500 text-sm">Neighborhoods</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">5000+</div>
                <div className="text-gray-500 text-sm">Families Served</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">1000+</div>
                <div className="text-gray-500 text-sm">Verified Workers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">4.8★</div>
                <div className="text-gray-500 text-sm">Rating</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <World globeConfig={globeConfig} data={arcsData} />
            
            {/* Glow effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
