"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavigationProps = {
  navLinks: {
    name: string;
    href: string;
  }[];
};

export default function MainNavigation({ navLinks }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 font-medium tracking-wide">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={
              isActive
                ? "text-lg underline underline-offset-8 transition-all md:text-3xl"
                : "text-lg underline-offset-8 transition-all hover:underline md:text-3xl"
            }
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
