function repCustom() {
  var str = document.getElementById("str").value;
  var res = document.getElementById("res");
  var result = str.repeat(7);
  res.innerHTML = `<p>The result of repeat function on string ${str} is <strong>${result}</strong></p>`;
}

function repReplace() {
  var str = document.getElementById("str").value;
  var res = document.getElementById("res");
  var result = str.replace("girl", "boy");
  res.innerHTML = `<p>The result of replace function on string ${str} is <strong>${result}</strong></p>`;
}

function repSlice() {
  var str = document.getElementById("str").value;
  var res = document.getElementById("res");
  var result = str.slice(5, 6);
  res.innerHTML = `<p>The result of slice function on string is ${str} is <strong>${result}</strong></p>`;
}

function repSubstr() {
  var str = document.getElementById("str").value;
  var res = document.getElementById("res");
  var result = str.substr(1, 2);
  res.innerHTML = `<p>The result of substr function on string is ${str} is <strong>${result}</strong></p>`;
}

function repSplit() {
  var str = document.getElementById("str").value;
  var res = document.getElementById("res");
  var result = str.split(" ");
  res.innerHTML = `<p>The result of split function on string is ${str} is <strong>${result}</strong></p>`;
}

function repUpper() {
  var str = document.getElementById("str").value;
  var res = document.getElementById("res");
  var result = str.toUpperCase();
  res.innerHTML = `<p>The result of toUpper function on string is ${str} is <strong>${result}</strong></p>`;
}
