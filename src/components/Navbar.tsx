import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isCalm: boolean;
  onToggleCalm: () => void;
}

const Navbar = ({ isCalm, onToggleCalm }: NavbarProps) => {
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
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between relative">
        
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

          <span className="text-primary/20 text-sm font-light">|</span>

          {/* Waitlist Link */}
          <a 
            href="#waitlist" 
            className="text-primary/80 hover:text-accent transition-colors flex items-center gap-2 font-medium text-[13px] tracking-normal"
          >
            {language === 'de' ? 'Warteliste' : 'Waitlist'}
          </a>

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
          {/* Mobile Calm Button */}
          <button 
            onClick={onToggleCalm}
            className="text-[10px] tracking-widest font-semibold text-primary/60 hover:text-primary uppercase"
          >
            {isCalm ? 'DAY' : 'EVE'}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-md transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <div className="flex flex-col gap-6 font-sans text-lg tracking-[0.2em] font-semibold text-primary uppercase">
            {menuItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition-colors duration-300 border-b border-primary/5 pb-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-6 font-sans">
            {/* Language switcher in drawer */}
            <div className="flex items-center gap-4 text-sm tracking-widest">
              <span className="text-primary/40">LANGUAGE:</span>
              <button 
                onClick={() => { setLanguage('de'); setIsOpen(false); }} 
                className={`cursor-pointer ${language === 'de' ? 'text-accent font-bold underline' : 'text-primary/60'}`}
              >
                DEUTSCH
              </button>
              <span className="text-primary/20">|</span>
              <button 
                onClick={() => { setLanguage('en'); setIsOpen(false); }} 
                className={`cursor-pointer ${language === 'en' ? 'text-accent font-bold underline' : 'text-primary/60'}`}
              >
                ENGLISH
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
