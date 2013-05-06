define([
  "views/LoadingView"
], function(LoadingView) {

  describe("Component | Loading - View", function() {

    var loadingView,
        testModel;

    beforeEach(function() {
      $('body').append('<div class="wrapper"></div>');
      testModel = Backbone.Model.extend({
        url: '../test/src/songs.json'
      });
      loadingView = new LoadingView({ model: new testModel() }).render();
    });

    afterEach(function() {
      loadingView.remove();
      $('.wrapper').remove();
    });

    it("should be tied to a DOM element when created, based off the property provided", function() {
      expect(loadingView.el.tagName.toLowerCase()).toBe('div');
    });

    // it("should have a class of 'wrapper'", function() {
    //   expect(loadingView.el).toHaveClass('wrapper');
    // });

    // it("is backed by a model instance", function() {
    //   expect(loadingView.model).toBeDefined();
    //   expect(loadingView.model.get('artist')).toBe('Artist');
    // });

    // it("should render the Home Template properly", function() {
    //   loadingView.render();
    //   expect(loadingView.$('h1'))
    //     .toHaveText('Welcome to Nukebox');
    // });

    // it("should invoke player properly", function() {
    //   loadingView.render();
    //   expect(loadingView.$('.player')).toBeVisible();
    // });

    // it("should invoke search properly", function() {
    //   loadingView.render();
    //   expect(loadingView.$('.search')).toBeVisible();
    // });

  });

});