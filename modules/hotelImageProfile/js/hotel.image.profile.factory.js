angular.module('myApp').factory('hotelProfileFactory', ['$http', 'Upload', function ($http, Upload) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var hotelProfileFactory = {};

  hotelProfileFactory.getHotelProfile = function (id) {
    return $http.get(api + '/hotels/' + id);
  }

  hotelProfileFactory.setHotel = function (params) {
    let status = (params.id == 0 ? 'create' : 'edit');
    return Upload.upload({
      url: api + '/hotels/' + status,
      data: params
    });
  }

  // hotelProfileFactory.getHotelAlbums = function (id) {
  //   return $http.get(api + '/hotel_profile_albums/' + id);
  // }

  // hotelProfileFactory.getHotelImages = function (id) {
  //   return $http.get(api + '/hotel_albums/' + id);
  // }

  return hotelProfileFactory;
}]);
