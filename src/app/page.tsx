import StaggeredText, { StaggeredTextProps } from "@/components/staggered-text/staggered-text";
import { calculateStaggerDelays } from "@/lib/calculate-staggered-delays";

export default function Home() {
  const lines: Omit<StaggeredTextProps, "delay">[] = [
    {
      text: "hi, i’m Pedro,",
      className: "text-[clamp(3rem,9vw,6rem)] font-bold",
      as: "h1",
    },
    {
      text: "a brazilian software developer",
      className: "text-[clamp(1.2rem,5vw,3.125rem)] font-medium",
      as: "h2",
    },
    {
      text: "currently based in Brasília",
      className: "text-[clamp(1.2rem,5vw,3.125rem)] font-medium",
      as: "h2",
    },
  ];

  const delays = calculateStaggerDelays(lines.map((line) => line.text));

  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {lines.map((line, i) => (
        <StaggeredText key={i} className={line.className} as={line.as} text={line.text} delay={delays[i]} />
      ))}
    </div>
  );
}
