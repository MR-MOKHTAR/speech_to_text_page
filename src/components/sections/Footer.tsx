import React from "react";
import { TelegramIcon } from "../ui/Icons";
import { TELEGRAM_BOT_URL } from "../../constants";

export function Footer() {
  return (
    <footer className="bg-bg2 border-t border-border px-6 py-6 text-center flex flex-col items-center gap-[0.8rem]">
      <p className="text-muted text-[1rem]">
        ساخته شده با ❤️ برای فارسی‌زبانان
      </p>
      <a
        href={TELEGRAM_BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-[0.4rem] text-tg font-bold text-[0.95rem] transition-colors duration-200 hover:text-white dir-ltr"
      >
        <TelegramIcon size={16} /> @SpeechToText313bot
      </a>
    </footer>
  );
}
