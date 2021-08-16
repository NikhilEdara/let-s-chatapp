var firebaseConfig = {
  apiKey: "AIzaSyARti4SkbHKIzdvQwBx0IOIpxLVQYKxKFE",
  authDomain: "let-s-chatapp-2b1ab.firebaseapp.com",
  databaseURL:"https://let-s-chatapp-2b1ab-default-rtdb.firebaseio.com/",
  projectId: "let-s-chatapp-2b1ab",
  storageBucket: "let-s-chatapp-2b1ab.appspot.com",
  messagingSenderId: "605290312104",
  appId: "1:605290312104:web:97a4e6b3aad302557c2d9d",
  measurementId: "G-PEYL679JGG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
