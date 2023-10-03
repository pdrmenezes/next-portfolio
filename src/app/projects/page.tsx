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

export default function ProjectsPage() {
  return (
    // <div className="space-y-5">
    // <div className="relative h-[450px] border border-cyan-100 overflow-hidden" id="circle-carousel">
    // <Circle />
    //</div>
    <WheelCarousel1 />

    //   <div className="flex gap-x-4 w-full h-60">
    //     <FilledNumberedCard
    //       tag="memory lake"
    //       paragraph="data lakes and our memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present."
    //       number="01"
    //       bgColor="bg-[#0000FF]"
    //       textColor="text-whiteish"
    //       tagBorderColor="border-whiteish"
    //     />
    //     <FilledCard firstLine="Who's street" secondLine="is this?" />
    //   </div>
    //   <div className="flex gap-x-4 w-full h-60">
    //     <OutlinedNumberedCard
    //       tag=".000"
    //       paragraph="3 is the amount of decimal points in coordinates to be able to pinpoint a tree on a map (more specifically, a fruit tree)."
    //       number="03"
    //       textColor="text-whiteish"
    //       borderColor="border-whiteish"
    //     />
    //     <OutlinedCard firstLine="Motivational" secondLine="scroll" />
    //   </div>
    //   <div className="flex gap-10 w-full rounded-2xl border-2 border-whiteish p-6">
    //     <div className="w-3/5 flex relative justify-center items-center group">
    //       <Image
    //         src={MemoryLake}
    //         width={531}
    //         height={300}
    //         alt="memorylake's home page"
    //         className="aspect-[16/10]  rounded-lg outline-blue-500 outline group-hover:opacity-60 "
    //       />
    //       <h3 className="hidden text-2xl group-hover:block absolute ">Preview</h3>
    //     </div>
    //     <div className="w-2/5 flex flex-col gap-4 px-4 pt-4">
    //       <p className="px-10 py-1 rounded-full border-whiteish border-2 w-fit">app</p>

    //       <h3 className="text-4xl font-medium mt-3 leading-3">Memory Lake</h3>
    //       <h4 className="font-light">Next.js | Next Auth | Prisma | MongoDB</h4>
    //       <p className="leading-relaxed">
    //         In computer science, a data lake is a centralized repository designed to store, process, and secure large amounts of structured,
    //         semistructured, and unstructured data. It can store data in its native format and process any variety of it. It means data lakes and our
    //         memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present.
    //       </p>
    //       <h3 className="text-6xl self-end mt-auto">03</h3>
    //     </div>
    //   </div>
    //   <div className="flex gap-10 w-full">
    //     <div className="w-2/5 flex flex-col gap-4 px-4 pt-4">
    //       <h3 className="text-2xl font-medium">Memory Lake</h3>
    //       <p className="leading-relaxed">
    //         In computer science, a data lake is a centralized repository designed to store, process, and secure large amounts of structured,
    //         semistructured, and unstructured data. It can store data in its native format and process any variety of it. It means data lakes and our
    //         memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present.
    //       </p>
    //     </div>
    //     <Image
    //       src={MemoryLake}
    //       width={531}
    //       height={300}
    //       alt="memorylake's home page"
    //       className="aspect-video w-3/5 rounded-lg outline-blue-500 outline"
    //     />
    //   </div>
    // </div>
  );
}
