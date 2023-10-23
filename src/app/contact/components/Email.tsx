"use client";
export function Email() {
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
    <div className="group relative w-fit cursor-pointer p-4" onClick={() => copyToClipboard("pdrmenezes1@gmail.com")}>
      <h2 className="font-semibold">EMAIL</h2>
      <p>pdrmenezes1@gmail.com</p>
      <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute left-0 top-0 h-3 w-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
        <div className="absolute right-0 top-0 h-3 w-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
        <div className="absolute bottom-0 right-0 h-3 w-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
        <div className="absolute bottom-0 left-0 h-3 w-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
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
