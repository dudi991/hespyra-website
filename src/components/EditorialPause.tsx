import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#F2EDE4] py-16 sm:py-20 flex justify-center items-center relative z-10">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Fine divider before */}
        <div className="w-12 h-[1px] bg-accent/15 mx-auto mb-10"></div>
        
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-primary/80 tracking-wide font-normal leading-relaxed">
          {t('pause.part1')} <span className="italic text-accent font-normal">{t('pause.part2')} {t('pause.part3')}</span>
        </p>
        
        {/* Fine divider after */}
        <div className="w-12 h-[1px] bg-accent/15 mx-auto mt-10"></div>
      </div>
    </section>
  );
};

export default EditorialPause;
