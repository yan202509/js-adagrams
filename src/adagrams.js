export const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const NUMBER_IN_ONEHAND = 10;

export const drawLetters = () => {
  // Implement this method for wave 1

  // Create letterList to store ALL the letters
  // Ex. AAAAAAAAABBCC...
  const copiedLetterPool = {...LETTER_POOL};
  const lettersList = [];
  for (const letter in copiedLetterPool) {
    const count = copiedLetterPool[letter];
    for (let i = 0; i < count; i++)
    lettersList.push(letter);
  }

  // Draw 10 letters from an object
  // Pool size is the same for each drawing
  const lettersInHand = [];
  for (let i = 0; i < NUMBER_IN_ONEHAND; i++) {
    const tenCount = lettersList.pop();
    lettersInHand.push(tenCount);
  }
    return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

console.log('hello');
