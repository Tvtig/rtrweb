import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { SUPPORT_EMAIL } from "../../lib/constants";

export const metadata = {
  title: "Contact — Race! Then Retry...",
  description: "Contact the developer for support, business, or press inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Contact</h1>
        <p className="mt-4 text-neutral-300">
          Have a question, feedback, or business inquiry? We’d love to hear from you.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="mt-2 text-neutral-300">
              General: <a className="text-fuchsia-400 hover:text-fuchsia-300" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Community</h2>
            <ul className="mt-2 space-y-1 text-neutral-300">
              <li><a className="text-fuchsia-400 hover:text-fuchsia-300" href="https://x.com/lhtgames" target="_blank" rel="noopener noreferrer">X/Twitter</a></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
