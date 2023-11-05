import Image from "next/image";
import { DownArrow } from "@/assets/icons/DownArrow";
import pedroMenezesPicture from "@/assets/images/about-pedro-menezes.webp";

export const metadata = {
  title: "About | Pedro Menezes",
  description:
    "i’m passionate about creatively combining skills to solve problems and drive social and environmental change, especially by empowering people through knowledge and sense of community.",
};

export default function AboutPage() {
  return (
    <>
      <div className="flex h-full flex-col-reverse justify-center gap-4 md:flex-row md:justify-start">
        <div className="flex w-full flex-col md:w-1/2">
          <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">about</h1>
          <p className="text-md mb-10 font-medium md:text-xl">
            i’m passionate about creatively combining skills to solve problems and drive social and environmental change, especially by empowering
            people through knowledge and sense of community.
          </p>
          <div className="flex gap-2 md:gap-8">
            <a
              href="https://drive.google.com/file/d/128Y41C1pbz46PeiHa4urs_tOPwP-X7vZ/view?usp=sharing"
              className="group relative flex items-center gap-3 p-2 sm:p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-whiteish">
                <DownArrow className="h-6 w-6 stroke-blackish stroke-2" />
              </div>
              <p className="text-sm font-medium sm:text-base">english cv</p>
              <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-0 top-0  h-3 w-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
                <div className="absolute right-0 top-0 h-3 w-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
                <div className="absolute bottom-0 right-0 h-3 w-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
                <div className="absolute bottom-0 left-0 h-3 w-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1jrV_vxCpDdehAUPmI1s48PqWkIGaSx2r/view?usp=sharing"
              className="group relative flex items-center gap-3 p-2 sm:p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-whiteish">
                <DownArrow className="h-6 w-6 stroke-blackish stroke-2" />
              </div>
              <p className="text-sm font-medium sm:text-base">portuguese cv</p>
              <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-0 top-0  h-3 w-3 border border-b-0 border-l-2 border-r-0 border-t-2 border-whiteish"></div>
                <div className="absolute right-0 top-0 h-3 w-3 border border-b-0 border-l-0 border-r-2 border-t-2 border-whiteish"></div>
                <div className="absolute bottom-0 right-0 h-3 w-3 border border-b-2 border-l-0 border-r-2 border-t-0 border-whiteish"></div>
                <div className="absolute bottom-0 left-0 h-3 w-3 border border-b-2 border-l-2 border-r-0 border-t-0 border-whiteish"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center self-center">
          <Image src={pedroMenezesPicture} alt="Pedro's profile picture" style={{ maxWidth: "100%", height: "auto" }} width={392} height={441} />
        </div>
      </div>
    </>
  );
}
