"use client";
import { useLocale } from "next-intl";
import { TypeAnimation } from "react-type-animation";

const enText = [
  " Perfect for graduation parties.",
  5000,
  " Perfect for birthday parties.",
  5000,
  " Perfect for corporate events.",
  5000,
  " Perfect for all occasions!",
  5000,
  " Perfect for holiday parties.",
  5000,
  "Perfect for weddings.",
  5000,
];

const jpText = [
  "卒業パーティー",
  5000,
  " 誕生日パーティー",
  5000,
  "企業イベント",
  5000,
  "休日のパーティー",
  5000,
  "結婚式",
  5000,
];

function HeroTypingAnimation() {
  const locale = useLocale();
  return (
    <TypeAnimation
      sequence={locale === "en" ? enText : jpText}
      className="text-neutral-300 text-center mx-auto lg:mx-0 text-3xl"
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
}

export default HeroTypingAnimation;
