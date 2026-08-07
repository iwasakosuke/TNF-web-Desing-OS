import { motion } from "framer-motion";

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
    <div className="relative h-64 w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-80 sm:w-[28rem]">
      <div
        className="absolute inset-0"
        style={{ background: GRADIENTS[index % GRADIENTS.length] }}
      />
      {/* public/works/0X.jpg を配置すると自動的にここへ表示される */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <p className="text-xs tracking-widest2 text-accent">{tag}</p>
        <p className="mt-2 text-xl font-medium">{title}</p>
      </div>
    </div>
  );
}

export default function MarqueeStrip() {
  const loop = [...WORKS, ...WORKS];

  return (
    <section id="works" className="relative w-full overflow-hidden bg-ink py-28 sm:py-36">
      <div className="mx-auto mb-14 max-w-5xl px-6 text-center">
        <p className="text-xs tracking-widest2 text-white/50">SELECTED WORKS</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          AIがつくった、いくつもの作例。
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-40" />

        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
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
