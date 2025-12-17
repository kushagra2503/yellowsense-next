"use client";

import Image from "next/image";
import BookingForm from "@/components/forms/BookingForm";
import { motion } from "framer-motion";

export default function NannyBookingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Form */}
        <div>
          <BookingForm serviceType="Nanny">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Children (&gt; 2 yrs)</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary outline-none bg-white">
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Children (&lt; 2 yrs)</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary outline-none bg-white">
                  {[0, 1, 2, 3].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </BookingForm>
        </div>

        {/* Right Column: Visuals */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="sticky top-24 hidden lg:block"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/images/nanny-2.webp"
              alt="Caring Nanny Service"
              width={600}
              height={800}
              className="w-full h-auto object-cover bg-brand-cream/30"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Trusted Care</h3>
              <p className="opacity-90">Experienced nannies who treat your children like their own family.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

