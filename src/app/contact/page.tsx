import { Email } from "./components/Email";
import "./styles.css";

export const metadata = {
  title: "Contact | Pedro Menezes",
  description: "You can find some of the things I've been experimenting with at github.com/pdrmenezes",
};

export default function ContactPage() {
  return (
    <div className="flex h-full flex-col justify-start gap-2">
      <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">contact</h1>
      <div className="grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-y-10">
        <Email />
        <a
          href="https://www.github.com/pdrmenezes"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-2 hover:outline hover:outline-2 hover:outline-whiteish md:p-4"
        >
          <h2 className="font-semibold">GITHUB</h2>
          <p>/pdrmenezes</p>
        </a>
        <a
          href="https://www.instagram.com/pdrmenezes"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md p-2 hover:outline hover:outline-2 hover:outline-whiteish md:col-start-1 md:row-start-2 md:p-4"
        >
          <h2 className="font-semibold">INSTAGRAM</h2>
          <p>@pdrmenezes</p>
        </a>
        <div className="p-2 md:col-start-2 md:row-start-2 md:p-4">
          <h2 className="font-semibold">_</h2>
          <p>your turn (:</p>
        </div>
      </div>
    </div>
  );
}
