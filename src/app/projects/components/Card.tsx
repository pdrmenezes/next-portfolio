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
      className={`absolute flex h-[100px] w-[100px] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-between gap-4 rounded-2xl bg-lightgreen p-3`}
      style={{ left: left, top: top }}
    >
      <div className={`h-full w-full rounded-lg text-black`}>{idx}</div>
    </div>
  );
}
