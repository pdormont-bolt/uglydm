import { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

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

function EmbroideryFlower({ className = '', style }: SvgProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 45, 90, 135].map((angle) => (
        <ellipse key={angle} cx="16" cy="10" rx="3" ry="6" fill="#C94F3B" opacity="0.7"
          transform={`rotate(${angle} 16 16)`} />
      ))}
      <circle cx="16" cy="16" r="4" fill="#C8921A" />
      <circle cx="16" cy="16" r="2" fill="#F2E8D9" />
    </svg>
  );
}

function PaperClip({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2 C2 2 2 6 2 8 L2 24 C2 26 3 28 6 28 C9 28 10 26 10 24 L10 10 C10 8 9 6 6 6 C3 6 3 8 3 10 L3 22"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SafetyPin({ className = '', style }: SvgProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="6" y1="8.5" x2="6" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 22 Q2 22 2 25 Q2 28 6 28 Q10 28 10 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Heartbeat({ className = '', style }: SvgProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="0,10 12,10 16,3 20,17 24,3 28,17 32,10 64,10"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const article = {
  id: 1,
  episode: 'EP.01',
  brand: 'Urgo Medical · Thuasne · Biflex',
  title: 'La Bande de Compression Veineuse K2',
  hook: "Le design fiction peut-il redéfinir la compression veineuse en terrain helvétique ?",
  uglyDiag: "Massive, épaisse, beige médical complexant. S'harmonise très mal avec des chaussures de randonnée. L'archétype du stigmate clinique ambulant dans les rues lausannoises.",
  whyUgly: "En Suisse, la marche reste reine, même pour nos aînés. Mais nos rues lausannoises et nos sentiers valaisans mettent les veines à rude épreuve. Les bandes de compression type Urgo K2 ou Thuasne Biflex sont massives, épaisses et souvent d'un beige médical complexant qui s'harmonise très mal avec des chaussures de randonnée. C'est l'archétype du stigmate clinique ambulant.",
  revolution: [
    {
      label: 'Textile outdoor bi-couche',
      text: "Exit le beige hôpital. Un textile rugueux et protecteur inspiré des équipements de haute montagne assume son côté outdoor. La bande ne cherche plus à se cacher — elle s'affiche comme un équipement de performance.",
    },
    {
      label: 'Capteurs de pression tissés',
      text: "Des capteurs de pression souples sont tissés à même la fibre. Ils mesurent en temps réel la compression exercée selon l'altitude et la pente, évitant l'ischémie en montée comme l'effet garrot en descente.",
    },
    {
      label: 'Interface barométrique clipsée',
      text: "Une mini-interface physique clipsée à la cheville intègre un algorithme d'adaptation barométrique. Une UI mécanique épurée, lisible en plein soleil, guide le randonneur pour ajuster la tension de sa bande en autonomie totale.",
    },
  ],
  verdict: "Chez Convergence Santé - Inkkreation, nous pensons que la dignité des patients passe par un design qui assume la technicité, plutôt que de tenter de la cacher misérablement sous le pantalon. L'objet ne cherche pas à être invisible, il devient un outil de performance et d'autonomie. C'est toute la philosophie du Ugly DM : transformer le stigmate en dignité par l'intelligence du design.",
  handNote: 'Du stigmate clinique → équipement de performance',
  tags: ['#MedTech', '#SwissHealthValley', '#UglyDM', '#InnovationMedicale', '#DesignFiction', '#CompressionVeineuse'],
  url: 'https://www.linkedin.com/posts/mademoiselle-jean-bompt_medtech-swisshealthvalley-uglydm-activity-7473730423047655424-Kcy0',
  tapeColor: '#2A6B3A',
  accentHex: '#1F5C30',
  stampText: 'STIGMATE',
  img: '/Gemini_Generated_Image_q0j4g5q0j4g5q0j4.png',
  imgCaption: 'Bande K2 → équipement outdoor haute montagne',
  imgRotate: '-1.2deg',
};

interface Props {
  onBack: () => void;
}

export default function DesignFictionPage({ onBack }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2E8D9] font-mono">

      {/* Plaid ticker */}
      <div className="overflow-hidden" style={{
        height: '10px',
        backgroundImage: 'repeating-linear-gradient(90deg, #1B2D5B 0, #1B2D5B 20px, #C94F3B 20px, #C94F3B 40px, #2A7F7F 40px, #2A7F7F 60px, #C8921A 60px, #C8921A 80px)',
      }} />

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

          <div className="text-[11px] font-black uppercase tracking-widest text-[#1F5C30] border-2 border-[#1F5C30] px-3 py-1.5">
            Design Fiction
          </div>
        </div>
        <div className="h-2" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #1F5C30 0, #1F5C30 8px, transparent 8px, transparent 12px)',
          opacity: 0.25
        }} />
      </header>

      {/* Section title */}
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-6">
        <p className="text-[10px] font-black tracking-[0.5em] uppercase text-[#1F5C30] mb-2">
          — Études de cas spéculatives —
        </p>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#2C1810] leading-none mb-3">
          Design
          <br />
          Fiction
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-16 h-1 bg-[#1F5C30]" />
          <p className="text-xs text-[#2C1810]/50 uppercase tracking-widest font-mono">
            Concepts fictifs · techniquement viables
          </p>
        </div>
      </div>

      {/* Article card — same structure as Ugly DM cards */}
      <main className="max-w-3xl mx-auto px-4 pb-20">
        <article className="relative bg-white shadow-lg overflow-hidden" style={{ boxShadow: '4px 6px 24px rgba(0,0,0,0.18), 1px 2px 4px rgba(0,0,0,0.1)' }}>

          {/* Washi tape strips */}
          <div className="flex gap-0 h-6">
            <div className="flex-1 h-6" style={{
              backgroundColor: article.tapeColor,
              opacity: 0.85,
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(255,255,255,0.2) 6px, rgba(255,255,255,0.2) 8px)',
            }} />
            <div className="w-12 h-6" style={{ backgroundColor: '#C94F3B', opacity: 0.8 }} />
            <div className="w-20 h-6" style={{ backgroundColor: article.tapeColor, opacity: 0.6 }} />
          </div>

          {/* Paper clip */}
          <div className="absolute -top-2 right-10 z-20">
            <PaperClip className="w-3 h-8 text-slate-400" />
          </div>

          {/* Header band */}
          <div className="pt-6 pb-3 px-6" style={{ backgroundColor: article.accentHex }}>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase font-mono">{article.episode}</span>
                  <span className="text-[10px] text-white/40 font-mono">───────</span>
                  <span className="text-[10px] font-bold text-white/60 uppercase font-mono">Design Fiction #{article.id}</span>
                </div>
                <h2 className="text-2xl font-black text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {article.title}
                </h2>
                <p className="text-xs text-white/60 mt-1 font-mono tracking-widest uppercase">{article.brand}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <BettyGlasses className="w-16 h-8" color="rgba(255,255,255,0.25)" />
                <EmbroideryFlower className="w-7 h-7 mt-1" />
              </div>
            </div>
            <p className="mt-3 text-white/90 text-base italic leading-snug border-l-4 border-white/30 pl-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;{article.hook}&rdquo;
            </p>
          </div>

          {/* Polaroid photo */}
          <div className="px-6 py-4 flex justify-center" style={{ backgroundColor: '#F5F0E8' }}>
            <div className="relative inline-block" style={{ transform: `rotate(${article.imgRotate})`, filter: 'drop-shadow(3px 4px 8px rgba(0,0,0,0.25))' }}>
              <div className="absolute -top-2.5 left-8 right-8 h-5 z-10" style={{
                backgroundColor: article.tapeColor, opacity: 0.8,
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(255,255,255,0.2) 5px, rgba(255,255,255,0.2) 7px)',
              }} />
              <div className="bg-white p-3 pb-8" style={{ border: '1px solid #ddd' }}>
                <img
                  src={article.img}
                  alt={article.imgCaption}
                  className="w-full max-w-md object-cover block"
                  style={{ maxHeight: '280px' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const placeholder = (e.target as HTMLImageElement).parentElement?.querySelector('.img-placeholder');
                    placeholder?.classList.remove('hidden');
                  }}
                />
                <div className="img-placeholder hidden w-full max-w-md bg-[#F0EDE8] border-2 border-dashed border-[#888]/30 flex items-center justify-center p-8" style={{ height: '220px' }}>
                  <div className="text-center">
                    <EmbroideryFlower className="w-12 h-12 mx-auto mb-3" />
                    <p className="text-[11px] text-[#888] font-mono">Image à ajouter dans<br /><code>/public/</code></p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-3 pb-2 pt-0" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
                <p className="text-center text-[#888] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: '0.85rem' }}>
                  {article.imgCaption}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-5">

            {/* État initial */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#888] text-white text-[9px] font-black tracking-widest px-2 py-0.5 font-mono uppercase">ÉTAT INITIAL</div>
                <div className="flex-1 border-t border-dashed border-[#888]/40" />
                <div className="border-2 border-[#C94F3B] rounded px-2 py-0.5 transform -rotate-3"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(201,79,59,0.2)' }}>
                  <span className="text-[10px] font-black tracking-widest text-[#C94F3B] uppercase font-mono">{article.stampText}</span>
                </div>
              </div>
              <div className="bg-[#F0EDE8] border border-[#888]/30 p-4 relative overflow-hidden"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,100,0.08) 19px, rgba(0,0,100,0.08) 20px)',
                  fontFamily: "'Courier New', monospace"
                }}>
                <div className="text-[11px] text-[#555] mb-2 opacity-70 tracking-widest uppercase">DIAGNOSTIC INITIAL :</div>
                <p className="text-sm text-[#444] leading-relaxed">{article.uglyDiag}</p>
                <p className="text-xs text-[#666] mt-3 leading-relaxed">{article.whyUgly}</p>
                <div className="absolute top-2 right-3 text-[80px] font-black text-[#888]/5 leading-none select-none pointer-events-none" style={{ fontFamily: 'serif' }}>
                  ✕
                </div>
              </div>
            </div>

            {/* Révolution */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 text-white font-mono" style={{ backgroundColor: article.accentHex }}>CONCEPT PROSPECTIF</div>
                <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: article.accentHex + '60' }} />
                <SafetyPin className="w-3 h-7" style={{ color: article.accentHex }} />
              </div>
              <div className="space-y-3">
                {article.revolution.map((pt, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                      style={{
                        backgroundColor: article.accentHex,
                        boxShadow: `0 0 0 3px white, 0 0 0 5px ${article.accentHex}40`,
                        fontFamily: 'serif'
                      }}>
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-[11px] font-black tracking-wide uppercase" style={{ color: article.accentHex, fontFamily: 'sans-serif' }}>{pt.label}</p>
                      <p className="text-sm text-[#2C1810]/75 leading-relaxed mt-0.5">{pt.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verdict sticky note */}
            <div>
              <button onClick={() => setOpen(!open)} className="w-full text-left group">
                <div className="flex items-center gap-2 mb-1">
                  <Heartbeat className="w-16 h-5" style={{ color: article.accentHex }} />
                  <span className="text-[10px] font-black tracking-widest uppercase font-mono" style={{ color: article.accentHex }}>
                    {open ? '▲ masquer le verdict' : '▼ voir le verdict du design'}
                  </span>
                </div>
              </button>
              {open && (
                <div className="relative p-4 mt-1"
                  style={{
                    backgroundColor: '#FFF9C4',
                    boxShadow: '2px 3px 8px rgba(0,0,0,0.15)',
                    borderTop: '4px solid #F2C94C',
                  }}>
                  <p className="text-[#2C1810] leading-relaxed mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}>
                    {article.verdict}
                  </p>
                  <div className="flex items-center gap-2">
                    <EmbroideryFlower className="w-6 h-6" />
                    <span className="text-[#C8921A] font-bold" style={{ fontFamily: "'Caveat', cursive", fontSize: '0.95rem' }}>
                      {article.handNote}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t-2 border-dotted border-[#2C1810]/15">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black tracking-wide px-2.5 py-1 font-mono"
                    style={{ backgroundColor: article.accentHex + '15', color: article.accentHex, border: `1.5px solid ${article.accentHex}40` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={article.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] font-bold text-[#2C1810]/40 hover:text-[#2C1810]/80 transition-colors font-mono underline underline-offset-2"
              >
                Source <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </article>

        {/* Back button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onBack}
            className="px-6 py-3 text-[11px] font-black uppercase tracking-widest text-[#F2E8D9] bg-[#2C1810] hover:bg-[#C94F3B] transition-colors"
          >
            Retour à l&apos;accueil
          </button>
        </div>
      </main>

      {/* Footer stripe */}
      <div className="fixed bottom-0 left-0 right-0 h-3 border-t-2 border-[#2C1810]" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #1F5C30 0, #1F5C30 8px, transparent 8px, transparent 16px)',
        opacity: 0.4
      }} />
    </div>
  );
}
