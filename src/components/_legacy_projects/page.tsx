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

export default function LegacyProjectsPage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-60 w-full gap-x-4">
        <MainCard />
        <SkinnyCard />
      </div>
      <div className="flex h-60 w-full gap-x-4">
        <OutlinedCard />
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="01" bgColor="bg-whiteish" />
      </div>
      <div className="flex h-60 w-full gap-x-4">
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="03" bgColor="bg-khaki" />
        <NoOutlineCard />
      </div>
      <div className="flex h-60 w-full gap-x-4">
        <div className="flex w-1/2 flex-col items-center justify-center gap-4 p-2 ">
          <HalfOutlinedNumberedCard />
          <HalfOutlinedNumberedCard />
        </div>
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="06" bgColor="bg-lightgreen" />
      </div>
      <div className="flex h-60 w-full gap-x-4">
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
