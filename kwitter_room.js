
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBgAWOR06kjwnRsFgDkn6bZG-nm_VkQ4JE",
      authDomain: "kwitter-95690.firebaseapp.com",
      projectId: "kwitter-95690",
      storageBucket: "kwitter-95690.appspot.com",
      messagingSenderId: "957326939845",
      appId: "1:957326939845:web:c4473aa6d39dd8d11b82ac",
      measurementId: "G-L3NNPK0T5Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row="<div class='room_name' id="+ Room_names + "onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML = row;
      });
    });
    }

getData();
function redirecttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

