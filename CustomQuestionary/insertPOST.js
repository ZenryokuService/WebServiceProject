// ランダムにアンケートを投稿記事に挿入する
function insertQuestionaryRandom() {
    let maxValue = JSON_DATA.length - 1;
    let minValue = 0;
    const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    // 表示するアンケート・データ
    let insertData = JSON_DATA[randRange(minValue, maxValue)];
    console.log(insertData.html_class);
    document.getElementById(insertData.html_class).appendChild(createInsertDOM(insertData));
}
// HTMLに挿入するアンケートFormの作成
function createInsertDOM(json) {
    let messageElement = document.createElement("div");
    messageElement.id="questionary";
    messageElement.innerHTML = '<span class="badge badge-primary text-wrap" style="width: 5rem;">Question</span><br/><span id="question" data-qid="' + json.question_id + '" class="text-capitalize">' + json.question + '</span><br/>';

    if (json.answer1 != "") {
        createQChild(json.answer1, 1, messageElement);
    }
    if (json.answer2 != "") {
        createQChild(json.answer2, 2, messageElement);
    }
    if (json.answer3 != "") {
        createQChild(json.answer3, 3, messageElement);
    }
    if (json.answer4 != "") {
        createQChild(json.answer4, 4, messageElement);
    }
    if (json.answer5 != "") {
        createQChild(json.answer5, 5, messageElement);
    }
    return messageElement;
}

function createQChild(ans, no, messageElement) {
    let but = document.createElement("button");
    but.id = "ans" + no;
    but.setAttribute("class", "btn btn-outline-secondary btn-sm");
    but.innerText = ans;
    but.onclick = sendAnswer;
    but.dataset.ans = ans;

    messageElement.appendChild(but);
}

function sendAnswer(but) {
    console.log(but.target.id);
}

window.onload = insertQuestionaryRandom;
