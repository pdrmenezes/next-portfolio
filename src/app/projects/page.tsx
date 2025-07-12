import { PROJECTS_DATA } from "@/data/projectsData";
import { ProjectsList } from "@/app/projects/components/ProjectsList";

export const metadata = {
  title: "Projects | Pedro Menezes",
  description: "Pedro Menezes' projects",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-10 flex flex-col justify-start gap-2">
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">projects</h1>
      </div>
      <ProjectsList projects={PROJECTS_DATA} />
    </>
  );
}
