import React from "react";
import { MicIcon, TelegramIcon } from "../ui/Icons";
import { TELEGRAM_BOT_URL } from "../../constants";

export function Footer() {
  return (
    <footer className="bg-[#080f1e] border-t border-[rgba(99,179,237,0.12)] px-6 py-14 text-center flex flex-col items-center gap-[0.8rem]">
      <div className="flex items-center gap-[0.6rem] text-[1.2rem] font-black text-white">
        <div className="w-[38px] h-[38px] bg-gradient-to-br from-[#00c9b1] to-[#2563eb] rounded-[0.75rem] flex items-center justify-center text-white shadow-[0_0_18px_rgba(0,201,177,0.4)]">
          <MicIcon size={18} />
        </div>
        <span>گفتار نویس</span>
      </div>
      <p className="text-[#94a3b8] text-[1rem]">
        ساخته شده با ❤️ برای فارسی‌زبانان
      </p>
      <a
        href={TELEGRAM_BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[0.4rem] text-[#2aabee] font-bold text-[0.95rem] transition-colors duration-200 hover:text-white"
      >
        <TelegramIcon size={16} /> @SpeechToText313bot
      </a>
    </footer>
  );
}
