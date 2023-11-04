import { Dispatch, SetStateAction } from "react";
import { TProjectData } from "../data/projectsData";
import Link from "next/link";

interface ProjectProps {
  projectIndex: number;
  project: TProjectData;
  setProjectPopover: Dispatch<SetStateAction<{ isActive: boolean; projectIndex: number }>>;
}

export function Project({ projectIndex, project, setProjectPopover }: ProjectProps) {
  const formattedRoles = project.roles.length > 1 ? project.roles.join(" / ") : project.roles[0];

  return (
    <Link
      className="group flex w-full items-center justify-between border-t border-b-whiteish border-t-whiteish px-10 py-20 last:border-b"
      onMouseEnter={() => setProjectPopover({ isActive: true, projectIndex: projectIndex })}
      onMouseLeave={() => setProjectPopover({ isActive: false, projectIndex: projectIndex })}
      href={`/projects/${project.slug}`}
    >
      <h4 className="transition-transform duration-500 group-hover:-translate-x-4">{project.title}</h4>
      <div className="flex gap-10 transition-transform duration-500 group-hover:translate-x-4">
        <h4 className="sr-only sm:not-sr-only">{project.year}</h4>
        <h4>{formattedRoles}</h4>
      </div>
    </Link>
  );
}
