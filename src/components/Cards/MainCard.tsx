import Image from "next/image";
import blackTriangle from "@/app/black_triangle.svg";

export default function MainCard() {
  return (
    <div className="flex items-center justify-center gap-4 rounded-xl bg-whiteish text-blackish w-11/12">
      <h2 className="text-3xl ">Big Beautiful Title Text in or PT/EN</h2>
      <Image className="-translate-y-0.5" src={blackTriangle} alt="triangle" width={32} height={32} />
    </div>
  );
}
