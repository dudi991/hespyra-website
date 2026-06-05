import { GlassWater, ChevronsUp, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Ritual = () => {
  const { t } = useLanguage();

  return (
    <section id="ritual" className="w-full bg-[#EDE8DC] pt-20 pb-24 overflow-hidden relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Header Block */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-primary/50 uppercase mb-4 block select-none">
          {t('ritual.tag')}
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-serif text-primary tracking-[0.02em] font-normal mb-6 max-w-3xl mx-auto">
          {t('ritual.title')}
        </h2>
        
        <p className="text-sm sm:text-base text-primary/60 leading-relaxed font-normal max-w-2xl mx-auto mb-16 select-none">
          {t('ritual.desc')}
        </p>

        {/* 3-Column Grid with separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-primary/10">
          
          {/* Card 01 - Release */}
          <div className="flex flex-col justify-between pt-10 pb-8 px-6 sm:px-8 lg:px-12 text-left min-h-[280px] md:min-h-[320px] border-b md:border-b-0 md:border-r border-primary/10">
            <div>
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.15em] text-accent font-semibold block mb-8 select-none">
                01
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-primary font-normal mb-4">
                {t('ritual.step1_tag')}
              </h3>
              <p className="font-sans text-[13px] sm:text-sm lg:text-[15px] leading-relaxed text-primary/60 font-light whitespace-pre-line">
                {t('ritual.step1_text')}
              </p>
            </div>
            <div className="text-primary/60 mt-8 flex-shrink-0">
              <GlassWater className="w-5 h-5" strokeWidth={1.2} />
            </div>
          </div>

          {/* Card 02 - Gather */}
          <div className="flex flex-col justify-between pt-10 pb-8 px-6 sm:px-8 lg:px-12 text-left min-h-[280px] md:min-h-[320px] border-b md:border-b-0 md:border-r border-primary/10">
            <div>
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.15em] text-accent font-semibold block mb-8 select-none">
                02
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-primary font-normal mb-4">
                {t('ritual.step2_tag')}
              </h3>
              <p className="font-sans text-[13px] sm:text-sm lg:text-[15px] leading-relaxed text-primary/60 font-light whitespace-pre-line">
                {t('ritual.step2_text')}
              </p>
            </div>
            <div className="text-primary/60 mt-8 flex-shrink-0">
              <ChevronsUp className="w-5 h-5" strokeWidth={1.2} />
            </div>
          </div>

          {/* Card 03 - Arrive */}
          <div className="flex flex-col justify-between pt-10 pb-8 px-6 sm:px-8 lg:px-12 text-left min-h-[280px] md:min-h-[320px]">
            <div>
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.15em] text-accent font-semibold block mb-8 select-none">
                03
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-primary font-normal mb-4">
                {t('ritual.step3_tag')}
              </h3>
              <p className="font-sans text-[13px] sm:text-sm lg:text-[15px] leading-relaxed text-primary/60 font-light whitespace-pre-line">
                {t('ritual.step3_text')}
              </p>
            </div>
            <div className="text-primary/60 mt-8 flex-shrink-0">
              <Moon className="w-5 h-5" strokeWidth={1.2} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Ritual;
