/**************************
 * 1.PGボックス用APPモジュール *
 ***************************/
// 言語取得
const docLang = 'ja'; //navigator.language;
// モジュール($routeProvider, $stateProvider)
let app = angular.module('pgBoxAG', ['ngRoute']);

/** (仮実装)ナビケーションタグのコントローラー */
app.controller('navController', function($scope, $http) {
    // ログイン・ダイアログを開く
    $scope.loginDialog = function() {
        // BootStrapのものを使用する
    };
 });

/** 各ページ共通データモデル */
app.factory('PageDataFactory', function() {
    // ページモデル初期化
    let pageModel = {
        title: 'Site Map'
    };
    return pageModel;
});

/************************************
 * 2.PGボックス用hルーティングモジュール *
 ************************************/
app.config(function($routeProvider) {
  // ルーティング
  $routeProvider
  .when("/pgbox", {
    templateUrl: "./project/pgboxSiteMap.htm",
    controller : "pgboxCtrl"
  }).when("/london", {
    templateUrl : "./project/london.htm",
    controller : "londonCtrl"
  }).when("/paris", {
    templateUrl : "./project/paris.htm",
    controller : "parisCtrl"
  });
});

/** サンプルコントローラ */
app.controller("londonCtrl", function ($scope) {
  $scope.pageTitle = "London reports";
  $scope.msg = "I love London";
});
app.controller("parisCtrl", function ($scope, $controller, PageDataFactory) {
    PageDataFactory.title = "Paris page";
    // AngularJSでコントロールできないのでDOMを使用する
    document.getElementById("pageTitle").text = PageDataFactory.title;
//    angular.extend(this, $controller('pgboxCtrl', {$scope: $scope}));
  $scope.msg = "I love Paris";
});
