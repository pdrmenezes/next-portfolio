import Image from "next/image";
import whiteTriangle from "@/app/white_triangle.svg";
import blackTriangle from "@/app/black_triangle.svg";

export default function FilledCard() {
  return (
    <div className="relative flex items-center justify-center gap-4 p-4 rounded-xl  text-blackish bg-whiteish w-1/2">
      <div className="absolute inset-10">
        <h2 className="text-xl ">Medium</h2>
        <h2 className="text-xl ">2-lined text</h2>
      </div>
      <Image className="-translate-y-0.5" src={blackTriangle} alt="triangle" width={120} height={120} />
    </div>
  );
}
