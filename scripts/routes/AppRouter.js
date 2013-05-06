define([
  'jquery',
  'lodash',
  'backbone',
  'collections/songs',
  'views/HomeView',
  'components/loader/views/LoadingView',
], function($, _, Backbone, Songs, HomeView, LoadingView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'default'
    }
  });
  
  var initialize = function(){

    var appRouter = new AppRouter;

    appRouter.on('route:default', function (actions) {     
      var loadingView = new LoadingView({ 
        model: new Songs(), 
        finished: function(model) { 
          var homeView = new HomeView({ haystack: model }).render(); 
          $('body').html(homeView.el);
        }
      }).render();
      $('body').append(loadingView.el);
    });

    Backbone.history.start({ pushState: true});
  };

  return { 
    initialize: initialize
  };
});
