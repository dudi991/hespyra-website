import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Faq = () => {
  const { language, t } = useLanguage();
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

  const title = language === 'de' ? "Fragen, beantwortet." : "Questions, answered.";
  const tag = language === 'de' ? "HÄUFIGE FRAGEN" : "QUESTIONS, ANSWERED";

  return (
    <section id="faq" className="w-full bg-[#FAF8F5] py-20 lg:py-28 border-t border-border/40 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
          {tag}
        </span>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-primary tracking-tight font-light mb-16 lg:mb-20 max-w-2xl mx-auto">
          {title}
        </h2>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto border-t border-border/65">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-border/65 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left py-6 focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans text-sm sm:text-base font-semibold tracking-wide text-primary/80 group-hover:text-primary transition-colors duration-200">
                    {faq.q}
                  </span>
                  
                  {/* Plus / Minus Indicator */}
                  <div className="text-primary/50 group-hover:text-primary transition-colors duration-200 flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-300" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-300" strokeWidth={1.5} />
                    )}
                  </div>
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-[13px] sm:text-sm text-primary/60 leading-relaxed font-light whitespace-pre-line text-left">
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
