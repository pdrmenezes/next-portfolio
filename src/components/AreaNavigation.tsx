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
    <div className="flex gap-10 py-1">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={
              isActive
                ? "text-[clamp(1.5rem,5vw,3.125rem)] font-medium border-b border-whiteish transition-all"
                : "text-[clamp(1.5rem,5vw,3.125rem)] font-medium hover:border-b hover:border-whiteish transition-all"
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
