import React, { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';
import { BUY_URL } from '../constants';

export const TopBannerCountdown: React.FC = () => {
  const INITIAL_SECONDS = 24 * 3600 - 15 * 60 - 24; // ~23h 44m 36s initial countdown
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const saved = localStorage.getItem('enem_pack_countdown');
    return saved ? parseInt(saved, 10) : INITIAL_SECONDS;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          localStorage.setItem('enem_pack_countdown', (24 * 3600).toString());
          return 24 * 3600;
        }
        const next = prev - 1;
        localStorage.setItem('enem_pack_countdown', next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const progressPercent = (timeLeft / (24 * 3600)) * 100;

  return (
    <div className="sticky top-0 z-50 bg-[#0b0e17]/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-medium">
          
          <div className="flex items-center gap-2 text-amber-400 font-bold tracking-wide animate-pulse">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>🔥 OFERTA DE LANÇAMENTO TERMINA EM:</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-slate-100 bg-slate-900/90 px-3 py-1 rounded-md border border-amber-500/30">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-extrabold text-amber-300">
                {String(hours).padStart(2, '0')}h : {String(minutes).padStart(2, '0')}m : {String(seconds).padStart(2, '0')}s
              </span>
            </div>

            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-md bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-sm"
            >
              Garantir Desconto →
            </a>
          </div>

        </div>
      </div>

      {/* Smooth shrinking timer progress bar */}
      <div className="w-full bg-slate-900/60 h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 transition-all duration-1000 ease-linear"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
