import { useLanguage } from '../context/LanguageContext';

const CustomerStory = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="w-full bg-[#F2EDE4] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Category Tag */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-4 block select-none">
          {t('philosophy.tag')}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.25] font-serif text-primary tracking-tight font-normal max-w-3xl mx-auto whitespace-pre-line">
          {t('philosophy.title')}
        </h2>

        {/* Subtle Accent Divider */}
        <div className="w-12 h-[1px] bg-accent/20 mx-auto my-8"></div>

        {/* Narrative text */}
        <div className="space-y-8 text-primary/75 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
          <p className="whitespace-pre-line">
            {t('philosophy.text1')}
          </p>
          
          <p className="whitespace-pre-line">
            {t('philosophy.text2')}
          </p>
          
          <p className="font-sans text-base sm:text-[17px] text-primary/90 font-normal mt-8">
            {t('philosophy.text3')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default CustomerStory;
