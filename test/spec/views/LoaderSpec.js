define([
  "scripts/views/LoaderView"
], function(LoaderView) {

  describe("Component | Loader - View", function() {

    var loaderView,
        testModel;

    beforeEach(function() {
      $('body').append('<div class="wrapper"></div>');
      testModel = Backbone.Model.extend({
        url: 'src/songs.json'
      });
      loaderView = new LoaderView({ model: new testModel() }).render();
    });

    afterEach(function() {
      loaderView.remove();
      $('.wrapper').remove();
    });

    it("should be tied to a DOM element when created, based off the property provided", function() {
      expect(loaderView.el.tagName.toLowerCase()).toBe('div');
    });

    // it("should have a class of 'wrapper'", function() {
    //   expect(loaderView.el).toHaveClass('wrapper');
    // });

    // it("is backed by a model instance", function() {
    //   expect(loaderView.model).toBeDefined();
    //   expect(loaderView.model.get('artist')).toBe('Artist');
    // });

    // it("should render the Home Template properly", function() {
    //   loaderView.render();
    //   expect(loaderView.$('h1'))
    //     .toHaveText('Welcome to Nukebox');
    // });

    // it("should invoke player properly", function() {
    //   loaderView.render();
    //   expect(loaderView.$('.player')).toBeVisible();
    // });

    // it("should invoke search properly", function() {
    //   loaderView.render();
    //   expect(loaderView.$('.search')).toBeVisible();
    // });

  });

});