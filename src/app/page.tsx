import Link from "next/link";
import { DownArrow } from "@/assets/icons/DownArrow";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">hi, i’m Pedro,</h1>
      <div className="w-fit">
        <h2 className="text-[clamp(1.2rem,5vw,3.125rem)] font-medium">
          a brazilian{" "}
          <Link href={"/projects"} className="transition-all hover:tracking-wide">
            <span className="cursor-pointer underline underline-offset-8">software developer</span>
            <span className="cursor-pointer"> ‣</span>
          </Link>{" "}
        </h2>
        <h2 className="text-[clamp(1.2rem,5vw,3.125rem)] font-medium">currently based in Mexico</h2>
      </div>
    </div>
  );
}
