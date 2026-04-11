"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Index");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Gradients & Effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles size={14} className="animate-pulse" />
            Fintech Innovation 2024
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white">
             <span className="block mb-2">Urpha Capital</span>
             <span className="text-gradient drop-shadow-sm">{t("title")}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">
            {t("description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center lg:justify-start">
            <Button variant="primary" size="lg" className="group text-base px-8 h-[60px] rounded-2xl w-full sm:w-auto">
              {t("buttons.join")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-[60px] rounded-2xl w-full sm:w-auto">
              {t("buttons.contact")}
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center gap-4 lg:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 w-full justify-center lg:justify-start">
             <div className="text-sm font-bold tracking-widest uppercase">{t("hero.trusted")}</div>
             <div className="flex flex-wrap justify-center gap-4 lg:gap-6 items-center font-bold text-lg tracking-tighter">
                <span>BINANCE</span>
                <span>METAMASK</span>
                <span>TRADINGVIEW</span>
             </div>
          </div>
        </motion.div>
        
        {/* Hero Visual — Portrait */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
           animate={{ opacity: 1, scale: 1, rotateY: 0 }}
           transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="relative hidden lg:flex items-center justify-center perspective-1000"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-[56px] bg-gradient-to-br from-emerald-500/30 via-transparent to-cyan-500/20 blur-2xl scale-105 pointer-events-none" />

          {/* Portrait card — large */}
          <div className="relative w-[460px] h-[580px] rounded-[52px] overflow-hidden shadow-[0_30px_100px_-10px_rgba(16,185,129,0.35)] border border-white/10">
            <Image
              src="/hero-portrait.png"
              alt="Urpha Capital Mentor"
              fill
              className="object-cover"
              style={{ objectPosition: "center 10%" }}
              priority
            />
            {/* Light top fade only */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

            {/* Top-right verified badge */}
            <div className="absolute top-5 right-5 bg-emerald-500 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Live</span>
            </div>
          </div>

          {/* Floating students card — left */}
          <motion.div
             animate={{ y: [0, -8, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute -left-16 bottom-1/4 bg-[#0D0D0E]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl"
          >
             <div className="flex items-center gap-3">
               <div className="flex -space-x-2">
                 {["AR","MK","JK"].map((initials, i) => (
                   <div key={i} className="w-7 h-7 rounded-full bg-emerald-500/80 border-2 border-[#0D0D0E] flex items-center justify-center text-[8px] font-black text-white">{initials}</div>
                 ))}
               </div>
               <div>
                 <div className="text-white font-black text-sm">2,000+</div>
                 <div className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Students</div>
               </div>
             </div>
          </motion.div>

          {/* Subtle corner glow */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-36 h-36 bg-cyan-500/15 blur-[50px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
