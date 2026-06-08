import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();

  const tag = language === 'de' ? "MOMENTE FÜR HESPYRA" : "MOMENTS FOR HESPYRA";

  const title = language === 'de' ? (
    <>
      Für Abende, die nicht<br />von selbst beginnen.
    </>
  ) : (
    <>
      For evenings that do not<br />start by themselves.
    </>
  );

  const subline = language === 'de'
    ? "HESPYRA ist für Menschen gemacht, die den Tag nicht einfach weitertragen möchten."
    : "HESPYRA is made for people who do not want to simply carry the day forward.";

  const cases = language === 'de'
    ? [
        {
          num: "01",
          title: "Nach einem langen Arbeitstag",
          text: "Wenn Gespräche, Entscheidungen und offene Schleifen noch im Kopf bleiben."
        },
        {
          num: "02",
          title: "Nach dem Familienmodus",
          text: "Wenn endlich Ruhe wäre, aber innerlich noch zu viel Bewegung ist."
        },
        {
          num: "03",
          title: "Nach zu viel Input",
          text: "Wenn der Abend da ist, aber der Kopf noch nicht nachkommt."
        }
      ]
    : [
        {
          num: "01",
          title: "After a long workday",
          text: "When conversations, decisions, and open loops still linger in your mind."
        },
        {
          num: "02",
          title: "After family time",
          text: "When there should finally be quiet, but there is still too much movement inside."
        },
        {
          num: "03",
          title: "After too much input",
          text: "When the evening has arrived, but your mind has not yet caught up."
        }
      ];
  return (
    <section id="usecases" className="w-full bg-muted py-12 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Tag */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-4 block select-none">
          {tag}
        </span>
        
        {/* Headline */}
        <h2 className="text-[23px] sm:text-4xl md:text-5xl leading-[1.25] font-serif text-primary tracking-tight font-normal mb-6 max-w-3xl mx-auto">
          {title}
        </h2>

        {/* Subline */}
        <p className="font-sans text-[13px] sm:text-base text-primary/75 max-w-xl mx-auto mb-8 lg:mb-16 leading-relaxed font-light">
          {subline}
        </p>

        {/* 3-Column Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] md:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {cases.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#F8F5EE] p-[15px] sm:p-10 border border-primary/5 rounded-sm text-left flex flex-col justify-start transition-all duration-300 hover:translate-y-[-2px] shadow-[0_8px_24px_rgba(28,25,23,0.02)] h-full"
            >
              {/* Numbering */}
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] font-semibold text-accent mb-2 md:mb-5 block select-none">
                {item.num}
              </span>
              {/* Title */}
              <h3 className="font-serif text-[18px] sm:text-[26px] lg:text-[28px] text-primary font-normal mb-1.5 md:mb-4 leading-snug">
                {item.title}
              </h3>
              {/* Body Text */}
              <p className="font-serif text-[13px] sm:text-[17px] lg:text-[18px] leading-[1.8] text-primary/75 font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
