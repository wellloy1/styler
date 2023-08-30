function optionsValidators(LOG_LEVELS, ANSI_COLORS, Time) {
	return {
		prefix: (value) => {
			const valueType = typeof value;
			const isTrue = valueType === 'string' || valueType === 'number';
			if (isTrue) return '';
			return `'prefix' option must be a type of: string | number`;
		},

		tag: (value) => {
			const valueType = typeof value;
			const isTrue = valueType === 'string' || valueType === 'number';
			if (isTrue) return '';
			return `'prefix' option must be a type of: string | number`;
		},

		tagColor: (value) => {
			const valueType = typeof value;
			const isTrue = valueType === 'string' && Object.keys(ANSI_COLORS).includes(value);
			if (isTrue) return '';
			return `'tagColor' option must be a type of:\n ${Object.keys(ANSI_COLORS).join(' | ')}`;
		},

		levelsTag: (value) => {
			let isTrue = true;

			if (typeof value === 'object') {
				for (const level in value) {
					if (!Object.prototype.hasOwnProperty.call(LOG_LEVELS, level)) {
						isTrue = false;
					}
					if (![true, false, 0, 1].includes(value[level])) {
						isTrue = false;
					}
				}
			} else {
				isTrue = false;
			}
			if (isTrue) return '';
			return `'logPrefixes' option must be a type of: { [logLevel]: true | false | 0 | 1, ... }`;
		},

		active: (value) => {
			const isTrue = [true, false, 0, 1].includes(value);
			if (isTrue) return '';
			return `'active' option must be a type of: 'true | false | 0 | 1'`;
		},

		time: (value) => {
			const isTrue =
				Object.keys(Time).includes(value) || [1, 0, true, false].includes(value);
			if (isTrue) return '';
			return `'time' option must be a type of: "unix" | "iso" | "utc" | "ls" | "lts" | "lds" | 1 | 0 | true | false`;
		},

		timeColor: (value) => {
			const valueType = typeof value;
			const isTrue = valueType === 'string' && Object.keys(ANSI_COLORS).includes(value);
			if (isTrue) return '';
			return `'timeColor' option must be a type of: ${Object.keys(ANSI_COLORS).join(' | ')}`;
		},

		levels: (value) => {
			let isTrue = true;

			if (typeof value === 'object') {
				for (const level in value) {
					if (!Object.prototype.hasOwnProperty.call(LOG_LEVELS, level)) {
						isTrue = false;
					}
					if (![true, false, 0, 1].includes(value[level])) {
						isTrue = false;
					}
				}
			} else {
				isTrue = false;
			}
			if (isTrue) return '';
			return `'levels' option must be a type of: { [logLevel]: true | false | 0 | 1, ... }`;
		},

		colors: (value) => {
			const isTrue = [true, false, 0, 1].includes(value);
			if (isTrue) return '';
			return `'color' option must be a type of: 'true | false | 0 | 1'`;
		},

		async: (value) => {
			const isTrue = [true, false, 0, 1].includes(value);
			if (isTrue) return '';
			return `'async' option must be a type of: 'true | false | 0 | 1'`;
		},

		locale: (value) => {
			const valueType = typeof value;
			const isTrue = valueType === 'string';
			if (isTrue) return '';
			return `'locale' option must be a type of: string`;
		},
	}
};

module.exports = optionsValidators
