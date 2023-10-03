"use client";
import { WheelCarouselWrapper } from "./components/carousel/WheelCarouselWrapper";
import { projectsData } from "./[area]/projectsData";

export default function ProjectsPage() {
  return <WheelCarouselWrapper projects={[...projectsData["front-end"], ...projectsData["design"], ...projectsData["35mm"]]} />;
}
