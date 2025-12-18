"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function JoinUsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            Join the <span className="text-brand-primary">Yellowsense Technologies</span> Family
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Are you a skilled Maid, Nanny, or Cook? Join us to get consistent work, fair pay, and respect.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "Guaranteed timely payments",
              "Training and skill development",
              "Safety and security verified",
              "Flexible working hours"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Register Now</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Full Name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary outline-none"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary outline-none"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary outline-none bg-white">
                <option value="">Select Service</option>
                <option value="Maid">Maid</option>
                <option value="Nanny">Nanny</option>
                <option value="Cook">Cook</option>
              </select>
              <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-secondary transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/join.webp"
            alt="Join Yellowsense Technologies Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent flex items-end p-8">
            <p className="text-white text-2xl font-bold">
              "Working with Yellowsense Technologies has changed my life. I feel respected and secure."
              <br/>
              <span className="text-lg font-normal opacity-90 mt-2 block">- Sunita, Nanny</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

