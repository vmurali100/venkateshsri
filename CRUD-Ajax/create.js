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
