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
    ? "HESPYRA ist ein trinkbares Abendritual. Eine reichhaltige Rezeptur mit 13 biologischen, klinisch erprobten Adaptogenen und Pflanzenstoffen, die dir helfen, den Tag loszulassen, sanft in den Schlaf zu gleiten und erholt aufzuwachen."
    : "A rich elixir containing 13 organic, clinically-proven adaptogens and botanicals designed to help you let go of the day, ease into restful sleep, and wake up feeling refreshed.";

  const ctaPrimary = language === 'de' ? "Deine Flasche sichern" : "Claim your free bottle";
  const ctaSecondary = language === 'de' ? "Wie es funktioniert" : "How it works";

  const reviewsText = language === 'de' 
    ? "5.0 (1.840+ verifizierte Bewertungen)"
    : "5.0 (1,840+ verified reviews)";

  const badges = language === 'de'
    ? ["Biologische Inhaltsstoffe", "Wissenschaftlich belegt", "Kein Gewöhnungseffekt"]
    : ["Organic ingredients", "Scientifically proven", "Non-habit forming"];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-background pt-32 pb-16 z-10 overflow-hidden">
      {/* Background grain texture effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-[1600px] mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Wording & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left max-w-2xl">
            
            {/* Elegant Sub-headline/Slogan Tag */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] font-bold text-primary/60 uppercase mb-6 sm:mb-8 block">
              {language === 'de' ? 'NICHT FÜR DEN SCHLAF. FÜR DEN MOMENT DAVOR.' : 'NOT FOR SLEEP. FOR THE MOMENT BEFORE.'}
            </span>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] mb-8 font-serif text-primary tracking-tight font-light max-w-[580px]">
              {language === 'de' ? titleGerman : titleEnglish}
            </h1>

            {/* Description */}
            <p className="text-primary/70 text-base sm:text-lg lg:text-xl mb-8 max-w-xl leading-relaxed font-light">
              {description}
            </p>

            {/* Star Ratings */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                ))}
              </div>
              <span className="font-sans text-xs sm:text-sm text-primary/70 font-semibold tracking-wider">
                {reviewsText}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 mb-12">
              <a 
                href="#purchase" 
                className="inline-block text-center bg-accent hover:bg-accent-hover px-8 py-4 text-xs tracking-[0.22em] font-bold uppercase rounded-sm text-white transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                {ctaPrimary}
              </a>
              <a 
                href="#ritual" 
                className="flex items-center justify-center gap-2 text-primary/80 hover:text-primary text-xs tracking-[0.22em] font-bold uppercase transition-all duration-300"
              >
                {ctaSecondary} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* trust tags */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8 text-primary/60 font-sans text-xs tracking-wider">
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Image and Overlay Card */}
          <div className="lg:col-span-6 flex justify-center items-center w-full max-w-[500px] lg:max-w-none mx-auto relative">
            <div className="relative aspect-square w-full bg-cream-dark rounded-sm overflow-hidden shadow-lg border border-border/40 analog-wrapper analog-grain group">
              <img 
                src="images/heroProdukt.webp" 
                alt="HESPYRA Product Presentation" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ease-out analog-image group-hover:scale-105"
                loading="eager"
                draggable="false"
              />
              
              {/* Overlay card in bottom-left */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-sm p-5 max-w-[280px] rounded-sm shadow-md border border-border/30 transition-transform duration-500 hover:translate-y-[-2px]">
                <h4 className="font-serif text-lg text-primary font-medium mb-1">
                  The Evening Blend
                </h4>
                <p className="font-sans text-[11px] leading-relaxed text-primary/60 tracking-wider">
                  {language === 'de' 
                    ? "30 Portionen. Klinisch formuliert zur Beruhigung von abendlichem Stress."
                    : "30 servings. Clinically formulated to ease evening stress."}
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
