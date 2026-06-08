import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const Purchase = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const tagText = language === 'de' ? "DIE ERSTE EDITION" : "THE FIRST EDITION";
  const titleText = language === 'de' ? "Sichere dir frühen Zugang." : "Join the first edition.";
  
  const sublineTextGerman = (
    <>
      HESPYRA öffnet in kleinen Schritten.{" "}
      <br className="hidden sm:inline" />
      Trage dich ein, wenn du die erste Edition begleiten möchtest.
    </>
  );

  const sublineTextEnglish = (
    <>
      HESPYRA opens in small steps.{" "}
      <br className="hidden sm:inline" />
      Sign up if you would like to accompany the first edition.
    </>
  );

  const infoPoints = language === 'de'
    ? ["Erste Edition", "Kleine erste Charge", "Früher Zugang"]
    : ["First Edition", "Small first batch", "Early access"];

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
      console.error('Waitlist subscription error:', err);
      setError(
        language === 'de'
          ? 'Die Anmeldung konnte gerade nicht abgeschlossen werden. Bitte versuche es erneut.'
          : 'The subscription could not be completed at this time. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="purchase" className="w-full bg-[#333230] py-[42px] sm:py-[56px] lg:py-[105px] relative z-10 text-[#FAF8F2] overflow-hidden">
      {/* Background radial gradient to give a premium glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-accent/5 rounded-full blur-[120px] md:blur-[180px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Section Tag */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] font-medium text-[#C69063] uppercase mb-4 block select-none">
          {tagText}
        </span>
        
        {/* Headline */}
        <h2 className="text-[23px] sm:text-4xl md:text-5xl leading-[1.25] font-serif text-[#FAF8F2] tracking-tight font-normal mb-6">
          {titleText}
        </h2>

        {/* Subline */}
        <p className="font-sans text-[13px] sm:text-base text-[#FAF8F2]/80 leading-relaxed font-light max-w-2xl mx-auto mb-8">
          {language === 'de' ? sublineTextGerman : sublineTextEnglish}
        </p>

        {/* Waitlist Form Area */}
        <div className="max-w-md mx-auto mb-4">
          {submitted ? (
            <div className="bg-[#292827] border border-accent/20 px-6 py-5 rounded-sm shadow-md flex items-center justify-center gap-3 text-accent font-sans text-sm">
              <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              <span>
                {language === 'de' ? 'Danke. Wir melden uns leise bei dir.' : 'Thank you. We will reach out to you quietly.'}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input 
                type="email" 
                placeholder={language === 'de' ? 'E-Mail-Adresse' : 'Email address'} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 bg-[#292827] border border-[#FAF8F2]/10 text-[#FAF8F2]/90 px-5 py-4 text-xs font-sans tracking-wide focus:outline-none focus:border-accent transition-colors font-light placeholder-[#DDD4C8]/70 rounded-sm"
                required
                autoComplete="off"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-accent text-white hover:bg-accent-hover px-8 py-4 text-xs font-sans tracking-[0.2em] font-bold uppercase transition-all duration-300 rounded-sm disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {isSubmitting 
                  ? (language === 'de' ? 'WIRD GESENDET...' : 'SENDING...') 
                  : (language === 'de' ? 'ERSTE EDITION SICHERN' : 'JOIN THE FIRST EDITION')}
              </button>
            </form>
          )}
          
          {error && (
            <p className="text-[11px] font-sans text-red-400 mt-2 tracking-wide text-left">
              {error}
            </p>
          )}
        </div>

        {/* Microcopy */}
        <p className="font-sans text-[13px] sm:text-[14px] text-[#FAF8F2]/80 tracking-wide mb-6 md:mb-10 select-none">
          {language === 'de' 
            ? "Kein Spam. Nur relevante Updates. Jederzeit abmeldbar."
            : "No spam. Relevant updates only. Unsubscribe anytime."}
        </p>

        {/* Trust Info Points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-y-4 gap-x-12 sm:gap-x-16 text-[#FAF8F2]/80 font-sans text-[11.5px] sm:text-[14px] tracking-widest uppercase font-normal mt-4 md:mt-10">
          {infoPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-accent/80 text-[9px] sm:text-[10px] font-bold select-none">✓</span>
              <span>{point}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Purchase;
