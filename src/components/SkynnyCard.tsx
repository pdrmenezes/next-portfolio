import Image from "next/image";
import whiteTriangle from "@/app/white_triangle.svg";

export default function SkinnyCard() {
  return (
    <div className="flex flex-col-reverse gap-6 items-center justify-center rounded-xl bg-orange-500 w-1/12">
      <p className="-rotate-90 tracking-widest uppercase">Two Words</p>
      <Image src={whiteTriangle} alt="triangle" width={16} height={16} />
    </div>
  );
}
