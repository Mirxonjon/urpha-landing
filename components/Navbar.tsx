"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import LocaleSwitcher from "./LocaleSwitcher";
import { Menu, X, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { UrphaLogo } from "./UrphaLogo";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "#about" },
    { name: t("courses"), href: "#courses" },
    { name: t("investment"), href: "#investment" },
    { name: t("blog"), href: "#blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled 
          ? "bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            <UrphaLogo className="text-white w-[38px] h-[38px]" />
          </div>
          <span className="text-[24px] font-extrabold tracking-tight text-white font-sans">
            Urpha Capital
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LocaleSwitcher />
          <a href="https://lms.urphacapital.uz">
            <Button variant="secondary" size="sm" className="px-5 py-2">
              {t("login")}
            </Button>
          </a>
          <Link href="#contact">
            <Button variant="primary" size="sm" className="px-5">
              {t("contact")}
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#0A0A0B] backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-5">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold text-slate-300 hover:text-emerald-400 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                   <span className="text-sm font-medium text-slate-500">Language</span>
                   <LocaleSwitcher />
                </div>
                <a href="https://lms.urphacapital.uz" className="w-full">
                  <Button variant="secondary" className="w-full">
                     {t("login")}
                  </Button>
                </a>
                <Link href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                     {t("contact")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
