"use client";
import FilledCard from "@/components/Cards/FilledCard";
import FilledNumberedCard from "@/components/Cards/FilledNumberedCard";
import OutlinedCard from "@/components/Cards/OutlinedCard";
import OutlinedNumberedCard from "@/components/Cards/OutlinedNumberedCard";
import PlayingCard from "@/components/PlayingCard/PlayingCard";
import Image from "next/image";
import MemoryLake from "@/assets/memory-lake.png";
import { Circle } from "./components/Circle";
import { WheelCarousel2 } from "./components/carousel/WheelCarousel2";
import { FromCenterCarousel } from "./components/carousel/FromCenterCarousel";
import { WheelCarousel1 } from "./components/carousel/WheelCarousel1";
import { CoverFlowCarousel } from "./components/carousel/CoverFlowCarousel";
import { WheelCarouselWrapper } from "./components/carousel/WheelCarouselWrapper";
import { projectsData } from "./[area]/projectsData";

export default function ProjectsPage() {
  return <WheelCarouselWrapper projects={[...projectsData["front-end"], ...projectsData["design"], ...projectsData["35mm"]]} />;
}
