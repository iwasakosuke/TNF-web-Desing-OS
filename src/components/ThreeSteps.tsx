import { motion } from "framer-motion";
import { MessageSquareText, Wand2, Rocket, type LucideIcon } from "lucide-react";

type Step = {
  no: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    no: "01",
    title: "伝える",
    desc: "つくりたいサイトのイメージを、言葉で伝えるだけ。ヒアリングもラフもいりません。",
    icon: MessageSquareText,
  },
  {
    no: "02",
    title: "AIが形にする",
    desc: "構成・デザイン・コードまで、AIが自動で組み立てます。数分でサイトが立ち上がります。",
    icon: Wand2,
  },
  {
    no: "03",
    title: "公開する",
    desc: "気に入ったらそのまま公開。更新も追加も、同じようにAIに伝えるだけです。",
    icon: Rocket,
  },
];

export default function ThreeSteps() {
  return (
    <section id="flow" className="relative w-full bg-paper py-24 text-ink sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
        >
          <p className="text-xs tracking-widest2 text-ink/40">HOW IT WORKS</p>
          <h2 className="text-balance mt-4 text-3xl font-bold sm:text-5xl">
            3ステップで、公開まで。
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-14 sm:gap-16 md:grid-cols-3 md:gap-10">
          {/* ステップをつなぐライン：md以上のみ、スクロールで左から右へ描画される */}
          <svg
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[3.1rem] hidden w-full md:block"
            height="4"
            preserveAspectRatio="none"
            viewBox="0 0 100 4"
          >
            <motion.line
              x1="16.5"
              y1="2"
              x2="83.5"
              y2="2"
              stroke="#0C0C0C"
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="1 3"
              vectorEffect="non-scaling-stroke"
            />
            <motion.line
              x1="16.5"
              y1="2"
              x2="83.5"
              y2="2"
              stroke="#ff6b3d"
              strokeWidth="1.4"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />
          </svg>

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col items-start"
              >
                <span className="text-6xl font-bold text-ink/10 sm:text-7xl">
                  {step.no}
                </span>
                <motion.div
                  whileHover={{ rotateY: 15, rotateX: -8, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative -mt-6 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-ink shadow-lg shadow-ink/20"
                >
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                </motion.div>
                <h3 className="text-2xl font-bold sm:text-3xl">{step.title}</h3>
                <p className="text-pretty mt-4 text-base leading-loose text-ink/60 sm:text-lg">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
