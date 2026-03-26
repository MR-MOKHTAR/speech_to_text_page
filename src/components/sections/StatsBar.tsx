import React from "react";
import { FadeIn } from "../ui/FadeIn";
import { CountUp } from "../ui/CountUp";
import { stats } from "../../constants";

export function StatsBar() {
  return (
    <section className="flex justify-center gap-0 bg-card border-y border-border flex-wrap">
      {stats.map((s, i) => (
        <FadeIn
          key={i}
          delay={i * 0.15}
          className="flex-1 min-w-[160px] px-6 py-10 text-center border-l border-border last:border-l-0 hover:bg-muted/50 transition-colors duration-200"
        >
          <div className="text-[2.4rem] font-black bg-linear-to-br from-teal to-blue-400 bg-clip-text text-transparent">
            <CountUp target={s.num} suffix={s.suffix} />
          </div>
          <div className="text-[0.95rem] text-muted-foreground font-semibold mt-[0.3rem]">
            {s.label}
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
