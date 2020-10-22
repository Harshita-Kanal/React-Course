function validateform() {
  var name = document.getElementById("name").value;
  var contact = document.getElementById("no").value;
  var mail = document.getElementById("mail").value;
  console.log("hello!");

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  }
  if (contact == null || contact == "") {
    alert("Contact number can't be blank");
    return false;
  }
  if (mail == null || mail == "") {
    alert("Mail can't be blank");
    return false;
  }
  if (contact.length < 10) {
    alert("Number is too short");
    return false;
  }

  if (name === NaN) {
    alert("Invalid Entry");
    return false;
  }

  if (mail.length < 10) {
    alert("Mail is invalid");
    return false;
  }
}
