"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, BarChart4, Clock, HeartHandshake, ShieldCheck, Zap } from "lucide-react";

export default function Benefits() {
  const t = useTranslations("Benefits");

  const benefits = [
    { icon: Award, label: t("items.certificates.label"), desc: t("items.certificates.desc") },
    { icon: BarChart4, label: t("items.practice.label"), desc: t("items.practice.desc") },
    { icon: Clock, label: t("items.support.label"), desc: t("items.support.desc") },
    { icon: ShieldCheck, label: t("items.knowledge.label"), desc: t("items.knowledge.desc") },
    { icon: HeartHandshake, label: t("items.mentorship.label"), desc: t("items.mentorship.desc") },
    { icon: Zap, label: t("items.technology.label"), desc: t("items.technology.desc") },
  ];

  return (
    <section id="benefits" className="section-padding bg-[#0A0A0B] relative overflow-hidden py-24 md:py-32 border-b border-white/5">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
           <div className="max-w-2xl">
             <motion.h2 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight"
             >
               {t("title").split("Urpha").map((part, i) => (
                 <span key={i}>
                   {i === 1 ? <span className="text-emerald-500">Urpha{part}</span> : part}
                 </span>
               ))}
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg"
             >
               {t("description")}
             </motion.p>
           </div>
           <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent hidden md:block mb-6 ml-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {benefits.map((benefit, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="group glass-card p-10 rounded-[32px] hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
             >
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 group-hover:text-emerald-400 shadow-xl">
                 <benefit.icon size={26} className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />
               </div>
               
               <h4 className="text-xl md:text-2xl font-black mb-4 text-white group-hover:text-emerald-400 transition-colors duration-500 tracking-tight">
                 {benefit.label}
               </h4>
               
               <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-500 max-w-xs">
                 {benefit.desc}
               </p>
               
               {/* Accent line */}
               <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
