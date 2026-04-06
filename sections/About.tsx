"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap } from "lucide-react";

export default function About() {
  const t = useTranslations("About");

  const highlights = [
    { 
      icon: ShieldCheck, 
      title: t("highlights.security.title"), 
      desc: t("highlights.security.desc") 
    },
    { 
      icon: Target, 
      title: t("highlights.precision.title"), 
      desc: t("highlights.precision.desc") 
    },
    { 
      icon: Zap, 
      title: t("highlights.speed.title"), 
      desc: t("highlights.speed.desc") 
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="relative order-2 lg:order-1"
          >
             <div className="aspect-[4/3] relative glass-card rounded-[48px] overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                <img 
                   src="/images/about-office.png" 
                   alt="Professional Trading Environment" 
                   className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
             </div>
             
             {/* Floating badge */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl border-white/5 shadow-2xl z-10 hidden sm:block"
             >
                <div className="text-4xl font-black text-emerald-500 mb-2 tracking-tighter">2.5K+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{t("badge")}</div>
             </motion.div>
             
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 blur-[80px] -z-10" />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
                {t("title")}
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
                {t("description")}
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {highlights.map((item, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                   className="flex gap-6 p-6 rounded-[24px] hover:bg-white/[0.03] transition-all duration-500 border border-transparent hover:border-white/5 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm group-hover:text-slate-300 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
