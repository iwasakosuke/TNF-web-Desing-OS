import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { type MouseEvent, useRef } from "react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springOpts = { stiffness: 60, damping: 20, mass: 0.6 };
  const parallaxX = useSpring(useTransform(pointerX, [0, 1], [-16, 16]), springOpts);
  const parallaxY = useSpring(useTransform(pointerY, [0, 1], [-12, 12]), springOpts);
  const tiltX = useSpring(useTransform(pointerY, [0, 1], [4, -4]), springOpts);
  const tiltY = useSpring(useTransform(pointerX, [0, 1], [-4, 4]), springOpts);
  const parallaxXInv = useTransform(parallaxX, (v) => v * -0.7);
  const parallaxYInv = useTransform(parallaxY, (v) => v * -0.7);

  function handlePointerMove(e: MouseEvent<HTMLElement>) {
    if (prefersReducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative flex h-[100svh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-ink"
      style={{ perspective: 1400 }}
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

      {/* アンビエントの光の玉：奥行きを出すため、それぞれ異なる速度で漂う */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[18%] h-56 w-56 rounded-full blur-3xl sm:h-80 sm:w-80"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,61,0.35) 0%, rgba(255,107,61,0) 70%)",
          x: prefersReducedMotion ? 0 : parallaxX,
          y: prefersReducedMotion ? 0 : parallaxY,
        }}
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] right-[10%] h-64 w-64 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
          x: prefersReducedMotion ? 0 : parallaxXInv,
          y: prefersReducedMotion ? 0 : parallaxYInv,
        }}
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* 差し替え用レイヤー：public/hero.png を配置するとここに表示され、ゆっくり拡大する */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
        initial={{ scale: 1 }}
        animate={prefersReducedMotion ? { scale: 1 } : { scale: 1.12 }}
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

      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : tiltX,
          rotateY: prefersReducedMotion ? 0 : tiltY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-5 text-[11px] font-medium tracking-widest2 text-white/60 sm:mb-6 sm:text-sm"
        >
          AI WEB DESIGN OS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="text-[2.75rem] font-bold leading-[1.3] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          AIが、
          <br />
          Webサイトを
          <br />
          <span className="bg-gradient-to-r from-white via-white to-accent-300 bg-clip-text text-transparent">
            動かす。
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-pretty mt-8 max-w-xl text-base leading-loose text-white/70 sm:mt-10 sm:text-xl"
        >
          デザインも、コードも、更新も。
          <br className="hidden sm:block" />
          AIと一緒につくる、まったく新しいサイト制作のかたち。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 sm:mt-14"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-accent-400 to-accent-600 px-8 py-4 text-base font-medium text-ink shadow-[0_0_0_0_rgba(255,107,61,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_36px_4px_rgba(255,107,61,0.45)] sm:px-9 sm:text-lg"
          >
            無料で試してみる
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.4 },
          y: prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50 sm:bottom-8"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
