"use client";

import Image from "next/image";
import BookingForm from "@/components/forms/BookingForm";
import { motion } from "framer-motion";

export default function CookBookingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Form */}
        <div>
          <BookingForm serviceType="Cook">
            <div className="space-y-4">
              <label className="text-sm font-semibold text-gray-700 block">Meal Preferences</label>
              <div className="grid grid-cols-2 gap-4">
                {["North Indian", "South Indian", "Veg", "Non-Veg", "Jain Food", "Continental"].map((cuisine) => (
                  <label key={cuisine} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-brand-primary/50 hover:bg-brand-cream/10 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      name="cuisine"
                      value={cuisine}
                      className="w-5 h-5 rounded text-brand-primary focus:ring-brand-primary"
                    />
                    <span className="text-gray-700 text-sm">{cuisine}</span>
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
              src="/images/cook-2.webp"
              alt="Expert Cook Service"
              width={600}
              height={800}
              className="w-full h-auto object-cover bg-brand-cream/30"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Delicious Meals</h3>
              <p className="opacity-90">Hygenic, tasty, and healthy home-cooked food by expert cooks.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

