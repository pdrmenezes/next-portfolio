import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import whiteIcon from "@/assets/white_icon.svg";
import MainNavigation from "@/components/MainNavigation";

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

const navLinks = [
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nohemi.className}>
      <body className="flex flex-col h-screen bg-blackish text-whiteish p-4 scroll-smooth antialiased">
        <header className="flex flex-col gap-4 md:flex-row lg:flex-row justify-between items-center px-6 py-4 text-white text-center" id="top">
          <Link href="/">
            <Image className="animate-pulse md:scale-150 transition-transform" src={whiteIcon} alt="white icon" width={40} height={40} />
          </Link>
          <MainNavigation navLinks={navLinks} />
        </header>
        <main className="flex-1 overflow-y-auto px-8 py-20 md:py-40 lg:px-20">{children}</main>
      </body>
    </html>
  );
}
