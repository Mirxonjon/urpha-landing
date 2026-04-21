"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations("Contact");
  
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = "8794348341:AAGBj2OrPJEcSRIs1nM3cHyG4ScvT9Le7E4";
    const chatId = "1723738427";
    const text = `Yangi Xabar (Urpha Landing) 📩\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n💬 Xabar: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#050505]/80 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="w-full max-w-xl bg-[#0F0F11] border border-white/5 rounded-[40px] shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-black mb-10 tracking-tight text-white">{t("form_title")}</h3>
                
                <form className="space-y-7" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t("label_name")}</label>
                      <input type="text" placeholder={t("placeholder_name")} required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4.5 h-[60px] focus:border-emerald-500/50 focus:bg-white/[0.04] outline-none transition-all duration-300 text-white font-medium placeholder:text-slate-700 hover:border-white/10" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t("label_phone")}</label>
                      <input type="tel" placeholder={t("placeholder_phone")} required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4.5 h-[60px] focus:border-emerald-500/50 focus:bg-white/[0.04] outline-none transition-all duration-300 text-white font-medium placeholder:text-slate-700 hover:border-white/10" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{t("label_message")}</label>
                    <textarea rows={4} placeholder={t("placeholder_message")} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 focus:border-emerald-500/50 focus:bg-white/[0.04] outline-none transition-all duration-300 text-white font-medium placeholder:text-slate-700 resize-none hover:border-white/10"></textarea>
                  </div>
                  
                  <Button disabled={loading} variant="primary" size="lg" className="w-full h-[64px] text-lg font-black rounded-2xl mt-2 relative overflow-hidden group/btn shadow-[0_15px_30px_rgba(16,185,129,0.2)]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? "Yuborilmoqda..." : success ? "Muvaffaqiyatli yuborildi!" : t("button")}
                      {!loading && !success && <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />}
                    </span>
                  </Button>
                  
                  <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest pt-2 opacity-50">
                    {t("footer")}
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
