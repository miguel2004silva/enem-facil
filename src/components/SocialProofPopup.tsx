import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, CheckCircle2 } from 'lucide-react';
import { RECENT_PURCHASES } from '../constants';

const ACTION_MESSAGES = [
  "acabou de comprar o Pack.",
  "garantiu o material com desconto.",
  "realizou o pagamento via Pix.",
  "adquiriu o Pack Nota 1000.",
  "garantiu vaga para o ENEM 2026.",
  "aproveitou a oferta promocional."
];

export const SocialProofPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const scheduleNextPopup = () => {
      // Random delay between 15s and 35s
      const delay = Math.floor(Math.random() * (35000 - 15000 + 1)) + 15000;
      
      return setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setVisible(true);

        // Hide after 6 seconds
        hideTimer = setTimeout(() => {
          setVisible(false);
          scheduleNextPopup();
        }, 6000);
      }, delay);
    };

    const initialTimer = scheduleNextPopup();

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  const current = RECENT_PURCHASES[currentIdx];
  const actionMsg = ACTION_MESSAGES[currentIdx % ACTION_MESSAGES.length];

  return (
    <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-auto animate-bounce-in">
      <div className="glass-panel p-4 rounded-2xl border-amber-400/40 shadow-2xl bg-slate-950/95 backdrop-blur-xl flex items-center gap-3.5 relative border">
        
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center hover:bg-slate-700 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Avatar */}
        <div className="relative shrink-0">
          <img
            src={current.avatar}
            alt={current.name}
            className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/50"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 shadow">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-950 fill-emerald-400" />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-0.5 text-xs">
          <div className="font-extrabold text-slate-100 flex items-center gap-1.5">
            <span>{current.name}</span>
            <span className="text-slate-400 font-normal">• {current.city}</span>
          </div>

          <p className="text-amber-300 font-medium leading-tight">
            {actionMsg}
          </p>

          <div className="text-[10px] text-slate-400 font-medium pt-0.5 flex items-center gap-1">
            <ShoppingBag className="w-3 h-3 text-emerald-400" />
            <span>{current.time}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
