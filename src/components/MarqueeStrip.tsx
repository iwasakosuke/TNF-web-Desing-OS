import { motion, useReducedMotion } from "framer-motion";
import TiltCard from "./TiltCard";

const GRADIENTS = [
  "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
  "linear-gradient(135deg, #202020 0%, #141414 100%)",
  "linear-gradient(135deg, #262626 0%, #0c0c0c 100%)",
  "linear-gradient(135deg, #1c1c1c 0%, #302020 100%)",
];

const WORKS = [
  { title: "AIブランドサイト", tag: "Work 01", image: "/works/01.jpg" },
  { title: "ECランディング", tag: "Work 02", image: "/works/02.jpg" },
  { title: "コーポレートLP", tag: "Work 03", image: "/works/03.jpg" },
  { title: "プロダクト紹介", tag: "Work 04", image: "/works/04.jpg" },
  { title: "採用サイト", tag: "Work 05", image: "/works/05.jpg" },
  { title: "イベントLP", tag: "Work 06", image: "/works/06.jpg" },
];

function Card({
  title,
  tag,
  image,
  index,
}: {
  title: string;
  tag: string;
  image: string;
  index: number;
}) {
  return (
    <TiltCard
      maxTilt={8}
      className="group h-56 w-[78vw] shrink-0 sm:h-72 sm:w-[24rem] lg:h-80 lg:w-[28rem]"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30 transition-shadow duration-300 group-hover:border-accent/40 group-hover:shadow-accent/10">
        <div
          className="absolute inset-0"
          style={{ background: GRADIENTS[index % GRADIENTS.length] }}
        />
        {/* public/works/0X.jpg を配置すると自動的にここへ表示される */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-5 sm:p-6">
          <p className="text-xs tracking-widest2 text-accent">{tag}</p>
          <p className="mt-2 text-lg font-medium sm:text-xl">{title}</p>
        </div>
      </div>
    </TiltCard>
  );
}

export default function MarqueeStrip() {
  const prefersReducedMotion = useReducedMotion();
  const loop = [...WORKS, ...WORKS];

  return (
    <section id="works" className="relative w-full overflow-hidden bg-ink py-24 sm:py-36">
      <div className="mx-auto mb-12 max-w-5xl px-6 text-center sm:mb-14">
        <p className="text-xs tracking-widest2 text-white/50">SELECTED WORKS</p>
        <h2 className="text-balance mt-4 text-2xl font-bold sm:text-4xl">
          AIがつくった、いくつもの作例。
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent sm:w-40" />

        <motion.div
          className="flex gap-5 px-6 sm:gap-6"
          animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {loop.map((work, i) => (
            <Card key={`${work.tag}-${i}`} {...work} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
