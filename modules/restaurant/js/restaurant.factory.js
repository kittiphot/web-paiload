angular.module('myApp').factory('restaurantFactory', ['$http', function($http) {
      // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
      var api = 'http://localhost:9000';
      var restaurantFactory = {};

      restaurantFactory.getRestaurants = function() {
        return $http.get(api + '/restaurants');
      }

      return restaurantFactory;
    }]);
