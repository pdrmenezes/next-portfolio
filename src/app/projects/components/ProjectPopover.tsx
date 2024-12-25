import Image from "next/image";
import { TProjectData } from "@/data/projectsData";
import { motion } from "motion/react";

interface ProjectPopoverProps {
  projectPopover: {
    isActive: boolean;
    projectIndex: number;
  };
  projectsData: TProjectData[];
  cursorPosition: {
    x: number;
    y: number;
  };
}

export function ProjectPopover({ projectPopover, projectsData, cursorPosition }: ProjectPopoverProps) {
  const { isActive, projectIndex } = projectPopover;

  const openPopoverAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      top: cursorPosition.y,
      left: cursorPosition.x,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
        top: {
          type: "spring",
          damping: 15,
          mass: 0.1,
          stiffness: 100,
        },
        left: {
          type: "spring",
          damping: 15,
          mass: 0.1,
          stiffness: 100,
        },
      },
    },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
  };

  return (
    <motion.div
      id="popoverContainer"
      className="pointer-events-none absolute left-1/2 top-1/2 flex h-60 w-80 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden"
      variants={openPopoverAnimation}
      initial="initial"
      animate={isActive ? "open" : "closed"}
    >
      <div
        id="popoverSlider"
        className="absolute h-full w-full transition-[]"
        // transition from: https://easings.net/
        style={{ top: `${-100 * projectIndex}%`, transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)" }}
      >
        {projectsData.map((project, index) => (
          <div
            id="popover"
            key={project.title}
            style={{ backgroundColor: `${project.popoverBgColor}` }}
            className="flex h-full w-full items-center justify-center"
          >
            <Image src={`/projects/images/${project.popoverImageSrc}`} alt={project.title} width={280} height={0} className="h-auto" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
