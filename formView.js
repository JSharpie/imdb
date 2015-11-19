var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var Model = require('./model');
var ModelView = require('./modelView');
var Collection = require('./itemCollection');
var CollectionView = require('./itemCollectionView');
module.exports = Backbone.View.extend({
  className: 'addMovie',
  model: null,
  events: {
    'click .showForm': 'addForm',
    'submit .moviePost': 'addMovie'
  },
  initialize: function(){
    if(!this.model){
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
    var model = new Model();
    model.set(newMovie);
    var that = this;
    model.save();
    var collection = new Collection();
    $('#moviesCont').html('');
    collection.fetch().then(function(data){
      collection.unshift(model);
      var collectionView = new CollectionView({collection: collection});
    });
    this.$('.moviePost').toggleClass('hidden');
    this.$('.showForm').toggleClass('hidden');
    this.$el.find('input, textarea').val('');

  },
  template: _.template(tmpl.form),
  newPostTmpl: _.template(tmpl.movie),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.append(markup);
    return this;
  },
  renderNew: function(){
    var markup = this.newPostTmpl(this.model.toJSON());
    this.$el.append(markup);
    return this;
  }
});
