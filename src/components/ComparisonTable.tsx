import { Sparkles } from 'lucide-react';
import { COMPARISON, BUY_URL } from '../constants';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-[#07090e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comparativo Transparente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Por que o <span className="text-gradient-gold">Pack Nota 1000</span> é a escolha mais inteligente?
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Compare o investimento de tempo e dinheiro com as alternativas tradicionais do mercado.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="glass-panel rounded-2xl border-slate-800/80 overflow-hidden shadow-2xl">
              <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
                <thead>
                  <tr className="bg-slate-900/90 text-slate-300">
                    <th scope="col" className="py-5 px-6 font-bold">Recursos & Benefícios</th>
                    <th scope="col" className="py-5 px-6 font-semibold text-slate-400">Curso Presencial</th>
                    <th scope="col" className="py-5 px-6 font-semibold text-slate-400">Prof. Particular</th>
                    <th scope="col" className="py-5 px-6 font-semibold text-slate-400">Pesquisar Sozinho</th>
                    <th scope="col" className="py-5 px-6 font-extrabold text-amber-300 bg-amber-500/10 border-l border-amber-500/30 relative">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] uppercase font-black px-2 py-0.5 rounded-full whitespace-nowrap shadow">
                        Melhor Custo-Benefício
                      </span>
                      Pack Nota 1000
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-4 px-6 text-slate-200 font-semibold">{row.feature}</td>
                      <td className="py-4 px-6 text-slate-400">{row.presencial}</td>
                      <td className="py-4 px-6 text-slate-400">{row.particular}</td>
                      <td className="py-4 px-6 text-slate-400">{row.sozinho}</td>
                      <td className="py-4 px-6 text-amber-300 font-extrabold bg-amber-500/10 border-l border-amber-500/30">
                        {row.pack}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA below table */}
        <div className="text-center pt-4">
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glow inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold uppercase"
          >
            <span>QUERO O MELHOR CUSTO-BENEFÍCIO (R$ 15,90)</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
