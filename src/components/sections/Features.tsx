import React from "react";
import { FadeIn } from "../ui/FadeIn";
import { features } from "../../constants";

export function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-[1200px] mx-auto">
      <FadeIn>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black text-white mb-[0.7rem]">
            چرا <span className="text-[#00c9b1]">گفتار نویس</span>؟ 🌟
          </h2>
          <p className="text-[#94a3b8] text-[1.1rem] font-medium">
            ویژگی‌هایی که ما رو متمایز می‌کنه
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {features.map((f, i) => (
          <FadeIn
            key={i}
            delay={i * 0.08}
            className="bg-[#0d1629] border border-[rgba(99,179,237,0.12)] rounded-[2rem] p-8 transition-all duration-300 animate-[cardBreath_4s_ease-in-out_infinite] hover:border-[rgba(0,201,177,0.35)] hover:shadow-[0_16px_50px_rgba(0,201,177,0.12)] hover:-translate-y-[6px]"
          >
            <div className="text-[2.8rem] mb-[1.2rem]">{f.emoji}</div>
            <h3 className="text-[1.3rem] font-extrabold text-white mb-[0.6rem]">
              {f.title}
            </h3>
            <p className="text-[#94a3b8] text-[0.97rem] leading-[1.7]">
              {f.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
