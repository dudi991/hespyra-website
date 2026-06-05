import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#F2EDE4] py-24 md:py-32 flex justify-center items-center relative z-10">
      <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-primary leading-[1.3] antialiased tracking-wide font-normal max-w-4xl mx-auto">
          {t('pause.part1')}{' '}
          <span className="italic text-accent font-normal">{t('pause.part2')}</span>
          <br />
          <span className="italic text-accent font-normal block mt-3 sm:mt-4">{t('pause.part3')}</span>
        </blockquote>
      </div>
    </section>
  );
};

export default EditorialPause;
