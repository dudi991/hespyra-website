import { useLanguage } from '../context/LanguageContext';

const CustomerStory = () => {
  const { language, t } = useLanguage();

  const benefits = language === 'de'
    ? [
        {
          num: '01',
          title: 'Alltagsstress auflösen',
          desc: 'Unterstützt die Entlastung des überreizten Nervensystems nach langen Tagen.'
        },
        {
          num: '02',
          title: 'Wärmende und beruhigende Rezeptur',
          desc: 'Natürliche Aromen von Bourbon-Vanille und Tonka schaffen einen Moment der Geborgenheit.'
        },
        {
          num: '03',
          title: 'Regenerieren statt Sedieren',
          desc: 'Sanfte Unterstützung des körpereigenen Rhythmus – ganz ohne künstliche Hormone oder Hangover.'
        }
      ]
    : [
        {
          num: '01',
          title: 'Melt away day-to-day stress',
          desc: 'Supports decompression of the overstimulated nervous system after busy days.'
        },
        {
          num: '02',
          title: 'Warm and soothing formula',
          desc: 'Natural notes of Bourbon vanilla and tonka create a comforting sensory shelter.'
        },
        {
          num: '03',
          title: 'Relax, sleep & wake up refreshed',
          desc: 'Gentle circadian support that aligns with your body without synthetic hormones or hangover.'
        }
      ];

  return (
    <section id="philosophy" className="w-full bg-[#FAF8F5] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content & Numbered List */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Category Tag */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
              {t('philosophy.tag')}
            </span>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-serif text-primary tracking-tight font-light mb-8">
              {t('philosophy.title')}
            </h2>

            {/* Narrative text */}
            <div className="space-y-6 text-primary/70 text-base leading-relaxed font-light mb-12 max-w-xl">
              <p>{t('philosophy.text1')}</p>
              <p>{t('philosophy.text2')}</p>
            </div>

            {/* Numbered Benefits List */}
            <div className="space-y-8 max-w-xl border-t border-border/80 pt-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  {/* Number identifier */}
                  <span className="font-serif text-2xl text-accent font-light italic leading-none">
                    {benefit.num}
                  </span>
                  
                  {/* Text container */}
                  <div className="flex flex-col text-left">
                    <h4 className="font-sans text-xs tracking-[0.15em] font-bold uppercase text-primary mb-1.5">
                      {benefit.title}
                    </h4>
                    <p className="font-sans text-[13px] leading-relaxed text-primary/60 font-light">
                      {benefit.desc}
                    </p>
                  </div>
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
