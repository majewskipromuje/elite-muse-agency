export default function Header() {
  return (
    <header className="border-b border-[#d4af3726] sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-black/50 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div className="font-display text-xl tracking-wide text-gold">
          Elite Muse Agency
        </div>
        <nav className="text-sm text-gray-300">
          <a href="#about" className="hover:text-gold transition">About</a>
          <span className="mx-3 opacity-30">/</span>
          <a href="#contact" className="hover:text-gold transition">Request Access</a>
        </nav>
      </div>
    </header>
  );
}
