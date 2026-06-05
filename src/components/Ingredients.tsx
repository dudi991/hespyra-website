import { useLanguage } from '../context/LanguageContext';

const Ingredients = () => {
  const { language, t } = useLanguage();

  const groups = language === 'de'
    ? [
        {
          num: '01',
          title: 'Lösen',
          desc: 'Für den Moment, in dem der Tag zurücktreten darf.',
          items: [
            {
              name: 'Magnesium Bisglycinat & L-Threonat',
              dose: '200 mg',
              info: 'Zwei sanfte, gut aufnehmbare Formen — das ruhige Fundament der Rezeptur.'
            },
            {
              name: 'L-Theanin',
              dose: '200 mg',
              info: 'Aus grünem Tee. Klar, mild, ruhig — ohne Sedierung.'
            },
            {
              name: 'Apigenin',
              dose: '50 mg',
              info: 'Ein Pflanzenstoff aus der Kamille. Ruhig, vertraut, abendlich.'
            }
          ]
        },
        {
          num: '02',
          title: 'Sammeln',
          desc: 'Ausgewählte Pflanzenextrakte und Aminosäuren für mehr innere Sammlung.',
          items: [
            {
              name: 'Ashwagandha (KSM-66)',
              dose: '300 mg',
              info: 'Eine Wurzel mit langer Tradition — ruhig, erdig, zurückhaltend.'
            },
            {
              name: 'Safran-Extrakt (affron®)',
              dose: '28 mg',
              info: 'Ein Extrakt mit warmer Tiefe und einer feinen Präsenz.'
            },
            {
              name: 'Phosphatidylserin',
              dose: '100 mg',
              info: 'Aus pflanzlichen Lecithinen gewonnen. Ein klarer Bestandteil der Komposition.'
            }
          ]
        },
        {
          num: '03',
          title: 'Ankommen',
          desc: 'Warme Noten und vertraute Zutaten, die die Zubereitung in ein Ankommen verwandeln.',
          items: [
            {
              name: 'Reishi',
              dose: '500 mg',
              info: 'Ein Pilz mit Tiefe. Traditionell geschätzt, warm im Charakter.'
            },
            {
              name: 'Glycin',
              dose: '1.000 mg',
              info: 'Sanft, dezent süß, abgerundet — führt den Körper behutsam zur Ruhe.'
            },
            {
              name: 'Vanille & Tonka',
              dose: 'Aroma',
              info: 'Warm, weich, rituell. Der Grund, warum es nach Abend schmeckt.'
            }
          ]
        }
      ]
    : [
        {
          num: '01',
          title: 'Release',
          desc: 'For the moment when the day is allowed to step back.',
          items: [
            {
              name: 'Magnesium Bisglycinate & L-Threonate',
              dose: '200 mg',
              info: 'Two gentle, absorbable forms — the calm foundation of the formula.'
            },
            {
              name: 'L-Theanine',
              dose: '200 mg',
              info: 'From green tea. Clear, mild, calm — without sedation.'
            },
            {
              name: 'Apigenin',
              dose: '50 mg',
              info: 'A botanical compound from chamomile. Quiet, familiar, evening-like.'
            }
          ]
        },
        {
          num: '02',
          title: 'Gather',
          desc: 'Selected plant extracts and amino acids for greater inner focus.',
          items: [
            {
              name: 'Ashwagandha (KSM-66)',
              dose: '300 mg',
              info: 'A root with a long tradition — quiet, earthy, reserved.'
            },
            {
              name: 'Saffron Extract (affron®)',
              dose: '28 mg',
              info: 'An extract with warm depth and a delicate presence.'
            },
            {
              name: 'Phosphatidylserine',
              dose: '100 mg',
              info: 'Sourced from plant lecithins. A clear component of the composition.'
            }
          ]
        },
        {
          num: '03',
          title: 'Arrive',
          desc: 'Warm notes and familiar ingredients that turn preparation into arrival.',
          items: [
            {
              name: 'Reishi',
              dose: '500 mg',
              info: 'A mushroom with depth. Traditionally valued, warm in character.'
            },
            {
              name: 'Glycine',
              dose: '1,000 mg',
              info: 'Gentle, subtly sweet, well-rounded — eases the body toward rest.'
            },
            {
              name: 'Vanilla & Tonka',
              dose: 'flavour',
              info: 'Warm, soft, ritualistic. The reason it tastes like an evening.'
            }
          ]
        }
      ];

  return (
    <section id="ingredients" className="w-full bg-[#F2EDE4] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-primary/50 uppercase mb-6 block select-none">
          {t('ingredients.tag')}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-serif text-primary tracking-[0.02em] font-normal mb-6 max-w-3xl mx-auto">
          {t('ingredients.title')}
        </h2>
        
        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-primary/60 max-w-3xl mx-auto leading-relaxed font-light mb-16 lg:mb-24">
          {t('ingredients.desc')}
        </p>

        {/* 3-Column Ingredients Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-primary/10 gap-12 md:gap-0 text-left max-w-5xl mx-auto">
          {groups.map((group, gIdx) => (
            <div 
              key={gIdx} 
              className={`flex flex-col ${gIdx === 0 ? 'md:pr-10 lg:pr-12 pb-8 md:pb-0' : gIdx === 1 ? 'md:px-10 lg:px-12 pb-8 md:pb-0' : 'md:pl-10 lg:pl-12'}`}
            >
              
              {/* Group Title (Release, Gather, Arrive) */}
              <div className="mb-10">
                <span className="font-sans text-[11px] sm:text-xs tracking-[0.15em] text-accent font-semibold block mb-4 select-none">
                  {group.num}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-primary mb-3">
                  {group.title}
                </h3>
                <p className="font-sans text-[13px] sm:text-sm lg:text-[14px] leading-relaxed text-primary/60 font-light">
                  {group.desc}
                </p>
              </div>

              {/* Group Ingredients Items */}
              <div className="space-y-8">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex flex-col text-left">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-sans text-sm lg:text-[15px] font-semibold text-primary">
                        {item.name}
                      </h4>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-accent whitespace-nowrap ml-4">
                        {item.dose}
                      </span>
                    </div>
                    <p className="font-sans text-[13px] sm:text-sm leading-relaxed text-primary/60 font-light">
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
