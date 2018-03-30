angular.module('myApp').factory('RestaurantsProfileFactory', ['$http', 'Upload', function ($http, Upload) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var RestaurantsProfileFactory = {};

  RestaurantsProfileFactory.getRestaurantsProfile = function (id) {
    return $http.get(api + '/restaurants/' + id);
  }

  RestaurantsProfileFactory.setRestaurants = function (params) {
    let status = (params.id == 0 ? 'create' : 'edit');
    return Upload.upload({
      url: api + '/restaurants/' + status,
      data: params
    });
  }

  return RestaurantsProfileFactory;
}]);
