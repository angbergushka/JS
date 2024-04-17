let textElement;
let input = document.getElementById("input");
let newtext = document.getElementById("duplicateField");
input.onkeyup = function() {
  textElement = input.value;
  newtext.textContent = textElement;
};
input.onkeyup();
document.querySelector('#clear').addEventListener('click', function() {
  let btn = textElement;
  console.log('#clear');
});
 document.querySelector('#clear').addEventListener('click', function(event) {
  input.value = event.preventDefault();
});
document.querySelector('#clear').addEventListener('click', function(event) {
  newtext.textContent = event.preventDefault();
});
document.querySelector("#clear").addEventListener('click', function() {
  input.value = "";
});