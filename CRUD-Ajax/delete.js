function deleteUser(i) {
  console.log(i);
  var del = new XMLHttpRequest();
  del.onreadystatechange = function() {
    if (del.readyState == 4 && del.status == 200) {
      console.log("User Deleted");
    }
  };

  del.open("DELETE", "http://localhost:3000/users/" + users[i].id);
  del.send();
}
