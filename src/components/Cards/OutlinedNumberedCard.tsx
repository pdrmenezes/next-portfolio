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
    <div className={`flex flex-col items-center justify-center gap-x-4 rounded-xl border p-4 ${borderColor} w-1/2 ${textColor}`}>
      <div className="grid h-full grid-cols-2 gap-2">
        <div className="flex flex-col justify-between">
          <div className={`border ${borderColor} w-2/5 rounded-full text-center`}>{tag}</div>
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
