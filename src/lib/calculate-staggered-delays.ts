export function calculateStaggerDelays(lines: string[], delayPerWord = 0.1): number[] {
  const delays: number[] = [];
  let totalWords = 0;

  for (const line of lines) {
    delays.push(Number((totalWords * delayPerWord).toFixed(2)));

    const words = line.trim().split(" ").filter(Boolean);
    totalWords += words.length;
  }

  return delays;
}
