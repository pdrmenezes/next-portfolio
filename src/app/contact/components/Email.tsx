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
    <div className="group relative w-fit cursor-pointer p-4" onClick={copyEmailToClipboard}>
      <h2 className="font-semibold">EMAIL</h2>
      <p id="email">hi@pdrmenezes.com</p>
      <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute left-0 top-0 size-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
        <div className="absolute right-0 top-0 size-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
        <div className="absolute bottom-0 right-0 size-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
        <div className="absolute bottom-0 left-0 size-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
      </div>
      <div
        className="fixed bottom-8 left-1/2 -ml-[100px] min-w-[200px] rounded-lg bg-whiteish p-4 text-center text-sm font-medium text-blackish"
        id="email-toast"
      >
        <span className="mr-1">✅</span> Email copied to clipboard
      </div>
    </div>
  );
}
