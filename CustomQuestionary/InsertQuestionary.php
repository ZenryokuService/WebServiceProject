<?php
ini_set('display_errors', "On");
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wp/wp-load.php' );

// JSONリクエストを受け取る
$json = file_get_contents('php://input');
$data = json_decode($json);
// (プラグインフォルダにあるので)WordPressはすでに読み込まれている
$vals = json_decode($json, true);

// JSONプロパティの値を取得する

$insertSQL = "INSERT INTO `QUESTIONARY`(`question`, `answer1`, `answer2`, `answer3`, `answer4`, `answer5`, `html_class`, `html_style`) VALUES (";

$array = get_object_vars($data);
$keys = array('question', 'ans0', 'ans1', 'ans2', 'ans3', 'ans4', 'hrml_class', 'html_style');

for($count = 0; $count < 8; $count++) {
    if (array_key_exists($keys[$count], $array)) {
        $dd = $array[$keys[$count]];
    } else {
        $dd = "";
    }
    if ($dd != "") {
        $insertSQL .= "'" . $dd . "',";
    } else {
        $insertSQL .= "'',";
    }
}
// $insertSQL .= "'" . $vals['htmlClass'] . "','" . $vals['htmlStyle'] . "'";
$insertSQL = substr($insertSQL, 0, -1);
$insertSQL .= ");";

global $wpdb;

$res = $wpdb->query($insertSQL);
echo $wpdb->last_error;
echo $insertSQL;
?>
