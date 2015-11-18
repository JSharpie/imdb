var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var ModelView = require('./modelView');
var Model = require('./model');

module.exports = Backbone.View.extend({
  el: '#moviesCont',
  events: {
    'submit form': 'doSomething',
  },
  doSomething: function(e){
    e.preventDefault();
    var model = new Model({
      cover: $("input[name='cover']").val(),
      title: $("input[name='title']").val(),
      rating: $("input[name='rating']").val(),
      year: $("input[name='year']").val(),
      plot: $("textarea[name='plot']").val()
    });
    model.save();
  },
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
