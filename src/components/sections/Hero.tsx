import React from "react";
import { motion } from "motion/react";
import { PulseRing } from "../ui/PulseRing";
import { TelegramIcon } from "../ui/Icons";
import { TELEGRAM_BOT_URL } from "../../constants";

export function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden py-24 px-6">
      {/* glow blobs */}
      <div className="absolute w-125 h-125 bg-[rgba(37,99,235,0.18)] rounded-full blur-[90px] pointer-events-none -top-25 -right-30 animate-[blobFloat_8s_ease-in-out_infinite]" />
      <div className="absolute w-100 h-100 bg-[rgba(0,201,177,0.15)] rounded-full blur-[90px] pointer-events-none -bottom-15 -left-20 animate-[blobFloat_10s_ease-in-out_infinite_reverse]" />
      <div className="absolute w-75 h-75 bg-[rgba(167,139,250,0.12)] rounded-full blur-[90px] pointer-events-none top-[40%] left-[50%] -translate-x-1/2 animate-[blobFloat_6s_ease-in-out_infinite_2s]" />

      <div className="relative z-5 text-center flex flex-col items-center gap-[1.8rem] max-w-190">
        {/* Mic pulse animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <PulseRing size={180} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-[clamp(2.4rem,7vw,4.5rem)] font-black leading-[1.2] text-white"
        >
          هر صدایی بفرست،
          <br />
          <span className="bg-linear-to-r from-[#00c9b1] via-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent bg-size-[200%_auto] animate-[gradientShift_4s_linear_infinite]">
            متن تحویل بگیر!
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <p className="text-[1.15rem] text-[#94a3b8] max-w-140 font-medium mb-6">
            ربات تلگرامی <strong className="text-[#00c9b1]">گفتار نویس</strong>{" "}
            ویس، فایل‌های صوتی و لینک‌های صوتی را با هوش مصنوعی Gemini با سرعت و
            دقت زیاد به متن تبدیل می‌کند.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[0.55rem] bg-linear-to-br from-[#2aabee] to-[#1a72c4] text-white font-black text-[1.15rem] px-[2.2rem] py-4 rounded-full transition-all duration-200 shadow-[0_6px_30px_rgba(42,171,238,0.35)] whitespace-nowrap hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(42,171,238,0.5)]"
          >
            <TelegramIcon size={22} />
            همین الان تست کن!
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-transparent text-[#94a3b8] font-bold text-[1.1rem] px-8 py-4 rounded-full border border-[rgba(99,179,237,0.2)] transition-all duration-200 hover:border-[#00c9b1] hover:text-[#00c9b1] hover:-translate-y-[2px]"
          >
            چطور کار می‌کنه؟ 🤔
          </a>
        </motion.div>
      </div>
    </section>
  );
}
