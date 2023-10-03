"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavigationProps = {
  navLinks: {
    name: string;
    href: string;
  }[];
};

export default function AreaNavigation({ navLinks }: NavigationProps) {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 md:gap-10 ">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={
              isActive
                ? "text-2xl md:text-3xl underline underline-offset-4 md:underline-offset-8 font-medium transition-all"
                : "text-2xl md:text-3xl underline md:no-underline underline-offset-4 md:underline-offset-8 font-medium hover:underline transition-all"
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
