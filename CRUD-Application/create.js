var users = [];
function createUser() {
  //   var person = {
  //     fname: document.getElementById("fname").value,
  //     lname: document.getElementById("lname").value,
  //     city: document.getElementById("city").value
  //   };
  var person = capturePerson();
  users.push(person);
  clearForm(person);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
}

function capturePerson() {
  var person = {
    fname: "",
    lname: "",
    city: ""
  };
  for (a in person) {
    person[a] = document.getElementById(a).value;
  }
  return person;
}

function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}
