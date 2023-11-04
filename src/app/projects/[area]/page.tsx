import type { Metadata, ResolvingMetadata } from "next";
import { ProjectsList } from "../components/ProjectsList";
import { projectsData } from "../data/projectsData";

type Props = {
  params: { area: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const area = params.area;
  const parentTitle = (await parent).title?.absolute || "";
  const parentDescription = (await parent).description || "";

  return {
    title: `${area[0].toLocaleUpperCase() + area.substring(1)} ${parentTitle}`,
    description: parentDescription,
  };
}
export default function AreaPage({ params }: Props) {
  const { area } = params;
  const filteredProjects = projectsData.filter((project) => project.areas.includes(area));

  return <ProjectsList projects={filteredProjects} area={area} />;
}
