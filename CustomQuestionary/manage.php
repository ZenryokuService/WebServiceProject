<?php
?>
<h1>Custom Questionary Plugin</h1>
<hr>
<dl>
    <dt><h4>Usage(使い方)</h4></dt>
    <dd>1.Create Questions(質問を作成します)</dd>
    <dd>2.Create answers(回答を作成します)</dd>
    <dd>3.Set position(設置する場所を指定します)</dd>
</dl>
<hr>
<h3>Question(質問)</h3>
<table id="questionTable">
    <tr>
        <td>
            <font size="3">Input Question: </font>
        </td>
        <td>
            <input id="questionMessage" type="text" maxlength="30" size="35" placeholder="質問内容を記入します"/>
        </td>
    </tr>
    <tr>
        <td>
            <font size="3">Input Answer: </font>
        </td>
        <td>
            <input id="ansText0" data-ans="0" type="text" maxlength="12" size="12"/>
        </td>
    </tr>
</table>
<button type="button" onclick="addRow(this)">項目追加</button>
<button type="button" onclick="createForm()">作成</button>
<button type="button" onclick="deleteForm()">削除</button>
<button type="button" onclick="outputForm()">登録</button>

<hr>
<div id="result"/>

<script>
let isCreated = false;
let num = 0;
// 質問の回答項目を追加
function addRow(button) {
    num++;
    let table = document.getElementById("questionTable");
    let row = table.insertRow(table.rows.length);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    col1.innerHTML = '<font size="3">Input Answer: </font>';
    col2.innerHTML = '<input id="ansText' + num + '" data-ans="' + num + '" type="text" maxlength="12" size="12"/>';
}
// 作成したアンケートの入力フォームを生成
function createForm() {
    if (isCreated) {
        return;
    }
    let question = document.getElementById("questionMessage").value;
    let table = document.getElementById("questionTable");
    let inputs = table.getElementsByTagName("input");

    let messageElement = document.createElement("p");
    messageElement.innerText = question;
    let dom = document.getElementById("result");
    dom.appendChild(messageElement);
    for(let i = 1; i < inputs.length; i++) {
        console.log(inputs[i].dataset.ans);
        let but = document.createElement("button");
        but.innerText = inputs[i].value;
        but.dataset.ans = inputs[i].dataset.ans
        dom.appendChild(but);
    };
    isCreated = true;
}

// 作成したフォームを削除
function deleteForm() {
    document.getElementById("result").innerHTML = "";
    isCreated = false;
}

// 作成したフォームを出力する
function outputForm() {
    let dom = document.getElementById("result");
    if (dom == null || typeof dom == 'undefined') {
        alert("Error");
        return;
    }
    alert(dom.innerHTML);
}
</script>
