import { useLanguage } from '../context/LanguageContext';

const WhyHespyra = () => {
  const { language } = useLanguage();

  const title = language === 'de' 
    ? "Der Unterschied beginnt vor dem Schlaf." 
    : "The difference begins before sleep.";

  const columnHeaders = language === 'de'
    ? ['HESPYRA', 'KLASSISCHE SCHLAFPRODUKTE']
    : ['HESPYRA', 'CONVENTIONAL SLEEP PRODUCTS'];

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
    <section id="comparison" className="w-full bg-[#F7F4EE] py-10 lg:py-28 relative z-10">
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
            <div key={idx} className="bg-[#FBF8F3] rounded-sm border border-border/40 overflow-hidden shadow-none text-left">
              {/* Category / Label */}
              <div className="bg-primary/5 px-3.5 py-1.5 border-b border-primary/10 font-sans text-[10.5px] tracking-[0.15em] font-semibold text-primary/80 uppercase select-none">
                {row.label}
              </div>
              
              <div className="divide-y divide-border/30">
                {/* HESPYRA Column */}
                <div className="bg-[#FBF8F3] px-3.5 py-2.5 border-x border-border/40 relative">
                  {/* Subtle left accent indicator */}
                  <div className="absolute top-0 left-0 bottom-0 w-[2.5px] bg-accent/70"></div>
                  <div className="font-serif text-[11.5px] tracking-[0.1em] font-semibold text-primary mb-0.5 select-none uppercase">
                    {columnHeaders[0]}
                  </div>
                  <div className="font-sans text-[13px] text-primary leading-relaxed font-medium">
                    {row.hespyra}
                  </div>
                </div>
                
                {/* Classic Sleep Products Column */}
                <div className="bg-[#FBF8F3] px-3.5 py-2.5">
                  <div className="font-sans text-[10px] tracking-[0.12em] font-semibold text-primary/40 mb-0.5 select-none uppercase">
                    {language === 'de' ? 'Schlafprodukte' : 'Sleep products'}
                  </div>
                  <div className="font-sans text-[13px] text-primary/60 leading-relaxed font-light">
                    {row.others}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table Card (Desktop only) */}
        <div className="hidden md:block max-w-3xl mx-auto bg-[#FBF8F3] rounded-sm overflow-hidden shadow-none border border-border/50">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 border-b border-border/50 items-stretch">
            <div className="col-span-4 text-left px-6 py-6 bg-[#FBF8F3]"></div>
            <div className="col-span-4 text-center py-5 sm:py-6 text-primary bg-[#FBF8F3] border-x border-border/60 flex items-center justify-center font-serif text-xs sm:text-sm tracking-[0.15em] font-semibold uppercase relative">
              {/* Subtle top accent indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-accent/70"></div>
              {columnHeaders[0]}
            </div>
            <div className="col-span-4 text-center py-5 sm:py-6 text-primary/40 bg-[#FBF8F3] flex items-center justify-center font-sans text-[10px] sm:text-[11px] tracking-[0.2em] font-medium uppercase">
              {columnHeaders[1]}
            </div>
          </div>
 
          {/* Table Body Rows */}
          <div className="divide-y divide-border/50">
            {tableData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 items-stretch">
                
                {/* Criteria Label */}
                <div className="col-span-4 text-left px-4 sm:px-6 py-4 sm:py-5 font-sans text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-normal tracking-wide text-primary/80 bg-[#FBF8F3] flex items-center">
                  {row.label}
                </div>
 
                {/* HESPYRA Column */}
                <div className="col-span-4 text-center px-3 sm:px-4 py-4 sm:py-5 text-primary bg-[#FBF8F3] border-x border-border/60 flex items-center justify-center font-sans text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-medium tracking-wide leading-relaxed">
                  {row.hespyra}
                </div>
 
                {/* MELATONIN GUMMIES Column */}
                <div className="col-span-4 text-center px-3 sm:px-4 py-4 sm:py-5 text-primary/60 bg-[#FBF8F3] flex items-center justify-center font-sans text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-normal tracking-wide leading-relaxed">
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
