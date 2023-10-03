"use client";
import { usePathname } from "next/navigation";
import { WheelCarouselWrapper } from "../components/carousel/WheelCarouselWrapper";
import { projectsData } from "./projectsData";

export default function AreaPage({ params }: { params: { area: string } }) {
  const { area } = params;
  const pathname = usePathname();

  return (
    <WheelCarouselWrapper
      projects={
        area === "front-end" ? projectsData["front-end"] : area === "design" ? projectsData["design"] : area === "35mm" ? projectsData["35mm"] : []
      }
    />
  );
}
