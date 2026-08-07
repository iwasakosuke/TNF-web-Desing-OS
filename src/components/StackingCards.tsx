import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { type MouseEvent, useRef } from "react";
import { Building2, ShoppingBag, Users, Megaphone, type LucideIcon } from "lucide-react";

type CardData = {
  title: string;
  desc: string;
  tag: string;
  icon: LucideIcon;
  gradient: string;
};

const CARDS: CardData[] = [
  {
    title: "コーポレートサイト",
    desc: "会社の顔となるサイトを、AIが情報設計から仕上げまで一気通貫でつくります。",
    tag: "Case 01",
    icon: Building2,
    gradient: "linear-gradient(140deg, #1e1e1e 0%, #0c0c0c 70%)",
  },
  {
    title: "ECランディング",
    desc: "商品の魅力を伝える構成をAIが自動提案。売れる導線をすぐに形にできます。",
    tag: "Case 02",
    icon: ShoppingBag,
    gradient: "linear-gradient(140deg, #241a16 0%, #0c0c0c 70%)",
  },
  {
    title: "採用サイト",
    desc: "働く姿がイメージできるストーリーを、AIが文章と構成の両面から組み立てます。",
    tag: "Case 03",
    icon: Users,
    gradient: "linear-gradient(140deg, #1a1e20 0%, #0c0c0c 70%)",
  },
  {
    title: "サービスLP",
    desc: "伝えたいメッセージを、スクロールで惹き込む一本のストーリーに変換します。",
    tag: "Case 04",
    icon: Megaphone,
    gradient: "linear-gradient(140deg, #201a24 0%, #0c0c0c 70%)",
  },
];

function StackCard({ data, index }: { data: CardData; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.6]);

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const tiltSpring = { stiffness: 200, damping: 22, mass: 0.6 };
  const hoverTiltX = useSpring(useTransform(pointerY, [0, 1], [3, -3]), tiltSpring);
  const hoverTiltY = useSpring(useTransform(pointerX, [0, 1], [-3, 3]), tiltSpring);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  const Icon = data.icon;

  return (
    <div
      ref={ref}
      className="sticky h-[68vh] w-full px-4 sm:h-[76vh] sm:px-6"
      style={{ top: `calc(4rem + ${index * 1.5}rem)`, perspective: 1600 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          scale,
          opacity,
          rotateX: prefersReducedMotion ? 0 : hoverTiltX,
          rotateY: prefersReducedMotion ? 0 : hoverTiltY,
        }}
        className="group relative mx-auto flex h-full w-full max-w-4xl origin-top flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 p-6 shadow-2xl shadow-black/50 transition-colors duration-300 hover:border-accent/30 sm:rounded-[2rem] sm:p-10 lg:p-14"
      >
        <div
          className="absolute inset-0"
          style={{ background: data.gradient }}
        />
        {/* public/cases/0X.jpg を配置すると背景として表示される */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url('/cases/${data.tag.slice(-2)}.jpg')` }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, rgba(255,107,61,0.12) 0%, rgba(255,107,61,0) 70%)",
            }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs tracking-widest2 text-accent">
            {data.tag}
          </span>
          <Icon className="h-7 w-7 text-white/40 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </div>

        <div className="relative z-10">
          <h3 className="text-balance text-2xl font-bold sm:text-4xl lg:text-5xl">{data.title}</h3>
          <p className="text-pretty mt-4 max-w-lg text-sm leading-loose text-white/60 sm:mt-6 sm:text-lg">
            {data.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackingCards() {
  return (
    <section id="service" className="relative w-full bg-ink pb-28 pt-28 sm:pb-40 sm:pt-40">
      <div className="mx-auto mb-16 max-w-5xl px-6 text-center">
        <p className="text-xs tracking-widest2 text-white/50">USE CASES</p>
        <h2 className="text-balance mt-4 text-3xl font-bold sm:text-4xl">
          どんなサイトも、AIひとつで。
        </h2>
      </div>

      {CARDS.map((card, i) => (
        <StackCard key={card.tag} data={card} index={i} />
      ))}
    </section>
  );
}
