import { Star, ArrowRight } from 'lucide-react';
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
      Evening starts<br />in your <span className="italic text-accent font-serif font-normal">mind.</span>
    </>
  );

  const description = language === 'de' 
    ? "Ein trinkbares Abendritual. Klinisch dosiertes Magnesium, L-Theanin und Safran helfen dir, den Tag hinter dir zu lassen – ohne Melatonin, ohne Benommenheit am Morgen."
    : "A drinkable evening ritual. Clinically-dosed magnesium, L-theanine and saffron to help you set the day down — without melatonin, without the morning fog.";

  const ctaPrimary = language === 'de' ? "DIE ERSTE EDITION SHOPPEN" : "SHOP THE FIRST EDITION";
  const ctaSecondary = language === 'de' ? "ZUR REZEPTUR" : "SEE THE FORMULA";

  const reviewsText = language === 'de' 
    ? "4.8 · 2.400+ ruhige Abende"
    : "4.8 · 2,400+ evenings reclaimed";

  const claims = language === 'de'
    ? [
        "Melatoninfrei",
        "Kein Gewöhnungseffekt",
        "Laborgeprüft",
        "Vegan & zuckerfrei"
      ]
    : [
        "No melatonin",
        "Non-habit forming",
        "Third-party tested",
        "Vegan & sugar-free"
      ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#F5F2EB] pt-36 pb-20 z-10 overflow-hidden">
      {/* Background grain texture effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1600px] mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* Left Column: Wording & CTAs (Stretched to match image height on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left max-w-2xl py-2">
            
            {/* Top Group: Slogan, Title, Description */}
            <div className="space-y-6">
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] font-bold text-primary/60 uppercase block">
                {language === 'de' ? 'NICHT FÜR DEN SCHLAF. FÜR DEN MOMENT DAVOR.' : 'NOT FOR SLEEP. FOR THE MOMENT BEFORE.'}
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] mb-8 font-serif text-primary tracking-wide font-light max-w-[850px]">
                {language === 'de' ? titleGerman : titleEnglish}
              </h1>

              <p className="text-primary/70 text-base sm:text-lg leading-relaxed font-light max-w-xl">
                {description}
              </p>
            </div>

            {/* Middle Group: CTA Buttons and Ratings */}
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
                  className="flex items-center justify-center gap-2 text-primary/80 hover:text-primary text-xs tracking-[0.22em] font-bold uppercase transition-all duration-300 border-b border-primary/20 pb-0.5"
                >
                  {ctaSecondary} <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
                </a>
              </div>

              {/* Star Ratings below the buttons */}
              <div className="flex items-center gap-3">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-current" />
                  ))}
                </div>
                <span className="font-sans text-xs text-primary/60 font-semibold tracking-wider">
                  {reviewsText}
                </span>
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
            <div className="relative w-full aspect-square bg-[#D4C9B9] rounded-sm shadow-lg border border-border/40 group">
              {/* Rounded image wrapper */}
              <div className="absolute inset-0 overflow-hidden rounded-sm analog-wrapper analog-grain">
                <img 
                  src="/images/heroProdukt.webp" 
                  alt="HESPYRA Product Presentation" 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out analog-image group-hover:scale-105"
                  loading="eager"
                  draggable="false"
                />
              </div>
              
              {/* Overlay card in bottom-left - overflows left */}
              <div className="absolute bottom-6 -left-6 bg-white p-5 max-w-[280px] rounded-sm shadow-xl border border-border/20 transition-transform duration-500 hover:translate-y-[-2px] z-20">
                <h4 className="font-serif text-lg text-primary font-bold mb-1">
                  The Evening Tin
                </h4>
                <p className="font-sans text-xs leading-relaxed text-primary/85 font-medium tracking-wide">
                  {language === 'de' 
                    ? "30 Abende · Vanille & Tonka. $48 $58 im Abonnement."
                    : "30 evenings · vanilla & tonka. $48 $58 on subscription."}
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
