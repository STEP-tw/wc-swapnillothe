const SPACE = ' ';
const TAB = '  ';
const L_LETTER = 'l';
const W_LETTER = 'w';
const C_LETTER = 'c';
const EMPTY_STRING = '';
const NEW_LINE = '\n';
const DASH = '-';
const DEFAULT_OPTIONS = 'lcw';

const countLines = function (text) {
  return text.split(NEW_LINE).length;
}

const countChars = (text) => text.length;

const countWords = function (text) {
  let textWithoutNewLine = text.replace(/\n/g, SPACE);
  return textWithoutNewLine.split(SPACE).length;
}

const hasLinesCountOption = (option) => option.includes(L_LETTER);
const hasWordsCountOption = (option) => option.includes(W_LETTER);
const hasCharsCountOption = (option) => option.includes(C_LETTER);

const getCount = function (fs, options, filePath) {
  let count = [];
  let fileContent = fs.readFileSync(filePath, 'utf8');
  if (hasLinesCountOption(options)) {
    count.push(countLines(fileContent) - 1);
  }
  if (hasWordsCountOption(options)) {
    count.push(countWords(fileContent));
  }
  if (hasCharsCountOption(options)) {
    count.push(countChars(fileContent));
  }
  return count;
}

const totalCounts = function (counts) {
  let totalCounts = [];
  for (let countIndex = 0; countIndex < counts[0].length; countIndex++) {
    totalCounts[countIndex] = counts.reduce(
      (accumulator, count) =>
        accumulator[countIndex] + count[countIndex]
    );
  }
  return totalCounts;
}

const joinCount = function (counts, filePath) {
  let joinedCounts = counts.concat(filePath);
  return joinedCounts.join(TAB);
}

const joinCounts = function (counts, filePaths) {
  let joinedCounts = [];
  for (let index = 0; index < counts.length; index++) {
    joinedCounts.push(joinCount(counts[index], filePaths[index]));
  }
  return joinedCounts;
}


module.exports = {
  countChars,
  countLines,
  countWords,
  hasCharsCountOption,
  hasLinesCountOption,
  hasWordsCountOption,
  joinCounts,
  totalCounts,
  getCount,
  TAB,
  EMPTY_STRING,
  SPACE,
  DASH,
  DEFAULT_OPTIONS
}