interface FilledNumberedCardProps {
  tag?: string;
  paragraph?: string;
  number?: string;
  bgColor?: string;
  textColor?: string;
  tagBorderColor?: string;
}

export default function FilledNumberedCard({
  tag = "tag",
  paragraph = "small cute paragraph with 2 lines of text, maybe?",
  number = "01",
  bgColor = "bg-lightgreen",
  textColor = "text-blackish",
  tagBorderColor = "border-blackish",
}: FilledNumberedCardProps) {
  return (
    <div className={`flex  flex-col items-center justify-center gap-x-4 rounded-xl p-4 ${bgColor} w-1/2 ${textColor}`}>
      <div className="grid h-full grid-cols-2 gap-2">
        <div className="flex flex-col justify-between">
          <div className={`border ${tagBorderColor} w-2/5 rounded-full text-center`}>{tag}</div>
          <div className="text-7xl">{number}</div>
        </div>
        <div className="">
          <div className="">
            {paragraph}
            {/* Small cute paragraph with <span className="font-semibold"> variable</span> font-weight */}
          </div>
        </div>
      </div>
    </div>
  );
}
