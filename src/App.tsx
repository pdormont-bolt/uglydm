import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import DesignFictionPage from './DesignFictionPage';

// ─── SVG Decorative Components ───────────────────────────────────────────────

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

function SafetyPin({ className = '', style }: SvgProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="7" rx="7" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="10" cy="7" rx="3" ry="2" fill="currentColor" opacity="0.4" />
      <line x1="10" y1="12" x2="10" y2="38" stroke="currentColor" strokeWidth="2" />
      <path d="M5 36 Q10 46 15 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function EmbroideryFlower({ className = '', style }: SvgProps) {
  const petals = [
    { angle: 0, color: '#C94F3B' }, { angle: 60, color: '#2A7F7F' },
    { angle: 120, color: '#C8921A' }, { angle: 180, color: '#1B2D5B' },
    { angle: 240, color: '#5B8C2A' }, { angle: 300, color: '#8B3A8B' },
  ];
  return (
    <svg className={className} style={style} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {petals.map(({ angle, color }, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 22 + 11 * Math.cos(rad);
        const cy = 22 + 11 * Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="7" ry="4.5" fill={color} transform={`rotate(${angle}, ${cx}, ${cy})`} />;
      })}
      <circle cx="22" cy="22" r="6" fill="#F2C94C" />
      <circle cx="22" cy="22" r="3" fill="#C8921A" />
    </svg>
  );
}

function PaperClip({ className = '', style }: SvgProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 16 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 36 L12 14 Q12 4 6 4 Q0 4 0 14 L0 38 Q0 48 8 48 Q16 48 16 38 L16 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Braces({ className = '', style }: SvgProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[6, 16, 26, 36, 46, 56].map((x, i) => (
        <rect key={i} x={x - 4} y="2" width="8" height="16" rx="2" fill="white" stroke="#C0C0C0" strokeWidth="1" />
      ))}
      <rect x="2" y="8" width="56" height="4" rx="1" fill="#C8921A" opacity="0.8" />
    </svg>
  );
}

function Heartbeat({ className = '', style }: SvgProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="0,15 18,15 24,3 32,27 42,8 52,22 60,15 100,15" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const articles = [
  {
    id: 7,
    episode: 'EP.07',
    brand: 'Inogen · PulmoTech · Sentec',
    title: 'Le Concentrateur d\'Oxygène Portable',
    hook: "Quand l'insuffisance respiratoire s'habille en lifestyle",
    uglyDiag: "Lourde sacoche noire en similicuir rigide. Vibrations et ronronnement bruyant. Air chaud recraché. Lunettes nasales en plastique transparent. L'affichage public d'une insuffisance respiratoire sévère.",
    whyUgly: "Porter un concentrateur d'oxygène portable a longtemps rimé avec fardeau visuel : une lourde sacoche noire en similicuir rigide qui vibre et ronronne bruyamment, reliée à des lunettes nasales en plastique transparent bien visibles sur le visage. C'est l'affichage public d'une insuffisance respiratoire sévère — une image associée au vieillissement et à la maladie chronique. La définition même du Ugly DM : un dispositif historiquement ingrat et stigmatisant.",
    revolution: [
      { label: 'Intégration textile lifestyle', text: "Les derniers modèles se fondent dans des sacs à dos techniques en toile déperlante ou des sacoches croisées directement inspirées de la maroquinerie urbaine. Le dispositif médical disparaît dans un accessoire du quotidien." },
      { label: 'Acoustique automobile', text: "Le bruit du compresseur est étouffé par des mousses acoustiques issues de l'industrie automobile. La signature sonore stigmatisante s'efface progressivement." },
      { label: 'Canules invisibles', text: "Les canules nasales adoptent des teintes de peau ou des textures mates pour s'effacer visuellement. Le design d'interface physique transforme le stigmate en discrétion." },
    ],
    verdict: "La beauté de cette évolution ne réside pas dans un esthétisme de luxe superficiel, mais dans une ergonomie ultra-pensée et une empathie profonde pour l'utilisateur. Le patient ne transporte plus un poids médical encombrant — il porte un accessoire du quotidien optimisé pour son autonomie intime. C'est l'essence même du Ugly DM : transformer le stigmate en dignité par l'intelligence du design.",
    handNote: 'Du fardeau médical → accessoire du quotidien',
    tags: ['#Inogen', '#OxygènePortable', '#InsuffisanceRespiratoire', '#LifestyleDesign'],
    url: 'https://www.linkedin.com/posts/mademoiselle-jean-bompt_uglydm-activity-7478352586870407168-Kx87',
    tapeColor: '#2A7F7F',
    accentHex: '#1E6B6B',
    rotate: '-rotate-0.5',
    stampText: 'FARDEAU',
    stampColor: '#888',
    img: '/Gemini_Generated_Image_v08brpv08brpv08b.png',
    imgCaption: 'Concentrateur portable → sacoche urbaine technique',
    imgRotate: '1deg',
  },
  {
    id: 1,
    episode: 'EP.06',
    brand: 'ResMed · AirFit',
    title: 'Le Masque d\'Apnée du Sommeil',
    hook: "Le tue-l'amour par excellence hérité de l'univers hospitalier le plus froid",
    uglyDiag: "Harnais imposant en silicone brut. Gros tuyau d'air relié à une machine. Dormir relié comme un patient en réanimation. Le prix secret de la séduction et du confort nocturne.",
    whyUgly: "L'apnée du sommeil a longtemps eu un prix secret : celui de la séduction et du confort nocturne. Dormir relié à une machine par un harnais imposant en silicone brut et un gros tuyau d'air, c'est l'archétype du dispositif médical stigmatisant. Le tue-l'amour par excellence hérité de l'univers hospitalier le plus froid.",
    revolution: [
      { label: 'Minimalisme textile', text: "Les derniers modèles suppriment les barres frontales rigides pour les remplacer par des structures en tissus alvéolés ultra-légers." },
      { label: 'Silicone invisible', text: "Des bulles de silicone presque invisibles remplacent les masques massifs. L'interface avec le visage devient minimaliste." },
      { label: 'Accessoire de literie', text: "Le design réussit un tour de force : transformer le traitement médical lourd en un accessoire de literie haute performance. On n'avance plus sa maladie, on optimise son sommeil avec fierté." },
    ],
    verdict: "À l'image d'Ugly Betty, ce dispositif autrefois ingrat révèle sa vraie beauté par une ergonomie ultra-pensée et une empathie profonde pour l'utilisateur. Désormais, la technique médicale ne s'impose plus au corps, elle l'accompagne avec douceur. C'est l'essence même du Ugly DM : transformer le stigmate en dignité par l'intelligence du design.",
    handNote: 'La technique accompagne avec douceur',
    tags: ['#ResMed', '#ApneeDuSommeil', '#DesignEmpathique', '#MedTech'],
    url: 'https://www.linkedin.com/posts/mademoiselle-jean-bompt_convergencesante-inkkreation-uglydm-share-7472282620278755330-aiZD/',
    tapeColor: '#5B4C8A',
    accentHex: '#5B4C8A',
    rotate: 'rotate-0.5',
    stampText: 'TUE-L\'AMOUR',
    stampColor: '#888',
    img: '/masque-apnee-resmed.png',
    imgCaption: 'Masque CPAP → accessoire de literie haute performance',
    imgRotate: '-1deg',
  },
  {
    id: 2,
    episode: 'EP.05',
    brand: 'HEMOTECH · PHYSIDIA · Fresenius · NxStage',
    title: 'La Machine de Dialyse à Domicile',
    hook: "Quand le design efface la violence de la maladie au cœur de la maison",
    uglyDiag: "Énorme carcasse hospitalière. Tuyaux de sang visibles. Flacons alignés. Écrans clignotants d'alerte. Transforme un salon en chambre de soins intensifs.",
    whyUgly: "Une machine de dialyse à domicile, c'est historiquement l'incarnation même du Ugly DM. Une énorme carcasse hospitalière pleine de tuyaux de sang, de flacons alignés et d'écrans clignotants d'alerte. En l'installant chez soi, une chambre ou un salon se transforme instantanément en chambre de soins intensifs. C'est un dispositif lourd, hautement technique, associé à une perte d'autonomie intime.",
    revolution: [
      { label: 'Design domotique', text: "Les constructeurs ont réduit l'encombrement pour en faire un bloc compact qui adopte les codes visuels d'un électroménager premium. Fini le plastique brut anxiogène." },
      { label: 'UI Flat Design', text: "L'interface logicielle passe d'un affichage médical effrayant à un Flat Design épuré, proche d'une application de suivi santé grand public." },
      { label: 'Empathie profonde', text: "Ce design intelligent transforme le stigmate en dignité et permet de reconquérir son espace de vie. Le design médical ne doit plus seulement sauver des vies, il doit protéger la santé mentale." },
    ],
    verdict: "À l'image d'une Ugly Betty du médical, l'objet transcende sa lourdeur héritée de l'hôpital grâce à une richesse intérieure incroyable. Ce n'est pas de l'esthétisme superficiel — c'est une ergonomie ultra-pensée et une empathie profonde pour l'utilisateur. Le design médical ne doit plus seulement sauver des vies, il doit protéger la santé mentale de ceux qui l'utilisent au quotidien.",
    handNote: 'Le design protège la santé mentale',
    tags: ['#Dialyse', '#MedTech', '#DesignHospitalier', '#DialyseADomicile'],
    url: 'https://www.linkedin.com/posts/mademoiselle-jean-bompt_medtech-designhospitalier-dialyseadomicile-share-7472191998050078720-E2-n/',
    tapeColor: '#4A5568',
    accentHex: '#4A5568',
    rotate: '-rotate-0.5',
    stampText: 'LOURD',
    stampColor: '#888',
    img: '/Gemini_Generated_Image_hknc9xhknc9xhknc.png',
    imgCaption: 'Machine de dialyse → électroménager premium empathique',
    imgRotate: '0.5deg',
  },
  {
    id: 3,
    episode: 'EP.04',
    brand: 'TENA',
    title: 'La Culotte la Plus Discrète',
    hook: 'Et si la culotte la plus discrète était aussi la plus technique ?',
    uglyDiag: 'Couche adulte. Cellulose blanche. Bruit de plastique à chaque pas. Se devine sous les vêtements. Achat = honte.',
    whyUgly: "L'incontinence est une perte d'autonomie intime profondément redoutée. Historiquement, la protection était une \"couche pour adulte\" : un appareillage massif, épais, en cellulose blanche froufroutante, qui faisait du bruit à la marche et se devinait sous les vêtements. Porter cela renvoyait instantanément à la régression et à la vieillesse.",
    revolution: [
      { label: 'Codes de la lingerie', text: 'TENA a abandonné le blanc clinique. Noir, crème, gris chiné, coupes taille basse, textures imitant la lingerie fine ou le boxer de sport.' },
      { label: 'Effacement sensoriel', text: "Nouveaux polymères ultra-absorbants : l'épaisseur a fondu. Zones élastiques ajustées : zéro bruit de plastique, le produit bouge avec le corps." },
      { label: 'Packaging lifestyle', text: "Les emballages adoptent les codes du prêt-à-porter, désarmant la honte lors de l'achat." },
    ],
    verdict: "La protection technique moderne utilise le design comme un bouclier d'estime de soi. L'innovation technique (les polymères) n'est rien sans l'innovation d'usage (la culotte textile). Le design ne sert plus seulement à absorber — il sert à rassurer, à inclure et à redonner une dignité immense.",
    handNote: 'Design = bouclier identitaire !',
    tags: ['#TENA', '#Incontinence', '#InvisibleDesign'],
    url: 'https://www.linkedin.com/posts/mademoiselle-jean-bompt_medtech-innovationsante-designforgood-activity-7470009835619733505-zEM1',
    tapeColor: '#1B2D5B',
    accentHex: '#1B2D5B',
    rotate: '-rotate-1',
    stampText: 'STIGMATE',
    stampColor: '#888',
    img: '/Gemini_Generated_Image_h44mpyh44mpyh44m.png',
    imgCaption: 'Couche adulte → sous-vêtement technique TENA',
    imgRotate: '-2deg',
  },
  {
    id: 4,
    episode: 'EP.03',
    brand: 'Coloplast · SpeediCath',
    title: 'La Sonde Urinaire Invisible',
    hook: "Et si le meilleur design médical était celui qui sait se cacher ?",
    uglyDiag: "Long tube plastique invasif. Crie 'pathologie'. Sortir dans les toilettes publiques, au travail, chez des amis = anxiété immense. Peur du regard de pitié constante.",
    whyUgly: "L'auto-sondage touche directement à l'intimité la plus profonde. Le dispositif est en général un long tube en plastique invasif qui crie \"pathologie\". Au-delà du geste technique, le véritable fardeau est psychologique : sortir ce matériel médical dans les toilettes publiques génère une charge mentale et une anxiété immenses. La peur du regard des autres et de la stigmatisation est constante.",
    revolution: [
      { label: 'Codes de la cosmétique et du luxe', text: 'Le produit est encapsulé dans des tubes rigides, mats, aux couleurs épurées. Visuellement, l\'objet adopte l\'esthétique exacte d\'un tube de rouge à lèvres ou d\'un stylo de luxe.' },
      { label: 'Effacement total du stigmate', text: 'Posé sur une table, glissé dans une pochette ou sorti d\'un sac à main, le dispositif est totalement indétectable. Le design retire instantanément la peur du regard de pitié ou de curiosité.' },
      { label: 'Ergonomie sans compromis', text: "Sous cette apparence \"lifestyle\", la technicité reste maximale : lubrification immédiate, ouverture d'un seul geste. L'objet cache sa complexité médicale derrière une interface physique rassurante." },
    ],
    verdict: "À l'image d'une Ugly Betty qui cache ses forces sous une apparence mal comprise, la sonde urinaire moderne utilise le design comme un bouclier social. L'innovation n'est pas dans une IA ou un écran connecté — elle est dans la forme d'un capuchon qui permet à un patient de retrouver sa liberté, sa confiance et surtout, sa dignité.",
    handNote: 'Trompe-l\'œil = dignité retrouvée !',
    tags: ['#Coloplast', '#SpeediCath', '#AutoSondage', '#InvisibleDesign'],
    url: 'https://www.linkedin.com/posts/mademoiselle-jean-bompt_medtech-innovationsante-designforgood-share-7469655217031155712-uXzu/',
    tapeColor: '#B83232',
    accentHex: '#B83232',
    rotate: '-rotate-1',
    stampText: 'INTIME',
    stampColor: '#888',
    img: '/Gemini_Generated_Image_tgk7v1tgk7v1tgk7.png',
    imgCaption: 'Sonde SpeediCath → tube de luxe incognito',
    imgRotate: '1.5deg',
  },
  {
    id: 5,
    episode: 'EP.02',
    brand: 'Coloplast · Convatec',
    title: 'La Poche de Stomie',
    hook: "Peut-on parler de dignité à propos d'une poche de recueil ?",
    uglyDiag: 'Sac plastique transparent. Beige hôpital. Bruit de frottement. Odeur. Altération de l\'image corporelle.',
    whyUgly: 'La stomie subit un double stigmate. Médicalement : un sac en plastique transparent ou beige "hôpital" collé à l\'abdomen. Psychologiquement : une altération profonde de l\'image corporelle. Le design criait la maladie — plastique brut qui colle, bruits à chaque mouvement.',
    revolution: [
      { label: 'Switch textile', text: 'Les nouveaux modèles abandonnent le plastique brut pour des revêtements en textile technique gris chiné ou noir.' },
      { label: 'Codes sport / lingerie', text: "Le dispositif emprunte les codes visuels et tactiles des vêtements de sport ou de la lingerie fine. L'objet s'intègre au corps." },
      { label: 'UI sensorielle', text: "Matériaux totalement étanches aux odeurs. Silencieux au frottement. La peur constante que ça s'entende disparaît." },
    ],
    verdict: "En transformant un sac plastique médical en un élément textile discret, le design réussit l'essentiel : transformer le stigmate en dignité et redonner le pouvoir au patient.",
    handNote: 'Du plastique brut → au textile technique',
    tags: ['#Coloplast', '#Convatec', '#Stomie'],
    url: 'https://www.linkedin.com/posts/convergence-sante-inkkreation_peut-on-parler-de-dignit%C3%A9-%C3%A0-propos-dune-activity-7482341933563084800-1V7y',
    tapeColor: '#2A7F7F',
    accentHex: '#2A7F7F',
    rotate: 'rotate-0',
    stampText: 'TABOU',
    stampColor: '#888',
    img: '/poche-stomie.png',
    imgCaption: 'Poche plastique hôpital → cover textile discret',
    imgRotate: '1.5deg',
  },
  {
    id: 6,
    episode: 'EP.01',
    brand: 'UrgoKTwo',
    title: 'Le Bandage de Compression',
    hook: 'Peut-on parler de "beauté" pour un bandage de compression ?',
    uglyDiag: 'Bandage massif. Chaussures orthopédiques ouvertes obligatoires. Stigmate permanent. Impossible à cacher.',
    whyUgly: "Pour les patients souffrant d'ulcères de jambe, le traitement par compression est vital. Historiquement, il était synonyme de bandages massifs, impossibles à cacher, contraignant à porter des chaussures orthopédiques ouvertes très stigmatisantes.",
    revolution: [
      { label: 'UI physique intégrée', text: "Repères visuels imprimés sur la bande : en tendant le textile, les motifs se déforment pour indiquer la tension de compression cliniquement parfaite." },
      { label: 'Design par l\'effacement', text: "Épaisseur réduite sans perte d'efficacité. Le patient peut enfin glisser sa jambe dans une chaussure normale." },
      { label: 'Switch de branding', text: "La marque ne vend plus de la cicatrisation clinique — elle vend de la \"liberté de mouvement retrouvée\"." },
    ],
    verdict: "Le design industriel ne sert pas qu'à rendre les objets \"sexy\". Dans la MedTech, il sert d'abord à briser l'isolement social et à ramener de l'humain dans le soin.",
    handNote: '→ liberté de mouvement retrouvée !',
    tags: ['#Urgo', '#Compression', '#LibertéRetrouvée'],
    url: 'https://www.linkedin.com/posts/mademoiselle-jean-bompt_medtech-innovationsante-designforgood-activity-7467471510828384259-U3hX',
    tapeColor: '#C8921A',
    accentHex: '#C8921A',
    rotate: 'rotate-1',
    stampText: 'INVISIBLE',
    stampColor: '#888',
    img: '/Gemini_Generated_Image_igyf9iigyf9iigyf.png',
    imgCaption: 'Bandage UrgoKTwo avec repère visuel de tension',
    imgRotate: '-1deg',
  },
];

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`relative bg-[#FAFAF7] shadow-2xl ${article.rotate} hover:rotate-0 transition-transform duration-300`}
      style={{ border: `3px solid ${article.accentHex}`, transformOrigin: 'center top' }}
    >
      {/* Washi tape across top */}
      <div className="absolute -top-3 left-8 right-8 h-6 z-10 flex gap-2">
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
              <span className="text-[10px] font-bold text-white/60 uppercase font-mono">Ugly DM #{article.id}</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{article.title}</h2>
            <p className="text-xs text-white/60 mt-1 font-mono tracking-widest uppercase">{article.brand}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <BettyGlasses className="w-16 h-8" color="rgba(255,255,255,0.25)" />
            <EmbroideryFlower className="w-7 h-7 mt-1" />
          </div>
        </div>
        {/* Hook */}
        <p className="mt-3 text-white/90 text-base italic leading-snug border-l-4 border-white/30 pl-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          &ldquo;{article.hook}&rdquo;
        </p>
      </div>

      {/* ── Polaroid Photo ── */}
      {article.img && <div className="px-6 py-4 flex justify-center" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="relative inline-block" style={{ transform: `rotate(${article.imgRotate})`, filter: 'drop-shadow(3px 4px 8px rgba(0,0,0,0.25))' }}>
          {/* Washi tape strip across photo top */}
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
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.querySelector('.img-placeholder')!.classList.remove('hidden'); }}
            />
            {/* Placeholder shown when image not found */}
            <div className="img-placeholder hidden w-full max-w-md bg-[#F0EDE8] border-2 border-dashed border-[#888]/30 flex items-center justify-center p-8" style={{ height: '220px' }}>
              <div className="text-center">
                <EmbroideryFlower className="w-12 h-12 mx-auto mb-3" />
                <p className="text-[11px] text-[#888] font-mono">Image à ajouter dans<br /><code>/public/</code></p>
              </div>
            </div>
          </div>
          {/* Caption underneath */}
          <div className="bg-white px-3 pb-2 pt-0" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
            <p className="text-[11px] text-center text-[#888] italic" style={{ fontFamily: "'Caveat', cursive", fontSize: '0.85rem' }}>
              {article.imgCaption}
            </p>
          </div>
        </div>
      </div>}

      <div className="p-6 space-y-5">

        {/* ── UGLY BEFORE ── clinical/institutional */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-[#888] text-white text-[9px] font-black tracking-widest px-2 py-0.5 font-mono uppercase">ÉTAT INITIAL</div>
            <div className="flex-1 border-t border-dashed border-[#888]/40" />
            {/* rubber stamp */}
            <div className="border-2 border-[#C94F3B] rounded px-2 py-0.5 transform -rotate-3"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(201,79,59,0.2)' }}>
              <span className="text-[10px] font-black tracking-widest text-[#C94F3B] uppercase font-mono">{article.stampText}</span>
            </div>
          </div>
          {/* clinical form look */}
          <div className="bg-[#F0EDE8] border border-[#888]/30 p-4 relative overflow-hidden"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,100,0.08) 19px, rgba(0,0,100,0.08) 20px)',
              fontFamily: "'Courier New', monospace"
            }}>
            <div className="text-[11px] text-[#555] mb-2 opacity-70 tracking-widest uppercase">DIAGNOSTIC INITIAL :</div>
            <p className="text-sm text-[#444] leading-relaxed">{article.uglyDiag}</p>
            <p className="text-xs text-[#666] mt-3 leading-relaxed">{article.whyUgly}</p>
            {/* big faded watermark */}
            <div className="absolute top-2 right-3 text-[80px] font-black text-[#888]/5 leading-none select-none pointer-events-none" style={{ fontFamily: 'serif' }}>
              ✕
            </div>
          </div>
        </div>

        {/* ── RÉVOLUTION ── warm & colorful */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 text-white font-mono" style={{ backgroundColor: article.accentHex }}>RÉVOLUTION SOBRE</div>
            <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: article.accentHex + '60' }} />
            <SafetyPin className="w-3 h-7" style={{ color: article.accentHex }} />
          </div>
          <div className="space-y-3">
            {article.revolution.map((pt, i) => (
              <div key={i} className="flex gap-3 items-start">
                {/* embroidery patch badge */}
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

        {/* ── VERDICT ── sticky note style */}
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left group"
          >
            <div className="flex items-center gap-2 mb-1">
              <Heartbeat className="w-16 h-5" style={{ color: article.accentHex }} />
              <span className="text-[10px] font-black tracking-widest uppercase font-mono" style={{ color: article.accentHex }}>
                {open ? '▲ masquer le verdict' : '▼ voir le verdict du design'}
              </span>
            </div>
          </button>
          {open && (
            <div className="relative p-4 mt-1 transform rotate-0"
              style={{
                backgroundColor: '#FFF9C4',
                boxShadow: '2px 3px 8px rgba(0,0,0,0.15)',
                borderTop: '4px solid #F2C94C',
              }}>
              {/* handwritten annotation */}
              <p className="text-base text-[#2C1810] leading-relaxed mb-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}>
                {article.verdict}
              </p>
              <div className="flex items-center gap-2">
                <EmbroideryFlower className="w-6 h-6" />
                <span className="text-sm text-[#C8921A] font-bold" style={{ fontFamily: "'Caveat', cursive" }}>
                  {article.handNote}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
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
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<'home' | 'design-fiction'>('home');

  if (page === 'design-fiction') {
    return <DesignFictionPage onBack={() => setPage('home')} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2E8D9' }}>

      {/* ── Plaid ticker ── */}
      <div className="overflow-hidden" style={{
        height: '10px',
        backgroundImage: 'repeating-linear-gradient(90deg, #1B2D5B 0, #1B2D5B 20px, #C94F3B 20px, #C94F3B 40px, #2A7F7F 40px, #2A7F7F 60px, #C8921A 60px, #C8921A 80px)',
      }} />

      {/* ── Scrolling hashtag band ── */}
      <div className="bg-[#C94F3B] py-1.5 overflow-hidden">
        <div className="whitespace-nowrap font-mono text-[11px] font-black text-white tracking-[0.25em] uppercase animate-marquee inline-block">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              &nbsp;·&nbsp; #UglyDM &nbsp;·&nbsp; #MedTech &nbsp;·&nbsp; #DesignForGood &nbsp;·&nbsp; #InnovationSanté &nbsp;·&nbsp; #UXDesign &nbsp;·&nbsp; #ConvergenceSanté &nbsp;·&nbsp; #InvisibleDesign &nbsp;·&nbsp; #Dignité
            </span>
          ))}
        </div>
      </div>

      {/* ── Header ── */}
      <header className="border-b-4 border-[#2C1810]" style={{ backgroundColor: '#F2E8D9' }}>
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo cluster */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center border-4 border-[#2C1810] bg-[#1B2D5B] transform -rotate-2">
                  <BettyGlasses className="w-10 h-5" color="white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#C94F3B] transform rotate-12 flex items-center justify-center">
                  <span className="text-white text-[8px] font-black">★</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black leading-none text-[#2C1810] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
                  UGLY<span className="text-[#C94F3B]"> DM</span>
                </h1>
                <div className="flex items-center gap-2 mt-0.5">
                  <Braces className="w-12 h-4" />
                  <p className="text-[10px] font-black tracking-[0.3em] text-[#2A7F7F] uppercase font-mono">Dispositifs Médicaux</p>
                </div>
              </div>
            </div>
            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { label: 'Manifeste', href: '#manifeste' },
                { label: 'Études de cas', href: '#articles' },
              ].map(({ label, href }) => (
                <a key={href} href={href}
                  className="px-4 py-2 text-sm font-black text-[#2C1810] hover:bg-[#2C1810] hover:text-[#F2E8D9] transition-colors border-2 border-transparent hover:border-[#2C1810] tracking-wide uppercase font-mono text-[11px]">
                  {label}
                </a>
              ))}
              <button
                onClick={() => setPage('design-fiction')}
                className="px-4 py-2 text-[11px] font-black text-[#1B2D5B] hover:bg-[#1B2D5B] hover:text-[#F2E8D9] transition-colors border-2 border-[#1B2D5B] tracking-wide uppercase font-mono">
                Design Fiction
              </button>
              <a href="https://www.inkkreation.com/" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-black text-[#C94F3B] hover:bg-[#C94F3B] hover:text-[#F2E8D9] transition-colors border-2 border-[#C94F3B] tracking-wide uppercase font-mono text-[11px]">
                Veille MedTech
              </a>
            </nav>
          </div>
        </div>
        {/* Mixed pattern border stripe */}
        <div className="h-2" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #1B2D5B 0, #1B2D5B 8px, transparent 8px, transparent 12px)',
          opacity: 0.25
        }} />
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#1B2D5B' }}>
        {/* Graph paper bg */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 20px)'
        }} />
        {/* Scattered thread spools */}
        {[
          { top: '8%', left: '5%', color: '#C94F3B', size: 48, rot: 20 },
          { top: '70%', left: '3%', color: '#C8921A', size: 36, rot: -15 },
          { top: '15%', right: '4%', color: '#2A7F7F', size: 52, rot: 30 },
          { top: '60%', right: '6%', color: '#C94F3B', size: 40, rot: -25 },
        ].map((s, i) => (
          <div key={i} className="absolute hidden lg:block" style={{ top: s.top, left: s.left, right: s.right, transform: `rotate(${s.rot}deg)` }}>
            <div style={{ width: s.size, height: s.size, position: 'relative' }}>
              <div style={{ width: s.size, height: s.size / 3, backgroundColor: s.color, opacity: 0.6, borderRadius: '50% / 100%' }} />
              <div style={{ width: s.size, height: s.size / 3 * 2, backgroundColor: s.color, opacity: 0.25, marginTop: -2 }} />
              <div style={{ width: s.size, height: s.size / 3, backgroundColor: s.color, opacity: 0.6, borderRadius: '50% / 100%', marginTop: -2 }} />
            </div>
          </div>
        ))}

        <div className="relative max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="md:grid md:grid-cols-5 md:gap-10 items-start">

            {/* Left: title + concept */}
            <div className="md:col-span-3">
              {/* label */}
              <div className="inline-flex items-center gap-2 bg-[#C94F3B] text-white px-3 py-1 mb-5">
                <SafetyPin className="w-2.5 h-5" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase font-mono">La Série · Jean Bompt</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Quand le<br />
                <span style={{ color: '#C94F3B', WebkitTextStroke: '1px #C94F3B' }}>Stigmate</span><br />
                <span className="text-white/30 text-4xl">—devient—</span><br />
                <span style={{ color: '#C8921A' }}>Dignité</span>
              </h2>

              {/* Betty reference */}
              <div className="bg-white/5 border border-white/15 p-4 mt-6">
                <div className="flex items-start gap-3">
                  <BettyGlasses className="w-12 h-6 flex-shrink-0 mt-1" color="#C8921A" />
                  <p className="text-white/75 text-sm leading-relaxed">
                    À l'image d'<strong className="text-white">Ugly Betty</strong>, ces dispositifs portent une "laideur" apparente héritée du monde hospitalier.
                    Plastique brut, bruits de frottement, tuyaux visibles.
                    Leur vraie beauté réside dans leur <em className="text-[#C8921A]">richesse intérieure</em>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Definition "ordonnance" card */}
            <div className="md:col-span-2 mt-8 md:mt-0 relative">
              {/* Washi tape on card */}
              <div className="absolute -top-3 left-4 right-4 h-5 transform rotate-1 z-10" style={{
                backgroundColor: '#C8921A', opacity: 0.9,
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(255,255,255,0.2) 6px, rgba(255,255,255,0.2) 8px)',
              }} />
              <div className="bg-[#F8F4EE] pt-6 px-5 pb-5 relative transform rotate-1 shadow-2xl"
                style={{ border: '3px solid #C8921A' }}>
                {/* Stamp */}
                <div className="absolute top-4 right-4 border-3 border-[#C94F3B] transform rotate-12 px-3 py-1.5"
                  style={{ border: '2.5px solid #C94F3B' }}>
                  <p className="text-[10px] font-black tracking-widest text-[#C94F3B] uppercase font-mono">DÉFINITION</p>
                </div>

                <p className="font-black text-xl text-[#2C1810] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ugly DM
                </p>
                <p className="text-xs italic text-[#2C1810]/60 mb-4 font-mono">(Dispositif Médical)</p>

                <div className="space-y-3" style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem' }}>
                  {[
                    ['#C94F3B', 'Historiquement ingrat, hautement technique'],
                    ['#1B2D5B', 'Associé à un tabou ou perte d\'autonomie intime'],
                    ['#2A7F7F', 'Métamorphosé par le design sobre & empathique'],
                    ['#C8921A', 'Transformant le stigmate en dignité'],
                  ].map(([color, text], i) => (
                    <div key={i} className="flex items-start gap-2">
                      <EmbroideryFlower className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p style={{ color }} className="leading-tight">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#2C1810]/15 flex items-center gap-2">
                  <SafetyPin className="w-2.5 h-6 text-[#888]" />
                  <p className="text-[10px] text-[#888] font-mono tracking-wide">Par Jean Bompt · LinkedIn #UglyDM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero photo strip ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#1B2D5B', maxHeight: '320px' }}>
        <img
          src="/Gemini_Generated_Image_nbhuw2nbhuw2nbhu.png"
          alt="Le bureau Ugly DM — univers médical rencontrant l'artisanat"
          className="w-full object-cover object-center"
          style={{ maxHeight: '320px', opacity: 0.9 }}
          onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D5B] via-transparent to-transparent" />
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-white/60 text-sm italic" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}>
            L'univers Ugly DM : où le médical rencontre l'artisanat
          </p>
        </div>
      </div>

      {/* ── Pattern break strip ── */}
      <div className="h-8 relative overflow-hidden">
        {[
          { left: '0%', w: '30%', color: '#C94F3B' },
          { left: '30%', w: '20%', color: '#1B2D5B' },
          { left: '50%', w: '15%', color: '#2A7F7F' },
          { left: '65%', w: '20%', color: '#C8921A' },
          { left: '85%', w: '15%', color: '#C94F3B' },
        ].map((s, i) => (
          <div key={i} className="absolute h-full" style={{ left: s.left, width: s.w, backgroundColor: s.color }} />
        ))}
      </div>

      {/* ── Manifeste ── */}
      <section id="manifeste" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-8">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-[#C94F3B] font-mono">Le Manifeste</p>
            <div className="flex-1 border-t-4 border-dotted border-[#2C1810]/20" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                label: 'La Laideur Apparente',
                body: 'Plastique brut, frottements audibles, pansements massifs, tuyaux visibles — l\'héritage d\'un monde hospitalier qui avait oublié que le patient est une personne.',
                color: '#C94F3B',
                bg: '#FEF2F0',
                icon: <SafetyPin className="w-5 h-12 text-[#C94F3B]" />,
                note: 'The ugly outside...',
              },
              {
                num: '02',
                label: 'La Richesse Intérieure',
                body: 'Ergonomie ultra-pensée, UI physique ingénieuse, matériaux techniques disruptifs — la vraie intelligence dissimulée sous les apparences.',
                color: '#1B2D5B',
                bg: '#EEF1F8',
                icon: <BettyGlasses className="w-14 h-7 text-[#1B2D5B]" color="#1B2D5B" />,
                note: '...but beautiful inside!',
              },
              {
                num: '03',
                label: 'La Métamorphose',
                body: 'Le design comme bouclier d\'estime de soi. De l\'isolement à la liberté. Du stigmate à la dignité.',
                color: '#2A7F7F',
                bg: '#EEF6F6',
                icon: <EmbroideryFlower className="w-10 h-10" />,
                note: 'Design for Good!',
              },
            ].map((p, i) => (
              <div key={i} className="relative transform hover:-translate-y-1 transition-transform"
                style={{ border: `3px solid ${p.color}`, backgroundColor: p.bg }}>
                {/* washi top */}
                <div className="absolute -top-2 left-4 right-4 h-4" style={{ backgroundColor: p.color, opacity: 0.6 }} />
                <div className="pt-6 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-6xl font-black leading-none" style={{ color: p.color, opacity: 0.15, fontFamily: "'Playfair Display', serif" }}>{p.num}</span>
                    <div>{p.icon}</div>
                  </div>
                  <h3 className="text-lg font-black text-[#2C1810] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.label}</h3>
                  <p className="text-sm text-[#2C1810]/70 leading-relaxed mb-3">{p.body}</p>
                  {/* handwritten note */}
                  <p className="text-base font-bold" style={{ fontFamily: "'Caveat', cursive", color: p.color }}>{p.note}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Articles ── */}
      <section id="articles" className="py-10 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-4 border-[#2C1810]" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-[#2C1810] px-6 py-3 flex items-center gap-3">
                <BettyGlasses className="w-12 h-6" color="white" />
                <h2 className="text-white font-black text-lg tracking-widest uppercase font-mono">Études de Cas</h2>
                <Heartbeat className="w-14 h-5 text-[#C8921A]" />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#2C1810' }}>
        {/* Plaid stripe */}
        <div className="h-3" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #C94F3B 0, #C94F3B 16px, #1B2D5B 16px, #1B2D5B 32px, #2A7F7F 32px, #2A7F7F 48px, #C8921A 48px, #C8921A 64px)',
        }} />
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="md:flex items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 border-3 border-[#C8921A] bg-[#1B2D5B] flex items-center justify-center transform rotate-3" style={{ border: '3px solid #C8921A' }}>
                  <BettyGlasses className="w-8 h-4" color="white" />
                </div>
                <div>
                  <p className="font-black text-2xl text-white leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>UGLY DM</p>
                  <p className="text-[10px] text-white/40 tracking-widest uppercase font-mono mt-0.5">Design for Good · MedTech</p>
                </div>
              </div>
              <Braces className="w-16 h-5 mt-2 opacity-40" />
            </div>

            <blockquote className="mt-6 md:mt-0 max-w-sm bg-[#FFF9C4] p-4 transform -rotate-1 shadow-lg" style={{ borderTop: '4px solid #C8921A' }}>
              <p className="text-[#2C1810] leading-relaxed mb-2" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem' }}>
                "Le design ne sert pas qu'à rendre les objets sexy.
                Dans la MedTech, il sert à briser l'isolement social."
              </p>
              <cite className="text-[11px] text-[#888] font-mono not-italic">— Jean Bompt · #UglyDM</cite>
            </blockquote>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3 justify-center">
            {['#MedTech', '#InnovationSante', '#DesignForGood', '#ConvergenceSante', '#UXDesign', '#UglyDM', '#Dignité', '#InvisibleDesign', '#TENA', '#Coloplast', '#Urgo'].map(tag => (
              <span key={tag} className="text-[10px] text-white/25 font-mono tracking-wide">{tag}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
