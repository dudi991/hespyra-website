import { Star, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();

  const title = language === 'de' ? "Wie der Feierabend jetzt klingt." : "What the evening sounds like now.";
  const tag = language === 'de' ? "ERFAHRUNGEN" : "LOVE FOR THE BLEND";

  const reviews = language === 'de'
    ? [
        {
          text: "Nach etwa 30 Minuten spürte ich, wie der Stress des Tages abfiel. HESPYRA ist inzwischen ein unverzichtbarer Teil meines Feierabends geworden.",
          author: "Sarah M.",
          label: "Verifizierte Käuferin"
        },
        {
          text: "Ein Ritual, das mir wirklich beim Loslassen hilft. Ich liebe die dezente Vanille-Wärme. Ich schlafe natürlich ein und wache ohne Müdigkeit auf.",
          author: "David R.",
          label: "Verifizierter Käufer"
        },
        {
          text: "Ich empfehle HESPYRA all meinen Freunden. Es ist die perfekte Brücke von einem stressigen Arbeitstag zu einer ruhigen, friedlichen Nacht.",
          author: "Elena B.",
          label: "Verifizierte Käuferin"
        }
      ]
    : [
        {
          text: "I started feeling the stress of the day fade away after about 30 minutes. It's now a non-negotiable part of my evening transition.",
          author: "Sarah M.",
          label: "Verified Buyer"
        },
        {
          text: "A ritual that helps me let go. Love the subtle vanilla warmth. I fall asleep naturally and wake up without any morning grogginess.",
          author: "David R.",
          label: "Verified Buyer"
        },
        {
          text: "I've been recommending HESPYRA to all my friends. It is the perfect bridge from a busy working day to a quiet, peaceful night.",
          author: "Elena B.",
          label: "Verified Buyer"
        }
      ];

  return (
    <section id="testimonials" className="w-full bg-[#FAF8F5] py-20 lg:py-28 border-t border-border/40 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
          {tag}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-primary tracking-tight font-light mb-4">
          {title}
        </h2>

        {/* Global Stars */}
        <div className="flex items-center justify-center gap-1 text-accent mb-16 lg:mb-24">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current stroke-current" />
          ))}
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-border/30 text-left flex flex-col justify-between transition-transform duration-300 hover:translate-y-[-2px]">
              
              {/* Review Stars & Text */}
              <div>
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-current" />
                  ))}
                </div>
                <p className="font-sans text-[13px] leading-relaxed text-primary/80 font-light italic mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between border-t border-border/40 pt-4 font-sans text-xs tracking-wider">
                <span className="font-bold text-primary">{review.author}</span>
                <span className="flex items-center gap-1.5 text-accent font-semibold text-[10px] uppercase">
                  <div className="w-3.5 h-3.5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-2 h-2 text-accent" strokeWidth={3} />
                  </div>
                  {review.label}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
