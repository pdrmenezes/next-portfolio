import PlayingCard from "@/components/PlayingCard/PlayingCard";

export const projectsData = {
  "front-end": [
    <PlayingCard
      key={1}
      squareColor="bg-[lightblue]"
      mainText="Memory Lake"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
      url="https://www.memorylake.cc"
    />,
    <PlayingCard
      key={2}
      squareColor="bg-[lightblue]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={3}
      squareColor="bg-[lightblue]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={4}
      squareColor="bg-[lightblue]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
  ],
  design: [
    <PlayingCard
      key={5}
      squareColor="bg-[lightgreen]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={6}
      squareColor="bg-[lightgreen]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={6}
      squareColor="bg-[lightgreen]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={6}
      squareColor="bg-[lightgreen]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
  ],
  "35mm": [
    <PlayingCard
      key={7}
      squareColor="bg-[lightpink]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={8}
      squareColor="bg-[lightpink]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={8}
      squareColor="bg-[lightpink]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={8}
      squareColor="bg-[lightpink]"
      mainText="Memory Lake App"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
  ],
} as const;
