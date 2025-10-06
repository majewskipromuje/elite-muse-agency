export const metadata = { title: "Thank You — Elite Muse Agency" };

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-xl">
        <h1 className="font-display text-3xl sm:text-4xl text-gold mb-4">Request received</h1>
        <p className="text-gray-300">Thank you for your interest. We will reach out to you privately if your profile is a fit.</p>
        <a href="/" className="inline-block mt-8 rounded-full border border-gold/60 px-6 py-3 text-sm hover:bg-gold hover:text-black transition">
          ← Back to home
        </a>
      </div>
    </div>
  );
}
