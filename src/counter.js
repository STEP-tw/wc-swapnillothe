const {
  parseArgs
} = require('../src/parser.js');

const {
  TAB,
  countChars,
  countLines,
  countWords,
  hasCharsCountOption,
  hasLinesCountOption,
  hasWordsCountOption
} = require('../src/countUtil.js')

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


const wc = function (args, fs) {
  const { options, filePaths } = parseArgs(args);
  let bindedWc = getCount.bind(null, fs, options);
  let counts = filePaths.map(bindedWc);
  if (filePaths.length > 1) {
    counts.push(totalCounts(counts));
    filePaths.push('total');
  }
  counts = joinCounts(counts, filePaths).join('\n');
  return counts;
}

module.exports = {
  wc
}