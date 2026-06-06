import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#EDE8DC] py-12 sm:py-14 flex justify-center items-center relative z-10">
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="font-serif text-xl sm:text-2xl md:text-[27px] text-primary/75 tracking-wide font-light leading-relaxed">
          {t('pause.part1')} <span className="italic text-accent font-light">{t('pause.part2')} {t('pause.part3')}</span>
        </p>
      </div>
    </section>
  );
};

export default EditorialPause;
