const {
  parseArgs
} = require('../src/parser.js');

const {
  getCount,
  totalCounts,
  joinCounts
} = require('../src/countUtil.js')

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