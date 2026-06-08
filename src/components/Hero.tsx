import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const titleGerman = (
    <>
      Feierabend beginnt<br />im <span className="italic text-accent font-serif font-normal">Kopf.</span>
    </>
  );

  const titleEnglish = (
    <>
      Evening begins<br />in the <span className="italic text-accent font-serif font-normal">mind.</span>
    </>
  );

  const description = language === 'de' 
    ? "Ein trinkbares Abendritual mit ausgewählten Premium-Rohstoffen und warmen Geschmacksnoten — für den Übergang vom Tagesmodus in einen ruhigeren Abend. Ohne Melatonin. Als Drink statt Kapsel."
    : "A drinkable evening ritual with selected premium ingredients and warm flavor notes — for the transition from the day's pace to a quieter evening. Melatonin-free. A drink instead of capsules.";

  const ctaPrimary = language === 'de' ? "DIE ERSTE EDITION SICHERN" : "SECURE THE FIRST EDITION";


  const claims = language === 'de'
    ? [
        "Melatoninfrei",
        "Vegan",
        "Ohne Eisen",
        "Warm oder kalt",
        "Premium-Rohstoffe"
      ]
    : [
        "Melatonin-free",
        "Vegan",
        "Iron-free",
        "Warm or cold",
        "Premium ingredients"
      ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-light pt-20 sm:pt-24 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 z-10 overflow-hidden">
      {/* Background grain texture effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1600px] mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-4 xl:gap-6 items-stretch">
          
          {/* MOBILE-ONLY: Product Image first */}
          <div className="lg:hidden w-full mb-1">
            {/* MOBILE-ONLY Eyebrow */}
            <div className="w-full text-left mb-2">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase block select-none">
                {language === 'de' ? 'NICHT FÜR DEN SCHLAF. FÜR DEN MOMENT DAVOR.' : 'NOT FOR SLEEP. FOR THE MOMENT BEFORE.'}
              </span>
            </div>
            
            <div className="relative w-full h-[28vh] sm:h-[32vh] bg-white rounded-sm shadow-lg border border-border/40 overflow-hidden group">
              <div className="absolute inset-0 overflow-hidden rounded-sm analog-grain bg-white">
                <img 
                  src="images/heroHESPYRA.webp" 
                  alt="HESPYRA Product Presentation" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ filter: 'saturate(0.98) contrast(1.05) brightness(1.00)' }}
                  loading="eager"
                  draggable="false"
                />
              </div>
            </div>
            
            {/* Caption card below the image on mobile to prevent obscuring image objects */}
            <div className="mt-2 bg-[#F4ECE1]/95 py-1.5 px-3.5 rounded-sm shadow-md border border-primary/5">
              <h4 className="font-serif text-[12.5px] sm:text-[13px] text-primary font-semibold mb-0.5 leading-tight tracking-wide">
                HESPYRA Evening Ritual
              </h4>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <p className="font-sans text-[10px] sm:text-[11px] leading-tight text-primary/85 font-normal tracking-wide">
                  {language === 'de' 
                    ? "30 Abendrituale · Kakao · Vanille · Tonka"
                    : "30 evening rituals · Cacao · Vanilla · Tonka"}
                </p>
                <div className="font-sans font-bold text-[8px] tracking-widest text-accent uppercase">
                  {language === 'de' ? 'ERSTE EDITION' : 'FIRST EDITION'}
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Wording & CTAs (Stretched to match image height on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left max-w-2xl py-2">
            
            {/* Top Group: Slogan, Title, Description */}
            <div className="space-y-4 lg:space-y-6">
              <span className="hidden lg:block font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-4 select-none">
                {language === 'de' ? 'NICHT FÜR DEN SCHLAF. FÜR DEN MOMENT DAVOR.' : 'NOT FOR SLEEP. FOR THE MOMENT BEFORE.'}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem] leading-[1.05] font-serif text-primary tracking-tight font-normal mb-4 lg:mb-8 max-w-[950px]">
                {language === 'de' ? titleGerman : titleEnglish}
              </h1>

              <p className="font-sans text-sm sm:text-base text-primary/75 leading-relaxed font-light max-w-xl">
                {description}
              </p>
            </div>

            {/* Middle Group: CTA Buttons */}
            <div className="space-y-6 my-5 lg:my-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <a 
                  href="#purchase" 
                  className="inline-block text-center bg-accent hover:bg-accent-hover px-8 py-4 text-xs tracking-[0.22em] font-bold uppercase rounded-sm text-white transition-all duration-300 shadow-sm whitespace-nowrap"
                >
                  {ctaPrimary}
                </a>
                <a 
                  href="#exclusions" 
                  className="flex items-center gap-4 text-primary/80 hover:text-accent transition-all duration-300 group/arrow"
                >
                  <div className="flex flex-col text-left leading-[1.2] text-[10px] sm:text-xs tracking-[0.22em] font-bold uppercase">
                    <span>{language === 'de' ? 'ZUR' : 'SEE THE'}</span>
                    <span>{language === 'de' ? 'REZEPTUR' : 'FORMULA'}</span>
                  </div>
                  <ArrowRight className="w-8 h-8 transition-transform duration-300 group-hover/arrow:translate-x-1 text-primary" strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Bottom Group: Capsule claims */}
            <div className="flex flex-wrap items-center gap-1.5 lg:gap-3 font-sans text-[9.5px] lg:text-xs tracking-wider">
              {claims.map((claim, idx) => (
                <div key={idx} className="flex items-center gap-1 lg:gap-2 bg-white/60 border border-border/50 px-2.5 py-1 lg:px-4 lg:py-2 rounded-full text-primary/80 font-medium shadow-sm transition-colors hover:bg-white/95">
                  <span className="text-accent text-[8.5px] lg:text-[11px] font-bold">✓</span>
                  <span>{claim}</span>
                </div>
              ))}
            </div>

          </div>

          {/* DESKTOP-ONLY: Right Column: Image and Overlay Card (Block layout to prevent aspect-ratio collapse) */}
          <div className="hidden lg:block lg:col-span-6 w-full max-w-[500px] lg:max-w-none mx-auto relative">
            <div className="relative w-full aspect-square bg-white rounded-sm shadow-lg border border-border/40 group">
              {/* Rounded image wrapper */}
              <div className="absolute inset-0 overflow-hidden rounded-sm analog-grain bg-white">
                <img 
                  src="images/heroHESPYRA.webp" 
                  alt="HESPYRA Product Presentation" 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out group-hover:scale-105"
                  style={{ filter: 'saturate(0.98) contrast(1.05) brightness(1.00)' }}
                  loading="eager"
                  draggable="false"
                />
              </div>
              
              {/* Overlay card in bottom-left - overflows left */}
              <div className="absolute bottom-6 -left-6 sm:-left-8 lg:-left-10 bg-[#F4ECE1]/95 backdrop-blur-[2px] py-3.5 px-4 w-fit max-w-[280px] sm:max-w-[300px] rounded-sm shadow-[0_8px_24px_rgba(28,25,23,0.03)] border border-primary/5 transition-transform duration-500 hover:translate-y-[-2px] z-20">
                <h4 className="font-serif text-[16px] text-primary font-semibold mb-1 leading-tight tracking-wide">
                  HESPYRA Evening Ritual
                </h4>
                <p className="font-sans text-[12px] leading-[1.45] text-primary/85 font-normal tracking-wide mb-1.5">
                  {language === 'de' 
                    ? "30 Abendrituale · Kakao · Vanille · Tonka"
                    : "30 evening rituals · Cacao · Vanilla · Tonka"}
                </p>
                <div className="font-sans font-bold text-[9.5px] tracking-widest text-accent uppercase whitespace-nowrap">
                  {language === 'de' ? 'ERSTE EDITION' : 'FIRST EDITION'}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
