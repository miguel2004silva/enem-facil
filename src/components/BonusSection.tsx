import { Gift, FileSpreadsheet, CheckSquare, Library } from 'lucide-react';
import { BONUSES, BUY_URL } from '../constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileSpreadsheet className="w-8 h-8 text-amber-400" />,
  CheckSquare: <CheckSquare className="w-8 h-8 text-amber-400" />,
  Library: <Library className="w-8 h-8 text-amber-400" />
};

export const BonusSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#07090e] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
            <Gift className="w-4 h-4 text-amber-400" />
            <span>Presentes Exclusivos da Oferta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Levando hoje, você ganha mais <span className="text-gradient-gold">3 Bônus Especiais</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Materiais complementares que sozinhos valeriam R$ 116,80 — inclusos sem nenhum custo adicional.
          </p>
        </div>

        {/* 3 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="glass-panel glass-panel-gold p-8 rounded-2xl relative flex flex-col justify-between space-y-6 group hover:-translate-y-2 transition-transform"
            >
              {/* Badge Top Right */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {bonus.priceText}
              </div>

              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-amber-500/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {ICON_MAP[bonus.icon]}
                </div>

                <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                  Valor normal: <span className="line-through text-slate-500">{bonus.value}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {bonus.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/20 text-xs font-bold text-emerald-400 flex items-center justify-between">
                <span>Incluso no Pacote</span>
                <span className="text-amber-400 font-black">R$ 0,00</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center pt-4">
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glow inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold uppercase"
          >
            <span>GARANTIR PACK + 3 BÔNUS GRÁTIS →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
