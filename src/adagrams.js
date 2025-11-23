

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
const COPIE_LETTER_POOL = {...LETTER_POOL};

export const drawLetters = () => {
  // Implement this method for wave 1

  // Create letterList to store ALL the letters
  // Ex. AAAAAAAAABBCC...
  // Create a copy of the letter pool object
  const lettersList = [];
  for (const letter in COPIE_LETTER_POOL) {
    const count = COPIE_LETTER_POOL[letter];
    for (let i = 0; i < count; i++)
      lettersList.push(letter);
  }


//   const lettersInHand = [];
//   for (let i = 0; i < NUMBER_IN_ONEHAND; i++) {
//     const randomSelect = Math.floor(Math.random() * lettersList.length);
//     const tenCount = lettersList.splice(randomSelect, 1)[0];
//     lettersInHand.push(tenCount.toLocaleUpperCase());
//   }
//   return lettersInHand;
// };

  // Draw 10 random letters from an object
  // Pool size is the same for each drawing
  // big O, by place the letter to the end,
  // letter do not need to move up one index from
  // where the random letter is removed
  const lettersInHand = [];
  for (let i = 0; i < NUMBER_IN_ONEHAND; i++) {
    const randomSelect = Math.floor(Math.random() * lettersList.length);

    const lastIndexLetter = lettersList.length - 1;

    const randomLetterSelected = lettersList[randomSelect];
    lettersList[randomSelect] = lettersList[lastIndexLetter];
    lettersList[lastIndexLetter] = randomLetterSelected;

    // remove the last element of the array by .pop
    const tenCount = lettersList.pop();
    lettersInHand.push(tenCount.toUpperCase());
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
