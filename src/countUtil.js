const SPACE = ' ';
const TAB = '  ';
const L_LETTER = 'l';
const W_LETTER = 'w';
const C_LETTER = 'c';
const EMPTY_STRING = '';
const NEW_LINE = '\n';

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

module.exports = {
  countChars,
  countLines,
  countWords,
  hasCharsCountOption,
  hasLinesCountOption,
  hasWordsCountOption,
  TAB,
  EMPTY_STRING,
  SPACE
}