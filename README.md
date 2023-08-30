# Description

Node.js pretty and fast TTY logger with nice settings

![screenshot](https://raw.githubusercontent.com/wellloy1/consoler/master/example/screenshot.jpg)

# Dependencies

Only `sonic-boom` (Pino logger uses this)

# Usage

```bash
npm i xconsoler
```

## Example

```ts
import Consoler from 'xconsoler';

const consoler = new Consoler({
  levels: { log: true, info: true },
  // the other log levels will be a noop functions
  time: 'iso',
  colors: false,
});
```

## Default options:

```js
{
	active: true,
	prefix: null,
	time: 'ls',
	levels: {
		log: true,
		debug: true,
		info: true,
		warn: true,
		error: true,
		fatal: true,
	},
	colors: true,
	timeColor: true,
	async: false,
}
```

## Options meaning:

`active` - Enables/disables logger output  
`prefix` - Adds a custom prefix after a log level tag. Example (prefix: '[httpServer]'):

```bash
26.12.2022, 17:51:35 [log] [httpServer] Request completed: { reqId: 0, url: '/' }
```

`time` - Disables time output or changes time output format
`levels` - With that option, you can include log levels that you want to use or exclude from output.  
If you add log levels as 'true', that means the other log levels will be excluded. If you added log levels as 'false', all log levels excluding these will be added to the output.  
`colors` - Enables/disables pretty colors  
`timeColor` - Enables/disables color for timestring prefix (it works if the 'colors' is 'true')
`async` - If true the Consoler will use a 'sonic-boom' for TTY output. If false - it will use the default 'stdout' output.

Note:

- Disabling colors increase I/O perfomance
- Sonic-Boom also increase I/O perfomance

## Interfaces

The Consoler consumes `LoggerOptions`:

```ts
interface LoggerOptions {
  active?: 0 | 1 | true | false;
  prefix?: string;
  levels?: logLevelsType;
  time?: TimeType | null | 0 | false;
  colors?: 0 | 1 | true | false;
  timeColor?: 0 | 1 | true | false;
}

type TimeType = 'unix' | 'iso' | 'utc' | 'ls' | 'lts' | 'lds';
// Explanation:
// unix - UNIX epoch number
// iso - ISO string
// utc - UTC string
// ls - locale string
// lts - locale time string
// lds - locale date string

type logLevelsType = {
  [key: string]: 0 | 1 | true | false;
  log?: 0 | 1 | true | false;
  debug?: 0 | 1 | true | false;
  info?: 0 | 1 | true | false;
  warn?: 0 | 1 | true | false;
  error?: 0 | 1 | true | false;
  fatal?: 0 | 1 | true | false;
};
```
