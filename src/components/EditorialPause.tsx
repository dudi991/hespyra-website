import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#EDE8DC] py-20 sm:py-24 lg:py-28 flex justify-center items-center relative z-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="font-serif text-3xl sm:text-4xl md:text-[45px] lg:text-[52px] xl:text-[58px] text-primary tracking-tight font-normal leading-[1.2]">
          {t('pause.part1')} <span className="italic text-accent font-medium">{t('pause.part2')} {t('pause.part3')}</span>
        </p>
      </div>
    </section>
  );
};

export default EditorialPause;
