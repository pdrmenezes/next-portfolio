import Link from "next/link";

export default function PlayingCard({
  squareColor = "bg-lightgreen",
  tag,
  mainText = "Medium 2-lined text",
  paragraph = "small paragraphed text as description for the card",
  buttonText = "try",
  url,
}: {
  squareColor?: string;
  tag?: "front-end" | "design" | "35mm";
  mainText?: string;
  paragraph?: string;
  buttonText?: string;
  url?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 justify-between p-3 h-[409px] w-[300px] bg-whiteish rounded-2xl">
      <div className={`h-full w-full rounded-lg ${squareColor}`}></div>
      <div className="flex flex-col items-start mr-auto gap-1 w-3/4">
        {tag && <p className="text-xs font-medium rounded-full px-3 py-0.5 text-blackish outline outline-1 outline-blackish">{tag}</p>}
        <h4 className="self-start font-bold text-blackish text-2xl">{mainText}</h4>
        <p className="text-sm font-medium text-blackish">{paragraph}</p>
        <Link href={url ?? ""} className="w-full">
          <button className="bg-blackish rounded-full w-fit px-4 py-1 font-medium ">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
}
