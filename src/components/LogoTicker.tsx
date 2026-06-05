const LogoTicker = () => {
  const brands = [
    { name: 'The Quiet Hours', style: 'font-serif text-[17px] sm:text-lg tracking-wide text-primary/70' },
    { name: 'RITUAL', style: 'font-serif text-[17px] sm:text-lg tracking-[0.2em] uppercase text-primary/70' },
    { name: 'Slow Magazine', style: 'font-serif text-[17px] sm:text-lg tracking-wide text-primary/70' },
    { name: 'Apothecary', style: 'font-serif text-[17px] sm:text-lg italic tracking-wide text-primary/70' },
    { name: 'WELL+', style: 'font-sans text-[15px] sm:text-base tracking-[0.1em] font-light uppercase text-primary/70' },
  ];

  return (
    <section className="w-full bg-[#F2EDE4] border-y border-primary/10 py-7 relative z-10">
      <div className="max-w-[1600px] w-full px-6 sm:px-8 lg:px-12 mx-auto flex flex-col md:flex-row justify-between items-center gap-y-4 gap-x-6">
        
        {/* Left: Category Tag / As Seen In */}
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-primary/50 uppercase select-none">
          As seen in
        </span>

        {/* Right: Brands */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 lg:gap-x-12 gap-y-3 select-none">
          {brands.map((brand, idx) => (
            <span key={idx} className={`${brand.style}`}>
              {brand.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoTicker;
