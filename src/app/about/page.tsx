import { DownArrow } from "@/assets/icons/DownArrow";
import { Curriculum } from "@/components/curriculum";

export const metadata = {
  title: "About | Pedro Menezes",
  description:
    "i’m passionate about creatively combining skills to solve problems and drive social and environmental change, especially by empowering people through knowledge and sense of community.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mb-8 flex w-full flex-col md:w-2/3">
        <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">about</h1>
        <p className="mb-10 font-medium md:text-xl">
          i’m passionate about creatively combining skills to solve problems and drive social and environmental change, especially by empowering
          people through knowledge and sense of community.
        </p>
        <div className="flex gap-2 md:gap-8">
          <a
            href="https://drive.google.com/file/d/128Y41C1pbz46PeiHa4urs_tOPwP-X7vZ/view?usp=sharing"
            className="group relative flex items-center gap-3 p-3 sm:p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-whiteish flex size-6 items-center justify-center rounded-full sm:size-8">
              <DownArrow className="stroke-blackish size-4 stroke-2 sm:size-6" />
            </div>
            <p className="text-sm font-medium sm:text-base">english cv</p>
            <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border-whiteish absolute top-0 left-0 size-3 border border-t-2 border-r-0 border-b-0 border-l-2"></div>
              <div className="border-whiteish absolute top-0 right-0 size-3 border border-t-2 border-r-2 border-b-0 border-l-0"></div>
              <div className="border-whiteish absolute right-0 bottom-0 size-3 border border-t-0 border-r-2 border-b-2 border-l-0"></div>
              <div className="border-whiteish absolute bottom-0 left-0 size-3 border border-t-0 border-r-0 border-b-2 border-l-2"></div>
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1jrV_vxCpDdehAUPmI1s48PqWkIGaSx2r/view?usp=sharing"
            className="group relative flex items-center gap-3 p-3 sm:p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-whiteish flex size-6 items-center justify-center rounded-full sm:size-8">
              <DownArrow className="stroke-blackish size-4 stroke-2 sm:size-6" />
            </div>
            <p className="text-sm font-medium sm:text-base">portuguese cv</p>
            <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="border-whiteish absolute top-0 left-0 size-3 border border-t-2 border-r-0 border-b-0 border-l-2"></div>
              <div className="border-whiteish absolute top-0 right-0 size-3 border border-t-2 border-r-2 border-b-0 border-l-0"></div>
              <div className="border-whiteish absolute right-0 bottom-0 size-3 border border-t-0 border-r-2 border-b-2 border-l-0"></div>
              <div className="border-whiteish absolute bottom-0 left-0 size-3 border border-t-0 border-r-0 border-b-2 border-l-2"></div>
            </div>
          </a>
        </div>
      </div>
      <Curriculum />
    </>
  );
}
