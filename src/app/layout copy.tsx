import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import localFont from "next/font/local";
import whiteIcon from "./white_icon.svg";
import envelope from "./envelope.svg";

export const metadata = {
  title: "Início | Pedro Menezes",
  description: "Pedro Menezes' Projects",
  themeColor: "dark",
};
const nohemi = localFont({
  src: [
    {
      path: "./font/Nohemi-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "./font/Nohemi-ExtraLight.woff2",
      weight: "200",
      style: "extra-light",
    },
    {
      path: "./font/Nohemi-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./font/Nohemi-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "./font/Nohemi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./font/Nohemi-SemiBold.woff2",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "./font/Nohemi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./font/Nohemi-ExtraBold.woff2",
      weight: "800",
      style: "extra-bold",
    },
    {
      path: "./font/Nohemi-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nohemi.className}>
      <body className="flex flex-col h-screen bg-blackish text-whiteish">
        <header className="flex justify-between p-5 text-white text-center">
          <div className="flex gap-60">
            <Link href="/">
              <Image className="animate-pulse" src={whiteIcon} alt="white icon" width={50} height={50} />
            </Link>
            <nav className="flex items-center gap-6 font-regular tracking-widest">
              <Link className="hover:border-b hover:border-whiteish transition-all" href="/projects">
                about
              </Link>
              <Link className="hover:border-b hover:border-whiteish transition-all" href="/projects">
                projects
              </Link>
              <Link className="hover:border-b hover:border-whiteish transition-all" href="/projects">
                products
              </Link>
            </nav>
          </div>
          <Link href="/contact">
            <div className="flex items-center justify-center rounded-full h-10 w-10 border border-whiteish hover:bg-whiteish hover:border-0 group">
              <Image className="group-hover:invert" src={envelope} alt="envelope for contact page" width={20} height={20} />
            </div>
          </Link>
        </header>
        <main className="flex-1 overflow-y-auto p-5">{children}</main>
        <footer className="flex flex-col gap-3 p-5 text-center items-center justify-center text-white font-regular">
          <hr className=" border-whiteish w-full" />
          <div> built with ♡ & Next.js</div>
        </footer>
      </body>
    </html>
  );
}
