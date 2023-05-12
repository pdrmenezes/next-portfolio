export default function Home() {
  return (
    <div className="flex flex-col gap-2 h-full justify-center">
      <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold">hi, i’m Pedro,</h1>
      <div>
        <h2 className="text-[clamp(1.5rem,5vw,3.125rem)] font-medium">
          a brazilian <span className="underline underline-offset-8 cursor-pointer">front-end developer</span>{" "}
          <span className="cursor-pointer">-&gt;</span>
        </h2>
        <h2 className="text-[clamp(1.5rem,5vw,3.125rem)] font-medium">currently based in Mexico</h2>
      </div>
    </div>
  );
}
