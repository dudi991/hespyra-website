import React, { useState } from 'react';
import { Truck, Leaf, Shield, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { language } = useLanguage();

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

  const title = language === 'de' ? "Die erste Edition von HESPYRA." : "The first edition of HESPYRA.";
  const desc = language === 'de'
    ? "Wir öffnen HESPYRA in kleinen Batches. Trag dich in die Warteliste ein, um bevorzugten Zugang zum nächsten Release zu erhalten."
    : "We launch HESPYRA in limited quantities. Join the list to secure priority access to the first batch and exclusive updates.";

  const usps = language === 'de'
    ? [
        {
          icon: <Truck className="w-5 h-5" strokeWidth={1.5} />,
          title: "Kostenloser Versand",
          desc: "Klimaneutrale Lieferung auf alle Abonnements."
        },
        {
          icon: <Leaf className="w-5 h-5" strokeWidth={1.5} />,
          title: "Klimaneutral",
          desc: "Wir kompensieren 100% unserer CO2-Emissionen."
        },
        {
          icon: <Shield className="w-5 h-5" strokeWidth={1.5} />,
          title: "Geld-zurück-Garantie",
          desc: "Risikofrei testen. Wenn es dir nicht gefällt, erstatten wir den Kaufpreis."
        }
      ]
    : [
        {
          icon: <Truck className="w-5 h-5" strokeWidth={1.5} />,
          title: "Free shipping",
          desc: "Climate-neutral delivery on all subscriptions."
        },
        {
          icon: <Leaf className="w-5 h-5" strokeWidth={1.5} />,
          title: "Carbon neutral",
          desc: "We offset 100% of our carbon footprint."
        },
        {
          icon: <Shield className="w-5 h-5" strokeWidth={1.5} />,
          title: "Money-back guarantee",
          desc: "Love it or it's on us. 30-day money-back guarantee."
        }
      ];

  return (
    <section id="waitlist" className="w-full bg-[#FAF8F5] py-20 lg:py-28 border-t border-border/40 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center max-w-5xl mx-auto">
          
          {/* Left Column - Headline, Desc, and Form */}
          <div className="lg:col-span-7 text-left">
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] font-bold text-primary/60 uppercase mb-4 block">
              {language === 'de' ? 'COMMUNITY / ANMELDUNG' : 'COMMUNITY / WAITLIST'}
            </span>
            <h2 className="text-3xl sm:text-5xl leading-tight font-serif text-primary tracking-tight font-light mb-6">
              {title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-primary/60 leading-relaxed font-light mb-8 max-w-lg">
              {desc}
            </p>

            {submitted ? (
              <div className="bg-white border border-accent/20 px-6 py-5 rounded-sm max-w-md shadow-sm flex items-center gap-3 text-accent font-sans text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span>
                  {language === 'de' ? 'Danke. Wir melden uns leise bei dir.' : 'Thank you. We will reach out to you quietly.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input 
                  type="email" 
                  placeholder={language === 'de' ? 'E-Mail-Adresse' : 'Enter your email'} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 bg-white border border-border text-primary px-5 py-3.5 text-xs font-sans tracking-wide focus:outline-none focus:border-accent transition-colors font-light placeholder-primary/40 rounded-sm"
                  required
                  autoComplete="off"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-background hover:bg-accent hover:text-white px-8 py-3.5 text-xs font-sans tracking-[0.2em] font-bold uppercase transition-all duration-300 rounded-sm disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting 
                    ? (language === 'de' ? 'WIRD GESENDET...' : 'SENDING...') 
                    : (language === 'de' ? 'ANMELDEN' : 'JOIN THE LIST')}
                </button>
              </form>
            )}
            {error && (
              <p className="text-[11px] font-sans text-red-500 mt-2 tracking-wide">
                {error}
              </p>
            )}
          </div>

          {/* Right Column - Brand USPs */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            {usps.map((usp, idx) => (
              <div key={idx} className="flex gap-4 items-start border-l border-border/80 pl-4 py-1">
                <div className="text-accent flex-shrink-0 mt-0.5">
                  {usp.icon}
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-sans text-xs tracking-wider font-bold uppercase text-primary">
                    {usp.title}
                  </h4>
                  <p className="font-sans text-[13px] leading-relaxed text-primary/60 font-light mt-1">
                    {usp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Waitlist;
