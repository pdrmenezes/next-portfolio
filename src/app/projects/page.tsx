import { ProjectsList } from "@/components/ProjectsList/ProjectsList";
import { WheelCarouselWrapper } from "../../components/Carousels/WheelCarouselWrapper";
import { projectsData } from "./_[area]/projectsData";
import { ProjectsList2 } from "@/components/ProjectsList2/ProjectsList2";

export default function ProjectsPage() {
  return (
    <>
      {/* <ProjectsList /> */}
      <ProjectsList2 />
      {/* <WheelCarouselWrapper projects={[...projectsData["front-end"], ...projectsData["design"], ...projectsData["35mm"]]} /> */}
    </>
  );
}
