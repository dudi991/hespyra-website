import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#EDE8DC] py-12 sm:py-14 flex justify-center items-center relative z-10">
      <div className="max-w-2xl mx-auto text-center px-6">
        <p className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-primary/90 tracking-tight font-normal leading-snug">
          {t('pause.part1')} <span className="italic text-accent font-medium">{t('pause.part2')} {t('pause.part3')}</span>
        </p>
      </div>
    </section>
  );
};

export default EditorialPause;
