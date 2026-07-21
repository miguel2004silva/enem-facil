import React from 'react';
import { Sparkles } from 'lucide-react';

export const TransitionBanner: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#0a0d16] via-[#101627] to-[#07090e] border-y border-amber-500/20 overflow-hidden">
      {/* Background Animated Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-widest shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>A Virada de Chave</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-100 leading-tight tracking-tight">
          Você não precisa decorar centenas de assuntos. <br className="hidden sm:inline" />
          <span className="text-gradient-gold">Você precisa estudar do jeito certo.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          O segredo das notas 900+ no ENEM não é genialidade, mas sim o domínio de estruturas lógicas, repertórios curingas e padrões que a banca ama.
        </p>
      </div>
    </section>
  );
};
