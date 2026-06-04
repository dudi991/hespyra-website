import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroProdukt from '../assets/heroProdukt.webp';

const Hero = () => {
  const { language } = useLanguage();

  const titleGerman = (
    <>
      Feierabend beginnt<br />im <span className="italic text-accent font-serif font-normal">Kopf.</span>
    </>
  );

  const titleEnglish = (
    <>
      Evening starts<br />in your <span className="italic text-accent font-serif font-normal">mind.</span>
    </>
  );

  const description = language === 'de' 
    ? "Ein trinkbares Abendritual mit 9 gezielt ausgewählten Inhaltsstoffen — für den Übergang vom Tagesmodus in einen ruhigeren Abend. Ohne Melatonin. Als Drink statt Kapsel."
    : "A drinkable evening ritual with 9 purposefully selected ingredients — for the transition from daytime mode to a calmer evening. Melatonin-free. As a drink instead of capsules.";

  const ctaPrimary = language === 'de' ? "DIE ERSTE EDITION SICHERN" : "SECURE THE FIRST EDITION";


  const claims = language === 'de'
    ? [
        "Melatoninfrei",
        "Vegan",
        "Ohne Eisen",
        "Warm oder kalt",
        "9 Inhaltsstoffe"
      ]
    : [
        "Melatonin-free",
        "Vegan",
        "Iron-free",
        "Warm or cold",
        "9 ingredients"
      ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#F5F2EB] pt-36 pb-20 z-10 overflow-hidden">
      {/* Background grain texture effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1600px] mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-6 items-stretch">
          
          {/* Left Column: Wording & CTAs (Stretched to match image height on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left max-w-2xl py-2">
            
            {/* Top Group: Slogan, Title, Description */}
            <div className="space-y-6">
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.28em] font-semibold text-primary/50 uppercase block">
                {language === 'de' ? 'NICHT FÜR DEN SCHLAF. FÜR DEN MOMENT DAVOR.' : 'NOT FOR SLEEP. FOR THE MOMENT BEFORE.'}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem] leading-[1.05] mb-8 font-serif text-primary tracking-[0.02em] font-normal max-w-[950px]">
                {language === 'de' ? titleGerman : titleEnglish}
              </h1>

              <p className="text-primary/75 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                {description}
              </p>
            </div>

            {/* Middle Group: CTA Buttons */}
            <div className="space-y-6 my-8">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <a 
                  href="#purchase" 
                  className="inline-block text-center bg-primary hover:bg-accent px-8 py-4 text-xs tracking-[0.22em] font-bold uppercase rounded-sm text-white transition-all duration-300 shadow-sm whitespace-nowrap"
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
            <div className="flex flex-wrap items-center gap-3 font-sans text-xs tracking-wider">
              {claims.map((claim, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/60 border border-border/50 px-4 py-2 rounded-full text-primary/80 font-medium shadow-sm transition-colors hover:bg-white/95">
                  <span className="text-accent text-[11px] font-bold">✓</span>
                  <span>{claim}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Image and Overlay Card (Block layout to prevent aspect-ratio collapse) */}
          <div className="lg:col-span-6 w-full max-w-[500px] lg:max-w-none mx-auto relative">
            <div className="relative w-full aspect-square bg-white rounded-sm shadow-lg border border-border/40 group">
              {/* Rounded image wrapper */}
              <div className="absolute inset-0 overflow-hidden rounded-sm analog-grain bg-white">
                <img 
                  src={heroProdukt} 
                  alt="HESPYRA Product Presentation" 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out analog-image group-hover:scale-105"
                  loading="eager"
                  draggable="false"
                />
              </div>
              
              {/* Overlay card in bottom-left - overflows left */}
              <div className="absolute bottom-6 -left-6 bg-white p-5 max-w-[280px] rounded-sm shadow-xl border border-border/20 transition-transform duration-500 hover:translate-y-[-2px] z-20">
                <h4 className="font-serif text-[17px] text-primary font-bold mb-1.5 leading-tight">
                  HESPYRA Evening Ritual
                </h4>
                <p className="font-sans text-xs leading-relaxed text-primary/85 font-medium tracking-wide">
                  {language === 'de' 
                    ? "30 Abendrituale · Kakao · Vanille · Tonka · "
                    : "30 Evening Rituals · Cocoa · Vanilla · Tonka · "}
                  <span className="font-bold text-[10px] tracking-widest text-accent uppercase whitespace-nowrap">
                    {language === 'de' ? 'ERSTE EDITION' : 'FIRST EDITION'}
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
