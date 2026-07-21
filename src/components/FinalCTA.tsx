import React from 'react';
import { Flame, Clock } from 'lucide-react';
import { BUY_URL, PRICE } from '../constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0d16] via-[#101526] to-[#07090e] relative overflow-hidden border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-widest shadow-xl">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>A HORA DE AGIR É AGORA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-100 leading-tight">
          Enquanto você pensa, milhares de estudantes estão <span className="text-gradient-gold">estudando com vantagem.</span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
          Faltam poucos meses para o ENEM 2026. Quem começa antes chega infinitamente mais preparado.
        </p>

        <div className="pt-4 max-w-md mx-auto space-y-4">
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glow w-full py-5 px-8 rounded-2xl text-lg sm:text-xl font-black uppercase tracking-wider text-slate-950 shadow-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.03]"
          >
            <span>GARANTIR MEU PACK POR {PRICE.current}</span>
            <span className="text-2xl">→</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Oferta por tempo limitado • Acesso imediato no e-mail</span>
          </div>
        </div>

      </div>
    </section>
  );
};
