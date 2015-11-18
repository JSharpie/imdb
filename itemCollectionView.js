var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var ModelView = require('./modelView');
var Model = require('./model');

module.exports = Backbone.View.extend({
  el: '#moviesCont',
  events: {
    'submit .moviePost': 'doSomething',
  },
  doSomething: function(e){
    e.preventDefault();
    var model = new Model({
      cover: this.$("input[name='cover']").val(),
      title: this.$("input[name='title']").val(),
      rating: this.$("input[name='rating']").val(),
      year: this.$("input[name='year']").val(),
      plot: this.$("textarea[name='plot']").val()
    });
    var that = this;
    model.save().then(function(){
      that.addOne(model);
    });
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
