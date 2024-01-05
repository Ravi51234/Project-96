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

  var user_name = localStorage.getItem("username");
  var room_name = localStorage.getItem("roomname");


  function send(){
  var msg = document.getElementById("msg").value;
  document.getElementById("msg").value = "";
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  }
  