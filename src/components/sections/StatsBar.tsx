import React from "react";
import { FadeIn } from "../ui/FadeIn";
import { CountUp } from "../ui/CountUp";
import { stats } from "../../constants";

export function StatsBar() {
  return (
    <section className="flex justify-center gap-0 bg-[#0d1629] border-y border-[rgba(99,179,237,0.12)] flex-wrap">
      {stats.map((s, i) => (
        <FadeIn
          key={i}
          delay={i * 0.15}
          className="flex-1 min-w-[160px] px-6 py-10 text-center border-l border-[rgba(99,179,237,0.12)] last:border-l-0 hover:bg-[rgba(0,201,177,0.04)] transition-colors duration-200"
        >
          <div className="text-[2.4rem] font-black bg-gradient-to-br from-[#00c9b1] to-[#60a5fa] bg-clip-text text-transparent">
            <CountUp target={s.num} suffix={s.suffix} />
          </div>
          <div className="text-[0.95rem] text-[#94a3b8] font-semibold mt-[0.3rem]">
            {s.label}
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
