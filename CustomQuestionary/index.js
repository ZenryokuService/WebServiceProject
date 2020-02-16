<script type="text/javascript">
/************************************
 * 定数宣言のみにする                  *
 ************************************/
let isCreated = false;
let num = 0;
// 回答の数は最大５つまで(配列計算なので4)
const MAX_COUNT = 5;
let INSERT_URL = '<?php echo $insertUrl; ?>';
let DELETE_URL = '<?php echo $deleteUrl; ?>';

// 入力フォームをクリアするフラグ
let delInput = false;
// XMLHttpRequest
let xhr;

/************************************
 * メソッド群の定義                    *
 ************************************/

function delInputForm() {
    delInput = !delInput;
}

// 質問の回答項目を追加
function addRow(button) {
    // WPフッターが邪魔なので削除する
    let delDom = document.getElementById("wpfooter");
    if (delDom != null && typeof delDom != 'undefined') {
        delDom.parentNode.removeChild(delDom);
    }
    num++;
    if (num >= MAX_COUNT) {
        alert("回答は５つまでです。Up to 5th answers)")
        return;
    }
    let table = document.getElementById("questionTable");
    let row = table.insertRow(table.rows.length);
    let textCol = row.insertCell(0);
    let textInputCol = row.insertCell(1);
    textCol.innerHTML = '<font size="3">Input Answer: </font>';
    textInputCol.innerHTML = '<input id="ansText' + num + '" data-ans="' + num + '" type="text" maxlength="12" size="12"/>';
    // フォーカスを合わせる
    document.getElementById("ansText" + num).focus();
}
// 作成したアンケートの入力フォームを生成
function createForm() {
    if (isCreated) {
        return;
    }
    let question = document.getElementById("questionMessage").value;
    let table = document.getElementById("questionTable");
    let inputs = table.getElementsByTagName("input");

    let messageElement = document.createElement("div");
    messageElement.innerHTML = '<span class="badge badge-primary text-wrap" style="width: 5rem;">Question</span><br/><span id="question" class="text-capitalize">' + question + '</span>';
    let dom = document.getElementById("result");
    dom.appendChild(messageElement);

    for(let i = 1; i < inputs.length; i++) {
        if (inputs[i].value == "" || inputs[i].id == "insertPos" || inputs[i].id == "questionMessage") {
            continue;
        }
        let but = document.createElement("button");
        but.id = "ans" + (i - 2);
        but.innerText = inputs[i].value;
        but.dataset.ans = inputs[i].dataset.ans
        dom.appendChild(but);
    };
    isCreated = true;
}

// 作成したフォームを削除
function deleteForm() {
    document.getElementById("result").innerHTML = "";
    if (delInput) {
        let tb = document.getElementById("questionTable");
        for(let i = tb.rows.length; i > 2; i--) {
            tb.deleteRow(i-1);
        }
    }
    isCreated = false;
}

// 作成したフォームを出力する
function outputForm() {
    if (isCreated == false) {
        alert("Please create form ");
    }
    let dom = document.getElementById("result");
    if (dom == null || typeof dom == 'undefined') {
        alert("Error");
        return;
    }
    let question = document.getElementById("question").innerText;
    if (question == "") {
        alert("input Question.(質問を入力してください)");
        deleteForm();
        return;
    }
    let inputs = dom.getElementsByTagName("button");
    let ansArray = [];
    let htmlClass = document.getElementById("insertPos").value;
    let htmlStyle = "";
    for (let i = 0; i < inputs.length; i++) {
        ansArray.push(inputs[i].innerText);
    }
    // 送信するデータ(リクエストパラメータ)
    let data = createSendData(question, ansArray, htmlClass, htmlStyle);
    // DBへデータの登録(汎用的に作成したメソッドなので後ろの引数は全てnullにしている)
    // 下のメソッドは次のように書いても良い(JSの場合) => getXHR("POST", stateChangeMethod);
    let xhr = getXHR(stateChangeMethod, null, null);
    // JSONで送信する
    xhr.open("POST", INSERT_URL);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    location.reload();
}

function createSendData(question, ansArray, htmlClass, htmlStyle) {
    let obj = {};
    obj.question = question;
    for (let i = 0; i < ansArray.length; i++) {
        obj["ans" + i] = ansArray[i];
    }
    obj.hrml_class = htmlClass;
    // 未使用
    obj.html_style = "";
    return obj;
}

// 挿入場所の選択した値をテキストボックスに入力
function inputInsertPos(select) {
    console.log(select.value);
    let inputField = document.getElementById("insertPos");
    inputField.value = select.value;
}
// セレクトボックスを作成する
function createSelectBox(id) {
    let selectBox = document.createElement("select");
    selectBox.innerHTML = '<select id="questionStyle" type="text" maxlength="30" placeholder="質問にスタイル"><option id="button-primary">Primary</option></select>';

    selectBoxArray.foreach(function(styleName) {
        console.log(styleName);
    });
}

// 状態変化時のメソッド(コールバック関数と呼ばれる)
function stateChangeMethod(res) {
    let READYSTATE_COMPLETED = 4;
    let HTTP_STATUS_OK = 200;
    if (res.target.readyState == READYSTATE_COMPLETED) {
        if(res.target.status == HTTP_STATUS_OK) {
            console.log("レスポンス取得: " + res.target.response);
        } else {
            alert("エラー: " + res.target.response);
        }
    }
}

/*
 * XMLHttpRequest生成のメソッド
 * @param stateChangeMethod レスポンスを取得する時の処理
 * @param btnId 謳歌したときに起動するボタンのID
 * @param clickMethod ボタンのクリック時の処理
 */
function getXHR(stateChangeMethod,　btnId, clickMethod) {
    if (xhr != null && typeof xhr != 'undefined') {
        return xhr;
    }
    xhr = new XMLHttpRequest();
    if (btnId != null && typeof btnId == "undefined") {
        document.getElementById(btnId).addEventListener('click', clickMethod);
    }
    xhr.onreadystatechange = stateChangeMethod;
    return xhr;
}

// 質問テーブルの編集用メソッド
function getTableRecord() {
    let rowNo = 0;
    document.getElementsByName("dataRecord").forEach((item, i) => {
        if (item.checked) {
            // 行番号は１から始まる
            rowNo = i+1;
        }
    });
    let row = document.getElementById("qestionTable").rows[rowNo];
    console.log(row.dataset.qid);
    xhr = getXHR(stateChangeMethod, null, null);
    if (xhr == null || typeof xhr == 'undefined' ) {
        alert("Error");
        return;
    }
    // JSONで送信する
    xhr.open("POST", DELETE_URL);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ID: row.dataset.qid}));
    location.reload();
}
</script>
