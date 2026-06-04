import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Info } from 'lucide-react';

const Purchase = () => {
  const { language } = useLanguage();
  const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscribe'>('subscribe');

  const title = language === 'de' ? "Beginne das Ritual." : "Begin the ritual.";
  const subtitle = language === 'de' ? "SICHERE DIR DEINEN BLEND" : "GET YOURS TODAY";

  const toggleLabels = language === 'de'
    ? { oneTime: "Einzelkauf", subscribe: "Abonnieren & Sparen" }
    : { oneTime: "One-Time Purchase", subscribe: "Subscribe & Save" };

  const cards = language === 'de'
    ? [
        {
          id: 'one-time',
          title: "The Single Jar",
          subtitle: "Einmalige Lieferung",
          price: "48€",
          period: "Einmalig",
          desc: "Perfekt zum Ausprobieren und Kennenlernen.",
          bullets: [
            "1x HESPYRA Apothekerglas",
            "30 Portionen (Abendritual-Pulver)",
            "Einmaliger Kauf ohne Verpflichtung",
            "Zzgl. Versandkosten"
          ],
          buttonText: "In den Warenkorb",
          popular: false
        },
        {
          id: 'subscribe',
          title: "The Evening Ritual",
          subtitle: "Monatliches Abo (Flexibel)",
          price: "38€",
          period: "/ Monat",
          desc: "Unser beliebtester Weg zu einer dauerhaften Abendroutine.",
          bullets: [
            "1x HESPYRA Apothekerglas (1. Monat)",
            "Monatliches Refill im kompostierbaren Pouch",
            "Kostenloser Versand direkt zu dir",
            "Jederzeit pausierbar & kündbar",
            "20% Ersparnis gegenüber Einzelkauf"
          ],
          buttonText: "Abonnieren",
          popular: true
        }
      ]
    : [
        {
          id: 'one-time',
          title: "The Single Jar",
          subtitle: "One-time shipment",
          price: "48€",
          period: "One-time",
          desc: "Perfect for tasting and experiencing the ritual.",
          bullets: [
            "1x HESPYRA Apothecar glass jar",
            "30 servings (Evening Blend powder)",
            "One-time purchase, no commitments",
            "Shipping calculated at checkout"
          ],
          buttonText: "Add to Cart",
          popular: false
        },
        {
          id: 'subscribe',
          title: "The Evening Ritual",
          subtitle: "Monthly subscription (Flexible)",
          price: "38€",
          period: "/ month",
          desc: "Our most popular path to a consistent evening routine.",
          bullets: [
            "1x HESPYRA Apothecar glass jar (1st month)",
            "Monthly eco-refill pouches",
            "Free shipping directly to your door",
            "Pause or cancel anytime in one click",
            "20% savings compared to single jar"
          ],
          buttonText: "Subscribe & Save",
          popular: true
        }
      ];

  return (
    <section id="purchase" className="w-full bg-warm-dark py-20 lg:py-28 relative z-10 text-white overflow-hidden">
      {/* Background radial gradient to give a premium glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-accent/5 rounded-full blur-[120px] md:blur-[180px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-white/50 uppercase mb-4 block">
          {subtitle}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-white tracking-tight font-light mb-12">
          {title}
        </h2>

        {/* Toggle Switch */}
        <div className="inline-flex bg-warm-dark-card p-1 rounded-full border border-white/10 mb-16 select-none font-sans text-xs tracking-wider font-semibold">
          <button 
            onClick={() => setPurchaseType('subscribe')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
              purchaseType === 'subscribe' 
                ? 'bg-accent text-white shadow-sm' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            {toggleLabels.subscribe}
          </button>
          <button 
            onClick={() => setPurchaseType('one-time')}
            className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
              purchaseType === 'one-time' 
                ? 'bg-accent text-white shadow-sm' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            {toggleLabels.oneTime}
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {cards.map((card) => {
            const isSelected = purchaseType === card.id;

            return (
              <div 
                key={card.id} 
                onClick={() => setPurchaseType(card.id as 'one-time' | 'subscribe')}
                className={`relative flex flex-col justify-between text-left p-8 sm:p-10 rounded-sm border transition-all duration-500 cursor-pointer ${
                  isSelected 
                    ? 'bg-warm-dark-card border-accent shadow-xl scale-[1.01]' 
                    : 'bg-warm-dark-card/40 border-white/5 opacity-80 hover:opacity-100 hover:border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {card.popular && (
                  <span className="absolute top-4 right-4 bg-accent text-[9px] font-sans tracking-[0.2em] font-bold px-2.5 py-1 rounded-sm uppercase text-white">
                    {language === 'de' ? 'BELIEBT' : 'POPULAR'}
                  </span>
                )}

                {/* Card Title & Price */}
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-accent uppercase mb-2 block">
                    {card.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-4">
                    {card.title}
                  </h3>
                  
                  {/* Price Block */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-white">
                      {card.price}
                    </span>
                    <span className="font-sans text-xs tracking-wider text-white/50">
                      {card.period}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-white/60 font-light mb-8 border-b border-white/5 pb-6">
                    {card.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-4 mb-10">
                    {card.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center flex-shrink-0 text-accent mt-0.5">
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                        </div>
                        <span className="font-sans text-xs sm:text-[13px] leading-normal text-white/80 font-light">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 text-xs font-sans tracking-[0.2em] font-bold uppercase rounded-sm transition-all duration-300 ${
                    isSelected 
                      ? 'bg-accent text-white hover:bg-accent-hover' 
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {card.buttonText}
                </button>

              </div>
            );
          })}
        </div>

        {/* Small Satisfaction/Quality Info Banner */}
        <div className="mt-12 flex items-center justify-center gap-2 text-white/40 font-sans text-[11px] tracking-wider uppercase font-semibold">
          <Info className="w-4.5 h-4.5" />
          <span>{language === 'de' ? "100% Zufriedenheitsgarantie. Jederzeit kündbar." : "100% satisfaction guarantee. Cancel anytime."}</span>
        </div>

      </div>
    </section>
  );
};

export default Purchase;
