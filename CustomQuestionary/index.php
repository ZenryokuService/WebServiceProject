<?php
/*
Plugin Name: CustomQuestionaryPlugin
Plugin URI: (プラグインの説明と更新を示すページの URI)(未決定)
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
// 表示する内容
function helloCustomQuestionary() {
    require_once(plugin_dir_path( __FILE__ ) . '/manage.php');

}
// ダッシュボードに追加するための関数
function addCustomQuestionary() {
    // ダッシュボードにこの表示が出るように追加する
    //wp_add_dashboard_widget( 'my_dashboard_widget', 'Featured Dashboard Page', 'helloCustomQuestionary' );
    add_menu_page( 'Test Plugin', 'CustomQuestionary', 'manage_options' , 'test-plugin' , 'helloCustomQuestionary' );
}
// 管理メニューを表示した時に
//add_action('wp_dashboard_setup', 'addCustomQuestionary');
add_action('admin_menu', 'addCustomQuestionary' );
do_action( 'addCustomQuestionary' );
?>
