import { Check, Square, Clock, ChevronUp, Sparkle, Droplet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Exclusions = () => {
  const { language } = useLanguage();

  const leftItems = language === 'de'
    ? [
        {
          label: 'Warm',
          icon: <Square className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Kakao, Vanille und Tonka.\nRund, erwachsen, zurückhaltend — nicht süß, nicht schwer.'
        },
        {
          label: 'Rein',
          icon: <Check className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Ohne Melatonin. Ohne Eisen.\n9 ausgewählte Inhaltsstoffe, offen benannt.'
        },
        {
          label: 'Einfach',
          icon: <Clock className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Ein Löffel. Ein Glas.\nEin ruhiger Anfang für deinen Abend.'
        }
      ]
    : [
        {
          label: 'Warm',
          icon: <Square className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Vanilla, tonka and a quiet depth. Reserved — not sweet, not heavy.'
        },
        {
          label: 'Clean',
          icon: <Check className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'No melatonin, no sugar, no synthetic colour. 14 ingredients you can pronounce.'
        },
        {
          label: 'Simple',
          icon: <Clock className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'One spoon. One glass. A quiet break in the day, in under a minute.'
        }
      ];

  const rightItems = language === 'de'
    ? [
        {
          label: 'Magnesium',
          icon: <ChevronUp className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Zwei Formen von Magnesium — bewusst gewählt für die Basis der Rezeptur.'
        },
        {
          label: 'L-Theanin',
          icon: <Sparkle className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Bekannt aus der Teepflanze — passend für ein ruhiges Abendritual.'
        },
        {
          label: 'Safran',
          icon: <Droplet className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Ein sorgfältig ausgewählter Pflanzenstoff mit langer Tradition.'
        }
      ]
    : [
        {
          label: 'Magnesium',
          icon: <ChevronUp className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'Two highly absorbable forms — the calm foundation of the formula.'
        },
        {
          label: 'L-Theanine',
          icon: <Sparkle className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'From green tea. Clear, mild, calm focus without sedation.'
        },
        {
          label: 'Saffron',
          icon: <Droplet className="w-4 h-4 text-accent" strokeWidth={1.5} />,
          desc: 'A studied botanical for mood and warmth, at a meaningful dose.'
        }
      ];

  return (
    <section id="exclusions" className="w-full bg-[#F2EDE4] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-stretch max-w-[1300px] mx-auto">
          
          {/* Left Column (right-aligned text on desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-10 lg:gap-0 lg:justify-between order-2 lg:order-1 text-left lg:text-right">
            {leftItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center justify-start lg:justify-end gap-3 mb-2">
                  <span className="font-sans text-xs lg:text-[13px] tracking-[0.25em] font-medium text-accent uppercase select-none">
                    {item.label}
                  </span>
                  {item.icon}
                </div>
                <p className="font-sans text-sm lg:text-[15px] leading-relaxed text-primary/60 font-light text-left lg:text-right max-w-sm lg:ml-auto whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column (Product Image) */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
            <div className="relative aspect-[5/4] w-full max-w-[500px] bg-cream-dark rounded-sm overflow-hidden shadow-lg border border-border/40 analog-wrapper analog-grain group">
              <img 
                src="images/HESPYRA_SCOOP.webp" 
                alt="HESPYRA Formula Powder Scoop" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out analog-image group-hover:scale-103"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>

          {/* Right Column (left-aligned text) */}
          <div className="lg:col-span-3 flex flex-col gap-10 lg:gap-0 lg:justify-between order-3 text-left">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center justify-start gap-3 mb-2">
                  {item.icon}
                  <span className="font-sans text-xs lg:text-[13px] tracking-[0.25em] font-medium text-accent uppercase select-none">
                    {item.label}
                  </span>
                </div>
                <p className="font-sans text-sm lg:text-[15px] leading-relaxed text-primary/60 font-light text-left max-w-sm lg:mr-auto whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Exclusions;
