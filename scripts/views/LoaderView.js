define([
	'jquery',
	'lodash',
	'handlebars',
	'backbone',
	'text!components/loader/scripts/templates/loadertpl.js'
], function($, _, Handlebars, Backbone, LoaderTpl) {
	return Backbone.View.extend({

		className: "loader",

		initialize: function() {
			var self = this;
			this.render();

			this.model.fetch({
				xhr: function() {
	                var xhr = $.ajaxSettings.xhr();
	                xhr.onprogress = self.handleProgress;
	                return xhr;
	            }
	        })
			.success(function(model, response, options) {
				if (self.options.finished) { self.options.finished(new Backbone.Collection(model)); }
				return true;
			})
			.error(function(collection, response, options) {
				return false;
			});		
		},

		render: function() {
			this.$el.html( Handlebars.compile(LoaderTpl) );
			return this;
		},

		handleProgress: function(evt){
	        var percentComplete = 0;
	        if (evt.lengthComputable) {  
	            percentComplete = evt.loaded / evt.total;
	        }
	        console.log(Math.round(percentComplete * 100)+"%");
    	}
	});
});
