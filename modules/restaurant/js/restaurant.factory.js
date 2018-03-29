angular.module('myApp').factory('restaurantFactory', ['$http', function($http) {
      var api = 'http://103.13.228.76/web/kk_api/public/index.php';
      var restaurantFactory = {};

      restaurantFactory.getRestaurants = function() {
        return $http.get(api + '/restaurants');
      }

      return restaurantFactory;
    }]);
