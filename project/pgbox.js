/** PGボックスサイトマップ用(ルートコントローラ) */
app.controller("pgboxCtrl", function($scope, $http, $window, PageDataFactory, SiteMapService) {
   // 初期表示処理
   $scope.pageTitle = PageDataFactory.title;
   // タイトル部分のリフレッシュ
   $scope.leftSideBar_disp = "block";
   // 初期表示時のみ(angular.extends使用時に呼ばれる)
   if ($scope.pageTitle === 'Site Map') {
       $window.location.href = "#!/pgbox";
       SiteMapService.getCategoriesTitle().then(function(response, status, headers, config){
         $scope.categories = response.data;
       }), function(data, status, headers, config) {
         alert(data);
       };
   }
   // 画面上の処理
   $scope.changeView = function (catId) {
       $scope.$broadcast('getCategoryPosts', catId);
   };
});

/** トップコントローラー **/
app.controller('topController', function($scope, $http, PageDataFactory) {
    // 初期表示設定
    $scope.userLang = docLang;
    // 初期化処理
    initPage($scope, $http);
    // メソッドの登録
    initMethods($scope, $http);
});

 /****************************
  * PGボックス用各処理用メソッド  *
  * >see dataConst.js        *
  ****************************/
/** 初期化処理 */
function initPage($scope, $http) {
    // 左のサイドバー
    $scope.leftSideBar_disp = "block";
    $scope.leftSideBar_size = 12;
    // 右のサイドバー
    $scope.rightSideBar_disp = "block";
    $scope.rightSideBar_size = 3;
    var messArray = [];
    // メッセージテキスト設定する
    if (docLang == 'ja') {
        messArray = JAPANESE_MESSAGE;
        $scope.techCategories = linkCompanies_JA;// JAPANESE_CATEGORIES;
    } else {
        messArray = ENGLISH_MESSAGE;
        $scope.techCategories = ""; //ENGLISH_CATEGORIES;
    }
    // メッセージの設定
    $scope.welcomeMessage = messArray['welcomeMessage'];
    $scope.firstMessage = messArray['firstMessage'];
    $scope.secondMessage = messArray['secondMessage'];
    $scope.thirdMessage = messArray['thirdMessage'];
    $scope.fourthMessage = messArray['fourthMessage'];

    // デフォルト画面の描画
    $scope.usage_top = messArray['usage_top'];
    $scope.usage1 = messArray['usage1'];
    $scope.usage2 = messArray['usage2'];

    // 使用するメソッドの定義
    $scope.headerClick = function(url) {
        if (url != "" || typeof url != 'undefined') {
            // $http.get(url).then(function(response) {
            //      //document.getElementById("mainView").innerHTML = response.data;
            // });
        }
    }
}
/** 画面用のメソッド */
function initMethods($scope, $http) {
}
