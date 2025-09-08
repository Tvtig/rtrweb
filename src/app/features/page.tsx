import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Features — Race! Then Retry...",
  description:
    "Discover the razor-sharp racing features: instant restarts, leaderboards, ghosts, and more.",
};

export default function FeaturesPage() {
  const features = [
    {
      title: "Precision Controls",
      desc: "Snappy, responsive handling tuned for time-trial mastery.",
    },
    {
      title: "Instant Restart",
      desc: "Crash, tap retry, and you’re back in the action in milliseconds.",
    },
    {
      title: "Global Leaderboards",
      desc: "Compete worldwide. Climb ranks, defend your times.",
    },
    {
      title: "Ghosts & Replays",
      desc: "Race your best self or rival ghosts to optimize every corner.",
    },
    {
      title: "Campaign & Challenges",
      desc: "A curated set of tracks with tight targets and unlockable tiers.",
    },
    {
      title: "Controller & KB/M",
      desc: "Play how you like with tuned support for your device.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Features</h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          Built for flow: tight controls, instant retries, and a pure focus on shaving
          milliseconds from your lap.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
