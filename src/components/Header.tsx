import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "作例", href: "#works" },
  { label: "サービス", href: "#service" },
  { label: "流れ", href: "#flow" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const barBackground = useTransform(
    scrollY,
    [0, 240],
    ["rgba(255,255,255,0.05)", "rgba(12,12,12,0.75)"]
  );
  const barBorder = useTransform(
    scrollY,
    [0, 240],
    ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.1)"]
  );

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <motion.div
        style={{ background: barBackground, borderColor: barBorder }}
        className="flex w-full max-w-5xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl backdrop-saturate-150 sm:px-8 sm:py-4"
      >
        <a href="#top" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" strokeWidth={2} />
          <span className="whitespace-nowrap text-xs font-medium tracking-wide sm:text-base sm:tracking-widest2">
            TNF WEB DESIGN OS
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_2px_rgba(255,107,61,0.4)] md:inline-block"
        >
          はじめる
        </a>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-3xl border border-white/15 bg-ink/95 p-6 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center text-base text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-[44px] items-center justify-center rounded-full bg-accent px-5 text-center text-sm font-medium text-ink"
            >
              はじめる
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
