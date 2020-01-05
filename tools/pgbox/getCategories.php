<?php
/** エンコード */
header("Content-Type: text/html; charset=UTF-8");
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wp/wp-load.php' );

try {
    // カテゴリの全取得ようパラメータ
    $paramArr = array('type' => 'post', 'orderby' => 'name', 'order' => 'ASC', 'taxonomy' => 'category');
    // 引数
    $categories = get_categories($paramArr);
    $cnt = 0;

    $jsonArr = array();
    foreach($categories as $cat){
        $catLink = get_category_link($cat->term_id);
        $catName = $cat->name;
        $catId = $cat->cat_ID;
        array_push($jsonArr, array('name' => $catName, 'url' => $catLink, 'catId' => $catId));
    }
    echo json_encode($jsonArr);
} catch(Exception $e) {
    echo $e;
}
?>
