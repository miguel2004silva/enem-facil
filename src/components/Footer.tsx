import React from 'react';
import { ShieldCheck, Lock, Download, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Trust Seals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800/60 text-center md:text-left">
          
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Compra 100% Segura</div>
              <div className="text-[11px] text-slate-400">Ambiente encriptado</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Dados Protegidos</div>
              <div className="text-[11px] text-slate-400">Criptografia SSL</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Produto Digital</div>
              <div className="text-[11px] text-slate-400">Download em PDF</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Entrega Automática</div>
              <div className="text-[11px] text-slate-400">Envio imediato no e-mail</div>
            </div>
          </div>

        </div>

        {/* Footer Middle Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            <span className="font-bold text-slate-200">Pack Redação Nota 1000 — ENEM 2026</span> © Todos os direitos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-6 font-semibold">
            <a href="#oferta" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
            <a href="#oferta" className="hover:text-amber-400 transition-colors">Política de Privacidade</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">Contato & Suporte</a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-[11px] text-slate-400 leading-relaxed text-center max-w-4xl mx-auto border-t border-slate-800/40 pt-6">
          Aviso Legal: Este site e os materiais oferecidos não possuem vínculo oficial com o INEP, Ministério da Educação (MEC) ou banca organizadora do ENEM. O Pack Redação Nota 1000 é um material complementar independente desenvolvido por especialistas em língua portuguesa e redação. Os resultados podem variar de acordo com o empenho e dedicação de cada aluno.
        </div>

      </div>
    </footer>
  );
};
