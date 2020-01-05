/** サイトマップの表示部分コントローラー */
app.controller('siteMapCtrl',['$scope', function($scope){
    $scope.title = "Hello";
    $scope.$on('getCategoryPosts', function(catId) {
        alert("testOn");
        SiteMapService.getCategoryPosts(catId).then(function(response, status, headers, config){
          $scope.categories = response.data;
        }), function(data, status, headers, config) {
          alert(data);
        };
    });
}]);
