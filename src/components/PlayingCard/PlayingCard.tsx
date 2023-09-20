export default function PlayingCard({ squareColor = "bg-lightgreen" }: { squareColor?: string }) {
  return (
    <div className="flex flex-col items-center justify-between p-3 h-[409px] w-[300px] bg-whiteish rounded-2xl">
      <div className={`h-[229px] w-[276px] rounded-lg ${squareColor}`}></div>
      <div className="flex flex-col items-start mr-auto gap-1 w-3/4">
        <h4 className="self-start font-bold text-blackish text-2xl">Medium 2-lined text</h4>
        <p className="text-sm text-blackish">small paragraphed text as description for the card</p>
        <button className="bg-blackish rounded-full w-1/2 px-3 py-1 font-medium ">try</button>
      </div>
    </div>
  );
}
