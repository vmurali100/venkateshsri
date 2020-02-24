function deleteUser(i) {
  users = JSON.parse(localStorage.getItem("users"));
  users.splice(i, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
}
