import React from "react";

export function SoundWave() {
  return (
    <div className="flex items-center gap-[5px] h-[48px]" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="block w-[5px] bg-gradient-to-b from-[#00c9b1] to-[#2563eb] rounded-[4px] animate-[waveBounce_1.2s_ease-in-out_infinite]"
          style={{
            animationDelay: `${i * 0.08}s`,
            height: [14, 22, 36, 28, 44, 32, 48, 36, 44, 28, 22, 14][i],
          }}
        />
      ))}
    </div>
  );
}
