angular.module('myApp').factory('restaurantAlbumProfileFactory', ['$http', function ($http) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var restaurantAlbumProfileFactory = {};

  restaurantAlbumProfileFactory.getRestaurantAlbumProfile = function (param) {
    return $http.get(api + '/restaurant_album_by_id/' + param);
  }

  restaurantAlbumProfileFactory.setrestaurantAlbum = function (params) {
    let status = (params.id == 0 ? 'create' : 'edit');
    return $http.post(api + '/restaurant_album/' + status, params);
  }

  return restaurantAlbumProfileFactory;
}]);
