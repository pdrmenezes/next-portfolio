"use client";
import { MouseEvent, useState } from "react";
import { Project } from "./Project";
import { ProjectPopover } from "./ProjectPopover";
import { TProjectData } from "../../../data/projectsData";

export function ProjectsList({ projects }: { projects: TProjectData[] }) {
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
      {projects.map((project, index) => (
        <Project key={project.title} projectIndex={index} project={project} setProjectPopover={setProjectPopover} />
      ))}
      <ProjectPopover projectPopover={projectPopover} projectsData={projects} cursorPosition={cursorPosition} />
    </div>
  );
}
