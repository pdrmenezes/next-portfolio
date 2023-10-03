import Image from "next/image";
import blackTriangle from "@/assets/icons/black_triangle.svg";

export default function MainCard({
  mainText = "Big Beautiful Title Text in or PT/EN",
  bgColor = "bg-whiteish",
  textColor = "text-blackish",
  showIcon = true,
}: {
  mainText?: string;
  bgColor?: string;
  textColor?: string;
  showIcon?: boolean;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 rounded-xl ${bgColor} ${textColor} w-full`}>
      <h2 className="text-3xl ">{mainText}</h2>
      {showIcon ? <Image className="-translate-y-0.5" src={blackTriangle} alt="triangle" width={32} height={32} /> : null}
    </div>
  );
}
