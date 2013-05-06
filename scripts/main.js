require.config({
  enforceDefine: true,
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'vendor/jquery/jquery',
    lodash: 'vendor/lodash/lodash',
    handlebars: 'vendor/handlebars/handlebars',
    backbone: 'vendor/backbone/backbone'
  },
  shim: {
    handlebars: {
      deps: [],
      exports: 'Handlebars'
    },
    backbone: {
      deps: ['jquery', 'lodash'],
      exports: 'Backbone'
    }
  }
});

define([
	'App'
	], function(App) {
		App.initialize();
	}
);
