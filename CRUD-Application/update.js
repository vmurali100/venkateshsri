function editUser(i) {
  gIndex = i;
  document.getElementById("update").style.display = "block";
  document.getElementById("create").style.display = "none";

  users = JSON.parse(localStorage.getItem("users"));

  for (a in users[i]) {
    document.getElementById(a).value = users[i][a];
  }
}

function updateUser() {
  document.getElementById("update").style.display = "none";
  document.getElementById("create").style.display = "block";

  person = capturePerson();
  users[gIndex] = person;
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
  clearForm(person);
}
