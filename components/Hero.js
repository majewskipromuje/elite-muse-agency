export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-28 sm:py-36">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6 animate-fadeInUp">
          Elite · Muse · Agency
        </p>
        <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] max-w-3xl animate-fadeInUp">
          <span className="text-gold">You were born a woman.</span> You already won.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl animate-fadeInUp" style={{animationDelay: "120ms"}}>
          But when you master your presence online — you win twice.
        </p>
        <div className="mt-10 animate-fadeInUp" style={{animationDelay: "200ms"}}>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3 text-sm tracking-wide hover:bg-gold hover:text-black transition">
            ✦ Request private access
          </a>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-gold/5 blur-3xl"></div>
      </div>
    </section>
  );
}
