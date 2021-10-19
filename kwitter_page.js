//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
    const analytics = getAnalytics(app);

    function send()
    {
          msg = document.getElementById("msg").ariaValueMax;
          console.log(msg);
          firebase.database().ref("/").push({
                name:msg,
                message:msg,
                like:0
          });
          }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='meesage_h4'>" + message +"</h4>";
like_button = "<button class='btn btn-warning  id="+ firebase_message_id + "value="+ like +"onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like +"</span><button><hr>";


row = name_with_tag + message_with_tag + like_button +span_with_tag;
document.getElementsById("output").innerHTML = row;
//End code
      } });  }); }
getData();


function updatelike(message)
{
      console.log("button like clicked -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like = updated_likes
      });
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
