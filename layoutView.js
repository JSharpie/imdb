var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var FormView = require('./formView');
var FooterView = require('./footerView');
var Collection = require('./itemCollection');
var CollectionView = require('./itemCollectionView');

module.exports = Backbone.View.extend({
  el:'#layoutCont',
  initialize: function(){
    var that = this;
    var headerHTML = new HeaderView();
    var formHTML= new FormView();
    var footerHTML = new FooterView();
    var collection = new Collection();
    collection.fetch().then(function(){
      var collectionView = new CollectionView({collection: collection});
      that.$el.find('header').html(headerHTML.render().el);
      that.$el.find('#pageCont').prepend(formHTML.render().el);
      that.$el.find('footer').html(footerHTML.render().el);
    });
  },
});
