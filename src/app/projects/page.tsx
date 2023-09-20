import FilledCard from "@/components/Cards/FilledCard";
import FilledNumberedCard from "@/components/Cards/FilledNumberedCard";
import MainCard from "@/components/Cards/MainCard";
import OutlinedCard from "@/components/Cards/OutlinedCard";
import OutlinedNumberedCard from "@/components/Cards/OutlinedNumberedCard";
import PlayingCard from "@/components/PlayingCard/PlayingCard";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-5">
      <div className="flex gap-x-4 w-full h-60">
        <FilledNumberedCard
          tag="memory lake"
          paragraph="data lakes and our memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present."
          number="01"
          bgColor="bg-[#0000FF]"
          textColor="text-whiteish"
          tagBorderColor="border-whiteish"
        />
        <FilledCard firstLine="Who's street" secondLine="is this?" />
      </div>
      <div className="flex gap-x-4 w-full h-60">
        <OutlinedNumberedCard
          tag=".000"
          paragraph="3 is the amount of decimal points in coordinates to be able to pinpoint a tree on a map (more specifically, a fruit tree)."
          number="03"
          textColor="text-whiteish"
          borderColor="border-whiteish"
        />
        <OutlinedCard firstLine="Motivational" secondLine="scroll" />
      </div>
      <div className="flex gap-10 w-full">
        <Image
          src="/memory-lake.png"
          width={531}
          height={300}
          alt="memorylake's home page"
          className="aspect-video w-3/5 rounded-lg outline-blue-500 outline"
        />
        <div className="w-2/5 flex flex-col gap-4 px-4 pt-4">
          <h3 className="text-2xl font-medium">Memory Lake</h3>
          <p className="leading-relaxed">
            In computer science, a data lake is a centralized repository designed to store, process, and secure large amounts of structured,
            semistructured, and unstructured data. It can store data in its native format and process any variety of it. It means data lakes and our
            memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present.
          </p>
        </div>
      </div>
      <div className="flex gap-10 w-full">
        <div className="w-2/5 flex flex-col gap-4 px-4 pt-4">
          <h3 className="text-2xl font-medium">Memory Lake</h3>
          <p className="leading-relaxed">
            In computer science, a data lake is a centralized repository designed to store, process, and secure large amounts of structured,
            semistructured, and unstructured data. It can store data in its native format and process any variety of it. It means data lakes and our
            memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present.
          </p>
        </div>
        <Image
          src="/memory-lake.png"
          width={531}
          height={300}
          alt="memorylake's home page"
          className="aspect-video w-3/5 rounded-lg outline-blue-500 outline"
        />
      </div>
      <div className="flex w-[60vw] mx-auto justify-center flex-wrap gap-4">
        <PlayingCard squareColor="bg-lightgreen" />
        <PlayingCard squareColor="bg-lightpink" />
        <PlayingCard squareColor="bg-lightblue" />
        <PlayingCard squareColor="bg-lightsalmon" />
        <PlayingCard squareColor="bg-khaki" />
        <PlayingCard squareColor="bg-lightsteelblue" />
      </div>
    </div>
  );
}
