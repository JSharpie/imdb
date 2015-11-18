var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/imdb-jacob',
  idAttribute: '_id',
  defaults:{
    title: '',
    year: '',
    cover: '',
    plot: '',
    rating: ''
  },
  initialize: function(){

  }
});
