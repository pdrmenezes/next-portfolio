"use client";
import { MouseEvent, useState } from "react";
import { Project } from "./components/Project";
import { ProjectPopover } from "./components/ProjectPopover";
import { projectsData } from "./data/projectsData";
import { useSearchParams } from "next/navigation";

export function ProjectsList2() {
  const searchParams = useSearchParams();
  const [projectPopover, setProjectPopover] = useState({ isActive: false, projectIndex: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const area = searchParams.get("area");

  function handleMouseMove(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const { clientX, clientY } = event;
    const { left, top } = event.currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setCursorPosition({ x, y });
  }

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      {projectsData
        .filter((project) => project.areas.includes(area || ""))
        .map((project, index) => (
          <Project key={project.title} projectIndex={index} project={project} setProjectPopover={setProjectPopover} />
        ))}
      <ProjectPopover projectPopover={projectPopover} projectsData={projectsData} cursorPosition={cursorPosition} />
    </div>
  );
}
