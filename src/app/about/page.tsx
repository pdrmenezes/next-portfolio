import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-y-6">
      <div className="w-3/5 flex flex-col gap-2 h-full justify-center">
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">about</h1>
        <h2 className="text-3xl">
          currently based in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 from-20% via-whiteish to-red-700">Mexico</span>
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 from-20% via-amber-400 to-emerald-700">Brazil</span> */}
        </h2>
        <p>
          i’m passionate about creatively combining skills to solve problems and drive social and environmental change, especially by empowering
          people through knowledge and sense of community.
        </p>
        <div className="flex gap-4">
          <p className="cursor-pointer underline">english cv</p>
          <p className="cursor-pointer underline">portuguese cv</p>
        </div>
      </div>
      <div className="w-2/5">
        <Image src="/about-image.png" alt="Pedro's profile picture" width={350} height={350} />
      </div>
    </div>
  );
}
