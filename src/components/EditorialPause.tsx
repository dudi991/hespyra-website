import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#F2EDE4] py-8 sm:py-10 flex justify-center items-center relative z-10">
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-primary/70 tracking-wide font-light leading-relaxed">
          {t('pause.part1')} <span className="italic text-accent font-light">{t('pause.part2')} {t('pause.part3')}</span>
        </p>
      </div>
    </section>
  );
};

export default EditorialPause;
