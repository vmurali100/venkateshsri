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
  validate();
}

function capturePerson() {
  var person = {
    fname: "",
    lname: "",
    email: "",
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

//TO get the values and Check weather user entered Valus or not
function validate() {
  var isInalid = false;
  var person = capturePerson();
  console.log(person);
  for (a in person) {
    if (a != "email") {
      if (person[a] == "") {
        isInalid = true;
      }
    } else {
      var emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
      if (!emailPattern.test(person[a])) {
        isInalid = true;
      }
    }
  }

  if (isInalid) {
    document.getElementById("create").setAttribute("disabled", true);
  } else {
    document.getElementById("create").removeAttribute("disabled");
  }
}

validate();
