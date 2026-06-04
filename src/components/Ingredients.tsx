import { useLanguage } from '../context/LanguageContext';

const Ingredients = () => {
  const { language } = useLanguage();

  const title = language === 'de' 
    ? "Eine ruhige Komposition für den Abend." 
    : "A quiet composition for the evening.";
  
  const desc = language === 'de'
    ? "Pflanzenextrakte, Adaptogene und Nährstoffe — sorgfältig ausgewählt, um dein Abendritual zu unterstützen."
    : "Botanicals, adaptogens and nutrients carefully selected to support your evening ritual.";

  const groups = language === 'de'
    ? [
        {
          title: 'Restore',
          tag: 'Regeneration',
          desc: 'Unterstützung für die mentale Erholung nach einem fordernden Tag.',
          items: [
            {
              name: 'Ashwagandha',
              info: 'Traditionelle Wurzel zur Regulierung des Cortisolspiegels und Minderung von Alltagsstress.'
            },
            {
              name: 'Kamille',
              info: 'Ein bewährter Pflanzenstoff, der sanft die Gelassenheit und Entspannung fördert.'
            },
            {
              name: 'L-Theanin',
              info: 'Aus grünem Tee. Begünstigt Alphawellen im Gehirn für mentale Ruhe ohne Benommenheit.'
            }
          ]
        },
        {
          title: 'Calm',
          tag: 'Beruhigung',
          desc: 'Entlastung für ein überreiztes Nervensystem und müde Muskeln.',
          items: [
            {
              name: 'Magnesium',
              info: 'Bioaktive Formen, gezielt ausgewählt für die Muskelentspannung und Beruhigung des vegetativen Nervensystems.'
            },
            {
              name: 'Zitronenmelisse',
              info: 'Fördert die seelische Balance und hilft, die Gedankenflut am Abend zu stoppen.'
            },
            {
              name: 'Passionsblume',
              info: 'Unterstützt das Abschalten bei mentaler Überforderung und innerer Unruhe.'
            }
          ]
        },
        {
          title: 'Sleep',
          tag: 'Schlaf',
          desc: 'Vorbereitung auf eine tiefe, erholsame Nachtruhe.',
          items: [
            {
              name: 'Baldrian',
              info: 'Der klassische pflanzliche Helfer zur natürlichen Regulierung der Einschlafbereitschaft.'
            },
            {
              name: 'Hopfen',
              info: 'Wirkt synergistisch mit Baldrian und unterstützt das sanfte Abgleiten in den Tiefschlaf.'
            },
            {
              name: 'Sauerkirsche',
              info: 'Liefert natürliche Pflanzenstoffe, die den körpereigenen Schlafzyklus ganz ohne künstliche Hormone harmonisieren.'
            }
          ]
        }
      ]
    : [
        {
          title: 'Restore',
          tag: 'Recovery',
          desc: 'Support for mental recovery and cognitive relief after demanding hours.',
          items: [
            {
              name: 'Ashwagandha',
              info: 'Traditional root that helps regulate cortisol levels and reduce daily environmental stress.'
            },
            {
              name: 'Chamomile',
              info: 'A time-tested botanical containing apigenin to gently soothe and relax the mind.'
            },
            {
              name: 'L-Theanine',
              info: 'Derived from green tea. Promotes alpha brain waves for tranquil focus without drowsiness.'
            }
          ]
        },
        {
          title: 'Calm',
          tag: 'Tranquility',
          desc: 'Ease for an overstimulated nervous system and physical tension.',
          items: [
            {
              name: 'Magnesium',
              info: 'Bioactive forms selected to relax tense muscles and calm nervous pathways.'
            },
            {
              name: 'Lemon Balm',
              info: 'Promotes emotional balance and aids in quieting racing thoughts as night approaches.'
            },
            {
              name: 'Passionflower',
              info: 'Helps silence mental chatter and transition away from high-alert daytime states.'
            }
          ]
        },
        {
          title: 'Sleep',
          tag: 'Rest',
          desc: 'Preparation of your body cycles for deep, restorative sleep.',
          items: [
            {
              name: 'Valerian',
              info: 'Classic botanical helper that naturally supports sleep latency and readiness.'
            },
            {
              name: 'Hops',
              info: 'Works synergistically with valerian to encourage deeper, less interrupted rest.'
            },
            {
              name: 'Tart Cherry',
              info: 'Provides natural phytonutrients that harmonize your sleep-wake cycle without synthetic hormones.'
            }
          ]
        }
      ];

  return (
    <section id="ingredients" className="w-full bg-[#FAF8F5] py-20 lg:py-28 border-t border-border/40 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
          {language === 'de' ? 'DIE REZEPTUR' : 'THE INGREDIENTS'}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-primary tracking-tight font-light mb-6 max-w-3xl mx-auto">
          {title}
        </h2>
        
        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-primary/60 max-w-xl mx-auto leading-relaxed font-light mb-16 lg:mb-24">
          {desc}
        </p>

        {/* 3-Column Ingredients Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 text-left max-w-5xl mx-auto">
          {groups.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col border-t border-border/80 pt-8">
              
              {/* Group Title (Restore, Calm, Sleep) */}
              <div className="mb-8">
                <span className="font-serif text-xs text-accent uppercase tracking-widest font-light mb-2 block">
                  {group.tag}
                </span>
                <h3 className="font-sans text-lg tracking-[0.2em] font-bold uppercase text-primary mb-3">
                  {group.title}
                </h3>
                <p className="font-sans text-[12px] leading-relaxed text-primary/50 font-light">
                  {group.desc}
                </p>
              </div>

              {/* Group Ingredients Items */}
              <div className="space-y-8">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex flex-col text-left border-l border-accent/20 pl-4 py-1">
                    <h4 className="font-sans text-xs tracking-wider font-bold uppercase text-primary/90 mb-1.5">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[13px] leading-relaxed text-primary/60 font-light">
                      {item.info}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ingredients;
