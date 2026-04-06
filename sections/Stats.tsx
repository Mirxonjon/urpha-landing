"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

function Counter({ value, suffix, duration = 2 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const t = useTranslations("Stats");

  const stats = [
    { label: t("students"), value: 2500, suffix: "+" },
    { label: t("graduates"), value: 1200, suffix: "+" },
    { label: t("roi"), value: 45, suffix: "%" },
    { label: t("traders"), value: 15, suffix: "+" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group relative p-4"
            >
              <div className="absolute inset-0 bg-emerald-500/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              
              <div className="text-4xl md:text-6xl font-black text-emerald-500 mb-4 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 group-hover:scale-110 tracking-tighter">
                 <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] group-hover:text-emerald-400 group-hover:tracking-[0.3em] transition-all duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background glow lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  );
}
