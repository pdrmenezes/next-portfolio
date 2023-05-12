import MainCard from "@/components/MainCard";
import SkinnyCard from "@/components/SkynnyCard";
import BackToTop from "@/components/BackToTop";
import OutlinedCard from "@/components/OutlinedCard";
import FilledNumberedCard from "@/components/FilledNumberedCard";
import NoOutlineCard from "@/components/NoOutlineCard";
import HalfOutlinedNumberedCard from "@/components/HalfOutlinedNumberedCard";
import FilledCard from "@/components/FilledCard";
import OutlinedNumberedCard from "@/components/OutlinedNumberedCard";

export default function AreaPage({ params }: { params: { area: string } }) {
  const { area } = params;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <MainCard />
        <SkinnyCard />
      </div>
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <OutlinedCard />
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="01" bgColor="whiteish" />
      </div>
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="03" bgColor="[khaki]" />
        <NoOutlineCard />
      </div>
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <div className="flex flex-col p-2 gap-4 items-center justify-center rounded-xl w-1/2 ">
          <HalfOutlinedNumberedCard />
          <HalfOutlinedNumberedCard />
        </div>
        <FilledNumberedCard tag="tag" paragraph="small cute paragraph with 2 lines of text, maybe?" number="06" bgColor="[lightgreen]" />
      </div>
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <FilledCard />
        <OutlinedNumberedCard
          tag="tag"
          paragraph="small cute paragraph with 2 lines of text, maybe?"
          number="06"
          textColor="whiteish"
          borderColor="whiteish"
        />
      </div>
      <BackToTop page={area} />
    </div>
  );
}
