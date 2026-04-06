"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, LineChart, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: "literacy",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "courses",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-400",
  },
  {
    id: "copytrading",
    icon: LineChart,
    color: "from-amber-400 to-orange-500",
  },
];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="section-padding bg-[#0A0A0B] relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            {t("title")}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {services.map((service, idx) => (
             <motion.div
               key={service.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="glass-card group p-10 rounded-[32px] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
             >
               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.03] blur-2xl group-hover:opacity-10 transition-opacity duration-700`} />
               
               <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/5 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                 <service.icon size={32} className="text-emerald-400 group-hover:text-emerald-500 transition-colors" />
               </div>
               
               <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-white group-hover:text-emerald-400 transition-colors duration-500 leading-tight">
                 {t(`${service.id}.title`)}
               </h3>
               
               <p className="text-slate-400 text-lg leading-relaxed mb-10 group-hover:text-slate-300 transition-colors duration-500">
                 {t(`${service.id}.description`)}
               </p>
               
               <Button variant="ghost" className="p-0 text-emerald-400 hover:text-emerald-300 font-bold tracking-wide uppercase text-xs flex gap-2 group-hover:gap-3 transition-all">
                  {t("more")}
                  <MoveRight size={16} />
               </Button>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
