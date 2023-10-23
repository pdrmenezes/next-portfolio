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
    <div className="flex h-[409px] w-[300px] flex-col items-center justify-between gap-4 rounded-2xl bg-whiteish p-3">
      <div className={`h-full w-full rounded-lg ${squareColor}`}></div>
      <div className="mr-auto flex w-3/4 flex-col items-start gap-1">
        {tag && <p className="rounded-full px-3 py-0.5 text-xs font-medium text-blackish outline outline-1 outline-blackish">{tag}</p>}
        <h4 className="self-start text-2xl font-bold text-blackish">{mainText}</h4>
        <p className="text-sm font-medium text-blackish">{paragraph}</p>
        <Link href={url ?? ""} className="w-full">
          <button className="w-fit rounded-full bg-blackish px-4 py-1 font-medium ">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
}
