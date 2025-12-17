"use client";

import Image from "next/image";
import BookingForm from "@/components/forms/BookingForm";
import { motion } from "framer-motion";

export default function MaidBookingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Form */}
        <div>
          <BookingForm serviceType="Maid">
            <div className="space-y-4">
              <label className="text-sm font-semibold text-gray-700 block">Required Services</label>
              <div className="grid grid-cols-2 gap-4">
                {["Sweeping", "Mopping", "Washroom Cleaning", "Utensils Cleaning", "Dusting", "Clothes Washing"].map((service) => (
                  <label key={service} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-brand-primary/50 hover:bg-brand-cream/10 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      name="serviceType"
                      value={service}
                      className="w-5 h-5 rounded text-brand-primary focus:ring-brand-primary"
                    />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </label>
                ))}
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
              src="/images/maidw.png"
              alt="Professional Maid Service"
              width={600}
              height={800}
              className="w-full h-auto object-cover bg-brand-cream/30"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Expert Cleaning</h3>
              <p className="opacity-90">Experienced professionals making your home spotless and hygienic.</p>
            </div>
          </div>

          <div className="mt-8 flex gap-6 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">5000+</div>
              <div className="text-gray-500 text-sm">Happy Homes</div>
            </div>
            <div className="w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">4.8/5</div>
              <div className="text-gray-500 text-sm">Rating</div>
            </div>
            <div className="w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">24/7</div>
              <div className="text-gray-500 text-sm">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

