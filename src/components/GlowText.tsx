import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const TEXT = "誰でも、つくり手になれる。";

function Char({
  char,
  progress,
  range,
  reduceMotion,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduceMotion: boolean;
}) {
  const color = useTransform(
    progress,
    range,
    ["rgba(255,255,255,0.12)", "#ffffff"]
  );
  const textShadow = useTransform(
    progress,
    range,
    ["0 0 0px rgba(255,107,61,0)", "0 0 22px rgba(255,107,61,0.85)"]
  );
  const rotateX = useTransform(progress, range, [45, 0]);
  const y = useTransform(progress, range, [14, 0]);

  return (
    <motion.span
      style={{
        color,
        textShadow,
        rotateX: reduceMotion ? 0 : rotateX,
        y: reduceMotion ? 0 : y,
        display: "inline-block",
        transformStyle: "preserve-3d",
      }}
    >
      {char === " " ? " " : char}
    </motion.span>
  );
}

export default function GlowText() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const chars = Array.from(TEXT);
  const windowSize = 3;

  return (
    <section ref={containerRef} className="relative h-[180vh] w-full bg-ink">
      <div
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6"
        style={{ perspective: 800 }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl sm:h-[28rem] sm:w-[28rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,61,0.14) 0%, rgba(255,107,61,0) 70%)",
          }}
        />
        <p className="relative max-w-4xl text-center text-3xl font-bold leading-relaxed tracking-wide sm:text-5xl md:text-6xl">
          {chars.map((char, i) => {
            const start = i / chars.length;
            const end = Math.min(1, start + windowSize / chars.length);
            return (
              <Char
                key={i}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
                reduceMotion={Boolean(prefersReducedMotion)}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
