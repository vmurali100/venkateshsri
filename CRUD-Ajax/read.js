var users = [];
function getAllusers(displayUsers) {
  var getInfo = new XMLHttpRequest();

  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      users = JSON.parse(getInfo.response);
      console.log(users);
      //   calling a argument function as callback
      displayUsers();
    }
  };

  getInfo.open(
    "GET",
    "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&pretty=true"
  );
  getInfo.send();
}

function displayUsers() {
  document.getElementById("myTable").innerHTML = "";

  users.map(function(user, index) {
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

//Sending a function as a arguments to another Function
// getAllusers(displayUsers);

var somePromise = function() {
  return new Promise(function(success, failure) {
    var getInfo = new XMLHttpRequest();

    getInfo.onreadystatechange = function() {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        // users = JSON.parse(getInfo.response);
        // success(users);
        // failure();

        return users;
      }
    };

    getInfo.open(
      "GET",
      "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&pretty=true"
    );
    getInfo.send();
  });
};

// somePromise()
//   .then(function() {
//     displayUsers();
//   })
//   .catch(function() {
//     console.log("Muralil failed in his commitment");
//   });
