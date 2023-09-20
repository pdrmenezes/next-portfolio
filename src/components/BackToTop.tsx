import Image from "next/image";
import whiteTriangle from "@/assets/white_triangle.svg";
import Link from "next/link";

export default function BackToTop({ pathname }: { pathname: string }) {
  return (
    <Link href={`${pathname}`} className="flex justify-end gap-4 mt-4">
      <div className="flex flex-col">
        <p>back</p>
        <p>to top</p>
      </div>
      <Image src={whiteTriangle} alt="triangle" width={30} height={30} />
    </Link>
  );
}
