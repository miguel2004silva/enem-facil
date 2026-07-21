import React from 'react';
import { Star, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0d16] relative overflow-hidden border-t border-slate-800/80">
      {/* Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Depoimentos Verificados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Quem estudou com o Pack <span className="text-gradient-gold">subiu a nota</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Veja como estudantes de todo o Brasil destravaram a escrita e alcançaram notas de alto rendimento.
          </p>

          <div className="pt-2 inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>Material utilizado por candidatos do ENEM 2025 e 2026</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-interactive p-7 rounded-2xl border-slate-800/80 hover:border-amber-400/30 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* User Info Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/40 shadow-md"
                    />
                    <div>
                      <h3 className="font-bold text-slate-100 text-base">{item.name}</h3>
                      <p className="text-xs text-slate-400">{item.city}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400">
                    {item.badge}
                  </span>
                </div>

                {/* Score Evolution Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-extrabold text-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Evolução: <span className="line-through text-slate-400 font-normal">{item.oldScore} pts</span> → <strong className="text-emerald-400 text-base">{item.newScore} pts</strong></span>
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>

              </div>

              {/* Footer Stars */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-semibold">Avaliação 5.0</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
