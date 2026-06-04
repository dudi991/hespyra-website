import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
  ];

  return (
    <section id="faq" className="w-full bg-[#FAF9F6] py-16 lg:py-24 border-t border-primary/5 transition-colors duration-[2.5s] relative z-20 calm-mode:bg-[#151821] calm-mode:border-white/5">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        
        {/* --- Section Header --- */}
        <div className="mb-16 lg:mb-20 text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/60 uppercase mb-3 block">
            {t('faq.tag')}
          </span>
          <div className="flex items-center justify-center gap-2 mt-4 select-none text-primary/50">
            <div className="w-8 h-[1px] bg-primary/25"></div>
            <img 
              src="images/logo1.webp" 
              alt="HESPYRA Hallmark" 
              className="h-[18px] w-auto opacity-70"
            />
            <div className="w-8 h-[1px] bg-primary/25"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary leading-[1.25] max-w-4xl mx-auto font-light mt-8">
            {t('faq.title')}
          </h2>
        </div>

        {/* --- Accordion --- */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-primary/10 transition-colors duration-300 pb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left py-4 focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans text-base sm:text-[17px] tracking-wide font-medium text-primary/95 group-hover:text-primary transition-colors duration-200">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary/50 group-hover:text-primary transition-transform duration-300 ease-out flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-sm sm:text-base text-primary/70 leading-relaxed font-light whitespace-pre-line pb-4">
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
