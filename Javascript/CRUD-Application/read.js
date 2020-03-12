function displayUsers() {
  document.getElementById("myTable").innerHTML = "";
  allUsers = JSON.parse(localStorage.getItem("users"));
  //   allUsers.map(function(user) {
  //     var myOption = document.createElement("option");
  //     myOption.innerHTML = user.fname;
  //     document.getElementById("mySelect").appendChild(myOption);
  //   });

  allUsers.map(function(user, index) {
    var myTr = document.createElement("tr");
    for (a in user) {
      var myTd = document.createElement("td");
      myTd.innerHTML = user[a];
      myTr.appendChild(myTd);
    }

    var myEdit = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + index + ")");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + index + ")");
    myEdit.appendChild(editBtn);
    deleteTd.appendChild(deleteBtn);

    myTr.appendChild(myEdit);
    myTr.appendChild(deleteTd);
    document.getElementById("myTable").appendChild(myTr);
  });
}
displayUsers();
