// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCZN-fEykQSrqWMyIghltmzbxaMnh_xHIs",
  authDomain: "kwitter-4c239.firebaseapp.com",
  databaseURL: "https://kwitter-4c239-default-rtdb.firebaseio.com",
  projectId: "kwitter-4c239",
  storageBucket: "kwitter-4c239.appspot.com",
  messagingSenderId: "1053081173835",
  appId: "1:1053081173835:web:aae85491d0b0a32a6bb2ce",
  measurementId: "G-CJ5MD19FP5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!";


    function addroom()
    {
          roomname = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(roomname).update({
                purpose : "Adding Room Name"
          });

          localStorage.setItem("roomname" , roomname);

       window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value' , function(snapshot){document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childsnapshot.key;
      Room_names = childKey;

    console.log("Room-name" + Room_names);
    row = "<div class='room_name'  id="+Room_names + "oncilck='redirectToRoomName(this.id)' >#"+ Room_names +"</div></hr>";
    document.getElementById("output").innerHTML += row;
   });
});
    
}

   getData();

   function redirectToRoomName(name)
   {
         console.log(name);
         localStorage.setItem("room_name" , name);
         window.location = "kwitter_page.html";

   }

   function logout()
   {
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location="index.html";
   }












