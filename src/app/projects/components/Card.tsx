export function Card({ idx, theta, radius }: { idx: number; theta: number; radius: number }) {
  function getNewCoords() {
    return {
      x: (Math.cos(theta) * radius).toFixed(0),
      y: (Math.sin(theta) * radius).toFixed(0),
    };
  }
  const newCoords = getNewCoords();

  const left = `${radius + Number(newCoords.x)}px`;
  const top = `${radius - Number(newCoords.y)}px`;

  return (
    <div
      className={`absolute -translate-x-[50%] -translate-y-[50%] flex flex-col items-center gap-4 justify-between p-3 w-[100px] h-[100px] bg-lightgreen rounded-2xl`}
      style={{ left: left, top: top }}
    >
      <div className={`h-full w-full rounded-lg text-black`}>{idx}</div>
    </div>
  );
}
