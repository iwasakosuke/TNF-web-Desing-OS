import { motion } from "framer-motion";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "作例", href: "#works" },
  { label: "サービス", href: "#service" },
  { label: "流れ", href: "#flow" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-xl backdrop-saturate-150 sm:px-8 sm:py-4">
        <a href="#top" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" strokeWidth={2} />
          <span className="text-sm font-medium tracking-widest2 sm:text-base">
            TNF WEB DESIGN OS
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-105 md:inline-block"
        >
          はじめる
        </a>

        <button
          type="button"
          aria-label="メニューを開く"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/15 p-2 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-3xl border border-white/15 bg-ink/90 p-6 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-ink"
            >
              はじめる
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
