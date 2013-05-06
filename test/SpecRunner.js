require.config({
  baseUrl: '../scripts/',
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'lib/jquery/jquery',
    lodash: 'lib/lodash/lodash',
    handlebars: 'lib/handlebars/handlebars',
    backbone: 'lib/backbone/backbone',
    spec: 'spec',
    src: 'src'
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