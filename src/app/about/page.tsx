import Image from "next/image";
import { DownArrow } from "@/assets/icons/DownArrow";
import pedroMenezesPicture from "@/assets/images/about-pedro-menezes.png";

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
          {/* <h2 className="text-3xl font-medium">
          currently based in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 from-20% via-whiteish to-red-700">Mexico</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 from-20% via-amber-400 to-emerald-700">Brazil</span>
          </h2> */}
          <p className="text-md mb-10 font-medium md:text-xl">
            i’m passionate about creatively combining skills to solve problems and drive social and environmental change, especially by empowering
            people through knowledge and sense of community.
          </p>
          <div className="flex gap-4 md:gap-8">
            <a href="https://drive.google.com/file/d/128Y41C1pbz46PeiHa4urs_tOPwP-X7vZ/view?usp=sharing" className="group flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-whiteish group-hover:outline group-hover:outline-2 group-hover:outline-offset-4 group-hover:outline-whiteish">
                <DownArrow size={24} color="#333333" />
              </div>
              <p className="font-medium group-hover:underline group-hover:underline-offset-4">english cv</p>
            </a>
            <a href="https://drive.google.com/file/d/1jrV_vxCpDdehAUPmI1s48PqWkIGaSx2r/view?usp=sharing" className="group flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-whiteish group-hover:outline group-hover:outline-2 group-hover:outline-offset-4 group-hover:outline-whiteish">
                <DownArrow size={24} color="#333333" />
              </div>
              <p className="font-medium group-hover:underline group-hover:underline-offset-4">portuguese cv</p>
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
