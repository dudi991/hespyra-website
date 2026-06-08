import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#F3ECE2] py-9 lg:py-14 flex justify-center items-center relative z-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="font-serif text-[20px] sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] text-primary tracking-tight font-normal leading-[1.25]">
          {t('pause.part1')} <span className="italic text-accent font-medium">{t('pause.part2')} {t('pause.part3')}</span>
        </p>
      </div>
    </section>
  );
};

export default EditorialPause;
