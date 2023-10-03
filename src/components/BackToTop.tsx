import Image from "next/image";
import whiteTriangle from "@/assets/icons/white_triangle.svg";
import Link from "next/link";

export default function BackToTop({ pathname }: { pathname: string }) {
  return (
    <Link href={`${pathname}`} className="mt-4 flex justify-end gap-4">
      <div className="flex flex-col">
        <p>back</p>
        <p>to top</p>
      </div>
      <Image src={whiteTriangle} alt="triangle" width={30} height={30} />
    </Link>
  );
}
