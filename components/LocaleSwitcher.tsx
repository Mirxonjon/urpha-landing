"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname, routing } from "@/i18n/routing";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex items-center gap-1.5 p-1 glass rounded-lg">
      {routing.locales.map((cur) => (
        <button
          key={cur}
          onClick={() => onLocaleChange(cur)}
          disabled={isPending}
          className={cn(
            "px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 rounded-md",
            locale === cur
              ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              : "text-slate-400 hover:text-white hover:bg-white/5",
            isPending && "opacity-50 cursor-not-allowed"
          )}
        >
          {cur}
        </button>
      ))}
    </div>
  );
}
