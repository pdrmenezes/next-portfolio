import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import whiteCircle from "@/assets/icons/white_circle.svg";
import MainNavigation from "@/components/MainNavigation";

export const metadata = {
  title: "Home | Pedro Menezes",
  description: "Pedro Menezes' Projects",
};

const nohemi = localFont({
  src: [
    {
      path: "../assets/font/Nohemi-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "../assets/font/Nohemi-ExtraLight.woff2",
      weight: "200",
      style: "extra-light",
    },
    {
      path: "../assets/font/Nohemi-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../assets/font/Nohemi-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../assets/font/Nohemi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/font/Nohemi-SemiBold.woff2",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../assets/font/Nohemi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/font/Nohemi-ExtraBold.woff2",
      weight: "800",
      style: "extra-bold",
    },
    {
      path: "../assets/font/Nohemi-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
});

const navLinks = [
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nohemi.className}>
      <body className="flex h-screen flex-col scroll-smooth bg-blackish p-4 tracking-wide text-whiteish antialiased">
        <header className="flex flex-col items-center justify-between gap-4 text-center text-white sm:px-6 sm:py-4 md:flex-row lg:flex-row" id="top">
          <Link href="/">
            <Image
              className="animate-pulse transition-transform motion-reduce:animate-none motion-reduce:opacity-75 md:scale-150"
              src={whiteCircle}
              alt="white icon"
              width={40}
              height={40}
            />
          </Link>
          <MainNavigation navLinks={navLinks} />
        </header>
        <main className="flex-1 overflow-y-auto px-4 py-20 md:py-40 lg:px-20">
          <section className="mx-auto h-full max-w-5xl">{children}</section>
        </main>
      </body>
    </html>
  );
}
