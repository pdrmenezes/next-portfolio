"use client";
import BackToTop from "@/components/BackToTop";
import MainCard from "@/components/Cards/MainCard";
import SkinnyCard from "@/components/Cards/SkynnyCard";
import OutlinedCard from "@/components/Cards/OutlinedCard";
import FilledNumberedCard from "@/components/Cards/FilledNumberedCard";
import NoOutlineCard from "@/components/Cards/NoOutlineCard";
import HalfOutlinedNumberedCard from "@/components/Cards/HalfOutlinedNumberedCard";
import OutlinedNumberedCard from "@/components/Cards/OutlinedNumberedCard";
import FilledCard from "@/components/Cards/FilledCard";
import { usePathname } from "next/navigation";

export default function AreaPage({ params }: { params: { area: string } }) {
  const { area } = params;
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-x-4 w-full h-60">
        <MainCard />
        <SkinnyCard />
      </div>
      <div className="flex gap-x-4 w-full h-60">
        <OutlinedCard />
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="01" bgColor="bg-whiteish" />
      </div>
      <div className="flex gap-x-4 w-full h-60">
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="03" bgColor="bg-khaki" />
        <NoOutlineCard />
      </div>
      <div className="flex gap-x-4 w-full h-60">
        <div className="flex flex-col p-2 gap-4 items-center justify-center w-1/2 ">
          <HalfOutlinedNumberedCard />
          <HalfOutlinedNumberedCard />
        </div>
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="06" bgColor="bg-lightgreen" />
      </div>
      <div className="flex gap-x-4 w-full h-60">
        <FilledCard />
        <OutlinedNumberedCard
          tag="tag"
          paragraph="small cute paragraph with 2 lines of text, maybe?"
          number="06"
          textColor="text-whiteish"
          borderColor="border-whiteish"
        />
      </div>
      <BackToTop pathname={pathname} />
    </div>
  );
}
