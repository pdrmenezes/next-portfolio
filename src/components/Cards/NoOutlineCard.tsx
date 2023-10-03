import Image from "next/image";
import whiteTriangle from "@/assets/icons/white_triangle.svg";

export default function NoOutlineCard() {
  return (
    <div className="relative flex w-1/2 items-center justify-center gap-4 rounded-xl p-4 text-whiteish">
      <div className="absolute inset-10">
        <h2 className="text-xl ">Medium</h2>
        <h2 className="text-xl ">2-lined text</h2>
      </div>
      <Image className="-translate-y-0.5" src={whiteTriangle} alt="triangle" width={120} height={120} />
    </div>
  );
}
