import { useLanguage } from '../context/LanguageContext';

const BenefitStrip = () => {
  const { language } = useLanguage();

  const title = language === 'de' ? "Ein kleiner Moment, in drei Teilen." : "A small moment, in three parts.";
  const subtitle = language === 'de' 
    ? "Ritual & Zubereitung: Das Abendritual und was dich erwartet." 
    : "Ritual & Delivery: The evening ritual and what to expect.";

  const steps = language === 'de'
    ? [
        {
          num: 'i.',
          label: 'Vorbereiten',
          desc: 'Stimme dich auf den Feierabend ein. Lege Bildschirme beiseite und finde einen ruhigen Ort für dein Ritual.'
        },
        {
          num: 'ii.',
          label: 'Zubereiten',
          desc: 'Rühre das Elixier-Pulver in warme Milch oder Wasser ein. Beobachte, wie es sich auflöst und atme den feinen Duft ein.'
        },
        {
          num: 'iii.',
          label: 'Genießen',
          desc: 'Trinke langsam Schluck für Schluck, spüre die innere Wärme und lass die Anspannung des Tages los.'
        }
      ]
    : [
        {
          num: 'i.',
          label: 'Before',
          desc: 'Prepare your mind with a mindful pause. Turn off screens and find a quiet space.'
        },
        {
          num: 'ii.',
          label: 'Gather',
          desc: 'Stir the elixir in warm milk or water. Watch it dissolve, smelling the rich vanilla.'
        },
        {
          num: 'iii.',
          label: 'Savor',
          desc: 'Sip slowly, feel the warmth, let go of the day. Embrace the transition to rest.'
        }
      ];

  return (
    <section id="ritual" className="w-full bg-[#F8F5EE] py-20 lg:py-28 border-t border-border/40 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
          {language === 'de' ? 'DAS RITUAL' : 'THE RITUAL'}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-primary tracking-tight font-light mb-4">
          {title}
        </h2>
        
        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-sm text-primary/60 tracking-wider uppercase font-semibold mb-16 lg:mb-24">
          {subtitle}
        </p>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 text-left max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col border-t border-border/80 pt-8 relative">
              {/* Roman numeral / Index indicator */}
              <span className="font-serif text-xs text-accent/60 uppercase tracking-widest mb-6 font-light">
                {step.num}
              </span>
              
              {/* Step Title */}
              <h3 className="font-sans text-sm tracking-[0.2em] font-bold uppercase text-primary mb-4">
                {step.label}
              </h3>
              
              {/* Step Description */}
              <p className="font-sans text-[13px] leading-relaxed text-primary/60 font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitStrip;
