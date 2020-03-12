function editUser(i) {
  document.getElementById("update").style.display = "block";
  document.getElementById("create").style.display = "none";

  let objToEdit = users[i];

  for (a in objToEdit) {
    document.getElementById(a).value = objToEdit[a];
  }

  //   for (var i = 0; i < 10; i++) {
  //     console.log(i);
  //   }

  //   for (let j = 0; j < 10; j++) {
  //     console.log(j);
  //   }

  //   console.log(" Var Value is  ", i);
  //   console.log(" Let  Value is  ", j);
}

function updateUser(user) {
  var user = captureUser();
  var update = new XMLHttpRequest();
  update.onreadystatechange = function() {
    if (update.readyState == 4 && update.status == 201) {
      console.log("user Updated");
    }
  };

  update.open("PUT", "http://localhost:3000/users/" + user.id);
  update.setRequestHeader("Content-Type", "application/json");
  update.send(JSON.stringify(user));
}
