import { useLanguage } from '../context/LanguageContext';

const CustomerStory = () => {
  const { language, t } = useLanguage();

  const benefits = language === 'de'
    ? [
        {
          title: 'Nicht für den Schlaf. Für den Moment davor.',
          desc: 'HESPYRA beginnt nicht im Bett, sondern dort, wo der Tag noch nachwirkt.'
        },
        {
          title: 'Ein Glas. Ein Schnitt.',
          desc: 'Ein einfacher Handgriff, der aus Weiterlaufen einen bewussten Abendbeginn macht.'
        },
        {
          title: 'Nicht alles muss mit.',
          desc: 'Gedanken, Tempo, Aufgaben — der Abend darf leichter beginnen.'
        }
      ]
    : [
        {
          title: 'Not for sleep. For the moment before.',
          desc: 'HESPYRA does not begin in bed, but where the day still echoes.'
        },
        {
          title: 'One glass. One cut.',
          desc: 'A simple gesture that turns moving forward into a conscious beginning of the evening.'
        },
        {
          title: 'Not everything has to come along.',
          desc: 'Thoughts, pace, tasks — the evening is allowed to begin more lightly.'
        }
      ];

  return (
    <section id="philosophy" className="w-full bg-[#F5F2EB] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content & Editorial List */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Category Tag */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.28em] font-semibold text-primary/50 uppercase mb-4 block">
              {t('philosophy.tag')}
            </span>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[4rem] leading-[1.05] font-serif text-primary tracking-[0.02em] font-normal mb-8 max-w-xl whitespace-pre-line">
              {t('philosophy.title')}
            </h2>

            {/* Narrative text */}
            <div className="space-y-6 text-primary/75 text-base leading-relaxed font-normal mb-12 max-w-xl">
              <p>{t('philosophy.text1')}</p>
              <p>{t('philosophy.text2')}</p>
              <p>{t('philosophy.text3')}</p>
            </div>

            {/* Editorial List without Icons */}
            <div className="space-y-8 max-w-xl pt-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <h4 className="font-sans text-[15px] sm:text-base font-semibold text-primary mb-1">
                    {benefit.title}
                  </h4>
                  <p className="font-sans text-[13px] sm:text-sm leading-relaxed text-primary/60 font-normal">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Square Image Visual */}
          <div className="lg:col-span-6 flex justify-center items-center w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="relative aspect-square w-full bg-cream-dark rounded-sm overflow-hidden shadow-lg border border-border/40 analog-wrapper analog-grain group">
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
