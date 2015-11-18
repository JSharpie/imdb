var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var ModelView = require('./modelView');

module.exports = Backbone.View.extend({
  el: '#moviesCont',
  collection: null,
  initialize: function () {
    this.addAll();
  },
  addOne: function (model) {
    var modelView = new ModelView({model: model});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
});
