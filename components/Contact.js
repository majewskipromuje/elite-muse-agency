export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#d4af3726]">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-6">Your next chapter begins privately.</h2>
        <p className="text-gray-300 max-w-2xl mb-8">
          If you feel you’re meant for more — you’re right. Leave your contact below and let’s start shaping your presence together.
        </p>

        {/* Vercel Forms: enable collection with data-vercel-form */}
        <form
          className="grid grid-cols-1 gap-4 max-w-xl"
          method="POST"
          action="/thank-you"
          data-vercel-form="true"
        >
          <input type="hidden" name="formName" value="elite-muse-contact" />
          <label className="text-sm text-gray-400">Name
            <input
              className="mt-1 w-full rounded-md bg-black/40 border border-[#d4af3726] px-4 py-3 outline-none focus:border-gold/70"
              type="text" name="name" required placeholder="Your name" />
          </label>

          <label className="text-sm text-gray-400">Email
            <input
              className="mt-1 w-full rounded-md bg-black/40 border border-[#d4af3726] px-4 py-3 outline-none focus:border-gold/70"
              type="email" name="email" required placeholder="you@example.com" />
          </label>

          <label className="text-sm text-gray-400">Message
            <textarea
              className="mt-1 w-full rounded-md bg-black/40 border border-[#d4af3726] px-4 py-3 min-h-[140px] outline-none focus:border-gold/70"
              name="message" required placeholder="Tell me about you" />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-md border border-gold/70 px-6 py-3 text-sm tracking-wide hover:bg-gold hover:text-black transition"
          >
            Send request
          </button>

          <p className="text-xs text-gray-500 mt-3">
            By sending this form, you agree to be contacted back. Discretion is our standard.
          </p>
        </form>
      </div>
    </section>
  );
}
