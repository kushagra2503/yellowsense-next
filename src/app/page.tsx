"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import GlobalExpansion from "@/components/sections/GlobalExpansion";
import TrustedPartners from "@/components/sections/TrustedPartners";

const SERVICES = [
  {
    title: "Maid Service",
    description: "Professional cleaning, washing, and household chores assistance.",
    image: "/images/maid.webp",
    link: "/maid",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Nanny Service",
    description: "Experienced caregivers for your little ones, ensuring safety and care.",
    image: "/images/nanny.webp",
    link: "/nanny",
    color: "bg-pink-100 text-pink-800",
  },
  {
    title: "Cook Service",
    description: "Delicious home-cooked meals prepared by hygienic and skilled cooks.",
    image: "/images/cook.webp",
    link: "/cook",
    color: "bg-orange-100 text-orange-800",
  },
];

const FEATURES = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "Every worker undergoes a strict background check and verification process.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your time. Our professionals are punctual and reliable.",
  },
  {
    icon: Star,
    title: "Top Rated",
    description: "Loved by thousands of families for our quality and commitment.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-cream/20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/mobileBg.webp')] bg-cover bg-center" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-brand-dark">
              Simplify Your Life with <span className="text-brand-primary">Yellowsense Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Reliable Maids, Nannies, and Cooks at your fingertips. 
              AI-based booking for a hassle-free experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/maid"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-secondary transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                Book Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 rounded-full font-bold text-lg text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/landing.webp"
                alt="Yellowsense  Happy Family"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-dark">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of verified and trained professionals to help manage your home better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${service.color}`}>
                  Popular
                </div>
                <h3 className="text-2xl font-bold mb-2 text-brand-dark">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-brand-primary font-bold hover:text-brand-secondary transition-colors"
                >
                  Book {service.title.split(' ')[0]} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-brand-accent">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 max-w-xs">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Expansion Section with Globe */}
      <GlobalExpansion />

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to find your perfect help?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied families who trust Yellowsense Technologies for their household needs.
            </p>
            <Link
              href="/join-us"
              className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started Today
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </section>

      {/* Trusted Partners Section */}
      <TrustedPartners />
    </div>
  );
}
