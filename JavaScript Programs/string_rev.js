function reverseStr(event) {
  var s = document.getElementById("textinput").value;
  var newStr = "";
  for (var i = s.length - 1; i >= 0; i--) {
    newStr += s[i];
  }
  document.getElementById("item").innerHTML = `<p>${newStr}</p>`;
}
