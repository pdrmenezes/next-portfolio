import { Dispatch, SetStateAction } from "react";
import { TProjectData } from "../data/projectsData";
import Link from "next/link";
import { DownArrow } from "@/assets/icons/DownArrow";

interface ProjectProps {
  projectIndex: number;
  project: TProjectData;
  setProjectPopover: Dispatch<SetStateAction<{ isActive: boolean; projectIndex: number }>>;
  area: string | undefined;
}

export function Project({ projectIndex, project, setProjectPopover, area }: ProjectProps) {
  const formattedRoles = project.roles.length > 1 ? project.roles.join(" / ") : project.roles[0];

  return (
    <Link
      className="group flex w-full items-center justify-between gap-5 border-t border-b-whiteish border-t-whiteish px-2 py-5 last:border-b sm:px-10 sm:py-20"
      onMouseEnter={() => setProjectPopover({ isActive: true, projectIndex: projectIndex })}
      onMouseLeave={() => setProjectPopover({ isActive: false, projectIndex: projectIndex })}
      href={area ? `/projects/${area}/${project.slug}` : `/projects/${project.areas[0]}/${project.slug}`}
    >
      <h4 className="w-1/2 transition-transform duration-500 group-hover:-translate-x-4 sm:w-auto">{project.title}</h4>
      <div className="flex w-1/2 items-center justify-center gap-4 transition-transform duration-500 group-hover:translate-x-4 sm:w-auto sm:gap-10">
        <h4>{formattedRoles}</h4>
        <h4 className="sr-only sm:not-sr-only">{project.year}</h4>
        <span className="not-sr-only sm:sr-only">
          <DownArrow className="h-6 w-6 -rotate-90 stroke-whiteish stroke-2" />
        </span>
      </div>
    </Link>
  );
}
