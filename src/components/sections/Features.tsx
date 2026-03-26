import React from "react";
import { FadeIn } from "../ui/FadeIn";
import { features } from "../../constants";

export function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-[1200px] mx-auto">
      <FadeIn>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black text-white mb-[0.7rem]">
            چرا <span className="text-teal">گفتار نویس</span>؟ 🌟
          </h2>
          <p className="text-muted text-[1.1rem] font-medium">
            ویژگی‌هایی که ما رو متمایز می‌کنه
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {features.map((f, i) => (
          <FadeIn
            key={i}
            delay={i * 0.08}
            className={`relative overflow-hidden bg-card border ${
              (f as any).highlight 
                ? "border-teal/60 shadow-[0_0_25px_rgba(0,201,177,0.15)] ring-1 ring-teal/50 z-10 scale-[1.02]" 
                : "border-border"
            } rounded-4xl p-8 transition-all duration-300 animate-[cardBreath_4s_ease-in-out_infinite] hover:border-teal/50 hover:shadow-[0_16px_50px_rgba(0,201,177,0.2)] hover:-translate-y-[6px]`}
          >
            {(f as any).highlight && (
              <div className="absolute top-0 left-0 bg-teal text-background text-sm font-black px-4 py-1 rounded-br-2xl shadow-md z-10">
                ⭐ ویژه
              </div>
            )}
            <div className={`text-[2.8rem] mb-[1.2rem] ${(f as any).highlight ? "animate-pulse" : ""}`}>
              {f.emoji}
            </div>
            <h3 className={`text-[1.3rem] font-extrabold ${(f as any).highlight ? "text-teal" : "text-white"} mb-[0.6rem]`}>
              {f.title}
            </h3>
            <p className="text-muted text-[0.97rem] leading-[1.7]">{f.desc}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
