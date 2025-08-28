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

        <a href="https://www.linkedin.com/in/pdrmenezes/" target="_blank" rel="noopener noreferrer" className="group relative w-fit rounded-md p-4">
          <h2 className="font-semibold">LINKEDIN</h2>
          <p>/in/pdrmenezes</p>
          <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute left-0 top-0  size-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
            <div className="absolute right-0 top-0 size-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
            <div className="absolute bottom-0 right-0 size-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
            <div className="absolute bottom-0 left-0 size-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
          </div>
        </a>

        <a
          href="https://www.github.com/pdrmenezes"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-fit rounded-md p-4 md:col-start-1 md:row-start-2"
        >
          <h2 className="font-semibold">GITHUB</h2>
          <p>/pdrmenezes</p>
          <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute left-0 top-0  size-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
            <div className="absolute right-0 top-0 size-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
            <div className="absolute bottom-0 right-0 size-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
            <div className="absolute bottom-0 left-0 size-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
          </div>
        </a>

        <div className="p-4 md:col-start-2 md:row-start-2 md:p-4">
          <h2 className="font-semibold">_</h2>
          <p>your move (:</p>
        </div>
      </div>
    </div>
  );
}
