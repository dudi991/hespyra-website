import { Moon, Clock, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CustomerStory = () => {
  const { language, t } = useLanguage();

  const benefits = language === 'de'
    ? [
        {
          icon: <Moon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />,
          title: 'Nicht für den Schlaf. Für den Moment davor.',
          desc: 'HESPYRA beginnt nicht im Bett, sondern dort, wo der Tag noch nachwirkt.'
        },
        {
          icon: <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />,
          title: 'Ein Glas. Ein Schnitt.',
          desc: 'Ein einfacher Handgriff, der aus Weiterlaufen einen bewussten Abendbeginn macht.'
        },
        {
          icon: <Activity className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />,
          title: 'Nicht alles muss mit.',
          desc: 'Gedanken, Tempo, Aufgaben — der Abend darf leichter beginnen.'
        }
      ]
    : [
        {
          icon: <Moon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />,
          title: 'Not for sleep. For the moment before.',
          desc: 'HESPYRA does not begin in bed, but where the day still echoes.'
        },
        {
          icon: <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />,
          title: 'One glass. One cut.',
          desc: 'A simple gesture that turns moving forward into a conscious beginning of the evening.'
        },
        {
          icon: <Activity className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />,
          title: 'Not everything has to come along.',
          desc: 'Thoughts, pace, tasks — the evening is allowed to begin more lightly.'
        }
      ];

  return (
    <section id="philosophy" className="w-full bg-[#F2EDE4] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-6 items-stretch">
          
          {/* Left Column: Text Content & Editorial List */}
          <div className="lg:col-span-6 flex flex-col text-left max-w-2xl py-2">
            {/* Category Tag */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.28em] font-semibold text-primary/45 uppercase mb-3 block select-none">
              {t('philosophy.tag')}
            </span>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.2] font-serif text-primary tracking-[0.02em] font-normal mb-4 max-w-xl whitespace-pre-line">
              {t('philosophy.title')}
            </h2>

            {/* Narrative text */}
            <div className="space-y-2 text-primary/75 text-sm sm:text-base leading-[1.6] font-normal mb-5 max-w-xl">
              <p>{t('philosophy.text1')}</p>
              <p>{t('philosophy.text2')}</p>
              <p>{t('philosophy.text3')}</p>
            </div>

            {/* Editorial List with Icons */}
            <div className="space-y-3 max-w-xl mt-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  {/* Icon */}
                  {benefit.icon}
                  
                  {/* Text container */}
                  <div className="flex flex-col text-left">
                    <h4 className="font-sans text-[14px] sm:text-[15px] font-semibold text-primary mb-0.5">
                      {benefit.title}
                    </h4>
                    <p className="font-sans text-[13px] sm:text-sm leading-relaxed text-primary/60 font-normal">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Balanced visual container matching left height and Hero width */}
          <div className="lg:col-span-6 w-full max-w-[500px] lg:max-w-none mx-auto relative">
            <div className="relative lg:absolute lg:inset-0 w-full aspect-square lg:aspect-auto h-full bg-cream-dark rounded-sm overflow-hidden shadow-md border border-border/40 analog-wrapper analog-grain group">
              <img 
                src="images/journey.webp" 
                alt="HESPYRA Philosophy Concept" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out analog-image group-hover:scale-103 opacity-[0.90] contrast-[0.95] saturate-[0.95]"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerStory;
