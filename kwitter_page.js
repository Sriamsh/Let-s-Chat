//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBc3PwamfsxdMeepf_vphaSyuL43TInCeU",
      authDomain: "kwitter-25c15.firebaseapp.com",
      databaseURL: "https://kwitter-25c15-default-rtdb.firebaseio.com",
      projectId: "kwitter-25c15",
      storageBucket: "kwitter-25c15.appspot.com",
      messagingSenderId: "72898854134",
      appId: "1:72898854134:web:a26e97e6f31df21eca40d7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
n="<h4> "+name+" <img class='user_tick' src='tick.png'></h4>";
m="<h4 class='message_h4'> "+message+"</h4>";
l="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='update(this.id)'>";
s="<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span></button><hr>";

row=n+m+l+s;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();



function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

function update(message_id)
{
      console.log("clicked on the like button : "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;

      firebase.database().ref(roomname).child(message_id).update({
            like : updatedlikes
      });
}