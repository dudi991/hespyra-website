import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Exclusions = () => {
  const { language } = useLanguage();

  const titleGerman = (
    <>
      Nicht alles muss mit <span className="italic text-accent font-serif font-normal block md:inline">in den Abend.</span>
    </>
  );

  const titleEnglish = (
    <>
      Not everything has to come <span className="italic text-accent font-serif font-normal block md:inline">into the evening.</span>
    </>
  );

  const leftList = language === 'de'
    ? ['Melatoninfrei', 'Zuckerfrei', 'Milchproduktfrei', '100% Vegan', 'Gentechnikfrei']
    : ['Melatonin-free', 'Sugar-free', 'Dairy-free', 'Vegan', 'Non-GMO'];

  const rightList = language === 'de'
    ? ['Ohne künstliche Aromen', 'Glutenfrei', 'Koffeinfrei', 'Nussfrei', 'Sojafrei']
    : ['No artificial flavors', 'Gluten-free', 'Caffeine-free', 'Nut-free', 'Soy-free'];

  return (
    <section id="exclusions" className="w-full bg-[#FAF8F5] py-20 lg:py-28 border-t border-border/40 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
          {language === 'de' ? 'DIE FORMEL' : 'THE FORMULA'}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-primary tracking-tight font-light mb-16 lg:mb-24">
          {language === 'de' ? titleGerman : titleEnglish}
        </h2>

        {/* 3-Part Layout: Left list, Center visual, Right list */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left List Column */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 items-start text-left order-2 md:order-1">
            {leftList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border border-accent/25 flex items-center justify-center text-accent bg-accent/3 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <span className="font-sans text-sm sm:text-base font-medium tracking-wide text-primary/80">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Center Product Image Column */}
          <div className="md:col-span-4 flex justify-center items-center order-1 md:order-2">
            <div className="relative aspect-square w-full max-w-[280px] bg-cream-dark rounded-sm overflow-hidden shadow-md border border-border/40 analog-wrapper analog-grain">
              <img 
                src="images/HESPYRA_SCOOP.webp" 
                alt="HESPYRA Formula Powder Scoop" 
                className="absolute inset-0 w-full h-full object-cover object-center analog-image"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>

          {/* Right List Column */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 items-start md:items-end text-left md:text-right order-3">
            {rightList.map((item, idx) => (
              <div key={idx} className="flex flex-row md:flex-row-reverse items-center gap-4">
                <div className="w-6 h-6 rounded-full border border-accent/25 flex items-center justify-center text-accent bg-accent/3 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <span className="font-sans text-sm sm:text-base font-medium tracking-wide text-primary/80">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Exclusions;
