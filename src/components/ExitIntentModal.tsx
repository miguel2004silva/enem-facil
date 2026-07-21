import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { BUY_URL, PRICE } from '../constants';

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel glass-panel-gold max-w-lg w-full rounded-3xl p-8 border-2 border-amber-400/60 shadow-2xl relative text-center space-y-6 bg-slate-950/95">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Warning Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider animate-bounce">
          <AlertTriangle className="w-4 h-4 fill-slate-950 text-amber-400" />
          <span>⚠️ ESPERE! ÚLTIMA CHANCE</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-100 leading-tight">
            Você realmente vai perder a oportunidade de melhorar sua redação por apenas <span className="text-gradient-gold">{PRICE.current}</span>?
          </h3>
          <p className="text-slate-300 text-sm">
            Essa oferta de lançamento é por tempo limitado e o valor subirá em breve para {PRICE.original}.
          </p>
        </div>

        {/* Price Card */}
        <div className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/30 inline-block px-8 space-y-1">
          <div className="text-xs text-slate-400 font-bold uppercase">Preço Especial</div>
          <div className="text-4xl font-black text-amber-400">{PRICE.current}</div>
          <div className="text-[11px] text-emerald-400 font-semibold">Economia garantida de {PRICE.savings}</div>
        </div>

        {/* CTA Button */}
        <div className="space-y-3 pt-2">
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glow w-full py-4 px-6 rounded-xl text-lg font-black uppercase text-slate-950 flex items-center justify-center gap-2 shadow-xl"
          >
            <span>SIM, QUERO GARANTIR AGORA</span>
            <span>→</span>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="text-xs text-slate-400 hover:text-slate-200 underline"
          >
            Não, prefiro arriscar tirar nota baixa na redação
          </button>
        </div>

      </div>
    </div>
  );
};
