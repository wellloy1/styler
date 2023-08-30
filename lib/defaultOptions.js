const LOG_LEVELS = require ('./logLevels.js');

const DEFAULT_OPTIONS = {
  prefix: null,
	tag: null,
	tagColor: 'white',
	levelsTag: LOG_LEVELS,
  active: true,
  time: 'ls',
  timeColor: 'magenta',
  levels: LOG_LEVELS,
  colors: true,
  async: false,
};

module.exports = DEFAULT_OPTIONS
