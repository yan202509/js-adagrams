

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

export const SCORE_CHART = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
};

const NUMBER_IN_ONE_HAND = 10;
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


  // Draw 10 random letters from an object
  // Pool size is the same for each drawing
  // big O, by place the letter to the end,
  // letter do not need to move up one index from
  // where the random letter is removed
  const lettersInHand = [];
  for (let i = 0; i < NUMBER_IN_ONE_HAND; i++) {
    const randomSelect = Math.floor(Math.random() * lettersList.length);

    const lastIndexLetter = lettersList.length - 1;

    const randomLetterSelected = lettersList[randomSelect];
    lettersList[randomSelect] = lettersList[lastIndexLetter];
    lettersList[lastIndexLetter] = randomLetterSelected;

    // remove the last element of the array by .pop
    const tenCount = lettersList.pop();
    lettersInHand.push(tenCount);
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();
  const handCopy = [...lettersInHand];
  for (const letter of input) {
    let found = false;

    for (let i = 0; i <handCopy.length; i++) {
      if (handCopy[i] === letter) {
        const lastIndexLetter = handCopy.length - 1;

        // the letterExist is a letter that exist in both input and handCopy
        // awaiting to be put at the end of the handCopy
        const letterExist = handCopy[i];
        handCopy[i] = handCopy[lastIndexLetter];
        handCopy[lastIndexLetter] = letterExist;

        handCopy.pop();
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  word = word.toUpperCase();
  let total = 0;

  for (const letter of word) {
    if (letter in SCORE_CHART) {
      total = total + SCORE_CHART[letter];
    }
  }
  if (word.length >= 7 && word.length <= NUMBER_IN_ONE_HAND) {
    total = total + 8;
  };
  return total;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

