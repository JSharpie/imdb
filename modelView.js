var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagname:"article",
  className: "",
  template: _.template($('#movieTmpl').html()),
  events: {
    'click .delete': 'delete',
  },
  delete: function(e){
    e.preventDefault();
    this.model.destroy();
    this.$el.remove();
  },
  render: function () {
    console.log(this.model);
    var markup = this.template(this.model.toJSON());
    this.$el.append(markup);
    return this;
  },
  initialize: function () {}

});
