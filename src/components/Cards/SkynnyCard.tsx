import Image from "next/image";
import whiteTriangle from "@/assets/icons/white_triangle.svg";

export default function SkinnyCard() {
  return (
    <div className="flex w-1/12 flex-col-reverse items-center justify-center gap-6 rounded-xl bg-orange-500">
      <p className="-rotate-90 uppercase tracking-widest">Two Words</p>
      <Image src={whiteTriangle} alt="triangle" width={16} height={16} />
    </div>
  );
}
