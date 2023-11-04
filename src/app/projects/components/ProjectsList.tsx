"use client";
import { MouseEvent, useState } from "react";
import { Project } from "./Project";
import { ProjectPopover } from "./ProjectPopover";
import { TProjectData } from "../data/projectsData";

export function ProjectsList({ projects, area }: { projects: TProjectData[] | []; area?: string | undefined }) {
  const [projectPopover, setProjectPopover] = useState({ isActive: false, projectIndex: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const { clientX, clientY } = event;
    const { left, top } = event.currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setCursorPosition({ x, y });
  }

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Project key={project.title} projectIndex={index} project={project} setProjectPopover={setProjectPopover} area={area || undefined} />
        ))
      ) : (
        <p>Sorry, I&apos;m still working on that. Kindly check back in a month or two</p>
      )}
      <ProjectPopover projectPopover={projectPopover} projectsData={projects} cursorPosition={cursorPosition} />
    </div>
  );
}
