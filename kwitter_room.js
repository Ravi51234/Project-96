const firebaseConfig = {
  apiKey: "AIzaSyDd5UV1LGWliT2sK7_VYnG0shH3JOmEQBI",
  authDomain: "lets-chat-28507.firebaseapp.com",
  databaseURL: "https://lets-chat-28507-default-rtdb.firebaseio.com",
  projectId: "lets-chat-28507",
  storageBucket: "lets-chat-28507.appspot.com",
  messagingSenderId: "761884647041",
  appId: "1:761884647041:web:6f0ad898f13eb659b7b780",
  measurementId: "G-ZXNV3Z6E6Z"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
     room_name = document.getElementById("room_name").value;
     localStorage.setItem("roomname", room_name);
     firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
     });
     window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names+"onclick='redirectToroomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    //End code
  });});}
getData();

function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}