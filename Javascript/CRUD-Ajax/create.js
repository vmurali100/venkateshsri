function createUser() {
  var user = captureUser();
  sendDataToServer(user);
}

function captureUser() {
  var person = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    id: ""
  };
  for (a in person) {
    person[a] = document.getElementById(a).value;
  }
  return person;
}

function sendDataToServer(user) {
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function() {
    if (sendInfo.readyState == 4 && sendInfo.status == 201) {
      console.log("User Added");
    }
  };

  sendInfo.open("POST", "http://localhost:3000/users");
  sendInfo.setRequestHeader("Content-Type", "application/json");
  sendInfo.send(JSON.stringify(user));
}

function validate() {
  let isInvalid = false;
  var person = captureUser();
  console.log(person);
  for (a in person) {
    if (a != "id") {
      if (person[a] == "") {
        isInvalid = true;
      }
    }
  }

  if (isInvalid) {
    if (document.getElementById("create")) {
      document.getElementById("create").setAttribute("disabled", true);
    }
  } else {
    document.getElementById("create").removeAttribute("disabled");
  }
}

validate();
