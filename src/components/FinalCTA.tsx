import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center overflow-hidden bg-ink px-6 pb-16 pt-28 sm:pt-44"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(255,107,61,0.16) 0%, rgba(255,107,61,0) 70%)",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,61,0.22) 0%, rgba(255,107,61,0) 70%)",
        }}
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { rotate: [0, 12, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Sparkles className="h-8 w-8 text-accent" strokeWidth={1.5} />
        </motion.div>
        <h2 className="text-balance text-3xl font-bold leading-snug sm:text-6xl">
          さあ、AIと
          <br />
          サイトをつくろう。
        </h2>
        <p className="text-pretty mt-8 text-base leading-loose text-white/60 sm:text-xl">
          アイデアがあれば、それだけで十分です。
          <br className="hidden sm:block" />
          今日から、あなたも「つくり手」になれます。
        </p>

        <a
          href="mailto:hello@example.com"
          className="group relative mt-12 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-accent-400 to-accent-600 px-9 py-4 text-base font-medium text-ink shadow-[0_0_0_0_rgba(255,107,61,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_6px_rgba(255,107,61,0.5)] sm:mt-14 sm:px-10 sm:py-5 sm:text-lg"
        >
          無料で相談する
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      <div className="relative z-10 mt-24 flex w-full max-w-5xl flex-col items-center gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:mt-32 sm:flex-row sm:justify-between">
        <span>© 2026 TNF WEB DESIGN OS</span>
        <span>AIで動くWebサイトを、すべての人へ。</span>
      </div>
    </section>
  );
}
