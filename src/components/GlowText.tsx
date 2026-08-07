import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const TEXT = "誰でも、つくり手になれる。";

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
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

  return (
    <motion.span style={{ color, textShadow }} className="inline-block">
      {char === " " ? " " : char}
    </motion.span>
  );
}

export default function GlowText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const chars = Array.from(TEXT);
  const windowSize = 3;

  return (
    <section
      ref={containerRef}
      className="relative h-[180vh] w-full bg-ink"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6">
        <p className="max-w-4xl text-center text-3xl font-bold leading-relaxed tracking-wide sm:text-5xl md:text-6xl">
          {chars.map((char, i) => {
            const start = i / chars.length;
            const end = Math.min(1, start + windowSize / chars.length);
            return (
              <Char
                key={i}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
