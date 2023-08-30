const util = require ('util');

const types = {
  string: (arg) => arg,
  number: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
  function: (arg) => arg,
  boolean: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
  bigint: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
  symbol: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
  object: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
  array: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
  undefined: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
  null: (arg) => util.formatWithOptions({ colors: false }, '%O', arg),
};

function argFormatter(arg) {
  let type = undefined;
  if (Array.isArray(arg)) type = 'array';
  else if (arg === null) type = 'null';
  else type = typeof arg;
  return types[type](arg);
}

const formatter = {
  time: (timeString) => timeString,
	tag: (tag) => '[' + tag + ']',
  level: (logLevel) => '[' + logLevel + ']',
  args: (arg) => {
    return argFormatter(arg);
  },
};

module.exports = formatter
