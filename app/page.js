// app/page.js

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-black/70"
            style={{
              backgroundImage: `url('https://i.ibb.co/5gNHcXHh/freepik-a-stunning-elegant-woman-in-her-30s-with-natural-b-79655.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
              mixBlendMode: "multiply",
            }}
          ></div>

          {/* Gradient overlay with gold tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#bca87533]"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl px-6 md:px-12 md:ml-12">
            <h1 className="text-4xl md:text-6xl font-[Cinzel,serif] text-[#d4af37] leading-tight mb-6">
              You were born a woman. <br />
              <span className="text-white">You already won.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-md mb-10">
              But when you master your presence online — you win twice.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] px-6 py-3 text-sm uppercase tracking-wide text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition"
            >
              ✦ Request private access
            </a>
          </div>

          {/* Spacer to balance layout */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-screen"></div>
        </section>
      </main>
    </div>
  );
}
