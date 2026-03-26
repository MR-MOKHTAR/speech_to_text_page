import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MicIcon, TelegramIcon } from "../ui/Icons";
import { TELEGRAM_BOT_URL } from "../../constants";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(5,13,26,0.8)] backdrop-blur-[18px] border-b border-[rgba(99,179,237,0.12)]">
      <div className="max-w-[1200px] mx-auto px-6 h-[70px] flex items-center gap-6">
        <a
          className="flex items-center gap-[0.6rem] font-black text-[1.25rem] text-white flex-1"
          href="#"
        >
          <div className="w-[38px] h-[38px] bg-gradient-to-br from-[#00c9b1] to-[#2563eb] rounded-[0.75rem] flex items-center justify-center text-white shadow-[0_0_18px_rgba(0,201,177,0.4)]">
            <MicIcon size={20} />
          </div>
          <span>گفتار نویس</span>
        </a>

        <div className="hidden sm:flex gap-8">
          <a
            href="#features"
            className="font-bold text-[0.95rem] text-[#94a3b8] hover:text-[#00c9b1] transition-colors duration-200"
          >
            ✨ قابلیت‌ها
          </a>
          <a
            href="#how-it-works"
            className="font-bold text-[0.95rem] text-[#94a3b8] hover:text-[#00c9b1] transition-colors duration-200"
          >
            🎯 راهنما
          </a>
        </div>

        <a
          className="inline-flex items-center gap-[0.4rem] bg-[#2aabee] text-white font-extrabold text-[0.9rem] px-[1.2rem] py-[0.55rem] rounded-full transition-all duration-200 whitespace-nowrap shadow-[0_4px_18px_rgba(42,171,238,0.3)] hover:bg-[#1c8fc4] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(42,171,238,0.4)]"
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon size={18} />
          <span>شروع کن</span>
        </a>

        <button
          className="sm:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-[6px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="منو"
        >
          <span className="block w-[24px] h-[2px] bg-[#e2e8f0] rounded-[2px]" />
          <span className="block w-[24px] h-[2px] bg-[#e2e8f0] rounded-[2px]" />
          <span className="block w-[24px] h-[2px] bg-[#e2e8f0] rounded-[2px]" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="overflow-hidden border-t border-[rgba(99,179,237,0.12)] bg-[rgba(8,15,30,0.98)] flex flex-col px-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="py-[0.9rem] font-bold text-[#94a3b8] border-b border-[rgba(99,179,237,0.12)]"
            >
              ✨ قابلیت‌ها
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="py-[0.9rem] font-bold text-[#94a3b8] border-b border-[rgba(99,179,237,0.12)]"
            >
              🎯 راهنما
            </a>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[0.4rem] bg-[#2aabee] text-white font-extrabold text-[0.9rem] px-[1.2rem] py-[0.55rem] rounded-full transition-all duration-200 whitespace-nowrap shadow-[0_4px_18px_rgba(42,171,238,0.3)] hover:bg-[#1c8fc4] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(42,171,238,0.4)] my-4 border-none justify-center"
            >
              <TelegramIcon size={18} />
              شروع کن
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
