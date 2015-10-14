angular.module('noPhoto')
  
  .controller('NoPhotoController', function(NoPhotoFactory){
    var self = this;

    NoPhotoFactory.getPhotos()
      .then(function(response){
        self.photos = response
        console.log(response)
      });

  });

