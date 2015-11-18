var $ = require('jquery');
var ItemCollection = require('./itemCollection');
var ItemCollectionView = require('./itemCollectionView');

$(function () {
  var movies = new ItemCollection();

  movies.fetch().then(function (data){
    console.log(data);
    new ItemCollectionView({collection: movies});

  });
});
