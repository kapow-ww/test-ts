function findWords(
  phrases: string[],
  index = 0,
  checkWord = "",
  arrWordMatching: string[] = []
) {
  if (index >= phrases[0].length) {
    if (checkWord !== "") {
      return [...arrWordMatching, checkWord];
    } else {
      return arrWordMatching;
    }
  }
  const currChar = phrases[0][index];

  const isMatch = phrases.every((str) =>
    str.includes(checkWord.length === 0 ? currChar : checkWord + currChar)
  );

  if (isMatch) {
    checkWord += currChar;
    return findWords(phrases, index + 1, checkWord, arrWordMatching);
  } else {
    if (checkWord === "") {
      return findWords(phrases, index + 1, "", [...arrWordMatching, currChar]);
    } else {
      return findWords(phrases, index, "", [...arrWordMatching, checkWord]);
    }
  }
}

export function getQuestionPart(phrases: string[]): string[] {
  let result: string[];

  let guessWord = findWords(phrases);

  const longestWord = guessWord.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

  result = phrases.map((word) => {
    return word.replace(longestWord, "");
  });

  return result;
}
