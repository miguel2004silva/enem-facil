import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0d16] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
            Perguntas Frequentes (<span className="text-gradient-gold">FAQ</span>)
          </h2>

          <p className="text-slate-400 text-base">
            Tudo o que você precisa saber antes de fazer sua inscrição com total segurança.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-amber-400/40 bg-slate-900/90' : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-100 text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
