"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Marquee from "@/components/layout/Marquee";

// --- Components based on props ---

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full", className)}>
      {children}
    </div>
  );
};

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

const NavBody = ({ children, className, visible = true }: NavBodyProps) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      layout
      initial={{ y: 0, width: "100%", borderRadius: 0 }}
      animate={{
        y: isScrolled ? 10 : 0,
        width: isScrolled ? "90%" : "100%",
        borderRadius: isScrolled ? "2rem" : "0rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "relative z-50 flex items-center justify-between transition-all duration-300 mx-auto",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border border-white/20 py-2 px-6 md:px-8 max-w-7xl"
          : "bg-transparent py-4 px-4 md:px-6 w-full",
        className
      )}
    >
      {children}
    </motion.header>
  );
};

interface NavItemsProps {
  items: Array<{ name: string; link?: string; href?: string; submenu?: Array<{ name: string; href: string }> }>;
  className?: string;
  onItemClick?: () => void;
}

const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  return (
    <nav className={cn("hidden md:flex items-center gap-6 lg:gap-8", className)}>
      {items.map((link) => (
        <div key={link.name} className="relative group">
          <Link
            href={link.href || link.link || "#"}
            className="text-gray-800 hover:text-brand-primary font-medium transition-colors flex items-center gap-1 text-sm lg:text-base"
            onClick={onItemClick}
          >
            {link.name}
            {link.submenu && <ChevronDown className="w-4 h-4" />}
          </Link>

          {link.submenu && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 border border-gray-100">
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
    </nav>
  );
};

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MobileNavToggle = ({ isOpen, onClick, className }: MobileNavToggleProps) => {
  return (
    <button
      className={cn("md:hidden p-2 text-gray-800", className)}
      onClick={onClick}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          className={cn("absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden shadow-xl rounded-b-2xl md:hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface NavbarButtonProps {
  href: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
}

const NavbarButton = ({ href, as: Component = Link, children, className, variant = "primary" }: NavbarButtonProps) => {
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-secondary",
    secondary: "bg-brand-secondary text-white hover:bg-brand-primary shadow-lg shadow-brand-primary/20",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
    gradient: "bg-gradient-to-r from-brand-primary to-brand-accent text-white hover:opacity-90",
  };

  return (
    <Component
      href={href}
      className={cn(
        "px-5 py-2 rounded-full font-semibold transition-colors text-sm lg:text-base whitespace-nowrap",
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
};

// --- Main Header Component ---

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <div className="w-full">
        <Marquee />
      </div>

      <NavBody>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
            <Image
              src="/images/logo.webp"
              alt="Yellowsense Technologies Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg md:text-xl lg:text-2xl bg-gradient-to-br from-brand-primary to-brand-accent bg-clip-text text-transparent whitespace-nowrap">
            Yellowsense Technologies
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-4">
          <NavItems items={NAV_LINKS} />
          
          <Link
            href="/join-us"
            className="text-gray-800 hover:text-brand-primary font-medium transition-colors text-sm lg:text-base whitespace-nowrap ml-4"
          >
            Join Us
          </Link>
          <Link
            href="tel:+919403890108"
            className="text-gray-800 hover:text-brand-primary font-medium transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            +91 940-389-0108
          </Link>
          <NavbarButton href="#" variant="secondary">
            Pay Us
          </NavbarButton>
        </div>

        {/* Mobile Toggle */}
        <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

        {/* Mobile Menu */}
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col p-4 gap-4">
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
                        className="text-gray-600 hover:text-brand-primary py-1 block"
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
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Link
                href="tel:+919403890108"
                className="block text-lg font-medium text-gray-800 hover:text-brand-primary mb-4"
              >
                +91 940-389-0108
              </Link>
              <NavbarButton href="#" variant="secondary" className="w-full block text-center">
                Pay Us
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </NavBody>
    </Navbar>
  );
}
