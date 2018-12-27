const {
  DASH,
  DEFAULT_OPTIONS,
  EMPTY_STRING
} = require('../src/countUtil.js');

const createParsedArgs = function (options, filePaths) {
  return { options, filePaths }
}

const getOptions = function (args) {
  let options = (args.filter(
    arg => arg.startsWith(DASH))
  ).join(EMPTY_STRING);
  return options || DEFAULT_OPTIONS;
}

const getfilePaths = (args) => args.filter(
  arg => !(arg.startsWith(DASH))
);

const parseArgs = function (args) {
  let options = getOptions(args);
  let files = getfilePaths(args);
  return createParsedArgs(options, files);
}

module.exports = {
  parseArgs
}