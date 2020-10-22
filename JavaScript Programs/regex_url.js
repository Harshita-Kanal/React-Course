function findUrl(str) {
  var Rexp = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;
  var p = Rexp.exec(str).toString();
  if (p != null) {
    console.log(p);
  } else {
    console.log("Not found");
  }
}
var str = "Hello , https://harshi.com";
findUrl(str);
