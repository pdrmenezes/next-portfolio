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
          <div className="border-whiteish absolute top-0 left-0 size-3 border border-t-2 border-r-0 border-b-0 border-l-2"></div>
          <div className="border-whiteish absolute top-0 right-0 size-3 border border-t-2 border-r-2 border-b-0 border-l-0"></div>
          <div className="border-whiteish absolute right-0 bottom-0 size-3 border border-t-0 border-r-2 border-b-2 border-l-0"></div>
          <div className="border-whiteish absolute bottom-0 left-0 size-3 border border-t-0 border-r-0 border-b-2 border-l-2"></div>
        </div>
      </div>
      <div className="fixed bottom-8 left-1/2 z-50 mx-4 -translate-x-1/2 transform" id="email-toast">
        <div className="border-whiteish/20 bg-blackish/95 rounded-full border px-4 py-2 shadow-lg backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <div className="bg-lightgreen size-1.5 rounded-full"></div>
            <span className="text-whiteish text-xs">Email copied to clipboard</span>
          </div>
        </div>
      </div>
    </>
  );
}
