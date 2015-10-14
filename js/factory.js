angular.module('noPhoto')
  

  .factory('NoPhotoFactory', function($http, $q){

    var NoPhotoFactory = {
      getPhotos: function() {
      var deferred = $q.defer();

      $http
        .get('http://jsonplaceholder.typicode.com/photos')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        })

        return deferred.promise;
    },
  }



    return NoPhotoFactory;
});

