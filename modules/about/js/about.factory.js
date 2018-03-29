angular.module('myApp').factory('aboutFactory', ['$http', function ($http) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var aboutFactory = {};

  aboutFactory.getAbout = function (status, id) {
    if (status == 1) {
      return $http.get(api + '/restaurants/' + id);
    } else {
      return $http.get(api + '/hotels/' + id);
    }
  }

  aboutFactory.getHotelAlbums = function (id) {
    return $http.get(api + '/hotel_profile_albums/' + id);
  }

  // aboutFactory.getHotelImages = function (id) {
  //   return $http.get(api + '/hotel_albums/' + id);
  // }

  return aboutFactory;
}]);
