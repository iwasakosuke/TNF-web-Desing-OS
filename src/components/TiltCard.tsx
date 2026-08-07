import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { type ReactNode, type MouseEvent, useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  style?: Record<string, string | number | MotionValue<number>>;
  maxTilt?: number;
};

export default function TiltCard({
  children,
  className = "",
  glow = true,
  style,
  maxTilt = 10,
}: TiltCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]),
    { stiffness: 220, damping: 20, mass: 0.6 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]),
    { stiffness: 220, damping: 20, mass: 0.6 }
  );
  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
          ...style,
        }}
        className="relative h-full w-full"
      >
        {glow && !prefersReducedMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={
              {
                "--x": glowX,
                "--y": glowY,
                background:
                  "radial-gradient(320px circle at var(--x) var(--y), rgba(255,107,61,0.18), transparent 65%)",
              } as Record<string, string | MotionValue<string>>
            }
          />
        )}
        {children}
      </motion.div>
    </div>
  );
}
