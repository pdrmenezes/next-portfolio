import Image from "next/image";
import whiteTriangle from "@/assets/white_triangle.svg";
import blackTriangle from "@/assets/black_triangle.svg";

export default function FilledCard({ firstLine = "Medium", secondLine = "2-lined text" }: { firstLine?: string; secondLine?: string }) {
  return (
    <div className="relative flex items-center justify-center gap-4 p-4 rounded-xl  text-blackish bg-whiteish w-1/2">
      <div className="absolute inset-10">
        <h2 className="text-xl ">{firstLine}</h2>
        <h2 className="text-xl ">{secondLine}</h2>
      </div>
      <Image className="-translate-y-0.5" src={blackTriangle} alt="triangle" width={120} height={120} />
    </div>
  );
}
