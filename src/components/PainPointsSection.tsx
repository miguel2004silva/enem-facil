import React from 'react';
import { Brain, FileQuestion, Target, Repeat, Compass, Clock, AlertTriangle } from 'lucide-react';
import { PAIN_POINTS } from '../constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-amber-400" />,
  FileQuestion: <FileQuestion className="w-6 h-6 text-amber-400" />,
  Target: <Target className="w-6 h-6 text-amber-400" />,
  Repeat: <Repeat className="w-6 h-6 text-amber-400" />,
  Compass: <Compass className="w-6 h-6 text-amber-400" />,
  Clock: <Clock className="w-6 h-6 text-amber-400" />
};

export const PainPointsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0d16] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>O obstáculo invisível</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 leading-tight">
            Você sabe escrever. <br />
            O problema é não saber <span className="text-gradient-gold">O QUE escrever.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            A maioria dos estudantes perde pontos preciosos no ENEM não por falta de gramática, mas por falta de estratégia argumentativa e modelos validados.
          </p>
        </div>

        {/* 6 Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {PAIN_POINTS.map((pain, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-interactive p-7 rounded-2xl border-slate-800/80 hover:border-amber-500/40 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500/50 transition-all shadow-inner">
                {ICON_MAP[pain.icon]}
              </div>

              <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                {pain.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion Banner */}
        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-2xl border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-purple-600/10 text-center space-y-3">
          <p className="text-lg sm:text-xl font-extrabold text-slate-100">
            Se você se identificou com qualquer um desses problemas, <span className="text-amber-400 underline decoration-amber-400/50 underline-offset-4">este material foi feito sob medida para você.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
