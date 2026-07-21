import { useEffect } from 'react';
import { CheckCircle2, Mail, ShieldCheck, MessageCircle, Sparkles, Home } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

export const ThankYouPage = () => {
  useEffect(() => {
    // Fire festive confetti on page load
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#FACC15', '#10B981', '#3B82F6', '#8B5CF6']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#FACC15', '#10B981', '#3B82F6', '#8B5CF6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Navigation */}
      <header className="py-6 border-b border-slate-800/80 bg-[#090d16]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-black text-lg tracking-tight text-slate-100 hover:text-amber-400 transition-colors">
            <span className="text-xl">📝</span>
            <span>Pack Redação <span className="text-gradient-gold">Nota 1000</span></span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-slate-100 hover:border-slate-700 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full space-y-12">
        
        {/* Order Success Header */}
        <div className="text-center space-y-6">
          <div className="inline-relative mx-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 p-1 flex items-center justify-center shadow-2xl shadow-emerald-500/25 mx-auto animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border border-emerald-400/40">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pagamento Confirmado com Sucesso</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
              Parabéns! Sua jornada rumo à <span className="text-gradient-gold">Nota 1000</span> começa agora!
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Seu pedido foi processado. O acesso completo ao material digital já está a caminho do seu e-mail.
            </p>
          </div>
        </div>

        {/* Access Instructions Grid */}
        <div className="glass-panel glass-panel-gold rounded-3xl p-8 sm:p-10 border border-amber-400/30 space-y-8 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800/80 pb-4">
            <Mail className="w-6 h-6 text-amber-400" />
            <span>Como Acessar Seu Material em 3 Passos Simples:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Step 1 */}
            <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shadow">
                1
              </div>
              <h3 className="font-bold text-slate-100 text-base">Abra seu E-mail</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Procure pela mensagem enviada pela plataforma <strong className="text-slate-100">Kirvano</strong> com o assunto de acesso liberado.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shadow">
                2
              </div>
              <h3 className="font-bold text-slate-100 text-base">Baixe o PDF</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clique no botão de download contido no e-mail para salvar os arquivos no seu celular, tablet ou PC.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-6 rounded-2xl border-slate-800 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shadow">
                3
              </div>
              <h3 className="font-bold text-slate-100 text-base">Acesse os Bônus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                O Banco de Conectivos, Proposta de Intervenção e Repertórios Coringas já vêm inclusos no download.
              </p>
            </div>

          </div>

          {/* Spam Warning */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Dica Importante:</strong> Caso não encontre a mensagem na caixa de entrada em 5 minutos, verifique suas pastas de <strong className="text-slate-200">Spam</strong> ou <strong className="text-slate-200">Promoções</strong>.
            </span>
          </div>
        </div>

        {/* Order Details & Support Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Summary */}
          <div className="glass-panel p-6 rounded-2xl border-slate-800/80 space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Resumo da Compra</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Produto:</span>
                <strong className="text-slate-100">Pack Redação Nota 1000 — 2026</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Bônus:</span>
                <strong className="text-emerald-400">3 Guias Exclusivos (Grátis)</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Garantia:</span>
                <strong className="text-slate-100">7 Dias Incondicional</strong>
              </div>
              <div className="flex justify-between py-1 pt-2 font-bold text-sm">
                <span>Valor Pago:</span>
                <span className="text-amber-400">R$ 15,90</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="glass-panel p-6 rounded-2xl border-slate-800/80 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100">Precisa de Ajuda?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nossa equipe de suporte está à disposição para auxiliar com qualquer dúvida em relação ao seu acesso.
              </p>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=5531999999999&text=Ol%C3%A1,%20acabei%20de%20comprar%20o%20Pack%20Reda%C3%A7%C3%A3o%20Nota%201000!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Falar com o Suporte via WhatsApp</span>
            </a>
          </div>

        </div>

      </main>

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-slate-800/80 text-center text-xs text-slate-400 bg-[#05070a]">
        Pack Redação Nota 1000 — ENEM 2026 © Todos os direitos reservados.
      </footer>

    </div>
  );
};
