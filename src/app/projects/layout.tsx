import AreaNavigation from "@/components/AreaNavigation";

const navLinks = [
  { name: "front-end", href: "/projects/front-end" },
  { name: "production", href: "/projects/production" },
  { name: "copy", href: "/projects/copy" },
  { name: "35mm", href: "/projects/35mm" },
];

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col gap-2 h-full justify-center">
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">projects</h1>
        <AreaNavigation navLinks={navLinks} />
      </div>
      {children}
    </>
  );
}
