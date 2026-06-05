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
          title: 'Lösen',
          desc: 'Für den Moment, in dem der Tag zurücktreten darf.',
          items: [
            {
              name: 'Magnesium Bisglycinate',
              info: 'Eine gut verträgliche Magnesiumform — verbunden mit Glycine als Teil der Verbindung.'
            },
            {
              name: 'Magtein® Magnesium Threonate',
              info: 'Eine patentierte Magnesiumform — ausgewählt für die Rezeptur hinter dem Abendritual.'
            },
            {
              name: 'Reishi Mushroom Extract',
              info: 'Ein funktionaler Pilz mit langer Geschichte in asiatischen Ritual- und Pflanzenwelten.'
            }
          ]
        },
        {
          num: '02',
          title: 'Sammeln',
          desc: 'Für den Moment, in dem der Kopf aus dem Tagesmodus findet.',
          items: [
            {
              name: 'Suntheanine® L-Theanine',
              info: 'Eine Aminosäure, bekannt aus der Teepflanze.'
            },
            {
              name: 'SerinAid® Phosphatidylserine',
              info: 'Ein funktionaler Nährstoff, der in modernen Formulierungen für mentale Präsenz eingesetzt wird.'
            },
            {
              name: 'Rhodiolife® Rhodiola Rosea',
              info: 'Ein Pflanzenextrakt, bewusst gewählt als Alternative zu klassischen Abend-Adaptogenen.'
            }
          ]
        },
        {
          num: '03',
          title: 'Ankommen',
          desc: 'Für den warmen, bewussten Einstieg in den Abend.',
          items: [
            {
              name: 'Affron® Saffron',
              info: 'Ein Safran-Extrakt aus Spanien — angebaut, geerntet und verarbeitet unter kontrollierten Standards.'
            },
            {
              name: 'Kakao',
              info: 'Die warme Basis des Geschmacks — rund, erwachsen, nicht süß-kindlich.'
            },
            {
              name: 'Vanilla & Tonka',
              info: 'Weiche, vertraute Noten für ein ruhiges Geschmackserlebnis.'
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
              name: 'Magnesium Bisglycinate',
              info: 'A well-tolerated form of magnesium — bound with glycine as part of the compound.'
            },
            {
              name: 'Magtein® Magnesium Threonate',
              info: 'A patented form of magnesium — selected for the recipe behind the evening ritual.'
            },
            {
              name: 'Reishi Mushroom Extract',
              info: 'A functional mushroom with a long history in Asian ritual and plant traditions.'
            }
          ]
        },
        {
          num: '02',
          title: 'Gather',
          desc: 'For the moment when the head finds its way out of daytime mode.',
          items: [
            {
              name: 'Suntheanine® L-Theanine',
              info: 'An amino acid, well-known from the tea plant.'
            },
            {
              name: 'SerinAid® Phosphatidylserine',
              info: 'A functional nutrient used in modern formulations for mental presence.'
            },
            {
              name: 'Rhodiolife® Rhodiola Rosea',
              info: 'A plant extract, deliberately chosen as an alternative to classic evening adaptogens.'
            }
          ]
        },
        {
          num: '03',
          title: 'Arrive',
          desc: 'For a warm, conscious entry into the evening.',
          items: [
            {
              name: 'Affron® Saffron',
              info: 'A saffron extract from Spain — grown, harvested, and processed under controlled standards.'
            },
            {
              name: 'Kakao',
              info: 'The warm foundation of the flavor — round, mature, not sweet-childish.'
            },
            {
              name: 'Vanilla & Tonka',
              info: 'Soft, familiar notes for a quiet flavor experience.'
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
                      {item.dose && (
                        <span className="font-sans text-xs sm:text-sm font-semibold text-accent whitespace-nowrap ml-4">
                          {item.dose}
                        </span>
                      )}
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
