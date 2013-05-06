define([
	'jquery',
	'lodash',
	'backbone',
	'handlebars',
	'routes/AppRouter'
], function($, _, Backbone, Handlebars, AppRouter) {
	var initialize = function() {
		AppRouter.initialize();
	};

	return {
		initialize: initialize
	};
});