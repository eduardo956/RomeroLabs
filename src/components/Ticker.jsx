import React from 'react';
import { companyInfo } from '../data/companyInfo';

export const Ticker = () => {
  return (
    <div className="w-full bg-[#050708] border-t border-b border-[#223334]/50 py-3.5 overflow-hidden whitespace-nowrap relative select-none">
      <div className="animate-marquee gap-8 items-center">
        {companyInfo.manifesto.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-label-sm text-xs md:text-sm font-bold text-[#bffff0] tracking-widest uppercase">
              {item}
            </span>
            <span className="text-[#00f0d4] text-xs">◆</span>
          </div>
        ))}
        {companyInfo.manifesto.map((item, idx) => (
          <div key={`dup-${idx}`} className="flex items-center gap-8 shrink-0">
            <span className="font-label-sm text-xs md:text-sm font-bold text-[#bffff0] tracking-widest uppercase">
              {item}
            </span>
            <span className="text-[#00f0d4] text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
