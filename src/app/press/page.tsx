import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { SUPPORT_EMAIL } from "../../lib/constants";

export const metadata = {
  title: "Press Kit — Race! Then Retry...",
  description:
    "Press resources, facts, descriptions, and contact info for Race! Then Retry...",
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Press Kit</h1>
        <p className="mt-4 text-neutral-300">
          Assets and information below are free for editorial use in articles, videos, and streams.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Fact Sheet</h2>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li><span className="text-neutral-400">Title:</span> Race! Then Retry…</li>
              <li><span className="text-neutral-400">Genre:</span> Arcade Time‑Trial Racing</li>
              <li><span className="text-neutral-400">Platforms:</span> PC (Steam)</li>
              <li><span className="text-neutral-400">Release:</span> November 28 2025 — Wishlist now</li>
              <li><span className="text-neutral-400">Players:</span> Single‑player with global leaderboards</li>
              <li><span className="text-neutral-400">Developer:</span> Light Hearted Tech</li>
              <li><span className="text-neutral-400">Contact:</span> {SUPPORT_EMAIL}</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Elevator Pitch</h2>
            <p className="mt-3 text-neutral-300">
              Race! Then Retry… distills time‑trial racing into pure flow. Tight controls, instant
              restarts, and leaderboard‑driven goals push you to perfect every line.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="mt-3 text-neutral-300">
            A precision racer focused on iteration and improvement. Sessions are fast,
            failures are frictionless, and each attempt brings you closer to the perfect lap.
            Compete on global leaderboards and chase ghosts to shave milliseconds.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="mt-3 grid gap-2 list-disc list-inside text-neutral-300">
            <li>Instant restarts keep you in the zone</li>
            <li>Sharply tuned handling and readable track design</li>
            <li>Global leaderboards and rival ghosts</li>
            <li>Campaign targets and challenge variations</li>
            <li>Controller and keyboard support</li>
          </ul>
        </section>

        <section className="mt-10">
          <a
            href="/media"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 hover:border-white/40 font-semibold"
          >
            Browse Media →
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
