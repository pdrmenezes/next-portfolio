import PlayingCard from "@/components/Cards/PlayingCard";

export const projectsData = {
  "front-end": [
    <PlayingCard
      key={1}
      squareColor="bg-[lightblue]"
      tag="front-end"
      mainText="Memory Lake"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
      url="https://www.memorylake.cc"
    />,
    <PlayingCard
      key={2}
      squareColor="bg-[lightpink]"
      tag="front-end"
      mainText="Animated words"
      paragraph="freakazoid?"
      buttonText="try out"
      url="https://pdrmenezes.github.io/scroll_animation-with-gsap/"
    />,

    <PlayingCard
      key={3}
      squareColor="bg-[lightgreen]"
      tag="front-end"
      mainText="Move your mouse"
      paragraph="and think of an airport"
      buttonText="try out"
      url="https://pdrmenezes.github.io/blured-mousetrail-effect-with-animated-text/"
    />,
    <PlayingCard
      key={4}
      squareColor="bg-[khaki]"
      tag="front-end"
      mainText="Pointer accessibility"
      paragraph="thinking on ways to improve accesibility"
      buttonText="try out"
      url="https://pdrmenezes.github.io/Mouse-Trailing-Interactive-Mouse-Icons-w-CSS-JS/"
    />,
    <PlayingCard
      key={5}
      squareColor="bg-[lightsteelblue]"
      tag="front-end"
      mainText="A wordle-like game"
      paragraph="reeeal-alike"
      buttonText="try out"
      url="https://pdrmenezes.github.io/Wordle-Like-HTML-CSS-JS-/"
    />,
    <PlayingCard
      key={6}
      squareColor="bg-[lightyellow]"
      tag="front-end"
      mainText="Light in dark corners"
      paragraph="using JS to light up dark corners"
      buttonText="try out"
      url="https://pdrmenezes.github.io/CSS_JS_lit-up-cards-with-css-and-js/"
    />,
    <PlayingCard
      key={7}
      squareColor="bg-[lightsalmon]"
      tag="front-end"
      mainText="Google's Dino Demo"
      paragraph="when an aspiring software developer tries"
      buttonText="try out"
      url="https://pdrmenezes.github.io/JS_Dino_Game/"
    />,
  ],
  design: [
    <PlayingCard
      key={8}
      squareColor="bg-[lightblue]"
      tag="design"
      mainText="This very website :)"
      paragraph="made by yours truly"
      buttonText="already trying out"
      url="https://pdrmenezes.com"
    />,
    <PlayingCard
      key={9}
      squareColor="bg-[lightgreen]"
      tag="design"
      mainText="Memory Lake"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={10}
      squareColor="bg-[lightgreen]"
      tag="design"
      mainText="Memory Lake"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
    <PlayingCard
      key={11}
      squareColor="bg-[lightgreen]"
      tag="design"
      mainText="Memory Lake"
      paragraph="a place for your memories to meet you"
      buttonText="try out"
    />,
  ],
  "35mm": [
    <PlayingCard
      key={12}
      squareColor="bg-[whiteish]"
      tag="35mm"
      mainText="Coming Soon"
      paragraph="still researching a nice way to display them"
      // paragraph="feel free to use them (but please hit me up first)"
      buttonText="try out"
    />,
    // <PlayingCard
    //   key={13}
    //   squareColor="bg-[lightpink]"
    //   mainText="Memory Lake"
    //   paragraph="a place for your memories to meet you"
    //   buttonText="try out"
    // />,
    // <PlayingCard
    //   key={14}
    //   squareColor="bg-[lightpink]"
    //   mainText="Memory Lake"
    //   paragraph="a place for your memories to meet you"
    //   buttonText="try out"
    // />,
    // <PlayingCard
    //   key={15}
    //   squareColor="bg-[lightpink]"
    //   mainText="Memory Lake"
    //   paragraph="a place for your memories to meet you"
    //   buttonText="try out"
    // />,
  ],
} as const;
