"use client";

export function Email() {
  async function copyEmailToClipboard() {
    const toastDiv = document.getElementById("email-toast");
    const email = document.getElementById("email")?.textContent;

    try {
      await navigator.clipboard.writeText(email!);
      toastDiv!.classList.add("show");
      setTimeout(() => {
        toastDiv!.classList.remove("show");
      }, 3000);
    } catch (err) {
      console.log("Failed to copy Email.", err);
    }
  }
  return (
    <>
      <div className="group relative w-fit cursor-pointer p-4" onClick={copyEmailToClipboard}>
        <h2 className="font-semibold">EMAIL</h2>
        <p id="email">hi@pdrmenezes.com</p>
        <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute left-0 top-0 size-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
          <div className="absolute right-0 top-0 size-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
          <div className="absolute bottom-0 right-0 size-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
          <div className="absolute bottom-0 left-0 size-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
        </div>
      </div>
      <div className="fixed bottom-8 left-1/2 z-50 mx-4 -translate-x-1/2 transform" id="email-toast">
        <div className="rounded-full border border-whiteish/20 bg-blackish/95 px-4 py-2 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="size-1.5 rounded-full bg-lightgreen"></div>
            <span className="text-xs text-whiteish">Email copied to clipboard</span>
          </div>
        </div>
      </div>
    </>
  );
}
