import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { SUPPORT_EMAIL } from "../../lib/constants";

export const metadata = {
  title: "Privacy Policy — Race! Then Retry...",
  description: "Privacy policy for Race! Then Retry... website and communications.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Privacy Policy</h1>
        <p className="mt-4 text-neutral-300">
          We respect your privacy. This website collects minimal analytics to improve the
          experience. If you contact us, we will use your information solely to respond
          to your inquiry.
        </p>

        <h2 className="mt-8 text-xl font-semibold">What We Collect</h2>
        <ul className="mt-2 list-disc list-inside text-neutral-300">
          <li>Basic usage analytics (pages viewed, anonymized device data)</li>
          <li>Email content you send to our addresses</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Data Usage</h2>
        <p className="mt-2 text-neutral-300">
          We use the data to operate and improve the site, respond to messages, and
          share news about the game when you’ve asked us to.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-300">
          For privacy questions, email <a className="text-fuchsia-400 hover:text-fuchsia-300" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
