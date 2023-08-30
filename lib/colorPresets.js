const ANSI_COLORS = {
  // Dark colors:
  dBlack: [0, 30],
  dRed: [0, 31],
  dGreen: [0, 32],
  dYellow: [0, 33],
  dBlue: [0, 34],
  dMagenta: [0, 35],
  dCyan: [0, 36],
  dWhite: [0, 37],

  // Bright colors:
  black: [1, 30],
  red: [1, 31],
  green: [1, 32],
  yellow: [1, 33],
  blue: [1, 34],
  magenta: [1, 35],
  cyan: [1, 36],
  white: [1, 37],
  default: [1, 39],

  // With background colors:
  bgRed: [1, 41],
  bgGreen: [1, 42],
  bgBlue: [1, 44],
  bgCyan: [1, 46],
};

const ANSI_RESET = '\x1b[0;0m';

// Refers to ANSI_COLORS table
const TIMESTRING_COLOR = 'magenta';

const LOG_LEVEL_COLORS = {
  error: 'red',
  fatal: 'red',
  debug: 'green',
  trace: 'blue',
  info: 'blue',
  warn: 'yellow',
  log: 'cyan',
};

module.exports = {
  ANSI_COLORS,
  ANSI_RESET,
  TIMESTRING_COLOR,
  LOG_LEVEL_COLORS
}
