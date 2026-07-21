import React from 'react';
import { BUY_URL, PRICE } from '../constants';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#090d16]/95 backdrop-blur-xl border-t border-amber-500/30 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Apenas</div>
          <div className="text-2xl font-black text-amber-400 leading-none">{PRICE.current}</div>
        </div>

        <a
          href={BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-glow flex-1 py-3 px-4 rounded-xl text-sm font-extrabold uppercase text-slate-950 text-center flex items-center justify-center gap-1.5 shadow-lg"
        >
          <span>Comprar Agora</span>
          <span className="text-base">→</span>
        </a>
      </div>
    </div>
  );
};
