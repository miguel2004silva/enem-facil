import React from 'react';
import { CheckCircle2, Star, Sparkles, Zap, ShieldCheck, Download } from 'lucide-react';
import { BUY_URL, PRICE } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-12 pb-20 flex items-center justify-center overflow-hidden bg-[#07090e] bg-grid-pattern">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-amber-500/5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Lançamento Exclusivo ENEM 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-[1.1] tracking-tight">
              O material que separa quem <span className="text-gradient-gold">tira 1000</span> de quem trava na folha em branco.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Mais de 100 temas atualizados, repertórios prontos, metodologia completa e redações nota 1000 para o ENEM 2026.
            </p>

            {/* Key Value Bullets Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 pb-2">
              {[
                "+100 temas mapeados",
                "Repertórios prontos",
                "8 redações nota 1000",
                "Atualizado ENEM 2026"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-200 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Price Highlight & Giant CTA */}
            <div className="pt-4 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-slate-400 line-through text-lg font-medium">{PRICE.original}</span>
                <span className="text-4xl sm:text-5xl font-black text-gradient-gold">{PRICE.current}</span>
                <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Economize {PRICE.savings}
                </span>
              </div>
              <p className="text-xs text-amber-300 font-medium">⚡ Oferta por tempo limitado • Menos que um lanche. Vale uma nota 1000.</p>

              <div>
                <a
                  href={BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-glow w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl text-lg font-extrabold uppercase tracking-wide text-slate-950 transition-all shadow-2xl shadow-amber-500/25 group"
                >
                  <span>QUERO GARANTIR MEU PACK</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Social Proof Stars */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  <strong className="text-slate-200">4.9/5</strong> — Mais de 1.000 estudantes já adquiriram.
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: 3D Ebook Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Aura Behind Mockup */}
            <div className="absolute w-72 h-96 bg-gradient-to-tr from-amber-500/30 to-purple-600/30 rounded-3xl blur-2xl animate-pulse-slow" />

            {/* Ebook Mockup Card Container with 3D Perspective */}
            <div className="relative group perspective-1000 w-full max-w-md animate-float">
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -left-4 z-20 glass-panel border-emerald-400/40 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Atualizado 2026</span>
              </div>

              <div className="absolute top-1/2 -right-4 z-20 glass-panel border-amber-400/40 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 backdrop-blur-md transform translate-y-4">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Acesso Imediato</span>
              </div>

              <div className="absolute -bottom-4 left-6 z-20 glass-panel border-blue-400/40 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <Download className="w-4 h-4 text-blue-400" />
                <span>PDF Completo + Bônus</span>
              </div>

              {/* Main Ebook Graphic */}
              <div className="relative z-10 bg-gradient-to-br from-slate-900 via-[#0d111d] to-[#161a29] p-7 rounded-2xl border border-amber-500/30 shadow-2xl shadow-amber-500/10 text-left space-y-6 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
                
                {/* Book Header Visual */}
                <div className="flex justify-between items-start border-b border-slate-800 pb-5">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-extrabold text-amber-400">Edição Ouro</div>
                    <h3 className="text-2xl font-black text-slate-100 tracking-tight mt-1">PACK REDAÇÃO</h3>
                    <div className="text-lg font-bold text-slate-400">NOTA 1000 — ENEM 2026</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
                    1000
                  </div>
                </div>

                {/* Mockup Content Highlights */}
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">100+ Temas Mapeados</span>
                    <span className="text-emerald-400 font-bold">100% Atualizado</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Repertórios por Eixo</span>
                    <span className="text-amber-400 font-bold">Coringas</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">8 Redações Desconstruídas</span>
                    <span className="text-purple-400 font-bold">Análise Real</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Guia Competência 5</span>
                    <span className="text-amber-300 font-bold">+200 Pontos</span>
                  </div>
                </div>

                {/* Book Footer stamp */}
                <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80">
                  <span>METODOLOGIA COMPLETA</span>
                  <span>ENEM 2026</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
