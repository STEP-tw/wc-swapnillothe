const {
  parseArgs
} = require('../src/parser.js');

const {
  TAB,
  EMPTY_STRING,
  countChars,
  countLines,
  countWords,
  hasCharsCountOption,
  hasLinesCountOption,
  hasWordsCountOption
} = require('../src/countUtil.js')

const joins = function (element1, element2, delimeter) {
  return [element1, delimeter, element2].join('');
}

const wc = function (args, fs) {
  const { options, files } = parseArgs(args);
  let filesContent = fs.readFileSync(files, 'utf8');
  let delimeter = EMPTY_STRING;
  let count = EMPTY_STRING;

  if (hasLinesCountOption(options)) {
    count = joins(count, countLines(filesContent) - 1, delimeter);
    delimeter = TAB;
  }
  if (hasWordsCountOption(options)) {
    count = joins(count, countWords(filesContent), delimeter);
    delimeter = TAB;
  }
  if (hasCharsCountOption(options)) {
    count = joins(count, countChars(filesContent), delimeter);
    delimeter = TAB;
  }
  count = count + delimeter + files;
  return count;
}

module.exports = {
  wc
}