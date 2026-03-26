import React from "react";
import { FadeIn } from "../ui/FadeIn";
import { CheckIcon, TelegramIcon } from "../ui/Icons";
import { TELEGRAM_BOT_URL, steps } from "../../constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 max-w-[900px] mx-auto">
      <div className="bg-linear-to-br from-[#0a1628] to-[#0d1e3a] border border-border rounded-[3rem] px-10 py-14 relative overflow-hidden">
        <div className="absolute w-[350px] h-[350px] bg-[rgba(37,99,235,0.25)] rounded-full blur-[90px] pointer-events-none top-[-80px] left-[-100px] animate-[blobFloat_9s_ease-in-out_infinite]" />
        <div className="absolute w-[300px] h-[300px] bg-[rgba(0,201,177,0.2)] rounded-full blur-[90px] pointer-events-none bottom-[-60px] right-[-80px] animate-[blobFloat_7s_ease-in-out_infinite_reverse]" />
        <div className="relative z-2">
          <FadeIn>
            <h2 className="text-[clamp(1.7rem,4vw,2.4rem)] font-black text-white text-center mb-10">
              چطور استفاده کنیم؟ 🤔
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-[1.2rem] mb-10">
            {steps.map((s, i) => (
              <FadeIn
                key={i}
                delay={i * 0.15}
                className="flex items-start gap-[1.2rem] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] rounded-3xl  px-[1.6rem] py-[1.4rem] backdrop-blur-sm"
              >
                <div className="min-w-[52px] h-[52px] bg-linear-to-br from-teal to-blue rounded-2xl flex items-center justify-center text-[1.4rem] font-black text-white shrink-0 shadow-[0_4px_16px_rgba(0,201,177,0.3)]">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-extrabold text-white flex items-center gap-2 mb-[0.35rem]">
                    {s.title} <span>{s.emoji}</span>
                  </h3>
                  <p className="text-[#9bbbd4] text-[0.97rem]">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.65}>
            <div className="text-center">
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[0.55rem] bg-linear-to-br from-tg to-[#1a72c4] text-white font-black text-[1.2rem] px-10 py-[1.1rem] rounded-full transition-all duration-200 shadow-[0_6px_30px_rgba(42,171,238,0.35)] whitespace-nowrap hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(42,171,238,0.5)]"
              >
                <TelegramIcon size={24} />
                بزن بریم! 🚀
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
