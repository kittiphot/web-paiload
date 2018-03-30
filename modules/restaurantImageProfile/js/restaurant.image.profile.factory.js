angular.module('myApp').factory('restaurantImageProfileFactory', ['$http', 'Upload', function ($http, Upload) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var restaurantImageProfileFactory = {};

  restaurantImageProfileFactory.getRestaurantImageProfile = function (id) {
    return $http.get(api + '/restaurant_get_image/' + id);
  }

  restaurantImageProfileFactory.setRestaurantImage = function (params) {
    let status = (params.id == 0 ? 'create' : 'edit');
    return Upload.upload({
      url: api + '/restaurant_image_to_album/' + status,
      data: params
    });
  }

  return restaurantImageProfileFactory;
}]);
