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
    <div
      className="cursor-pointer rounded-md p-2 hover:outline hover:outline-2 hover:outline-whiteish md:p-4"
      onClick={() => copyToClipboard("pdrmenezes1@gmail.com")}
    >
      <h2 className="font-semibold">EMAIL</h2>
      <p>pdrmenezes1@gmail.com</p>
      <div
        className="fixed bottom-8 left-1/2 -ml-[100px] min-w-[200px] rounded-lg bg-whiteish p-4 text-center text-sm font-medium text-blackish"
        id="email-toast"
      >
        <span className="mr-1">✅</span> Email copied to clipboard
      </div>
    </div>
  );
}
