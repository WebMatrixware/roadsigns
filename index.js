'use strict';

exports.roadsigns = {
	pkg: require('./package.json'),
	register: async function (server, options) {

		const statusLookup = {
			100: function () {
				return {status: 'continue', code: 100};
			},
			'continue': function () {
				100 ();
			},
			418: function () {
				return {status: 'I\'m a teapot', code: 418};
			},
			'iAmATeapot': function () {
				418 ();
			}
		};

		const rs = function (code) {
			return this.response(statusLookup[code]);
		};

		server.decorate('toolkit', 'rs', rs);

	}
};
