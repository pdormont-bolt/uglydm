import { ArrowLeft, Construction } from 'lucide-react';

type SvgProps = { className?: string; style?: React.CSSProperties };

function BettyGlasses({ className = '', color = 'currentColor', style }: SvgProps & { color?: string }) {
  return (
    <svg className={className} style={style} viewBox="0 0 96 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="36" height="24" rx="6" stroke={color} strokeWidth="3.5" fill="none" />
      <rect x="58" y="7" width="36" height="24" rx="6" stroke={color} strokeWidth="3.5" fill="none" />
      <path d="M38 18 Q48 14 58 18" stroke={color} strokeWidth="3" fill="none" />
      <line x1="2" y1="16" x2="-4" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="94" y1="16" x2="100" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="19" r="5" fill={color} opacity="0.08" />
      <circle cx="76" cy="19" r="5" fill={color} opacity="0.08" />
    </svg>
  );
}

function Braces({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8 L6 8 M42 8 L48 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 2 L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 2 L42 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {[12, 18, 24, 30, 36].map(x => (
        <circle key={x} cx={x} cy="8" r="1.2" fill="currentColor" opacity="0.4" />
      ))}
    </svg>
  );
}

interface Props {
  onBack: () => void;
}

export default function DesignFictionPage({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#F2E8D9] font-mono">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F2E8D9] border-b-4 border-[#2C1810]">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-2 text-[11px] font-black uppercase tracking-wide text-[#2C1810] hover:bg-[#2C1810] hover:text-[#F2E8D9] transition-colors border-2 border-transparent hover:border-[#2C1810]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Retour
          </button>

          <div className="flex items-center gap-3">
            <BettyGlasses className="w-10 h-4" color="#2C1810" />
            <div>
              <p className="text-[13px] font-black tracking-[0.2em] uppercase text-[#2C1810] leading-none">
                Betty Medtech
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <Braces className="w-12 h-4" />
                <p className="text-[10px] font-black tracking-[0.3em] text-[#2A7F7F] uppercase">
                  Dispositifs Médicaux
                </p>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-black uppercase tracking-widest text-[#C94F3B] border-2 border-[#C94F3B] px-3 py-1.5">
            Design Fiction
          </div>
        </div>
        <div className="h-2" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #1B2D5B 0, #1B2D5B 8px, transparent 8px, transparent 12px)',
          opacity: 0.25
        }} />
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 py-24 flex flex-col items-center text-center">

        {/* Construction icon cluster */}
        <div className="relative mb-12">
          <div className="w-32 h-32 border-4 border-dashed border-[#C94F3B] flex items-center justify-center bg-white/50">
            <Construction className="w-16 h-16 text-[#C94F3B]" strokeWidth={1.5} />
          </div>
          {/* Corner marks */}
          {[
            'top-0 left-0 border-t-4 border-l-4',
            'top-0 right-0 border-t-4 border-r-4',
            'bottom-0 left-0 border-b-4 border-l-4',
            'bottom-0 right-0 border-b-4 border-r-4',
          ].map((cls, i) => (
            <span key={i} className={`absolute w-4 h-4 border-[#2C1810] ${cls}`} />
          ))}
        </div>

        {/* Label */}
        <p className="text-[10px] font-black tracking-[0.5em] uppercase text-[#C94F3B] mb-4">
          — Page en construction —
        </p>

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#2C1810] leading-none mb-6">
          Design
          <br />
          Fiction
        </h1>

        <div className="w-16 h-1 bg-[#C94F3B] mb-8" />

        <p className="text-base text-[#2C1810]/70 max-w-md leading-relaxed font-sans">
          Cette section explore les futurs possibles du design de dispositifs médicaux
          à travers la fiction spéculative. Elle sera bientôt disponible.
        </p>

        {/* Decorative dashes */}
        <div className="mt-16 flex gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="block h-1"
              style={{
                width: i % 2 === 0 ? '24px' : '8px',
                backgroundColor: i % 3 === 0 ? '#C94F3B' : i % 3 === 1 ? '#1B2D5B' : '#2A7F7F',
              }}
            />
          ))}
        </div>

        <button
          onClick={onBack}
          className="mt-12 px-6 py-3 text-[11px] font-black uppercase tracking-widest text-[#F2E8D9] bg-[#2C1810] hover:bg-[#C94F3B] transition-colors"
        >
          Retour à l&apos;accueil
        </button>
      </main>

      {/* Footer stripe */}
      <div className="fixed bottom-0 left-0 right-0 h-3 border-t-2 border-[#2C1810]" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #C94F3B 0, #C94F3B 8px, transparent 8px, transparent 16px)',
        opacity: 0.4
      }} />
    </div>
  );
}
