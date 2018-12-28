const {
  DASH,
  DEFAULT_OPTIONS,
  EMPTY_STRING
} = require('../src/constants.js');

const createParsedArgs = function (options, filePaths) {
  return { options, filePaths }
}

const hasDash = function (arg) {
  return arg.startsWith(DASH);
}

const isEmptyList = function (list) {
  return list.length == 0;
}

const hasDashOrEmpty = function (arg) {
  return hasDash(arg) || isEmptyList(arg);
}

const getOptions = function (args, options = []) {
  if (!(hasDashOrEmpty(args[0]))) {
    return options;
  }
  options.push(args[0]);
  return getOptions(args.slice(1), options);
}

const sliceFrom = function (list, sliceIndex) {
  return list.slice(sliceIndex);
}

const getFilePaths = function (args) {
  let fileStartingIndex = getFileStartingIndex(args);
  return sliceFrom(args, fileStartingIndex);
}

const getFileStartingIndex = function (args) {
  return getOptions(args).length;
}


const rearrangeOptions = function (options) {
  const possibleOptions = ['l', 'w', 'c'];
  return possibleOptions.filter(option => options.includes(option));
}

const parseArgs = function (args) {
  let options = getOptions(args).join(EMPTY_STRING) || DEFAULT_OPTIONS;
  options = rearrangeOptions(options);
  let files = getFilePaths(args);
  return createParsedArgs(options, files);
}

module.exports = {
  parseArgs
}