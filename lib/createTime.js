function createTime (locale) {
	locale = locale ?? global.LOCALE ?? process.env.LOCALE;

	return {
		unix() {
			return Date.now();
		},
		iso(unixTime = Date.now()) {
			return new Date(unixTime).toISOString();
		},
		utc(unixTime = Date.now()) {
			return new Date(unixTime).toUTCString();
		},
		ls(unixTime = Date.now()) {
			return new Date(unixTime).toLocaleString(locale);
		},
		lts(unixTime = Date.now()) {
			return new Date(unixTime).toLocaleTimeString(locale);
		},
		lds(unixTime = Date.now()) {
			return new Date(unixTime).toLocaleDateString(locale);
		},
	}
};

module.exports = createTime
