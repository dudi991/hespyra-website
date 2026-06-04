const LogoTicker = () => {
  const brands = [
    { name: 'The Green Queen', style: 'font-serif text-xl tracking-tight font-light' },
    { name: 'BITE ME', style: 'font-sans text-lg font-bold tracking-widest' },
    { name: 'Glass Magazine', style: 'font-serif text-lg tracking-widest uppercase' },
    { name: 'Apothecary', style: 'font-serif text-xl italic tracking-wide' },
    { name: 'WELL+GOOD', style: 'font-sans text-base font-bold tracking-tighter uppercase' },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] border-y border-border/60 py-8 flex flex-col items-center justify-center relative z-10">
      <div className="max-w-[1600px] w-full px-6 mx-auto flex flex-wrap justify-between items-center gap-y-6 gap-x-12 md:gap-x-16 lg:gap-x-24 opacity-60 text-primary/80 select-none">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex-1 flex justify-center min-w-[140px]">
            <span className={`${brand.style}`}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoTicker;
