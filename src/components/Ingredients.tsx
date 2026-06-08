import { useLanguage } from '../context/LanguageContext';

interface IngredientItem {
  name: string;
  dose?: string;
  info: string;
}

interface IngredientGroup {
  num: string;
  title: string;
  desc: string;
  items: IngredientItem[];
}

const Ingredients = () => {
  const { language, t } = useLanguage();

  const groups: IngredientGroup[] = language === 'de'
    ? [
        {
          num: '01',
          title: 'Körper',
          desc: 'Mineralstoffe und Pflanzenstoffe für mehr körperliche Ruhe am Abend.',
          items: [
            {
              name: 'Magnesium Bisglycinat',
              info: 'Eine gut verträgliche Magnesiumform, verbunden mit der Aminosäure Glycin.'
            },
            {
              name: 'Magtein® Magnesium L-Threonat',
              info: 'Eine patentierte, bioverfügbare Magnesiumform für das Abendritual.'
            },
            {
              name: 'Reishi Mushroom Extract',
              info: 'Ein funktionaler Vitalpilz mit langer Tradition in asiatischen Pflanzenwelten.'
            }
          ]
        },
        {
          num: '02',
          title: 'Kopf',
          desc: 'Ausgewählte Nährstoffe für den Übergang aus Gedanken, Tempo und Tagesmodus.',
          items: [
            {
              name: 'Suntheanine® L-Theanin',
              info: 'Eine beruhigende Aminosäure, gewonnen aus grünem Tee.'
            },
            {
              name: 'SerinAid® Phosphatidylserin',
              info: 'Ein funktionaler Nährstoff für mentale Erholung und Ruhe am Abend.'
            },
            {
              name: 'Rhodiolife® Rhodiola Rosea',
              info: 'Ein Pflanzenextrakt als bewusste Alternative zu klassischen Adaptogenen.'
            }
          ]
        },
        {
          num: '03',
          title: 'Geschmack',
          desc: 'Warme Noten aus Kakao, Vanille und Tonka — weich, erwachsen und zurückhaltend.',
          items: [
            {
              name: 'Affron® Safran',
              info: 'Ein edler Safran-Extrakt, angebaut nach höchsten Qualitätsstandards.'
            },
            {
              name: 'Kakao',
              info: 'Die warme Basis des Abendrituals — rund, erwachsen und ungesüßt.'
            },
            {
              name: 'Vanille & Tonka',
              info: 'Weiche, vertraute Noten — warm, ausbalanciert und zurückhaltend.'
            }
          ]
        }
      ]
    : [
        {
          num: '01',
          title: 'Body',
          desc: 'Minerals and botanicals for more physical calm in the evening.',
          items: [
            {
              name: 'Magnesium Bisglycinate',
              info: 'A highly bioavailable form of magnesium, bound with the amino acid glycine.'
            },
            {
              name: 'Magtein® Magnesium Threonate',
              info: 'A patented, bioavailable form of magnesium for the evening ritual.'
            },
            {
              name: 'Reishi Mushroom Extract',
              info: 'A functional vital mushroom with a long tradition in Asian botany.'
            }
          ]
        },
        {
          num: '02',
          title: 'Mind',
          desc: 'Selected nutrients for the transition from thoughts, pace, and daytime mode.',
          items: [
            {
              name: 'Suntheanine® L-Theanine',
              info: 'A calming amino acid derived from green tea.'
            },
            {
              name: 'SerinAid® Phosphatidylserine',
              info: 'A functional nutrient for mental recovery and peace in the evening.'
            },
            {
              name: 'Rhodiolife® Rhodiola Rosea',
              info: 'A botanical extract chosen as a modern alternative to classic adaptogens.'
            }
          ]
        },
        {
          num: '03',
          title: 'Taste',
          desc: 'Warm notes of cacao, vanilla, and tonka — soft, mature, and reserved.',
          items: [
            {
              name: 'Affron® Saffron',
              info: 'A premium saffron extract, grown under strict quality standards.'
            },
            {
              name: 'Kakao',
              info: 'The warm foundation of the flavor — round, mature, and unsweetened.'
            },
            {
              name: 'Vanilla & Tonka',
              info: 'Soft, familiar notes — warm, balanced, and reserved.'
            }
          ]
        }
      ];

  return (
    <section id="ingredients" className="w-full bg-muted py-[49px] lg:py-[92px] relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-4 block select-none">
          {t('ingredients.tag')}
        </span>
        
        {/* Headline */}
        <h2 className="text-[23px] sm:text-4xl md:text-5xl leading-[1.25] font-serif text-primary tracking-tight font-normal mb-6 max-w-3xl mx-auto">
          {t('ingredients.title')}
        </h2>
        
        {/* Description */}
        <p className="font-sans text-[13px] sm:text-base text-primary/75 max-w-3xl mx-auto leading-relaxed font-light mb-6 lg:mb-24">
          {t('ingredients.desc')}
        </p>

        {/* 3-Column Ingredients Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-primary/10 gap-16 md:gap-0 text-left max-w-6xl mx-auto">
          {groups.map((group, gIdx) => (
            <div 
              key={gIdx} 
              className={`flex flex-col ${gIdx === 0 ? 'md:pr-10 lg:pr-16 md:pb-0' : gIdx === 1 ? 'md:px-10 lg:px-16 md:pb-0' : 'md:pl-10 lg:pl-16'}`}
            >
              
              {/* Group Title (Release, Gather, Arrive) */}
              <div className="mb-8 md:mb-0 md:min-h-[220px] lg:min-h-[170px]">
                <span className="font-sans text-[11px] sm:text-xs tracking-[0.15em] text-accent font-semibold block mb-4 select-none">
                  {group.num}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-primary mb-3">
                  {group.title}
                </h3>
                <p className="font-sans text-[12px] sm:text-sm lg:text-[14px] leading-relaxed text-primary/60 font-light">
                  {group.desc}
                </p>
              </div>

              {/* Group Ingredients Items */}
              <div className="space-y-6 md:space-y-6">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex flex-col text-left md:min-h-[140px] lg:min-h-[110px]">
                    <div className="flex justify-between items-baseline mb-1 md:mb-2.5">
                      <h4 className="font-sans text-[13px] lg:text-[16px] font-semibold tracking-wide text-primary">
                        {item.name}
                      </h4>
                      {item.dose && (
                        <span className="font-sans text-xs sm:text-sm font-semibold text-accent whitespace-nowrap ml-4">
                          {item.dose}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-[12px] sm:text-[14.5px] leading-[1.7] text-primary/72 font-light">
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
