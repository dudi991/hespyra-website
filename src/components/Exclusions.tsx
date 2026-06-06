import { useLanguage } from '../context/LanguageContext';
import { Coffee, Leaf, Waves, Moon } from 'lucide-react';

const Exclusions = () => {
  const { language } = useLanguage();

  // Custom Spoon SVG Icon since lucide-react doesn't have it in this version
  const SpoonIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M17.5 6.5c1.4-1.4 3.1-1 3.8-.3.7.7 1.1 2.4-.3 3.8-1.4 1.4-3.5 1.8-4.2 1.1-.7-.7-.3-2.8 1.1-4.2z" />
      <path d="M12.5 11.5L4 20" />
    </svg>
  );

  // Custom Portion/Slice SVG Icon representing "EIN LÖFFEL"
  const PortionIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v10h10" />
      <path d="M12 12l7 7" className="opacity-40" />
    </svg>
  );

  const exclusionsTag = language === 'de' ? 'SO EINFACH GEHT’S' : 'SO SIMPLE';
  const exclusionsDesc = language === 'de' 
    ? 'HESPYRA lässt sich mühelos in deinen Abend integrieren.\nWeniger als eine Minute — für einen ruhigen Anfang.'
    : 'HESPYRA integrates effortlessly into your evening.\nLess than a minute — for a quiet beginning.';

  const leftItems = language === 'de'
    ? [
        {
          label: 'WARM',
          icon: <Coffee className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'Vanille, Tonka und ruhige Tiefe.\nZurückhaltend — nicht süß, nicht schwer.'
        },
        {
          label: 'REIN',
          icon: <Leaf className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'Kein Melatonin, kein Zucker,\nkeine künstlichen Farbstoffe.'
        },
        {
          label: 'EINFACH',
          icon: <SpoonIcon className="w-[17px] h-[17px] text-accent" />,
          desc: 'Ein Löffel. Ein Glas.\nEine ruhige Pause im Tag.'
        }
      ]
    : [
        {
          label: 'WARM',
          icon: <Coffee className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'Vanilla, tonka and quiet depth.\nReserved — not sweet, not heavy.'
        },
        {
          label: 'PURE',
          icon: <Leaf className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'No melatonin, no sugar,\nno artificial colorants.'
        },
        {
          label: 'SIMPLE',
          icon: <SpoonIcon className="w-[17px] h-[17px] text-accent" />,
          desc: 'One spoon. One glass.\nA quiet pause in your day.'
        }
      ];

  const rightItems = language === 'de'
    ? [
        {
          label: 'WARM ODER KALT',
          icon: <Waves className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'Für Wasser oder Pflanzenmilch.\nDu entscheidest.'
        },
        {
          label: 'EIN LÖFFEL',
          icon: <PortionIcon className="w-[17px] h-[17px] text-accent" />,
          desc: 'Eine Portion.\nKein Schlucken, kein Gummy.'
        },
        {
          label: 'JEDEN ABEND',
          icon: <Moon className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'Ein wiederkehrender Moment,\nder dem Abend Form gibt.'
        }
      ]
    : [
        {
          label: 'WARM OR COLD',
          icon: <Waves className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'For water or plant milk.\nYou decide.'
        },
        {
          label: 'ONE SPOON',
          icon: <PortionIcon className="w-[17px] h-[17px] text-accent" />,
          desc: 'One serving.\nNo swallowing, no gummy.'
        },
        {
          label: 'EVERY EVENING',
          icon: <Moon className="w-[17px] h-[17px] text-accent" strokeWidth={1.5} />,
          desc: 'A recurring moment\nthat gives shape to the evening.'
        }
      ];

  return (
    <section id="exclusions" className="w-full bg-[#EDE8DC] py-12 lg:py-16 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 lg:gap-y-0 max-w-[1300px] mx-auto items-stretch">
          
          {/* Header Block */}
          <div className="col-span-12 lg:col-span-3 lg:row-start-1 lg:col-start-1 order-1 lg:order-none flex flex-col justify-end pb-4 lg:pb-6">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-3 block select-none">
              {exclusionsTag}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.25] font-serif text-primary tracking-tight font-normal">
              {language === 'de' ? (
                <>
                  Ein Moment,<br />
                  der <span className="italic text-accent font-light">dir</span> gehört.
                </>
              ) : (
                <>
                  A moment<br />
                  that is <span className="italic text-accent font-light">yours</span>.
                </>
              )}
            </h2>
            <div className="w-12 h-[1px] bg-accent/30 my-5"></div>
            <p className="font-sans text-sm sm:text-base text-primary/75 leading-relaxed font-light whitespace-pre-line">
              {exclusionsDesc}
            </p>
          </div>

          {/* Center Column (Product Image) - Visual Anchor */}
          <div className="col-span-12 lg:col-span-6 lg:row-span-2 lg:col-start-4 order-2 lg:order-none flex justify-center items-center py-4 lg:py-0">
            <div className="relative aspect-[3/4] w-full max-w-[420px] lg:max-w-[480px] bg-cream-dark rounded-sm overflow-hidden shadow-lg border border-primary/5 analog-wrapper analog-grain group">
              <img 
                src="images/HESPYRA_SCOOP.webp" 
                alt="HESPYRA Evening Ritual Preparation" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out analog-image group-hover:scale-103"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>

          {/* Left Column Items */}
          <div className="col-span-12 lg:col-span-3 lg:row-start-2 lg:col-start-1 order-3 lg:order-none flex flex-col justify-start pt-4 lg:pt-8 space-y-8 lg:space-y-10">
            {leftItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2.5 mb-2">
                  {item.icon}
                  <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-primary uppercase select-none">
                    {item.label}
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-primary/75 leading-relaxed font-light whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column Items */}
          <div className="col-span-12 lg:col-span-3 lg:row-start-2 lg:col-start-10 order-4 lg:order-none flex flex-col justify-start pt-4 lg:pt-8 space-y-8 lg:space-y-10">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2.5 mb-2">
                  {item.icon}
                  <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-primary uppercase select-none">
                    {item.label}
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-primary/75 leading-relaxed font-light whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Section Footer */}
        <div className="w-12 h-[1px] bg-accent/30 mx-auto mt-16 lg:mt-20"></div>

      </div>
    </section>
  );
};

export default Exclusions;
