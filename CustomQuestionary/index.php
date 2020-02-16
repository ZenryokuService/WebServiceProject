<?php

/*
Plugin Name: CustomQuestionaryPlugin
Plugin URI: (プラグインの説明と更新を示すページの URI)(未決定)aaa
Description: アンケートを作成、ブログ記事の中に埋め込むことができ、集計結果をダッシュボードで確認ができる。
Version: 1.0
Author: ZenryokuService
Author URI: https://zenryokuservice.com/
License: GPL2
*/
/*****************************
 *      License              *
 *****************************/
 /*  Copyright 2020 ZenryokuService
    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
	published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
/**
1. output JS for create QUESTIONARY in this php script
2. load JS and insert Question Form to post
*/
ini_set('display_errors', "On");
//echo $_SERVER['DOCUMENT_ROOT'];
// require_once($_SERVER['DOCUMENT_ROOT'] . "/wp/wp-load.php");

// 表示する内容
function helloCustomQuestionary() {
    // BootStrapを読み込む設定を出力する
    echo '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">';
    // 宣言しないと落ちる
    global $wpdb;
    // テーブルを作成する(ヒアドキュメントはタブが入流ので)
$sql = <<<EOM
CREATE TABLE IF NOT EXISTS MYSQL.QUESTIONARY(
question_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
question varchar(60),
answer1 varchar(60),
answer2 varchar(60),
answer3 varchar(60),
answer4 varchar(60),
answer5 varchar(60),
hrml_class varchar(15),
html_style varchar(15),
click_count bigint NOT NULL DEFAULT 0);
EOM;
    $wpdb->query( $sql );
    // Footerの文言削除
    add_filter('admin_footer_text', '__return_empty_string');
    // 画面作成用のPHPファイルを読み込みます。
    require_once(plugin_dir_path( __FILE__ ) . '/manage.php');
    // jsファイルを読み込みます。
    require_once(plugin_dir_path( __FILE__ ) . '/index.js');
}

// アンケートを記事に挿入するスクリプト
function insertQuestionary() {
    global $wpdb;
    $dataCount = $wpdb->get_var('SELECT count(question_id) FROM QUESTIONARY');
    // セッションカウンタ
    if (!isset($_SESSION['pageCount'])) {
        $_SESSION['pageCount'] = 0;
    } else {
        $_SESSION['pageCount']++;
    }
    $pageCount = $_SESSION['pageCount'];
    if ($dataCount > 0) {
        $result = $wpdb->get_results('SELECT * FROM QUESTIONARY', ARRAY_A);

        $qId = $result[0]['question_id'];
        $question = $result[0]['question'];
        $insertPos = $result[0]['html_class'] != "" ? $result[0]['html_class'] : "";
//        $ansArray = array($result[0]['answer1'], $result[0]['answer2'], $result[0]['answer3'], $result[0]['answer15'], $result[0]['answer5']);
        $ans1 = $result[0]['answer1'];
        $ans2 = $result[0]['answer2'];
        $ans3 = $result[0]['answer3'];
        $ans4 = $result[0]['answer4'];
        $ans5 = $result[0]['answer5'];
        // JSON
        $json = json_encode($result);

$insertScript = <<<EOM
<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";

</style>
<script>
let INSERT_POS;
let PAGE_COUNT = $pageCount;
let JSON_DATA = $json;

</script>

EOM;
        echo $insertScript;
        // HTML挿入用のJSを読み込む
        echo '<script type="text/javascript" src="' . plugins_url('insertPOST.js', __FILE__) .'"></script>';

    }
}

// ダッシュボードに追加するための関数(プラグイン有効時)
function addCustomQuestionary() {
    // ダッシュボードにこの表示が出るように追加する
    add_menu_page( 'Test Plugin', 'CustomQuestionary', 'manage_options' , 'test-plugin' , 'helloCustomQuestionary' );
    // 投稿記事にアンケートを表示するスクリプトをリンクする
    add_action( 'wp_enqueue_scripts', 'insertQuestionary' );
}
// 管理メニューを表示した時に
//add_action('wp_dashboard_setup', 'addCustomQuestionary');
add_action('admin_menu', 'addCustomQuestionary' );
add_action('wp_enqueue_scripts', 'insertQuestionary' );
do_action( 'addCustomQuestionary' );

?>
