interface HandInfo {
  card: string;
  face: string;
  score: number;
}

const ConvertToScore = (score: string): number => {
  if (isNaN(Number(score))) {
    if (score === "A") {
      return 11;
    } else if (score === "J" || score === "Q" || score === "K") {
      return 10;
    } else {
      throw Error(`Not have ${score} face`);
    }
  } else {
    return parseInt(score);
  }
};

const isSameFace = (handInfo: HandInfo[], face: string): boolean => {
  return handInfo.every((value: HandInfo) => value.face === face);
};

const getMaxScore = (handInfo: HandInfo[]): number => {
  const counts: Record<string, number> = {
    S: 0,
    C: 0,
    H: 0,
    D: 0,
  };

  for (const { card, score } of handInfo) {
    counts[card] += score;
  }

  return Math.max(...Object.values(counts));
};

export function getHandScore(input: string): number {
  let result: number;
  const pattern: RegExp = /([A-Z])(\d+|\w+)/g;
  let match: RegExpExecArray | null;

  let handInfo: HandInfo[] = [];

  try {
    while ((match = pattern.exec(input)) !== null) {
      const card: string = match[1];
      const score: number | string = match[2];

      handInfo.push({
        card: card,
        face: score,
        score: ConvertToScore(score),
      });
    }
  } catch (err) {
    console.log(err);
  }

  if (isSameFace(handInfo, "A")) {
    result = 35;
  } else if (
    isSameFace(handInfo, "J") ||
    isSameFace(handInfo, "Q") ||
    isSameFace(handInfo, "K")
  ) {
    result = 32.5;
  } else {
    result = getMaxScore(handInfo);
  }

  return result;
}
