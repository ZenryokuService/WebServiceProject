<?php
//ini_set('display_errors', "On");
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wp/wp-load.php' );

// JSONリクエストを受け取る
$json = file_get_contents('php://input');
$data = json_decode($json);
// (プラグインフォルダにあるので)WordPressはすでに読み込まれている
$vals = json_decode($json, true);

// JSONプロパティの値を取得する

$deleteSQL = "DELETE FROM `QUESTIONARY` WHERE question_id = " . $vals['ID'];

//var_dump($vals);
global $wpdb;
if ($vals['ID'] != "") {
    $wpdb->query($deleteSQL);
}
//echo $wpdb->last_error;
echo $deleteSQL;
?>
