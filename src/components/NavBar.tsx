import Link from "next/link";
import Image from "next/image";
import { STEAM_URL } from "../lib/constants";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex h-16 items-center justify-between px-6 max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-rtr.svg" alt="Race! Then Retry..." width={100} height={100} />
          <span className="sr-only">Race! Then Retry...</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="hover:text-fuchsia-300 text-neutral-200" href="/features">
            Features
          </Link>
          <Link className="hover:text-fuchsia-300 text-neutral-200" href="/media">
            Media
          </Link>
          <Link className="hover:text-fuchsia-300 text-neutral-200" href="/press">
            Press
          </Link>
          <Link className="hover:text-fuchsia-300 text-neutral-200" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 transition px-4 py-2 text-sm font-semibold"
          >
            <Image src="/steam.svg" alt="" width={16} height={16} className="mr-2" aria-hidden />
            Wishlist
          </a>
        </div>
      </div>
    </header>
  );
}
