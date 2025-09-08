import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Media — Race! Then Retry...",
  description:
    "Watch the trailer and browse gameplay clips for Race! Then Retry...",
};

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Media</h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          Trailer and gameplay clips below.
        </p>

        {/* Trailer */}
        <div className="mt-10 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/watch?v=pO0kBuIdspI"
            title="Race! Then Retry... — Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Gameplay clips */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <video
            className="rounded-lg border border-white/10 w-full h-auto"
            controls
            preload="metadata"
            poster="/media/screenshot-1.svg"
          >
            <source src="/media/clip-1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <video
            className="rounded-lg border border-white/10 w-full h-auto"
            controls
            preload="metadata"
            poster="/media/screenshot-2.svg"
          >
            <source src="/media/clip-2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <video
            className="rounded-lg border border-white/10 w-full h-auto"
            controls
            preload="metadata"
            poster="/media/screenshot-3.svg"
          >
            <source src="/media/clip-3.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
      <Footer />
    </div>
  );
}
