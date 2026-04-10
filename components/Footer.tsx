"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Send, TrendingUp, Mail, Phone, MapPin, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { UrphaLogo } from "./UrphaLogo";

const Instagram = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const t = useTranslations("Navigation");
  const f = useTranslations("Footer");

  const socialLinks = [
    { icon: Send, href: "http://t.me/+7sJoHX5tY8wwNzRk", color: "hover:bg-blue-500/20 hover:text-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/urpha.capital/", color: "hover:bg-pink-600/20 hover:text-pink-400" },
  ];

  return (
    <footer className="pt-32 pb-16 bg-[#0A0A0B] border-t border-white/5 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10" />

       <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
             <div className="space-y-8">
                <Link href="/" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-[18px] flex items-center justify-center shadow-[0_10px_20px_rgba(255,255,255,0.1)] group-hover:rotate-6 transition-all duration-500">
                    <UrphaLogo className="text-black w-7 h-7" />
                  </div>
                  <span className="text-2xl font-black tracking-tighter text-white">
                    Urpha<span className="text-white">Capital</span>
                  </span>
                </Link>
                <p className="text-slate-400 text-[15px] leading-relaxed max-w-xs font-semibold italic opacity-80 decoration-emerald-500/20 underline underline-offset-4">
                   Moliyaviy erkinlik sari yo'lingizda professional va ishonchli hamkor. Biz bilan moliya dunyosining eng murakkab tushunchalarini osonlik bilan o'zlashtiring.
                </p>
                <div className="flex gap-4">
                   {socialLinks.map((item, idx) => (
                     <motion.a 
                       key={idx} 
                       href={item.href}
                       whileHover={{ y: -5, scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                       className={`w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center text-slate-400 border border-white/5 transition-all duration-300 shadow-xl ${item.color} hover:border-emerald-500/20`}
                     >
                       <item.icon size={22} strokeWidth={1.5} />
                     </motion.a>
                   ))}
                </div>
             </div>

             <div>
                <h4 className="text-white font-black text-xl mb-10 tracking-tight uppercase text-emerald-500/80">Kompaniya</h4>
                <ul className="space-y-6">
                   <li><Link href="#about" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">{t("about")}</Link></li>
                   <li><Link href="#courses" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">{t("courses")}</Link></li>
                   <li><Link href="#investment" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">{t("investment")}</Link></li>
                   <li><Link href="#blog" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">{t("blog")}</Link></li>
                </ul>
             </div>

             <div>
                <h4 className="text-white font-black text-xl mb-10 tracking-tight uppercase text-emerald-500/80">Yordam</h4>
                <ul className="space-y-6">
                   <li><Link href="#faq" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">Savollar (FAQ)</Link></li>
                   <li><Link href="#contact" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">{t("contact")}</Link></li>
                   <li><Link href="#" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">Maxfiylik Siyosati</Link></li>
                   <li><Link href="#" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">Shartnoma</Link></li>
                </ul>
             </div>

             <div>
                <h4 className="text-white font-black text-xl mb-10 tracking-tight uppercase text-emerald-500/80">Bog'lanish</h4>
               <div className="space-y-8">
                   <div className="flex items-start gap-5 text-slate-400 group cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                         <Phone size={18} strokeWidth={2.5} />
                      </div>
                      <div className="text-left font-bold tracking-tight">
                         <span className="block text-[10px] uppercase text-slate-600 tracking-[0.2em] mb-1">Menedjer</span>
                         <span className="text-white group-hover:text-emerald-500 transition-colors">+998 93 221 93 43</span>
                      </div>
                   </div>
                   <div className="flex items-start gap-5 text-slate-400 group cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                         <Mail size={18} strokeWidth={2.5} />
                      </div>
                      <div className="text-left font-bold tracking-tight">
                         <span className="block text-[10px] uppercase text-slate-600 tracking-[0.2em] mb-1">Email</span>
                         <span className="text-white group-hover:text-emerald-500 transition-colors uppercase">urphacapital@gmail.com</span>
                      </div>
                   </div>
                   <div className="flex items-start gap-5 text-slate-400 group cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                         <MapPin size={18} strokeWidth={2.5} />
                      </div>
                      <div className="text-left font-bold tracking-tight">
                         <span className="block text-[10px] uppercase text-slate-600 tracking-[0.2em] mb-1">Manzil</span>
                         <span className="text-white group-hover:text-emerald-500 transition-colors uppercase tracking-tight">Toshkent sh., Sergeli tumani</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
             <div className="text-slate-600 text-[11px] font-black uppercase tracking-[0.3em] leading-loose text-center md:text-left">
                {f("copyright")}
                <span className="block md:inline md:ml-4 text-[9px] opacity-40">Created by Antigravity AI for Excellence</span>
             </div>
             
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/5">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
                   <span className="text-[10px] text-emerald-400 uppercase font-black tracking-[0.2em]">All Systems Nominal</span>
                </div>
                <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">Ver 2.0.4 - 2024</div>
             </div>
          </div>
       </div>
    </footer>
  );
}
