require.config({
  baseUrl: '../',
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'vendor/jquery/jquery',
    lodash: 'vendor/lodash/lodash',
    handlebars: 'vendor/handlebars/handlebars',
    backbone: 'vendor/backbone/backbone',
    components: '../',
    spec: 'test/spec',
    src: 'test/src',
  },
  shim: {
	  lodash: {
      deps: [],
      exports: '_'
    },
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

require(['jquery', 'lodash', 'handlebars', 'backbone', 'spec/index'], 
function($, _, Handlebars, Backbone, index) {
  var jasmineEnv = jasmine.getEnv(),
      htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  $(function() {
    require(index.specs, function() {
      jasmineEnv.execute();
    });
  });
});