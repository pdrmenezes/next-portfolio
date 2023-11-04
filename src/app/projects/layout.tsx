import AreaNavigation from "@/components/AreaNavigation";
import Link from "next/link";

export const metadata = {
  title: "Projects | Pedro Menezes",
  description: "Pedro Menezes' projects",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mb-10 flex flex-col justify-start gap-2">
        <Link href={"/projects"} className="w-fit">
          <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">projects</h1>
        </Link>
        <AreaNavigation />
      </div>
      {children}
    </>
  );
}
