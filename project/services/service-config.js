/** siteMapCtrl用のサービス(pgboxCtrlでも使用) */
app.service('SiteMapService', function($http) {
    this.getCategoriesTitle = function() {
        // 1サーバーに対してリクエストを送信
        return $http({
          method: 'GET',
          url: './tools/pgbox/getCategories.php',
          params: {} // パラメータなし
        });
    };
    this.getCategoryPosts = function(catId) {
        // 1サーバーに対してリクエストを送信
        return $http({
          method: 'GET',
          url: './tools/pgbox/getCategoryPosts.php',
          params: {'catId': catId}
      });
    }

});
