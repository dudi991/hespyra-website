import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onShowImprint?: () => void;
  onShowContact?: () => void;
  onShowAbout?: () => void;
  onShowPrivacy?: () => void;
}

const Footer = ({ onShowImprint, onShowContact, onShowAbout, onShowPrivacy }: FooterProps) => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-border/40 py-6 lg:py-5 relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
          
          {/* Left Column: Brand Wordmark + Product Sub-label */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="flex items-center gap-2">
              <a 
                href="#" 
                className="text-xl sm:text-2xl tracking-[0.15em] font-serif font-medium leading-none select-none text-primary hover:opacity-80 transition-opacity"
              >
                HESPYRA
              </a>
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.1em] text-primary/75 font-normal uppercase select-none whitespace-nowrap pt-0.5">
                · Evening Ritual
              </span>
            </div>
          </div>

          {/* Center Column: Legal Links */}
          <div className="flex justify-center items-center">
            <div className="flex flex-row flex-wrap justify-center items-center gap-6 lg:gap-8">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onShowAbout?.();
                }}
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.12em] font-medium uppercase text-primary/80 hover:text-accent transition-colors duration-200 focus:outline-none cursor-pointer"
              >
                {t('footer.about')}
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onShowContact?.();
                }}
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.12em] font-medium uppercase text-primary/80 hover:text-accent transition-colors duration-200 focus:outline-none cursor-pointer"
              >
                {t('footer.contact')}
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onShowPrivacy?.();
                }}
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.12em] font-medium uppercase text-primary/80 hover:text-accent transition-colors duration-200 focus:outline-none cursor-pointer"
              >
                {t('footer.privacy')}
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onShowImprint?.();
                }}
                className="font-sans text-[10px] sm:text-[11px] tracking-[0.12em] font-medium uppercase text-primary/80 hover:text-accent transition-colors duration-200 focus:outline-none cursor-pointer"
              >
                {t('footer.imprint')}
              </button>
            </div>
          </div>

          {/* Right Column: Copyright Line */}
          <div className="flex justify-center lg:justify-end items-center">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.12em] text-primary/75 font-normal select-none whitespace-nowrap">
              © 2026 HESPYRA
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
