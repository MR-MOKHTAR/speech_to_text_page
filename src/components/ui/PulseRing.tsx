import React from "react";
import { MicIcon } from "./Icons";

export function PulseRing({ size = 200 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span className="absolute w-full h-full rounded-full border-2 border-[rgba(0,201,177,0.5)] animate-[pulseRing_2.4s_ease-out_infinite]" />
      <span className="absolute w-full h-full rounded-full border-2 border-[rgba(0,201,177,0.5)] animate-[pulseRing_2.4s_ease-out_infinite_0.6s]" />
      <span className="absolute w-full h-full rounded-full border-2 border-[rgba(0,201,177,0.5)] animate-[pulseRing_2.4s_ease-out_infinite_1.2s]" />
      <div className="w-[55%] h-[55%] bg-gradient-to-br from-[#00c9b1] to-[#2563eb] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(0,201,177,0.4),0_0_20px_rgba(0,201,177,0.3)] animate-[micGlow_3s_ease-in-out_infinite] relative z-[2]">
        <MicIcon size={size * 0.35} />
      </div>
    </div>
  );
}
