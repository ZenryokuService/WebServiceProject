<?php
/** エンコード */
header("Content-Type: text/html; charset=UTF-8");
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wp/wp-load.php' );

try {
    // パラメータ取得
    $catId = $_GET['catId'];
    $args = array( 'category' => $catId, 'post_type' =>  'post' );
    $postslist = get_posts( $args );

    $jsonArr = array();
    foreach($postslist as $post){
        setup_postdata($post);
        $title = get_the_title($post->ID);
        $permalink = get_permalink($post->ID);
        // $discription = apply_filters('the_content', $post->post_content));
         array_push($jsonArr, array('title' => $title, 'link' => $permalink, 'discription' => 'test'));
    }
    echo json_encode($jsonArr);
} catch(Exception $e) {
    echo $e;
}
?>
