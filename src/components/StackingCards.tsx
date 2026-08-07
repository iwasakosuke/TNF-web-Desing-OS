import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.6]);
  const Icon = data.icon;

  return (
    <div
      ref={ref}
      className="sticky h-[78vh] w-full px-6"
      style={{ top: `${5 + index * 2.5}rem` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto flex h-full w-full max-w-4xl origin-top flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 p-10 shadow-2xl shadow-black/50 sm:p-14"
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
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs tracking-widest2 text-accent">
            {data.tag}
          </span>
          <Icon className="h-8 w-8 text-white/40" strokeWidth={1.5} />
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl font-bold sm:text-5xl">{data.title}</h3>
          <p className="mt-6 max-w-lg text-base leading-loose text-white/60 sm:text-lg">
            {data.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackingCards() {
  return (
    <section className="relative w-full bg-ink pb-28 pt-28 sm:pb-40 sm:pt-40">
      <div className="mx-auto mb-16 max-w-5xl px-6 text-center">
        <p className="text-xs tracking-widest2 text-white/50">USE CASES</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          どんなサイトも、AIひとつで。
        </h2>
      </div>

      {CARDS.map((card, i) => (
        <StackCard key={card.tag} data={card} index={i} />
      ))}
    </section>
  );
}
