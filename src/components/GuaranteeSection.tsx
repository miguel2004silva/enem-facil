import React from 'react';
import { ShieldCheck, RefreshCw } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#07090e] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-slate-800 flex flex-col md:flex-row items-center gap-8 text-center md:text-left bg-gradient-to-r from-slate-900 via-[#0d111d] to-slate-900">
          
          {/* Giant Seal Visual */}
          <div className="shrink-0 relative">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-1 flex items-center justify-center shadow-2xl shadow-amber-500/20 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-2 text-center border border-amber-400/40">
                <span className="text-3xl font-black text-amber-400 leading-none">7</span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-100">DIAS DE</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">GARANTIA</span>
              </div>
            </div>
          </div>

          {/* Guarantee Content */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Risco Zero Garantido</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              Se você não gostar, devolvemos 100% do seu dinheiro.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Teste todo o material por 7 dias corridos. Se você sentir que as estruturas, repertórios e estratégias não elevaram seu nível de redação, basta solicitar o reembolso na plataforma. Devolvemos sem perguntas e sem burocracia.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 justify-center md:justify-start">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
              <span>Processo 100% automático via Kirvano Payments</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
