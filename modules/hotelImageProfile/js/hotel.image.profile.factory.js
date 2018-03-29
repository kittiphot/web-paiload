angular.module('myApp').factory('hotelImageProfileFactory', ['$http', 'Upload', function ($http, Upload) {
  // var api = 'http://103.13.228.76/web/kk_api/public/index.php';
  var api = 'http://localhost:9000';
  var hotelImageProfileFactory = {};

  hotelImageProfileFactory.getHotelImageProfile = function (id) {
    return $http.get(api + '/hotelImage/' + id);
  }

  hotelImageProfileFactory.setHotelImage = function (params) {
    let status = (params.id == 0 ? 'create' : 'edit');
    return Upload.upload({
      url: api + '/hotelImage/' + status,
      data: params
    });
  }

  return hotelImageProfileFactory;
}]);
