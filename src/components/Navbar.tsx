import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: language === 'de' ? 'Das Ritual' : 'The Ritual', href: '#ritual' },
    { label: language === 'de' ? 'Rezeptur' : 'Formula', href: '#exclusions' },
    { label: language === 'de' ? 'Qualität' : 'Quality', href: '#ingredients' },
    { label: language === 'de' ? 'FAQ' : 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="w-full bg-transparent absolute top-0 left-0 z-50 border-b border-border/40">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between relative z-50">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center text-xl sm:text-2xl tracking-[0.15em] font-serif font-medium leading-none select-none text-primary hover:opacity-80 transition-opacity">
          HESPYRA
        </a>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-8 font-sans text-[13px] font-medium text-primary/80">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="hover:text-accent transition-colors duration-300 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side: Language, Cart, and CTA */}
        <div className="hidden lg:flex items-center gap-6 font-sans text-xs tracking-[0.15em] font-semibold leading-none">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-primary/80 text-[13px] font-medium tracking-normal">
            <button 
              onClick={() => setLanguage('de')} 
              className={`transition-colors duration-300 focus:outline-none cursor-pointer hover:text-accent ${
                language === 'de' ? 'text-primary font-bold' : 'text-primary/50 font-normal'
              }`}
            >
              DE
            </button>
            <span className="text-primary/20">/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`transition-colors duration-300 focus:outline-none cursor-pointer hover:text-accent ${
                language === 'en' ? 'text-primary font-bold' : 'text-primary/50 font-normal'
              }`}
            >
              EN
            </button>
          </div>


          {/* Accent Colored Waitlist CTA Button */}
          <a 
            href="#waitlist" 
            className="bg-accent text-white hover:bg-accent-hover px-6 py-3 rounded-sm transition-all duration-300 text-xs tracking-[0.15em] uppercase font-bold"
          >
            {language === 'de' ? 'ERSTE EDITION SICHERN' : 'SECURE FIRST EDITION'}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-primary focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-[#F3F1EC] transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between px-8 pt-20 pb-10">
          <div className="flex flex-col gap-7 font-serif text-[32px] sm:text-[38px] font-normal tracking-wide text-primary">
            {menuItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition-colors duration-200 border-b border-primary/5 pb-2.5 block text-left"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="border-t border-primary/5 pt-5 flex flex-col gap-4 font-sans">
            {/* Language switcher in drawer */}
            <div className="flex items-center gap-2.5 text-[13px] font-sans tracking-[0.15em] font-semibold select-none">
              <button 
                onClick={() => { setLanguage('de'); setIsOpen(false); }} 
                className={`cursor-pointer transition-colors duration-200 hover:text-accent ${
                  language === 'de' ? 'text-accent font-bold' : 'text-primary/50 font-normal'
                }`}
              >
                DE
              </button>
              <span className="text-primary/20">|</span>
              <button 
                onClick={() => { setLanguage('en'); setIsOpen(false); }} 
                className={`cursor-pointer transition-colors duration-200 hover:text-accent ${
                  language === 'en' ? 'text-accent font-bold' : 'text-primary/50 font-normal'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile CTA */}
            <a 
              href="#waitlist" 
              onClick={() => setIsOpen(false)}
              className="bg-accent text-white hover:bg-accent-hover w-full py-4 text-center rounded-sm transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold"
            >
              {language === 'de' ? 'ERSTE EDITION SICHERN' : 'SECURE FIRST EDITION'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
