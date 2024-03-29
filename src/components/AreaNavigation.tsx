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

  const baseLinkClasslist = "group relative w-fit p-2 text-xl font-medium transition-opacity md:p-4 md:text-3xl";
  const isLinkActiveClasslist = "opacity-100";
  const isLinkNotActiveClasslist = "opacity-50 hover:opacity-75";

  return (
    <div className="flex w-fit gap-2 md:gap-10">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={isActive ? `${baseLinkClasslist} ${isLinkActiveClasslist}` : `${baseLinkClasslist} ${isLinkNotActiveClasslist}`}
            href={link.href}
            key={link.name}
          >
            {link.name}
            <div
              className={
                isActive ? "opacity-100" : "opacity-0 " + "absolute inset-0 h-full w-full transition-opacity duration-300 group-hover:opacity-100"
              }
            >
              <div className="absolute left-0 top-0  h-3 w-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
              <div className="absolute right-0 top-0 h-3 w-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
