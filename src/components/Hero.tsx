import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[720px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      {/* 背景：画像未設置時の仮グラデーション。public/hero.png を置くと自動的に上へ重なる */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, #262626 0%, #141414 45%, #0C0C0C 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 40% at 80% 85%, rgba(255,107,61,0.25) 0%, rgba(255,107,61,0) 70%)",
        }}
      />

      {/* 差し替え用レイヤー：public/hero.png を配置するとここに表示され、ゆっくり拡大する */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* 可読性のためのオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 text-xs font-medium tracking-widest2 text-white/60 sm:text-sm"
        >
          AI WEB DESIGN OS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="text-5xl font-bold leading-[1.3] tracking-tight sm:text-7xl md:text-8xl"
        >
          AIが、
          <br />
          Webサイトを
          <br />
          動かす。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 max-w-xl text-lg leading-loose text-white/70 sm:text-xl"
        >
          デザインも、コードも、更新も。
          <br className="hidden sm:block" />
          AIと一緒につくる、まったく新しいサイト制作のかたち。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-9 py-4 text-base font-medium text-ink transition-transform hover:scale-105 sm:text-lg"
          >
            無料で試してみる
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.4 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
