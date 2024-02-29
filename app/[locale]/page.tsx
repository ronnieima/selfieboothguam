import Hero from "../_components/Hero";
import Services from "../_components/Services";
import Pricing from "../_components/Pricing";
import Achievements from "../_components/Achievements";
import CallToAction from "../_components/CallToAction";

const content = [
  {
    title: "Self-serve Touchscreen",
    description:
      "Capture moments your way with our Self-serve Touchscreen. Snap and share photos effortlessly using the convenience of a touchscreen.",
  },
  {
    title: "Custom Layouts",
    description:
      "Unique memories in every frame with our personalized layouts. Each event receives its own special touch, ensuring your photos match the spirit of the occasion.",
  },
  {
    title: "Themed Props",
    description:
      "Elevate your event with themed props. Each occasion comes to life with a unique collection of props, adding fun and creativity to every photo.",
  },
];
export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Services />
      <Achievements />
      <Pricing />
      <CallToAction />
    </main>
  );
}
