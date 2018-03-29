angular.module('myApp').factory('RestaurantImageFactory', ['$http', function ($http) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var hotelImageFactory = {};

  hotelImageFactory.getRestaurantImages = function (id) {
    return $http.get(api + '/restaurant_profile_albums/' + id);
  }

  return hotelImageFactory;
}]);
