"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Marquee from "@/components/layout/Marquee";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Marquee at the very top */}
      <Marquee />

      {/* Navbar below Marquee */}
      <div
        className={cn(
          "w-full transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
              <Image
                src="/images/logo.webp"
                alt="YellowSense Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-br from-brand-primary to-brand-accent bg-clip-text text-transparent">
              YellowSense
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-brand-primary font-medium transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-cream/30 hover:text-brand-primary rounded-md"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/join-us"
              className="text-gray-800 hover:text-brand-primary font-medium transition-colors"
            >
              Join Us
            </Link>
            <Link
              href="tel:+919403890108"
              className="text-gray-800 hover:text-brand-primary font-medium transition-colors"
            >
              +91 940-389-0108
            </Link>
            <Link
              href="#"
              className="bg-brand-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-primary transition-colors shadow-lg shadow-brand-primary/20"
            >
              Pay Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-gray-800 hover:text-brand-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-brand-cream">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target="_blank"
                            className="text-gray-600 hover:text-brand-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/join-us"
                  className="block text-lg font-medium text-gray-800 hover:text-brand-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </Link>
                <Link
                  href="#"
                  className="block text-center bg-brand-secondary text-white px-6 py-3 rounded-full font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Pay Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
