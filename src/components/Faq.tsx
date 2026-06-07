import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Faq = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
  ];

  return (
    <section id="faq" className="w-full bg-light pt-12 pb-14 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-4 block select-none">
          {t('faq.tag')}
        </span>
        
        {/* Headline */}
        <h2 className="text-[23px] sm:text-4xl md:text-5xl leading-[1.25] font-serif text-primary tracking-tight font-normal mb-8 md:mb-16 lg:mb-20 max-w-2xl mx-auto">
          {t('faq.title')}
        </h2>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto border-t border-primary/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-primary/10 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between text-left pt-[18px] pb-[14px] sm:py-7 focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans text-[13px] sm:text-[17px] font-medium sm:font-semibold tracking-wide text-primary/85 group-hover:text-primary transition-colors duration-200">
                    {faq.q}
                  </span>
                  
                  {/* Plus / Minus Indicator */}
                  <span className="text-accent text-[18px] sm:text-[22px] font-light leading-none select-none ml-4 mt-0.5 sm:mt-1 transition-colors duration-200">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 pb-5 sm:pb-7 pt-1 sm:mt-1' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-[12.5px] sm:text-[15px] text-primary/70 leading-relaxed font-light whitespace-pre-line text-left">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
