var ctrl = angular.module('JoshifyApp',[]);
ctrl.controller('NoticeController', ['$scope', '$http', function($scope,$http){

  $scope.newNotice = null;

  $scope.newNotice = function(){
    var noticesDB = {};
    console.log($scope.newNotice.username);
          noticesDB = {
            'username':$scope.newNotice.username,
            'notice_type': $scope.newNotice.notice_type,
            'quality': $scope.newNotice.quality,
            'review': $scope.newNotice.review,
            'img_url': $scope.newNotice.img_url
          };
          console.log(noticesDB);
      $http.post('/api/notices', noticesDB);
      $scope.allNotices();
      //socket event
  };

  $scope.allNotices = function(){

    $http({
      url: 'api/notices',
      method: 'get',
    }).then(function(response){
      var data = response.data.notices;
      $scope.notices = data;
      console.log(data, "dayayayayya");
    })
  };

$scope.allNotices();
  $scope.createNotice = function(){
    $http({
      url: 'api/notices',
      method: 'post',
      data: {notice: $scope.newNotice}
    }).then(function(response){
      $scope.allNotices();
    });
  };

  $scope.removeNotice = function(id){
    $http({
      url: 'api/notices/' + id,
      method: 'delete'
    }).then(function(){
    	$scope.notices.splice(id, 1);
    });
  }

}]);
