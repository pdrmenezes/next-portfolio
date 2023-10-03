import AreaNavigation from "@/components/AreaNavigation";
import Link from "next/link";

const navLinks = [
  { name: "front-end", href: "/projects/front-end" },
  { name: "design", href: "/projects/design" },
  { name: "35mm", href: "/projects/35mm" },
];

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mb-10 flex h-fit flex-col justify-start gap-2 md:mb-0 md:h-full">
        <Link href={"/projects"}>
          <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">projects</h1>
        </Link>
        <AreaNavigation navLinks={navLinks} />
      </div>
      {children}
    </>
  );
}
