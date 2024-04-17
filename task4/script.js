var newText = document.querySelector("#text");
function text() {
    var textInfo = prompt("Введите текст");
    newText.textContent = textInfo;
}
newText.addEventListener('click', text);