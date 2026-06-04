import { Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyHespyra = () => {
  const { language } = useLanguage();

  const title = language === 'de' ? "Anders als eine Schlaftablette." : "Different from a sleep pill.";
  
  const criteria = language === 'de'
    ? [
        'Unterstützt den natürlichen Schlafzyklus',
        'Kein Gewöhnungseffekt',
        'Fördert erholsamen Tiefschlaf',
        'Wirkt ausgleichend auf das Nervensystem',
        'Aufwachen ohne Benommenheit'
      ]
    : [
        'Natural sleep cycle support',
        'Non-habit forming',
        'Promotes deep restorative sleep',
        'Works on nervous system',
        'Wake up without grogginess'
      ];

  const columnHeaders = language === 'de'
    ? ['HESPYRA', 'SCHLAFTABLETTEN']
    : ['HESPYRA', 'SLEEPING PILLS'];

  return (
    <section id="comparison" className="w-full bg-[#FAF8F5] py-20 lg:py-28 border-t border-border/40 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
          {language === 'de' ? 'DER UNTERSCHIED' : 'THE COMPARISON'}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-primary tracking-tight font-light mb-16 lg:mb-20 max-w-2xl mx-auto">
          {title}
        </h2>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto border-t border-border/80">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 py-6 border-b border-border/40 items-center font-sans text-[11px] tracking-[0.2em] font-bold text-primary/60 uppercase">
            <div className="col-span-6 text-left"></div>
            <div className="col-span-3 text-center text-accent">{columnHeaders[0]}</div>
            <div className="col-span-3 text-center">{columnHeaders[1]}</div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-border/40">
            {criteria.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 py-5 items-center">
                
                {/* Criteria Label */}
                <div className="col-span-6 text-left font-sans text-xs sm:text-sm font-semibold tracking-wide text-primary/80">
                  {item}
                </div>

                {/* HESPYRA Column (Check) */}
                <div className="col-span-3 flex justify-center text-accent">
                  <div className="w-6 h-6 rounded-full border border-accent/25 flex items-center justify-center bg-accent/3">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                </div>

                {/* SLEEPING PILLS Column (Cross) */}
                <div className="col-span-3 flex justify-center text-primary/30">
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center bg-primary/2">
                    <X className="w-3 h-3" strokeWidth={2} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyHespyra;
