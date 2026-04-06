"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      name: t("items.azizbek.name"),
      role: t("items.azizbek.role"),
      text: t("items.azizbek.text"),
      avatar: "AR",
    },
    {
      name: t("items.malika.name"),
      role: t("items.malika.role"),
      text: t("items.malika.text"),
      avatar: "MS",
    },
    {
      name: t("items.jasur.name"),
      role: t("items.jasur.role"),
      text: t("items.jasur.text"),
      avatar: "JK",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-[#0A0A0B] relative overflow-hidden py-24 md:py-32">
       {/* Background glow shadow */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/[0.03] blur-[140px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight"
          >
            {t("title").split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-emerald-500" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-medium tracking-wide"
          >
            {t("description")}
          </motion.p>
       </div>

       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group p-12 rounded-[48px] border-white/5 hover:border-emerald-500/30 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden shadow-2xl"
            >
               <Quote className="absolute top-10 right-10 text-white/5 w-20 h-20 group-hover:text-emerald-500/[0.1] transition-all duration-700 -rotate-12" />
               
               <div className="flex gap-1.5 mb-10 group-hover:scale-105 transition-transform origin-left">
                 {[1,2,3,4,5].map(i => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star size={18} fill="#10B981" className="text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </motion.div>
                 ))}
               </div>
               
               <p className="text-[17px] md:text-lg text-slate-300 mb-12 leading-relaxed font-medium italic relative z-10 group-hover:text-white transition-colors duration-500">
                 "{item.text}"
               </p>
               
               <div className="flex items-center gap-5 relative z-10 pt-8 border-t border-white/5">
                  <div className="w-14 h-14 rounded-[18px] bg-emerald-500 flex items-center justify-center font-black text-xl text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    {item.avatar}
                  </div>
                  <div className="text-left">
                     <h5 className="font-extrabold text-white group-hover:text-emerald-500 transition-colors text-lg">{item.name}</h5>
                     <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.25em] mt-0.5">{item.role}</p>
                  </div>
               </div>
               
               {/* Hover Accent Glow */}
               <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
       </div>
    </section>
  );
}
