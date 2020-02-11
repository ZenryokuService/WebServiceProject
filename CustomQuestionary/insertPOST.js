function testing() {
    let insertDom = document.getElementById(INSERT_POS);
    console.log("testing");
    insertDom.appendChild(getQuestionary());
}

window.onload = testing;
