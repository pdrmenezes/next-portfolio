import Image from "next/image";
import downArrow from "@/assets/icons/arrow.svg";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-4 h-full justify-center md:justify-start">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">about</h1>
          {/* <h2 className="text-3xl font-medium">
          currently based in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 from-20% via-whiteish to-red-700">Mexico</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 from-20% via-amber-400 to-emerald-700">Brazil</span>
          </h2> */}
          <p className="text-md md:text-xl font-medium mb-10">
            i’m passionate about creatively combining skills to solve problems and drive social and environmental change, especially by empowering
            people through knowledge and sense of community.
          </p>
          <div className="flex gap-8">
            <a href="https://drive.google.com/file/d/128Y41C1pbz46PeiHa4urs_tOPwP-X7vZ/view?usp=sharing" className="group">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center w-8 h-8 bg-whiteish rounded-full group-hover:outline group-hover:outline-2 group-hover:outline-whiteish group-hover:outline-offset-4">
                  <Image src={downArrow} alt="download english cv button" width={19} height={19} />
                </div>
                <p className="font-medium group-hover:underline group-hover:underline-offset-4">english cv</p>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1jrV_vxCpDdehAUPmI1s48PqWkIGaSx2r/view?usp=sharing" className="group">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center w-8 h-8 bg-whiteish rounded-full group-hover:outline group-hover:outline-2 group-hover:outline-whiteish group-hover:outline-offset-4">
                  <Image src={downArrow} alt="download portuguese cv button" width={19} height={19} />
                </div>
                <p className="font-medium group-hover:underline group-hover:underline-offset-4">portuguese cv</p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center self-center">
          <Image src="/about-image.png" alt="Pedro's profile picture" style={{ maxWidth: "100%", height: "auto" }} width={392} height={441} />
        </div>
      </div>
    </>
  );
}
