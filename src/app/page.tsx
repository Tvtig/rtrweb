import Link from "next/link";
import Image from "next/image";
import { STEAM_URL } from "../lib/constants";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Race! Then Retry... — Official Site",
  description:
    "Fast, precise, and addictive arcade racing. Crash, learn, and Race! Then Retry... Wishlist now on Steam.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo-full-rtr.svg"
              alt="Race! Then Retry... logo"
              width={400}
              height={64}
              priority
              className="mb-6"
            />
            <p className="mt-4 max-w-2xl text-balance text-neutral-300 text-lg sm:text-xl">
              A razor‑sharp time‑trial racer where every corner counts. Crash, learn, perfect your line — then beat it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={STEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 active:bg-fuchsia-700 transition px-6 py-3 font-semibold shadow-lg shadow-fuchsia-600/30"
              >
                <Image
                  src="/steam.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                  aria-hidden
                />
                Wishlist on Steam
              </a>
              <Link
                href="/media"
                className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 transition px-6 py-3 font-semibold"
              >
                Watch Trailer
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-left">
                <p className="text-sm uppercase tracking-widest text-neutral-400">Core</p>
                <p className="mt-1 font-semibold">Precision Arcade Racing</p>
                <p className="mt-1 text-neutral-300 text-sm">Tight controls, instant restarts, zero downtime.</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-left">
                <p className="text-sm uppercase tracking-widest text-neutral-400">Compete</p>
                <p className="mt-1 font-semibold">Leaderboards & Ghosts</p>
                <p className="mt-1 text-neutral-300 text-sm">Chase your best time and rival ghosts to shave milliseconds.</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-left">
                <p className="text-sm uppercase tracking-widest text-neutral-400">Flow</p>
                <p className="mt-1 font-semibold">Crash. Learn. Retry.</p>
                <p className="mt-1 text-neutral-300 text-sm">Iterate fast and master every corner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser media strip */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">See it in action</h2>
          <Link href="/media" className="text-fuchsia-400 hover:text-fuchsia-300">
            Explore media →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <video
            className="rounded-lg border border-white/10 w-full h-auto"
            muted
            playsInline
            loop
            autoPlay
            preload="metadata"
            poster="/media/screenshot-1.svg"
            aria-label="Gameplay clip 1"
            title="Gameplay clip 1"
          >
            <source src="/media/clip-1.webm" type="video/webm" />
          </video>

          <video
            className="rounded-lg border border-white/10 w-full h-auto"
            muted
            playsInline
            loop
            autoPlay
            preload="metadata"
            poster="/media/screenshot-2.svg"
            aria-label="Gameplay clip 2"
            title="Gameplay clip 2"
          >
            <source src="/media/clip-2.webm" type="video/webm" />
          </video>

          <video
            className="rounded-lg border border-white/10 w-full h-auto"
            muted
            playsInline
            loop
            autoPlay
            preload="metadata"
            poster="/media/screenshot-3.svg"
            aria-label="Gameplay clip 3"
            title="Gameplay clip 3"
          >
            <source src="/media/clip-3.webm" type="video/webm" />
          </video>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 active:bg-fuchsia-700 transition px-6 py-3 font-semibold shadow-lg shadow-fuchsia-600/30"
          >
            <Image
              src="/steam.svg"
              alt=""
              width={20}
              height={20}
              className="mr-2"
              aria-hidden
            />
            Wishlist on Steam
          </a>
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 transition px-6 py-3 font-semibold"
          >
            Discover Features
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
