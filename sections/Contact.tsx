"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  const t = useTranslations("Contact");
  
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = "8794348341:AAGBj2OrPJEcSRIs1nM3cHyG4ScvT9Le7E4";
    const chatId = "1795748595";
    const text = `Yangi Xabar (Urpha Landing) 📩\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n💬 Xabar: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden py-24 md:py-32">
       {/* Background decorative glow elements */}
       <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10" />
       <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10" />

       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
             <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-8 border border-emerald-500/20 shadow-xl"
             >
                <MessageSquare size={32} className="text-emerald-400" />
             </motion.div>
             
             <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                {t("title").split(" ").map((word, i) => (
                  <span key={i} className={i === 1 || i === 2 ? "text-emerald-500 italic" : ""}>
                    {word}{" "}
                  </span>
                ))}
             </h2>
             <p className="text-slate-400 text-xl font-medium mb-16 max-w-lg leading-relaxed">
                {t("description")}
             </p>

             <div className="space-y-10">
                {[
                  { icon: Phone, label: t("phone"), val: "+998 93 221 93 43" },
                  { icon: Mail, label: t("email"), val: "urphacapital@gmail.com" },
                  { icon: MapPin, label: t("address"), val: t("address_val") },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex gap-8 items-center group cursor-pointer"
                  >
                     <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 border border-white/5 group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                        <item.icon size={26} strokeWidth={1.5} />
                     </div>
                     <div>
                        <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">{item.label}</h4>
                        <p className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight">{item.val}</p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50, rotateY: 15 }}
             whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="glass-card p-12 md:p-16 rounded-[64px] border-white/5 relative overflow-hidden group shadow-[0_0_100px_rgba(16,185,129,0.05)] perspective-1000"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
             <h3 className="text-3xl font-black mb-10 tracking-tight leading-tight relative z-10">{t("form_title")}</h3>
             
             <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t("label_name")}</label>
                      <input type="text" placeholder={t("placeholder_name")} required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-7 py-5 focus:border-emerald-500/50 focus:bg-white/[0.05] outline-none transition-all duration-300 text-white font-medium placeholder:text-slate-700 hover:border-white/10" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t("label_phone")}</label>
                      <input type="tel" placeholder={t("placeholder_phone")} required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-7 py-5 focus:border-emerald-500/50 focus:bg-white/[0.05] outline-none transition-all duration-300 text-white font-medium placeholder:text-slate-700 hover:border-white/10" />
                   </div>
                </div>
                
                <div className="space-y-3">
                   <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t("label_message")}</label>
                   <textarea rows={4} placeholder={t("placeholder_message")} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-7 py-5 focus:border-emerald-500/50 focus:bg-white/[0.05] outline-none transition-all duration-300 text-white font-medium placeholder:text-slate-700 resize-none hover:border-white/10"></textarea>
                </div>
                
                <Button disabled={loading} variant="primary" size="lg" className="w-full h-[70px] text-lg font-black rounded-2xl mt-4 relative overflow-hidden group/btn shadow-[0_15px_30px_rgba(16,185,129,0.2)]">
                   <span className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? "Yuborilmoqda..." : success ? "Muvaffaqiyatli yuborildi!" : t("button")}
                      {!loading && !success && <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />}
                   </span>
                </Button>
                
                <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest pt-4 opacity-50">
                   {t("footer")}
                </p>
             </form>
          </motion.div>
       </div>
    </section>
  );
}
