var Backbone = require('backbone');
var Model = require('./model');
module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/imdb-jacob',
  model: Model,
  initialize: function () {
  }
});
