import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { projectName: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const projectName = params.projectName;
  const parentDescription = (await parent).description || "";

  const splittedProjectName = projectName.split("-");
  const capitalizedProjectNamesWord = splittedProjectName.map((word) => word[0].toLocaleUpperCase() + word.substring(1));
  const formattedProjectName = capitalizedProjectNamesWord.join(" ");

  return {
    title: `${formattedProjectName} | Pedro Menezes`,
    description: parentDescription,
  };
}
export default function ProjectPage({ params }: Props) {
  const { projectName } = params;

  const formattedProjectName = projectName
    .split("-")
    .map((word) => word[0].toLocaleUpperCase() + word.substring(1))
    .join(" ");

  return <div>{formattedProjectName}</div>;
}
