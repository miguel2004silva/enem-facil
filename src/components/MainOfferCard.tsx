import React from 'react';
import { CheckCircle2, Lock, ShieldCheck, Zap, CreditCard, QrCode } from 'lucide-react';
import { BUY_URL, PRICE } from '../constants';

export const MainOfferCard: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-[#0a0d16] relative overflow-hidden border-t border-slate-800">
      
      {/* Intense Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive High Conversion Card */}
        <div className="glass-panel glass-panel-gold rounded-3xl p-8 sm:p-12 border-2 border-amber-400/50 shadow-2xl space-y-10 text-center relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>OFERTA DE LANÇAMENTO — ENEM 2026</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
              Garanta agora o seu <span className="text-gradient-gold">Pack Redação Nota 1000</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
              Acesso vitalício, materiais atualizados e bônus exclusivos por um valor simbólico.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-amber-500/30 max-w-md mx-auto space-y-2 shadow-inner">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">
              De <span className="line-through text-red-400">{PRICE.original}</span> por apenas:
            </div>
            
            <div className="text-5xl sm:text-6xl font-black text-gradient-gold tracking-tight py-1">
              {PRICE.current}
            </div>

            <div className="text-xs sm:text-sm text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 py-1.5 px-3 rounded-lg inline-block">
              Você economiza {PRICE.savings} neste momento!
            </div>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {[
              "PDF Completo e Prático",
              "Atualizações Foco ENEM 2026",
              "Acesso Imediato via E-mail",
              "Garantia Incondicional de 7 Dias",
              "Compra 100% Segura e Criptografada",
              "+3 Bônus Especiais Inclusos"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-slate-200 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Giant Call to Action Button */}
          <div className="pt-2 max-w-md mx-auto space-y-3">
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glow w-full py-5 px-8 rounded-2xl text-xl font-black uppercase tracking-wider text-slate-950 shadow-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.03]"
            >
              <span>COMPRAR AGORA (R$ 15,90)</span>
              <span className="text-2xl">→</span>
            </a>
            <p className="text-xs text-slate-400">⚡ O acesso é enviado imediatamente após a aprovação.</p>
          </div>

          {/* Security & Payment Badges */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-semibold">
            <div className="flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-emerald-400" />
              <span>Pix Instantâneo</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-blue-400" />
              <span>Cartão de Crédito</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Kirvano Payments</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-slate-300" />
              <span>SSL 256-bit Seguro</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
