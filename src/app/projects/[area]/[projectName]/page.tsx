import type { Metadata, ResolvingMetadata } from "next";
import { projectsData } from "../../data/projectsData";
import Image from "next/image";
import { DownArrow } from "@/assets/icons/DownArrow";
import Link from "next/link";

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

  const projectInfo = projectsData.find((project) => project.slug == projectName);
  const formattedProjectName = projectName
    .split("-")
    .map((word) => word[0].toLocaleUpperCase() + word.substring(1))
    .join(" ");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-3xl">
          {projectInfo?.title} / {projectInfo?.year}{" "}
          {projectInfo?.externalUrl && (
            <Link href={projectInfo?.externalUrl} className="ml-2 inline-flex">
              <DownArrow className="h-8 w-8 translate-y-1 -rotate-[135deg] stroke-whiteish stroke-2 group-hover:underline group-hover:underline-offset-4" />
            </Link>
          )}
        </h3>

        <h4 className="text-sm">{projectInfo?.content?.subtitle}</h4>
      </div>

      <div className="flex gap-4 border-t border-t-whiteish pt-5">
        {projectInfo?.content?.tags?.map((tag) => (
          <p key={tag} className="rounded-full bg-whiteish px-3 py-0.5 text-xs font-medium text-blackish">
            {tag}
          </p>
        ))}
      </div>

      {projectInfo?.content?.description}
      <div className="grid gap-4 md:grid-cols-3">
        {projectInfo?.content?.contentImagesSrc?.map((imageSrc, index) => (
          <Image src={imageSrc} key={imageSrc} alt={`${projectInfo.title}&apos;s image ${index + 1}`} width={500} height={281} />
        ))}
      </div>
    </div>
  );
}
