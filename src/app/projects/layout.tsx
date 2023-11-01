import AreaNavigation from "@/components/AreaNavigation";
import { ProjectsList } from "@/components/ProjectsList/ProjectsList";
import Link from "next/link";

export const metadata = {
  title: "Projects | Pedro Menezes",
  description: "Pedro Menezes' projects",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mb-10 flex h-fit flex-col justify-start gap-2 md:mb-0 md:h-full">
        <Link href={"/projects"}>
          <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">projects</h1>
        </Link>
        <AreaNavigation />
        <ProjectsList />
      </div>
      {children}
    </>
  );
}
