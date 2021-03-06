var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates')

module.exports = Backbone.View.extend({
  template: _.template(tmpl.movie),
  events: {
    'click .delete': 'delete',
    'click .edit': 'edit',
    'submit .movieEdit': 'drawEdit',
  },
  delete: function(e){
    e.preventDefault();
    this.model.destroy();
    this.$el.remove();
  },
  edit: function(e){
    e.preventDefault();
    this.$('.movieEdit').toggleClass('hidden');
  },
  drawEdit: function(e){
    e.preventDefault();
    var editted = this.model;
    editted.set({
      cover: this.$("input[name='ecover']").val(),
      title: this.$("input[name='etitle']").val(),
      rating: this.$("input[name='erating']").val(),
      year: this.$("input[name='eyear']").val(),
      plot: this.$("textarea[name='eplot']").val()
    });
    $('.movieEdit').addClass('hidden');
    editted.save();
    this.render();
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function () {}

});
