import type { logLevelsType } from './lib/logLevelsType';
import type { TimeType } from './lib/createTime';
import type { ANSI_COLORS } from './lib/colorPresets'

type Bool = 0 | 1 | true | false;

type LoggerOptions = {
  active?: Bool;
  prefix?: string | number;
	tag?: string | number;
	tagColor?: ANSI_COLORS;
  levels?: logLevelsType;
	levelsTag?: logLevelsType;
  time?: TimeType | Bool;
  colors?: Bool;
  timeColor?: ANSI_COLORS;
  async?: Bool;
}

export default class Consoler {
  constructor(options?: LoggerOptions) {
    this._options = options;
  }

  log(...args: any): void;
  warn(...args: any): void;
  debug(...args: any): any;
  info(...args: any): void;
  fatal(...args: any): void;
  error(...args: any): void;

  assert(...args: any): void;
  clear(...args: any): void;
  count(...args: any): void;
  countReset(...args: any): void;
  dir(...args: any): void;
  dirxml(...args: any): void;
  group(...args: any): void;
  groupCollapsed(...args: any): void;
  groupEnd(...args: any): void;
  table(...args: any): void;
  time(...args: any): void;
  timeEnd(...args: any): void;
  timeLog(...args: any): void;
  trace(...args: any): void;

  Console(...args: any): void;
  timestamp(...args: any): void;
  profile(...args: any): void;
  profileEnd(...args: any): void;
}
