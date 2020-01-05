/** サイトマップの表示部分コントローラー */
app.controller('siteMapCtrl',['$scope', 'SiteMapService', function($scope, SiteMapService){
    $scope.title = "Hello";
    const service = SiteMapService;
    $scope.$on('getCategoryPosts', function(event, catId) {
        alert("testOn");
        service.getCategoryPosts(catId).then(function(response, status, headers, config){
          $scope.categories = response.data;
        }), function(data, status, headers, config) {
          alert(data);
        };
    });
}]);
