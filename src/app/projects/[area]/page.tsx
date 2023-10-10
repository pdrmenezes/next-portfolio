import { WheelCarouselWrapper } from "../components/carousel/WheelCarouselWrapper";
import { projectsData } from "./projectsData";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { area: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const area = params.area;
  const parentTitle = (await parent).title?.absolute || "";
  const parentDescription = (await parent).description || "";

  return {
    title: `${area[0].toLocaleUpperCase() + area.substring(1)} ${parentTitle}`,
    description: parentDescription,
  };
}
export default function AreaPage({ params }: Props) {
  const { area } = params;

  return (
    <>
      <WheelCarouselWrapper
        projects={
          area === "front-end" ? projectsData["front-end"] : area === "design" ? projectsData["design"] : area === "35mm" ? projectsData["35mm"] : []
        }
      />
    </>
  );
}
