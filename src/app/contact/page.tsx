"use client";
import "./styles.css";

export default function ContactPage() {
  async function copyToClipboard(text: string) {
    const toastDiv = document.getElementById("email-toast");

    try {
      await navigator.clipboard.writeText(text);
      toastDiv!.classList.add("show");
      setTimeout(() => {
        toastDiv!.classList.remove("show");
      }, 3000);
    } catch (err) {
      console.log("Failed to copy Email.");
    }
  }

  return (
    <div className="flex flex-col gap-2 h-full justify-start">
      <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">contact</h1>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-2 md:gap-y-10 gap-4">
        <div
          className="cursor-pointer hover:outline hover:outline-2 hover:outline-whiteish rounded-md p-2 md:p-4"
          onClick={() => copyToClipboard("pdrmenezes1@gmail.com")}
        >
          <h2 className="font-semibold">EMAIL</h2>
          <p>pdrmenezes1@gmail.com</p>
          <div
            className="fixed left-1/2 bottom-8 bg-whiteish p-4 text-blackish text-center text-sm font-medium min-w-[200px] -ml-[100px] rounded-lg"
            id="email-toast"
          >
            <span className="mr-1">✅</span> Email copied to clipboard
          </div>
        </div>
        <a
          href="https://www.github.com/pdrmenezes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:outline hover:outline-2 hover:outline-whiteish rounded-md p-2 md:p-4"
        >
          <h2 className="font-semibold">GITHUB</h2>
          <p>/pdrmenezes</p>
        </a>
        <a
          href="https://www.instagram.com/pdrmenezes"
          target="_blank"
          rel="noopener noreferrer"
          className="md:row-start-2 md:col-start-1 hover:outline hover:outline-2 hover:outline-whiteish rounded-md p-2 md:p-4"
        >
          <h2 className="font-semibold">INSTAGRAM</h2>
          <p>@pdrmenezes</p>
        </a>
        <div className="md:row-start-2 md:col-start-2 p-2 md:p-4">
          <h2 className="font-semibold">_</h2>
          <p>your turn (:</p>
        </div>
      </div>
    </div>
  );
}
