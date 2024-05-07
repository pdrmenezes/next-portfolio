import { Dispatch, SetStateAction } from "react";
import { TProjectData } from "@/data/projectsData";
import Link from "next/link";
import { DownArrow } from "@/assets/icons/DownArrow";

interface ProjectProps {
  projectIndex: number;
  project: TProjectData;
  setProjectPopover: Dispatch<SetStateAction<{ isActive: boolean; projectIndex: number }>>;
}

export function Project({ projectIndex, project, setProjectPopover }: ProjectProps) {
  const formattedRoles = project.roles.length > 1 ? project.roles.join(" / ") : project.roles[0];

  return (
    <Link
      className={`group flex w-full items-center border-t border-b-whiteish border-t-whiteish px-2 text-sm last:border-b sm:justify-between sm:gap-5 sm:px-10 sm:text-base ${
        project.featured ? "py-8 sm:py-20" : "py-2 sm:py-5"
      } ${!project.published ? "cursor-default" : ""}`}
      onMouseEnter={() => setProjectPopover({ isActive: true, projectIndex: projectIndex })}
      onMouseLeave={() => setProjectPopover({ isActive: false, projectIndex: projectIndex })}
      href={!project.published ? "" : project.externalUrlOnly ? project.externalUrl! : `/projects/${project.slug}`}
      target={project.externalUrlOnly ? "_blank" : "_self"}
    >
      <div className="flex flex-1 flex-col justify-between sm:flex-row">
        <h4 className="transition-transform duration-500 group-hover:-translate-x-4">{project.title}</h4>
        <div className="flex items-center gap-4 transition-transform duration-500 group-hover:translate-x-4 sm:justify-center sm:gap-10">
          <h4 className="text-xs text-neutral-400 sm:text-base sm:text-whiteish">{formattedRoles}</h4>
          <h4 className="sr-only sm:not-sr-only">{project.year}</h4>
        </div>
      </div>
      <span className="not-sr-only sm:sr-only">
        <DownArrow className={`h-4 w-4 ${project.externalUrlOnly ? "-rotate-[135deg]" : "-rotate-90"} stroke-whiteish stroke-2`} />
      </span>
    </Link>
  );
}
