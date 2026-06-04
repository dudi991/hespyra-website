import { Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyHespyra = () => {
  const { t } = useLanguage();

  const badges = [
    { title: t('why.badge1_title'), desc: t('why.badge1_desc') },
    { title: t('why.badge2_title'), desc: t('why.badge2_desc') },
    { title: t('why.badge3_title'), desc: t('why.badge3_desc') },
    { title: t('why.badge4_title'), desc: t('why.badge4_desc') },
  ];

  const comparisonRows = [
    {
      label: t('why.row1_label'),
      hespyra: t('why.row1_hespyra'),
      others: t('why.row1_others'),
      hespyraPositive: true,
    },
    {
      label: t('why.row2_label'),
      hespyra: t('why.row2_hespyra'),
      others: t('why.row2_others'),
      hespyraPositive: true,
    },
    {
      label: t('why.row3_label'),
      hespyra: t('why.row3_hespyra'),
      others: t('why.row3_others'),
      hespyraPositive: true,
    },
    {
      label: t('why.row4_label'),
      hespyra: t('why.row4_hespyra'),
      others: t('why.row4_others'),
      hespyraPositive: true,
    },
  ];

  return (
    <section id="why-hespyra" className="w-full bg-white py-16 lg:py-24 border-t border-primary/5 relative z-20">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        
        {/* --- Trust Badges Strip --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-primary/10 mb-16 lg:mb-24 text-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-sans text-xs sm:text-[13px] tracking-[0.2em] font-bold text-primary uppercase mb-1">
                {badge.title}
              </span>
              <span className="font-sans text-[11px] sm:text-xs text-primary/60 font-light">
                {badge.desc}
              </span>
            </div>
          ))}
        </div>

        {/* --- Section Header --- */}
        <div className="mb-16 lg:mb-20 text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/60 uppercase mb-3 block">
            {t('why.tag')}
          </span>
          <div className="flex items-center justify-center gap-2 mt-4 select-none text-primary/50">
            <div className="w-8 h-[1px] bg-primary/25"></div>
            <img 
              src="images/logo1.webp" 
              alt="HESPYRA Hallmark" 
              className="h-[18px] w-auto opacity-70"
            />
            <div className="w-8 h-[1px] bg-primary/25"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary leading-[1.25] max-w-4xl mx-auto font-light mt-8">
            {t('why.title')}
          </h2>
        </div>

        {/* --- Comparison Table --- */}
        <div className="max-w-4xl mx-auto overflow-hidden border border-primary/10 rounded-sm">
          <div className="grid grid-cols-12 bg-primary/5 border-b border-primary/10 text-center items-center py-4 font-sans text-xs tracking-[0.15em] font-bold text-primary uppercase">
            <div className="col-span-4 md:col-span-3 text-left pl-4 sm:pl-6">{t('why.table_criteria')}</div>
            <div className="col-span-4 md:col-span-5 border-l border-r border-primary/10 py-1 flex items-center justify-center gap-2 text-primary">
              <span className="font-sans font-bold tracking-[0.2em]">HESPYRA</span>
            </div>
            <div className="col-span-4 md:col-span-4 text-primary/60 font-medium">{t('why.table_others')}</div>
          </div>

          <div className="divide-y divide-primary/10">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 text-sm leading-relaxed font-light text-primary/80 items-center py-5 sm:py-6">
                
                {/* Criteria Label */}
                <div className="col-span-12 md:col-span-3 font-sans text-xs tracking-wider font-semibold text-primary/95 pl-4 sm:pl-6 mb-2 md:mb-0">
                  {row.label}
                </div>

                {/* HESPYRA Column */}
                <div className="col-span-12 md:col-span-5 md:border-l md:border-r border-primary/10 px-4 sm:px-8 py-2 md:py-0 flex items-start gap-3">
                  <div className="text-emerald-600 mt-0.5 flex-shrink-0">
                    <Check className="w-4.5 h-4.5" strokeWidth={2.5} />
                  </div>
                  <div className="text-[13px] sm:text-sm font-sans text-primary">
                    {row.hespyra}
                  </div>
                </div>

                {/* Traditional Alternatives Column */}
                <div className="col-span-12 md:col-span-4 px-4 sm:px-6 py-2 md:py-0 flex items-start gap-3">
                  <div className="text-red-500/70 mt-0.5 flex-shrink-0">
                    <X className="w-4.5 h-4.5" strokeWidth={2} />
                  </div>
                  <div className="text-[13px] sm:text-sm text-primary/60">
                    {row.others}
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
