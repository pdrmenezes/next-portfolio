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
    <div className={`flex flex-col p-4 gap-x-4 items-center justify-center rounded-xl ${bgColor} w-1/2 ${textColor}`}>
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="flex flex-col justify-between">
          <div className={`border ${tagBorderColor} rounded-full w-2/5 text-center`}>{tag}</div>
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
