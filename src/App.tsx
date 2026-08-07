import Header from "./components/Header";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import GlowText from "./components/GlowText";
import StackingCards from "./components/StackingCards";
import ThreeSteps from "./components/ThreeSteps";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-ink text-white">
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <GlowText />
        <StackingCards />
        <ThreeSteps />
        <FinalCTA />
      </main>
    </div>
  );
}
