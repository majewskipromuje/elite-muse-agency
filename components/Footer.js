export default function Footer() {
  return (
    <footer className="border-t border-[#d4af3726]">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Elite Muse Agency. All rights reserved.</p>
        <a href="https://instagram.com/worldtopluxx" target="_blank" rel="noreferrer" className="hover:text-gold transition">
          @worldtopluxx
        </a>
      </div>
    </footer>
  );
}
