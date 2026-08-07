import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center overflow-hidden bg-ink px-6 pb-16 pt-32 sm:pt-44"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(255,107,61,0.16) 0%, rgba(255,107,61,0) 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <Sparkles className="mb-8 h-8 w-8 text-accent" strokeWidth={1.5} />
        <h2 className="text-4xl font-bold leading-snug sm:text-6xl">
          さあ、AIと
          <br className="sm:hidden" />
          サイトをつくろう。
        </h2>
        <p className="mt-8 text-lg leading-loose text-white/60 sm:text-xl">
          アイデアがあれば、それだけで十分です。
          <br className="hidden sm:block" />
          今日から、あなたも「つくり手」になれます。
        </p>

        <a
          href="mailto:hello@example.com"
          className="group mt-14 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-lg font-medium text-ink transition-transform hover:scale-105"
        >
          無料で相談する
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      <div className="relative z-10 mt-32 flex w-full max-w-5xl flex-col items-center gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:justify-between">
        <span>© 2026 TNF WEB DESIGN OS</span>
        <span>AIで動くWebサイトを、すべての人へ。</span>
      </div>
    </section>
  );
}
