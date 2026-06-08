import { useLanguage } from '../context/LanguageContext';

const WhyHespyra = () => {
  const { language } = useLanguage();

  const title = language === 'de' 
    ? "Der Unterschied beginnt vor dem Schlaf." 
    : "The difference begins before sleep.";

  const columnHeaders = language === 'de'
    ? ['HESPYRA', 'KLASSISCHE SCHLAFPRODUKTE']
    : ['HESPYRA', 'CLASSIC SLEEP PRODUCTS'];

  const tableData = language === 'de'
    ? [
        { label: 'Zeitpunkt', hespyra: 'Beim Übergang in den Abend', others: 'Kurz vor dem Schlaf' },
        { label: 'Format', hespyra: 'Trinkbares Ritual', others: 'Gummy oder Kapsel' },
        { label: 'Melatonin', hespyra: 'Ohne Melatonin', others: 'Häufig mit Melatonin' },
        { label: 'Erlebnis', hespyra: 'Geschmack, Wärme, Zubereitung', others: 'Schnelle Einnahme' },
        { label: 'Rolle im Abend', hespyra: 'Klarer Abendbeginn', others: 'Funktionale Einnahme' }
      ]
    : [
        { label: 'Timing', hespyra: 'During the transition into the evening', others: 'Shortly before sleep' },
        { label: 'Format', hespyra: 'Drinkable ritual', others: 'Gummy or capsule' },
        { label: 'Melatonin', hespyra: 'Melatonin-free', others: 'Often with melatonin' },
        { label: 'Experience', hespyra: 'Taste, warmth, preparation', others: 'Quick ingestion' },
        { label: 'Role in the evening', hespyra: 'Clear start to the evening', others: 'Functional intake' }
      ];

  return (
    <section id="comparison" className="w-full bg-light py-10 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-2 md:mb-4 block select-none">
          {language === 'de' ? 'WARUM HESPYRA' : 'WHY HESPYRA'}
        </span>
        
        {/* Headline */}
        <h2 className="text-[23px] sm:text-4xl md:text-5xl leading-[1.25] font-serif text-primary tracking-tight font-normal mb-4 md:mb-6 max-w-2xl mx-auto">
          {title}
        </h2>
 
        {/* Subheadline */}
        <p className="font-sans text-[13px] sm:text-base text-primary/75 max-w-xl mx-auto mb-6 lg:mb-16 leading-relaxed font-light">
          {language === 'de' 
            ? "HESPYRA setzt nicht beim Einschlafen an, sondern beim Übergang in den Abend."
            : "HESPYRA does not start with falling asleep, but with the transition into the evening."}
        </p>
 
        {/* Mobile Comparison Layout (stacked cards) */}
        <div className="block md:hidden space-y-3 max-w-md mx-auto">
          {tableData.map((row, idx) => (
            <div key={idx} className="bg-white rounded-sm border border-primary/10 overflow-hidden shadow-[0_4px_15px_rgba(28,25,23,0.02)] text-left">
              {/* Category / Label */}
              <div className="bg-primary/5 px-3.5 py-1.5 border-b border-primary/10 font-sans text-[10.5px] tracking-[0.15em] font-semibold text-primary/80 uppercase select-none">
                {row.label}
              </div>
              
              <div className="divide-y divide-primary/5">
                {/* HESPYRA Column */}
                <div className="bg-[#FAF6F0]/50 px-3.5 py-2.5">
                  <div className="font-serif text-[11px] tracking-[0.1em] font-medium text-accent mb-0.5 select-none uppercase">
                    {columnHeaders[0]}
                  </div>
                  <div className="font-sans text-[13px] text-primary leading-relaxed font-light">
                    {row.hespyra}
                  </div>
                </div>
                
                {/* Classic Sleep Products Column */}
                <div className="bg-white px-3.5 py-2.5">
                  <div className="font-sans text-[10px] tracking-[0.12em] font-semibold text-primary/45 mb-0.5 select-none uppercase">
                    {language === 'de' ? 'Schlafprodukte' : 'Sleep Products'}
                  </div>
                  <div className="font-sans text-[13px] text-primary/75 leading-relaxed font-light">
                    {row.others}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table Card (Desktop only) */}
        <div className="hidden md:block max-w-3xl mx-auto bg-white rounded-sm overflow-hidden shadow-[0_8px_30px_rgba(28,25,23,0.03)] border border-primary/10">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 border-b border-primary/10 items-stretch">
            <div className="col-span-4 text-left px-6 py-6 bg-white"></div>
            <div className="col-span-4 text-center py-5 sm:py-6 text-primary bg-[#FAF6F0] border-x border-primary/10 flex items-center justify-center font-serif text-xs sm:text-sm tracking-[0.15em] font-normal uppercase">
              {columnHeaders[0]}
            </div>
            <div className="col-span-4 text-center py-5 sm:py-6 text-primary/45 bg-white flex items-center justify-center font-sans text-[10px] sm:text-[11px] tracking-[0.2em] font-medium uppercase">
              {columnHeaders[1]}
            </div>
          </div>
 
          {/* Table Body Rows */}
          <div className="divide-y divide-primary/10">
            {tableData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 items-stretch">
                
                {/* Criteria Label */}
                <div className="col-span-4 text-left px-4 sm:px-6 py-4 sm:py-5 font-sans text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-normal tracking-wide text-primary/80 bg-white flex items-center">
                  {row.label}
                </div>
 
                {/* HESPYRA Column */}
                <div className="col-span-4 text-center px-3 sm:px-4 py-4 sm:py-5 text-primary bg-[#FAF6F0] border-x border-primary/10 flex items-center justify-center font-sans text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-normal tracking-wide leading-relaxed">
                  {row.hespyra}
                </div>
 
                {/* MELATONIN GUMMIES Column */}
                <div className="col-span-4 text-center px-3 sm:px-4 py-4 sm:py-5 text-primary/75 bg-white flex items-center justify-center font-sans text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-normal tracking-wide leading-relaxed">
                  {row.others}
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
