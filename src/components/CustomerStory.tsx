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
    <section id="philosophy" className="w-full bg-[#F5F2EB] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Text Content & Editorial List */}
          <div className="lg:col-span-6 flex flex-col justify-center py-4 text-left">
            {/* Category Tag */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.28em] font-semibold text-primary/50 uppercase mb-6 block">
              {t('philosophy.tag')}
            </span>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.15] font-serif text-primary tracking-[0.02em] font-normal mb-8 max-w-2xl whitespace-pre-line">
              {t('philosophy.title')}
            </h2>

            {/* Narrative text */}
            <div className="space-y-5 text-primary/75 text-sm sm:text-base leading-relaxed font-normal mb-10 max-w-xl">
              <p>{t('philosophy.text1')}</p>
              <p>{t('philosophy.text2')}</p>
              <p>{t('philosophy.text3')}</p>
            </div>

            {/* Editorial List with Icons & elegant top border separator */}
            <div className="space-y-6 max-w-xl pt-6 border-t border-primary/10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  {/* Icon */}
                  {benefit.icon}
                  
                  {/* Text container */}
                  <div className="flex flex-col text-left">
                    <h4 className="font-sans text-[15px] sm:text-base font-semibold text-primary mb-1.5">
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

          {/* Right Column: Square Image on mobile, stretching to match height on desktop */}
          <div className="lg:col-span-6 flex justify-center items-stretch w-full max-w-[550px] lg:max-w-none mx-auto">
            <div className="relative aspect-square lg:aspect-auto w-full lg:h-full min-h-[350px] lg:min-h-[600px] bg-cream-dark rounded-sm overflow-hidden shadow-lg border border-border/40 analog-wrapper analog-grain group">
              <img 
                src="images/philosophieHESPYRA.webp" 
                alt="HESPYRA Philosophy Concept" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out analog-image group-hover:scale-103"
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
