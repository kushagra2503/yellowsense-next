"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-cream rounded-3xl p-8 md:p-12 text-center max-w-lg w-full shadow-xl border-4 border-white"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-brand-primary mb-4">Request Received!</h1>
        <p className="text-gray-600 mb-8 text-lg">
          We have received your booking request. Our team will contact you shortly to confirm the details and proceed with the payment.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-secondary transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/profile"
            className="block w-full py-3 rounded-xl font-bold text-brand-primary hover:bg-white/50 transition-colors"
          >
            View My Bookings
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

