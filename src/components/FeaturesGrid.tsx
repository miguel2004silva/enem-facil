import React from 'react';
import { 
  Award, BookOpen, CheckCircle2, Link2, Sparkles, 
  ShieldCheck, FileText, Zap, Download, KeyRound 
} from 'lucide-react';
import { FEATURES } from '../constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-amber-400" />,
  BookOpen: <BookOpen className="w-6 h-6 text-amber-400" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-amber-400" />,
  Link2: <Link2 className="w-6 h-6 text-amber-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  FileText: <FileText className="w-6 h-6 text-amber-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  Download: <Download className="w-6 h-6 text-amber-400" />,
  KeyRound: <KeyRound className="w-6 h-6 text-amber-400" />
};

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#07090e] relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Conteúdo 100% Prático</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Tudo o que você recebe dentro do <span className="text-gradient-gold">Pack Nota 1000</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Um ecossistema completo pensado nos mínimos detalhes para acelerar seu resultado e economizar meses de estudo.
          </p>
        </div>

        {/* 10 Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-interactive p-7 rounded-2xl border-slate-800/80 hover:border-amber-400/40 relative flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/50 group-hover:scale-105 transition-all">
                    {ICON_MAP[item.icon]}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center text-xs font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                <span>Incluso no acesso</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
