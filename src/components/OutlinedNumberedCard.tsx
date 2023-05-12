export default function OutlinedNumberedCard({
  tag,
  paragraph,
  number,
  textColor,
  borderColor,
}: {
  tag: string;
  paragraph: string;
  number: string;
  textColor: string;
  borderColor: string;
}) {
  return (
    <div className={`flex flex-col p-2 gap-x-4 items-center justify-center rounded-xl border border-${borderColor} w-1/2 text-${textColor}`}>
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="flex flex-col justify-between">
          <div className={`border border-${borderColor} rounded-full w-2/5 text-center`}>{tag}</div>
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
