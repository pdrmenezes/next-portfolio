import { projectsData } from "./data/projectsData";
import { ProjectsList } from "@/app/projects/components/ProjectsList";

export default function ProjectsPage() {
  return <ProjectsList projects={projectsData} />;
}
