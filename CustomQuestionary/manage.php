<?php
ini_set('display_errors', "On");
// DB登録用のPHPファイルへのURL
$rootUrl = plugins_url();
$insertUrl = $rootUrl . '/CustomQuestionary/InsertQuestionary.php';
// DB削除用のPHPファイルへのURL
$deleteUrl = $rootUrl . '/CustomQuestionary/DeleteQuestionary.php';

global $wpdb;
$dataCount = $wpdb->get_var('SELECT count(question_id) FROM QUESTIONARY');
?>

<h1>Custom Questionary Plugin</h1>

<hr>
<div class="container">
    <details>
        <summary>Help</summary>
        <div class="row">
            <div class="col">
                <dl>
                    <dt><h4>Usage(使い方)</h4></dt>
                    <dd>1.Create Questions(質問を作成します)</dd>
                    <dd>2.Create answers(回答を作成します): <button type="button" class="btn-sm btn-primary">項目追加</button></dd>
                    <dd>3.Set position(設置する場所を指定します)</dd>
                </dl>
            </div>
            <div class="col">
                <dl>
                    <dt><h4>Usage2(使い方2)</h4></dt>
                    <dd><button type="button" class="btn-xs btn-success">作成</button>: Create sample form</dd>
                    <dd><button type="button" class="btn-xs btn-warning" onclick="deleteForm()">削除</button>: Delete form</dd>
                    <dd><input type="checkbox"/>: Checked -> clear all forms in this page</dd>
                </dl>
            </div>
        </div>
        </details>
    <?php if ($dataCount > 0) { ?>
        <hr>
        <details>
            <summary class="text-success">QuestionTable</summary>
            <div class="row">
                <div class="col">
                    <b class="text-info">Questionaries(質問一覧)</b>
                    <table id="qestionTable" class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>質問(Question)</th>
                                <th>回答1(ans1)</th>
                                <th>回答2(ans2)</th>
                                <th>回答3(ans3)</th>
                                <th>回答4(ans4)</th>
                                <th>回答5(ans5)</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php
                            $result = $wpdb->get_results('SELECT * FROM QUESTIONARY', ARRAY_A);
                            // ここから下はデータがある時のみ表示
                            $recordCount = 0;
                            foreach($result as $key => $data) {
                                echo '<tr data-qid="' . $data['question_id'] . '">';
                                echo '<td><input type="radio" name="dataRecord" value="' . $recordCount . '"/></td>';
                                echo '<td>' . $data['question'] . '</td>';
                                echo '<td>' . $data['answer1'] . '</td>';
                                echo '<td>' . $data['answer2'] . '</td>';
                                echo '<td>' . $data['answer3'] . '</td>';
                                echo '<td>' . $data['answer4'] . '</td>';
                                echo '<td>' . $data['answer5'] . '</td>';
                                echo '</tr>';
                                $recordCount++;
                            }
                        ?>
                        </tbody>
                    </table>
                    <!-- 編集ボタン一式 -->
                    <button onclick="getTableRecord()">Remove(削除)</button>
                </div>
            </div>
        </details>
    <hr>
    <?php
        }
    ?>
    <hr>
    <h3>Create Question(質問作成)</h3>
    <hr>
    <h4>== Control forms ==</h4>
    <div class="row">
        <div class="col-sm-3 text-primary">・Add answers:<button type="button" class="btn-xs btn-primary" onclick="addRow(this)">項目追加</button></div>
        <div class="col-sm-3 text-success">・Create form:<button type="button" class="btn-xs btn-success" onclick="createForm()">作成</button></div>
        <div class="col-sm-3 text-warning">・Delete form:<button type="button" class="btn-xs btn-warning" onclick="deleteForm()">削除</button></div>
    </div>
    <div class="row">
        <div class="col-sm-3 text-danger">・Insert into DB:<button id="insertDbBtn" type="button" class="btn-xs btn-danger" onclick="outputForm()">登録</button></div>
        <div class="col-sm-3">・Clear Input form:<input type="checkbox" onclick="delInputForm()"/></div>
    </div>
    <h4>== Input forms ==</h4>
    <table id="questionTable">
        <tr>
            <td>
                Insert Position:
            </td>
            <td>
                <select id="insertPosSelect" onchange="inputInsertPos(this)">
                    <option selected></option>
                    <option value="wrap">wrap</option>
                    <option value="primary">primary</option>
                    <option value="entry-header">entry-header</option>
                    <option value="entry-title">entry-title</option>
                    <option value="entry-content">entry-content</option>
                    <option value="twitter-share">twitter-share</option>
                    <optopm vaiue="entry-footer">entry-footer</option>
                </select>
                <input id="insertPos" type="text" maxlength="30" size="35" placeholder="挿入場所を記入します"/>
            </td>
        </tr>
        <tr>
            <td>
                Input Question:
            </td>
            <td>
                <input id="questionMessage" type="text" maxlength="30" size="35" placeholder="質問内容を記入します"/>
            </td>
        </tr>
        <tr>
            <td>
                Input Answer:
            </td>
            <td>
                <input id="ansText0" data-ans="0" type="text" maxlength="12" size="12"/>
            </td>
        </tr>
    </table>
    <hr/>
    <h3>Sample</h3>
    <div id="result"/>
</div>
