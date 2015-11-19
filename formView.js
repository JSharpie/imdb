var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var Model = require('./model');
var ModelView = require('./modelView');
var Collection = require('./itemCollection');
module.exports = Backbone.View.extend({
  className: 'addMovie',
  model: null,
  events: {
    'click .showForm': 'addForm',
    'submit .moviePost': 'addMovie'
  },
  initialize: function(){
    if(!this.model) {
      this.model = new Model();
    }
  },
  addForm: function(e){
    e.preventDefault();
    this.$('.moviePost').toggleClass('hidden');
    this.$('.showForm').toggleClass('hidden');
  },
  addMovie: function(e){
    e.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      year: this.$el.find('input[name="year"]').val(),
      cover: this.$el.find('input[name="cover"]').val(),
      plot: this.$el.find('textarea[name="plot"]').val(),
      rating: this.$el.find('input[name="rating"]').val()
    };
    this.model.set(newMovie);
    var that = this;
    this.model.save().then(function(){
      that.collection.add(that.model);
    })
    this.$('.moviePost').toggleClass('hidden');
    this.$('.showForm').toggleClass('hidden');
    this.$el.find('input, textarea').val('');
  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
