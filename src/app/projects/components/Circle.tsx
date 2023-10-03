"use client";
import { WheelEvent, useRef, useState } from "react";
import { Card } from "./Card";

export function Circle() {
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  let tempTheta = 0;
  let animate: NodeJS.Timeout | null = null;
  const radius = 450;
  const options = [0, 1, 2, 3, 4, 5, 6, 7];
  // Math.PI / 4 gets us 8 positions around the circle since we're getting 45-degree intervals (which in radians is PI/4.
  // To make it more dynamic we can base the positions around the circle on the lenght of the options array
  // const theta = Math.PI / 4;
  const theta = (2 * Math.PI) / options.length;

  function handleScroll(event: WheelEvent<HTMLDivElement>) {
    animate && clearTimeout(animate);

    // console.log(event.deltaY);

    if (wheelRef.current) {
      wheelRef.current.style.transform = `translate(-50%, -50%) rotate(${rotationAngle * 0.2}deg)`;
    }
    animate = setTimeout(() => {
      setRotationAngle((prev) => prev + event.deltaY);
    }, 150);
  }

  return (
    <div
      ref={wheelRef}
      onWheel={handleScroll}
      className={`absolute top-[150%] left-1/2 bg-indigo-400 rounded-full h-[900px] w-[900px] transition-all`}
      style={{ transform: "translate(-50%, -100%)" }}
    >
      {options.map((index) => (
        <Card key={index} theta={theta * index} radius={radius} idx={index} />
      ))}
    </div>
  );
}
