angular.module('myApp').factory('hotelFactory', ['$http', function($http) {
      // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
      var api = 'http://localhost:9000';
      var hotelFactory = {};

      hotelFactory.getHotels = function() {
        return $http.get(api + '/hotels');
      }

      hotelFactory.getHotelBySearch = function (param) {
        return $http.post(api + '/hotels/search', param);
      }

      return hotelFactory;
    }]);
