import React, { useState } from 'react';
import { Star, Mail, Gift, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { language, t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError('');

    try {
      if (import.meta.env.DEV) {
        console.log('[Dev Mode] Simulating Waitlist API subscription for:', email.trim());
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitted(true);
        setEmail('');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), consent: true }),
      });

      if (!response.ok) throw new Error('Subscription failed');

      const data = await response.json();
      if (data && data.success) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      setError(
        language === 'de'
          ? 'Die Anmeldung konnte gerade nicht abgeschlossen werden. Bitte versuche es erneut.'
          : 'The subscription could not be completed at this time. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const usps = [
    {
      icon: <Star className="w-[18px] h-[18px] mx-auto text-accent" strokeWidth={1.2} />,
      title: t('waitlist.benefit1_title'),
      desc: t('waitlist.benefit1_desc')
    },
    {
      icon: <Mail className="w-[18px] h-[18px] mx-auto text-accent" strokeWidth={1.2} />,
      title: t('waitlist.benefit2_title'),
      desc: t('waitlist.benefit2_desc')
    },
    {
      icon: <Gift className="w-[18px] h-[18px] mx-auto text-accent" strokeWidth={1.2} />,
      title: t('waitlist.benefit3_title'),
      desc: t('waitlist.benefit3_desc')
    }
  ];

  return (
    <section id="waitlist" className="w-full bg-[#EDE8DC] py-20 lg:py-28 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Headline, Desc, and Form */}
          <div className="lg:col-span-6 text-left">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-accent uppercase mb-4 block select-none">
              {t('waitlist.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.25] font-serif text-primary tracking-tight font-normal mb-6">
              {language === 'de' ? (
                <>Die erste Edition von<br className="hidden sm:block" /> HESPYRA.</>
              ) : (
                <>The first edition of<br className="hidden sm:block" /> HESPYRA.</>
              )}
            </h2>
            <p className="font-sans text-sm sm:text-base text-primary/75 leading-relaxed font-light mb-8 max-w-[460px] whitespace-pre-line">
              {t('waitlist.desc')}
            </p>

            {submitted ? (
              <div className="bg-white border border-accent/20 px-6 py-5 rounded-sm max-w-md shadow-sm flex items-center gap-3 text-accent font-sans text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span>
                  {t('waitlist.success')}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input 
                  type="email" 
                  placeholder={t('waitlist.placeholder')} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 bg-white border border-primary/10 text-primary px-5 py-3.5 text-xs font-sans tracking-wide focus:outline-none focus:border-accent transition-colors font-light placeholder-primary/40 rounded-sm"
                  required
                  autoComplete="off"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-accent text-white hover:bg-accent-hover px-8 py-3.5 text-xs font-sans tracking-[0.2em] font-bold uppercase transition-all duration-300 rounded-sm disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting 
                    ? (language === 'de' ? 'WIRD GESENDET...' : 'SENDING...') 
                    : t('waitlist.submit')}
                </button>
              </form>
            )}
            {error && (
              <p className="text-[11px] font-sans text-red-500 mt-2 tracking-wide">
                {error}
              </p>
            )}
          </div>

          {/* Right Column - Brand USPs (Horizontal Grid on desktop) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4 lg:gap-6 text-center mt-12 lg:mt-0">
            {usps.map((usp, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-accent mb-4 select-none">
                  {usp.icon}
                </div>
                <h4 className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] font-semibold uppercase text-primary">
                  {usp.title}
                </h4>
                <p className="font-sans text-[12px] sm:text-[13px] leading-relaxed text-primary/60 font-light mt-2 max-w-[180px] mx-auto">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Waitlist;
