import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Light Hearted Tech • All rights reserved.
            </p>
            <div className="mt-2 text-xs text-neutral-500">
              Not yet rated by the ESRB/PEGI. Gameplay and content subject to change.
            </div>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <Link href="/privacy" className="text-neutral-300 hover:text-fuchsia-300">
              Privacy
            </Link>
            <Link href="/press" className="text-neutral-300 hover:text-fuchsia-300">
              Press Kit
            </Link>
            <a
              href="https://discord.gg/your-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-fuchsia-300"
            >
              Discord
            </a>
            <a
              href="https://x.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-fuchsia-300"
            >
              X/Twitter
            </a>
            <a
              href="https://youtube.com/@your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-fuchsia-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
