import Image from "next/image";
import whiteTriangle from "./white_triangle.svg";
import blackTriangle from "./black_triangle.svg";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <div className="flex items-center justify-center gap-4 rounded-xl bg-whiteish text-blackish w-11/12">
          <h2 className="text-3xl ">Big Beautiful Title Text in or PT/EN</h2>
          <Image className="-translate-y-0.5" src={blackTriangle} alt="triangle" width={32} height={32} />
        </div>
        <div className="flex flex-col-reverse gap-6 items-center justify-center rounded-xl bg-orange-500 w-1/12">
          <p className="-rotate-90 tracking-widest uppercase">Two Words</p>
          <Image src={whiteTriangle} alt="triangle" width={16} height={16} />
        </div>
      </div>
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <div className="relative flex items-center justify-center gap-4 p-4 rounded-xl  text-whiteish w-1/2">
          <div className="absolute inset-10">
            <h2 className="text-xl ">Big Beautiful</h2>
            <h2 className="text-xl ">2-line text</h2>
          </div>
          <Image className="-translate-y-0.5" src={whiteTriangle} alt="triangle" width={120} height={120} />
        </div>
        <div className="flex flex-col p-2 gap-x-4 items-center justify-center rounded-xl bg-whiteish w-1/2 text-blackish">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="flex flex-col justify-between">
              <div className="border border-blackish rounded-full w-2/5 text-center">Tag</div>
              <div className="text-7xl">01</div>
            </div>
            <div className="">
              <div className="">
                Small cute paragraph with <span className="font-semibold"> variable</span> font-weight
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <div className="flex flex-col p-2 gap-x-4 items-center justify-center rounded-xl bg-[khaki] w-1/2 text-blackish">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="flex flex-col justify-between">
              <div className="border border-blackish rounded-full w-2/5 text-center">Tag</div>
              <div className="text-7xl">02</div>
            </div>
            <div className="">
              <div className="">
                Small cute paragraph with <span className="font-semibold"> variable</span> font-weight
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-4 p-4 rounded-xl  text-whiteish w-1/2">
          <div className="absolute inset-10">
            <h2 className="text-xl ">Big Beautiful</h2>
            <h2 className="text-xl ">2-line text</h2>
          </div>
          <Image className="-translate-y-0.5" src={whiteTriangle} alt="triangle" width={120} height={120} />
        </div>
      </div>
      <div className="flex gap-x-4 rounded-xl w-full h-60">
        <div className="flex flex-col p-2 gap-4 items-center justify-center rounded-xl w-1/2 ">
          <div className="grid grid-cols-2 items-center gap-2 h-full p-2 border border-whiteish rounded-xl">
            <div className="text-7xl">03</div>
            <div className="">
              Small cute paragraph with <span className="font-semibold"> variable</span> font-weight
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2 h-full p-2 border border-whiteish rounded-xl">
            <div className="text-7xl">04</div>
            <div className="">
              Small cute paragraph with <span className="font-semibold"> variable</span> font-weight
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-4 p-4 rounded-xl border border-whiteish text-whiteish w-1/2">
          <div className="absolute inset-10">
            <h2 className="text-xl ">Big Beautiful</h2>
            <h2 className="text-xl ">2-line text</h2>
          </div>
          <Image className="-translate-y-0.5" src={whiteTriangle} alt="triangle" width={120} height={120} />
        </div>
      </div>
    </div>
  );
}
