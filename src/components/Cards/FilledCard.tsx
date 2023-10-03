import Image from "next/image";
import blackTriangle from "@/assets/icons/black_triangle.svg";

export default function FilledCard({ firstLine = "Medium", secondLine = "2-lined text" }: { firstLine?: string; secondLine?: string }) {
  return (
    <div className="relative flex w-1/2 items-center justify-center gap-4 rounded-xl  bg-whiteish p-4 text-blackish">
      <div className="absolute inset-10">
        <h2 className="text-xl ">{firstLine}</h2>
        <h2 className="text-xl ">{secondLine}</h2>
      </div>
      <Image className="-translate-y-0.5" src={blackTriangle} alt="triangle" width={120} height={120} />
    </div>
  );
}
