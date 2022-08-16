
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("username").innerHTML="Welcome To Kwitter,"+username+ " !";

    function addroom()
    {
      roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
      Myname:"Sriamsh"
});
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect()'> # "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name)
{
console.log(name);
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}