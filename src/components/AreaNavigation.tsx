"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "front-end", href: "/projects/front-end" },
  { name: "design", href: "/projects/design" },
  { name: "35mm", href: "/projects/35mm" },
];

export default function AreaNavigation() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 md:gap-10 ">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={
              isActive
                ? "text-xl font-medium underline underline-offset-4 transition-all md:text-3xl md:underline-offset-8"
                : "text-xl font-medium underline underline-offset-4 transition-all hover:underline md:text-3xl md:no-underline md:underline-offset-8"
            }
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
