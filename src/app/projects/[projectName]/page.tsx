import type { Metadata, ResolvingMetadata } from "next";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";
import { DownArrow } from "@/assets/icons/DownArrow";
import Link from "next/link";

type Props = {
  params: Promise<{ projectName: string }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
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

export default async function ProjectPage(props: Props) {
  const params = await props.params;
  const { projectName } = params;
  const projectInfo = projectsData.find((project) => project.slug == projectName);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-3xl">
          {projectInfo?.title} / {projectInfo?.year}{" "}
          {projectInfo?.externalUrl && (
            <Link href={projectInfo?.externalUrl} className="ml-2 inline-flex transition-transform hover:-translate-y-0.5 hover:translate-x-0.5">
              <DownArrow className="h-8 w-8 translate-y-1 -rotate-[135deg] stroke-whiteish stroke-2" />
            </Link>
          )}
        </h3>
        <h4 className="text-sm">{projectInfo?.content?.subtitle}</h4>
      </div>

      <div className="flex flex-wrap gap-4 border-t border-t-whiteish pt-5">
        {projectInfo?.content?.tags?.map((tag) => (
          <p key={tag} className="rounded-full bg-whiteish px-3 py-0.5 text-xs font-medium text-blackish">
            {tag}
          </p>
        ))}
      </div>

      <section className="max-w-prose space-y-6 text-balance">{projectInfo?.content?.description}</section>

      <div className="grid gap-4 md:grid-cols-3">
        {projectInfo?.content?.contentImagesSrc?.map((imageSrc, index) => (
          <Image src={imageSrc} key={`${imageSrc + index}`} alt={`${projectInfo.title}&apos;s image ${index + 1}`} width={500} height={281} />
        ))}
      </div>
    </div>
  );
}
