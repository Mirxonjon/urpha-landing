"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t("items.q1.q"), answer: t("items.q1.a") },
    { question: t("items.q2.q"), answer: t("items.q2.a") },
    { question: t("items.q3.q"), answer: t("items.q3.a") },
    { question: t("items.q4.q"), answer: t("items.q4.a") },
    { question: t("items.q5.q"), answer: t("items.q5.a") },
  ];

  return (
    <section id="faq" className="section-padding bg-[#0A0A0B] relative py-24 md:py-32 border-t border-white/5">
       {/* Background decorative element */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
       
       <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
             <motion.div 
               initial={{ rotate: -10, scale: 0.8 }}
               whileInView={{ rotate: 0, scale: 1 }}
               viewport={{ once: true }}
               className="w-16 h-16 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-400 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
             >
                <HelpCircle size={32} strokeWidth={1.5} />
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
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
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-slate-400 text-lg md:text-xl font-medium"
             >
               {t("description")}
             </motion.p>
          </div>

          <div className="space-y-6">
             {faqs.map((faq, idx) => (
               <motion.div 
                 key={idx} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className={cn(
                   "glass-card rounded-[32px] border-white/5 overflow-hidden transition-all duration-500 group",
                   openIndex === idx ? "border-emerald-500/30 bg-emerald-500/[0.02]" : "hover:border-white/20"
                 )}
               >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full p-8 md:p-10 flex items-center justify-between text-left group gap-4"
                  >
                     <span className={cn(
                       "text-lg md:text-xl font-bold transition-all duration-500 tracking-tight",
                       openIndex === idx ? "text-emerald-400" : "text-slate-200 group-hover:text-white"
                     )}>
                        {faq.question}
                     </span>
                     <div className={cn(
                       "shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 border",
                       openIndex === idx 
                        ? "bg-emerald-500 text-white border-emerald-500 rotate-180 shadow-[0_0_20px_rgba(16,185,129,0.4)]" 
                        : "bg-white/5 text-slate-400 border-white/10 group-hover:bg-white/10 group-hover:text-white"
                     )}>
                        {openIndex === idx ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                     </div>
                  </button>
                  <AnimatePresence initial={false}>
                     {openIndex === idx && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                       >
                          <div className="px-8 md:px-10 pb-8 md:pb-10 text-[16px] md:text-lg text-slate-400 leading-relaxed border-t border-white/5 pt-8 font-medium">
                             {faq.answer}
                             
                             <div className="mt-8 flex gap-3 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                                <div className="h-1 w-4 bg-emerald-500/50 rounded-full" />
                                <div className="h-1 w-2 bg-emerald-500/20 rounded-full" />
                             </div>
                          </div>
                       </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>
             ))}
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="mt-20 text-center p-10 glass-card rounded-[40px] border-emerald-500/10"
          >
             <p className="text-slate-400 font-bold mb-6 italic">{t("more")}</p>
             <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-black text-2xl tracking-tighter transition-colors underline underline-offset-8 decoration-emerald-500/30 hover:decoration-emerald-500">
               {t("cta")}
             </a>
          </motion.div>
       </div>
    </section>
  );
}
